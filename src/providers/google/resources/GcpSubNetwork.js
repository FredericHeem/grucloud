const assert = require("assert");
const { defaultsDeep } = require("lodash/fp");
const { getField } = require("../../ProviderCommon");
const GoogleClient = require("../GoogleClient");
const { isUpByIdCore } = require("../../Common");

const logger = require("../../../logger")({ prefix: "GcpInstance" });
const { tos } = require("../../../tos");

// https://cloud.google.com/compute/docs/reference/rest/v1/subnetworks
module.exports = GcpSubNetwork = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const { project, region, managedByDescription } = config;

  const configDefault = ({ name, properties, dependencies }) => {
    logger.debug(`configDefault ${tos({ properties, dependencies })}`);
    const { network } = dependencies;
    assert(network, `SubNetwork '${name}' is missing the 'network' dependency`);

    const config = defaultsDeep(
      {
        name,
        description: managedByDescription,
        network: getField(network, "selfLink"),
      },
      properties
    );
    logger.debug(`configDefault ${tos({ config })}`);

    return config;
  };
  const isUpByIdFactory = (getById) => isUpByIdCore({ getById });

  const cannotBeDeleted = (item) => {
    return item.name === "default";
  };

  return GoogleClient({
    spec,
    url: `/projects/${project}/regions/${region}/subnetworks`,
    config,
    isUpByIdFactory,
    configDefault,
    cannotBeDeleted,
  });
};