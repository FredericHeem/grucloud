const ScalewayClient = require("../ScalewayClient");
const type = "address";

module.exports = ({ name, provider }, config) => {
  const client = ScalewayClient({
    config: provider.config,
    onResponse: (data) => ({ items: data.ips }),
    url: `/ips`,
  });

  const plan = async (resource) => {
    return [];
  };

  return {
    name,
    type,
    provider,
    client,
    plan,
  };
};
