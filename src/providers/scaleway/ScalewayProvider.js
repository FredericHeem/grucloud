const assert = require("assert");
const { defaultsDeep } = require("rubico/x");

const compare = require("../../Utils").compare;
const CoreProvider = require("../CoreProvider");
const ScalewayClient = require("./ScalewayClient");
const logger = require("../../logger")({ prefix: "ScalewayProvider" });
const ScalewayTag = require("./ScalewayTag");
const { getField } = require("../ProviderCommon");
const { tos } = require("../../tos");

const fnSpecs = (config) => {
  const { organization } = config;
  assert(organization);
  const isOurMinion = ({ resource }) =>
    ScalewayTag.isOurMinion({ resource, tag: config.tag });

  return [
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/ips`,
          config,
          onResponseList: (data) => {
            logger.debug(`onResponse ${tos(data)}`);
            if (data && data.ips) {
              return { total: data.ips.length, items: data.ips };
            } else {
              throw Error(`Cannot find ips`);
            }
          },
          configDefault: async ({ name, properties }) =>
            defaultsDeep({
              tags: [`name:${name}`, config.tag],
              organization,
            })(properties),
          findName: (item) => item.address,
          findTargetId: (item) => {
            return item.ip?.id;
          },
        }),
      type: "Ip",
      isOurMinion,
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/bootscripts`,
          config,
          onResponseList: ({ bootscripts }) => ({
            total: bootscripts.length,
            items: bootscripts,
          }),
        }),
      type: "Bootscript",
      listOnly: true,
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/images`,
          onResponseList: ({ images }) => ({
            total: images.length,
            items: images,
          }),
          config,
        }),
      type: "Image",
      listOnly: true,
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/volumes`,
          config,
          onResponseList: (result) => {
            logger.debug(`onResponseList Volume: ${JSON.stringify(result)}`);
            const { volumes = [] } = result;
            return {
              total: volumes.length,
              items: volumes,
            };
          },
          configDefault: async ({ name, properties }) =>
            defaultsDeep({
              name,
              organization,
            })(properties),
        }),
      type: "Volume",
      propertiesDefault: { volume_type: "l_ssd" },
      isOurMinion,
    },
    {
      Client: ({ spec }) =>
        ScalewayClient({
          spec,
          url: `/servers`,
          config,
          onResponseList: ({ servers }) => {
            return { total: servers.length, items: servers };
          },
          findTargetId: (item) => {
            return item.server?.id;
          },
          configDefault: async ({
            name,
            properties,
            dependencies: { image, ip },
          }) => {
            return defaultsDeep({
              name,
              organization,
              tags: [name, config.tag],
              image: getField(image, "id"),
              ...(ip && { public_ip: getField(ip, "id") }),
            })(properties);
          },
        }),
      type: "Server",
      compare: ({ target, live }) => {
        logger.debug(`compare server`);
        const diff = compare({
          target,
          targetKeys: ["commercial_type", "volumes.0.size"],
          live,
        });
        logger.debug(`compare ${tos(diff)}`);
        return diff;
      },
      propertiesDefault: {
        dynamic_ip_required: false,
        commercial_type: "DEV1-S",
        enable_ipv6: true,
        boot_type: "local",
      },
      isOurMinion,
    },
  ];
};

exports.ScalewayProvider = async ({ name = "scaleway", config }) => {
  const configProviderDefault = {
    zone: "fr-par-1",
    organization: process.env.SCW_ORGANISATION,
    secretKey: process.env.SCW_SECRET_KEY,
  };

  return CoreProvider({
    type: "scaleway",
    name,
    mandatoryEnvs: ["SCW_ORGANISATION", "SCW_SECRET_KEY"],
    mandatoryConfigKeys: ["zone"],
    config: defaultsDeep(configProviderDefault)(config),
    fnSpecs,
  });
};
