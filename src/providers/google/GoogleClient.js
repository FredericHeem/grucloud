const assert = require("assert");
const urljoin = require("url-join");
const CoreClient = require("../CoreClient");
const AxiosMaker = require("../AxiosMaker");
const BASE_URL = "https://compute.googleapis.com/compute/v1/";

const onResponseList = (data) => {
  const { items = [] } = data;
  return { total: items.length, items };
};

module.exports = GoogleClient = ({ url, spec, config }) => {
  assert(url);
  assert(spec);
  assert(spec.type);
  assert(config);

  const core = CoreClient({
    type: "google",
    spec,
    onResponseList,
    axios: AxiosMaker({
      baseURL: urljoin(BASE_URL, url),
      onHeaders: () => ({
        Authorization: `Bearer ${config.accessToken}`,
      }),
    }),
  });

  return {
    spec,
    getById: core.getById,
    getByName: core.getByName,
    isUp: core.isUp,
    create: core.create,
    destroy: core.destroy,
    list: core.list,
  };
};
