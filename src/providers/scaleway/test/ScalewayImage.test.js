const assert = require("assert");
const { ScalewayProvider } = require("../ScalewayProvider");
const { ConfigLoader } = require("ConfigLoader");
const { testPlanDeploy, testPlanDestroy } = require("test/E2ETestUtils");

describe("ScalewayImage", async function () {
  let config;

  let provider;
  let image;

  before(async function () {
    try {
      config = ConfigLoader({ path: "examples/multi" });
    } catch (error) {
      this.skip();
    }
    provider = await ScalewayProvider({
      name: "scaleway",
      config: config.scaleway,
    });

    const { error } = await provider.destroyAll({ all: false });
    assert(!error);

    image = await provider.useImage({
      name: "ubuntu",
      config: ({ items: images }) => {
        assert(images);
        const image = images.find(
          ({ name, arch, default_bootscript }) =>
            name.includes("Ubuntu") && arch === "x86_64" && default_bootscript
        );
        assert(image);
        return image;
      },
    });
  });

  after(async () => {
    await provider?.destroyAll({ all: false });
  });
  it("targetResources size ", async function () {
    assert.equal(provider.getTargetResources().length, 1);
  });
  it("config live ", async function () {
    const config = await image.resolveConfig();
    assert(config);
  });
  it("live ", async function () {
    const instance = await image.getLive();
    // Image is a readonly resource,
    assert(!instance);
  });
  it("plan", async function () {
    const plan = await provider.planQuery();
    assert.equal(plan.resultDestroy.plans.length, 0);
    assert.equal(plan.resultCreate.plans.length, 0);
  });
  it.skip("apply and destroy", async function () {
    await testPlanDeploy({ provider });
    //await testPlanDestroy({ provider });
  });
});
