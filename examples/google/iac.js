const GoogleProvider = require("@grucloud/core").GoogleProvider;

const config = require("./config");

const createStack = async ({ options }) => {
  // Create GCP provider
  const provider = await GoogleProvider({ name: "google" }, config);
  // Allocate public Ip address
  const ip = provider.makeAddress({ name: "ip-webserver" });
  // Allocate a server
  const server = provider.makeInstance({
    name: "web-server",
    dependencies: {},
    config: async ({ dependencies: {} }) => ({
      machineType: "e2-micro",
    }),
  });

  return { providers: [provider] };
};

module.exports = createStack;