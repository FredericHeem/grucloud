const assert = require("assert");
const config = require("../config");
const AwsProvider = require("../AwsProvider");
const { testProviderLifeCycle } = require("test/E2ETestUtils");

describe("AwsVpc", async function () {
  let provider;
  let vpc;

  before(async () => {
    provider = await AwsProvider({ name: "aws", config });
    const { success } = await provider.destroyAll();
    assert(success);

    const lives = await provider.listLives({ our: true });
    assert.equal(lives.length, 0);

    vpc = provider.makeVpc({
      name: "vpc",
      properties: {
        CidrBlock: "10.1.1.1/16",
      },
    });
  });
  after(async () => {
    //await provider.destroyAll();
  });
  it("vpc name", async function () {
    assert.equal(vpc.name, "vpc");
  });
  it("vpc getLive", async function () {
    const live = await vpc.getLive();
  });
  it("vpc listLives", async function () {
    const [vpcs] = await provider.listLives({ types: ["Vpc"] });
    assert(vpcs);
    const vpcDefault = vpcs.items.find((vpc) => vpc.IsDefault);
    assert(vpcDefault);
  });

  it.only("deploy plan", async function () {
    await testProviderLifeCycle({ provider });
  });
});
