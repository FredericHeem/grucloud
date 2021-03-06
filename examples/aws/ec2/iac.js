const { AwsProvider } = require("@grucloud/core");

const createResources = async ({ provider, resources: { keyPair } }) => {
  const eip = await provider.makeElasticIpAddress({
    name: "ip-webserver",
    dependencies: {},
    properties: () => ({}),
  });

  return {
    eip,
    server: await provider.makeEC2({
      name: "web",
      dependencies: { keyPair, eip },
      properties: () => ({
        VolumeSize: 50,
        InstanceType: "t2.micro",
        ImageId: "ami-00f6a0c18edb19300", // Ubuntu 18.04
      }),
    }),
  };
};
exports.createResources = createResources;

exports.createStack = async ({ config }) => {
  // Create a AWS provider
  const provider = await AwsProvider({ name: "aws", config });
  const keyPair = await provider.useKeyPair({
    name: "kp",
  });
  const resources = await createResources({ provider, resources: { keyPair } });

  return {
    provider,
    resources,
  };
};
