const Koa = require("koa");
const Router = require("@koa/router");
const shortid = require("shortid");
const koaBody = require("koa-body");
const logger = require("../../../logger")({ prefix: "MockServer" });
const toString = (x) => JSON.stringify(x, null, 4);

module.exports = MockServer = (config) => {
  const koa = new Koa();
  const { routes } = config;
  const port = config.port || 3765;
  let httpHandle;
  koa.use(koaBody());

  const mapRoutes = new Map();
  routes.map((route) => mapRoutes.set(route, new Map()));

  const createRouter = ({ path }) => {
    return new Router()
      .get(`${path}`, (context) => {
        const mapResouces = mapRoutes.get(path);
        context.body = {
          total: mapResouces.size,
          items: [...mapResouces.values()],
        };
        logger.debug(`get ${path}, result: ${toString(context.body)}`);
        context.status = 200;
      })
      .get(path, `${path}:id`, (context) => {
        const {
          params: { id },
        } = context;
        const mapResources = mapRoutes.get(path);
        if (mapResources.has(id)) {
          context.body = {
            id,
            data: mapResources.get(id),
          };
          context.status = 200;
        } else {
          context.status = 404;
        }
      })
      .del(path, `${path}:id`, (context, next) => {
        const {
          params: { id },
        } = context;
        const mapResources = mapRoutes.get(path);
        const data = mapResources.get(id);
        mapResources.delete(id);
        if (data) {
          context.body = {
            id,
            data,
          };
          context.status = 200;
        } else {
          context.status = 404;
        }
      })
      .post(`${path}`, (context) => {
        const { request } = context;
        const { body } = request;
        const mapResources = mapRoutes.get(path);
        const id = shortid.generate();
        mapResources.set(id, { id, ...body });
        //TODO hook to transform input into created object
        context.body = { id, data: mapResources.get(id) };
        context.status = 200;
      });
  };

  routes.forEach((route) => koa.use(createRouter({ path: route }).routes()));

  const start = async () =>
    new Promise((resolve) => {
      httpHandle = koa.listen(port, () => {
        resolve();
      });
    });

  const stop = async () => {
    if (!httpHandle) {
      return;
    }
    return new Promise((resolve) => {
      httpHandle.close(() => {
        resolve();
      });
    });
  };

  return {
    start,
    stop,
  };
};