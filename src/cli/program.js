const { Command } = require("commander");
const { flatten, isEmpty, ifElse, identity, tap } = require("ramda");
const { pipe } = require("rubico");
const { createInfra } = require("./infra");
const collect = (value, previous = []) => previous.concat([value]);

exports.createProgram = ({ version, commands }) => {
  const program = new Command();
  program.storeOptionsAsProperties(false);
  program.passCommandToAction(false);
  program.allowUnknownOption(); // For testing
  program.version(version);
  program.option("-i, --infra <file>", "infrastructure default is iac.js");
  program.option("-c, --config <file>", "config file, default is config.js");

  const infraOptions = (options) => ({
    infraFileName: options.infra,
    configFileName: options.config,
  });

  program
    .command("plan")
    .description("Query the plan")
    .action(async () => {
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) => await commands.planQuery({ infra }),
      ])(program);
    });

  program
    .command("deploy")
    .description("Deploy the resources")
    .action(async () => {
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) => await commands.planDeploy({ infra }),
      ])(program);
    });

  program
    .command("destroy")
    .description("Destroy the resources")
    .option(
      "-t, --type <type>",
      "Filter by type, multiple values allowed",
      collect
    )
    .option(
      "-a, --all",
      "destroy all resources including the ones not managed by us"
    )
    .option("-n, --name <value>", "destroy by name")
    .option("--id <value>", "destroy by id")
    .action(async (subOptions) => {
      await pipe([
        (program) => program.opts(),
        tap(console.log),
        infraOptions,
        tap(console.log),
        createInfra,
        tap(console.log),
        async (infra) =>
          await commands.planDestroy({
            infra,
            options: {
              all: subOptions.all,
              types: subOptions.type,
              name: subOptions.name,
              id: subOptions.id,
            },
          }),
      ])(program);
    });

  program
    .command("list")
    .description("List the resources")
    .option("-a, --all", "List also read-only resources")
    .option(
      "-t, --type <value>",
      "Filter by type, multiple values allowed",
      collect
    )
    .option("-o, --our", "List only our managed resources")
    .option(
      "-d, --canBeDeleted",
      "display resources which can be deleted, a.k.a non default resources"
    )
    .action(async (subOptions) => {
      const displayResults = ifElse(
        pipe([flatten, isEmpty]),
        () => console.log("No live resources to list"),
        (result) =>
          console.log(
            `${flatten(result).length} live resource(s) in ${
              result.length
            } provider(s)`
          )
      );
      await pipe([
        (program) => program.opts(),
        infraOptions,
        createInfra,
        async (infra) =>
          await commands.list({
            infra,
            options: {
              all: subOptions.all,
              types: subOptions.type,
              our: subOptions.our,
              canBeDeleted: subOptions.canBeDeleted,
            },
          }),
        displayResults,
      ])(program);
    });

  return program;
};
