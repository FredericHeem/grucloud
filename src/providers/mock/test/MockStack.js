const assert = require("assert");
const _ = require("lodash");
const MockProvider = require("../MockProvider");

const createStack = async ({ config }) => {
  // Provider
  const provider = await MockProvider({
    name: "mock",
    config,
  });

  // Ip
  const ip = provider.makeIp({ name: "myip" });

  // Boot images
  const image = provider.makeImage({
    name: "ubuntu",
    transformConfig: ({ items: images }) => {
      assert(images);
      const image = images.find(
        (image) => image.name.includes("Ubuntu") && image.arch === "x86_64"
      );
      //assert(image);
      return image;
    },
  });

  //TODO Volumes
  const volume = provider.makeVolume({
    name: "volume1",
    properties: {
      size: 20_000_000_000,
    },
  });
  // SecurityGroup
  const sg = provider.makeSecurityGroup({
    name: "sg",
    properties: {
      //TODO
    },
  });
  //Server
  const server = provider.makeServer({
    name: "web-server",
    dependencies: { volume, sg: { sg }, ip },
    properties: {
      diskSizeGb: "20",
      machineType: "f1-micro",
    },
  });
  return { providers: [provider], ip, volume, server, image };
};

module.exports = createStack;
