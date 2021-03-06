const assert = require("assert");
const { ConfigLoader } = require("ConfigLoader");
const { AwsProvider } = require("../../AwsProvider");
const { testPlanDeploy, testPlanDestroy } = require("test/E2ETestUtils");
const { CheckTagsEC2 } = require("../../AwsTagCheck");

describe("AwsInternetGateway", async function () {
  let config;
  let provider;
  let vpc;
  let ig;
  const resourceName = "ig";

  before(async function () {
    try {
      config = ConfigLoader({ path: "examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = await AwsProvider({
      name: "aws",
      config: config.aws,
    });

    const { error } = await provider.destroyAll();
    assert(!error);

    const { results: lives } = await provider.listLives({ our: true });
    assert.equal(lives.length, 0);

    vpc = await provider.makeVpc({
      name: "vpc",
      properties: () => ({
        CidrBlock: "10.1.0.1/16",
      }),
    });

    ig = await provider.makeInternetGateway({
      name: resourceName,
      dependencies: { vpc },
      properties: () => ({}),
    });
  });
  after(async () => {
    await provider?.destroyAll();
  });
  it("ig name", async function () {
    assert.equal(ig.name, resourceName);
  });
  it.skip("ig getLive", async function () {
    await ig.getLive();
  });
  it.skip("ig apply and destroy", async function () {
    await testPlanDeploy({ provider });
    const igLive = await ig.getLive();
    const vpcLive = await vpc.getLive();
    CheckTagsEC2({
      config: provider.config(),
      tags: igLive.Tags,
      name: ig.name,
    });

    const {
      results: [igs],
    } = await provider.listLives({ types: ["InternetGateway"] });
    assert.equal(igs.type, "InternetGateway");
    const myIg = igs.resources.find(
      (resource) => resource.data.Attachments[0].VpcId === vpcLive.VpcId
    );
    assert(myIg);
    assert.equal(myIg.data.Attachments[0].State, "available");

    assert(myIg.data.InternetGatewayId);
    //assert(resource.PublicIp);
    await testPlanDestroy({ provider });
  });
});
