const Promise = require("bluebird");
const assert = require("assert");
const logger = require("../logger")({ prefix: "CoreClient" });
const toString = (x) => JSON.stringify(x, null, 4);

const retryExpectException = async (
  { fn, isExpectedError, delay = 2e3 },
  count = 90
) => {
  assert(fn);
  logger.debug(`retryExpectException count: ${count}, delay: ${delay}`);
  if (count === 0) {
    throw Error("timeout");
  }
  try {
    await fn();
    throw Error("No exception, Have to retry");
  } catch (error) {
    if (isExpectedError(error)) {
      logger.debug(`retryExpectException isExpectedError`);
      return true;
    }
    logger.debug(
      `retryExpectException count: ${count}, waiting delay: ${delay}`
    );

    await Promise.delay(delay);
    return retryExpectException({ fn, isExpectedError, delay }, --count);
  }
};
exports.retryExpectException = retryExpectException;
//TODO revist, throw on error ? add isExceptionOk ?
const retryExpectOk = async ({ fn, isOk, delay = 2e3 }, count = 30) => {
  logger.debug(`retryExpectOk count: ${count}, delay: ${delay}`);
  assert(fn);
  if (count === 0) {
    throw Error("timeout");
  }
  try {
    const result = await fn();
    logger.debug(`retryExpectOk: result: ${toString(result)}`);

    if (isOk(result)) {
      logger.debug(`retryExpectOk isOk`);
      return true;
    }
    logger.debug(`retryExpectOk: not ok`);
  } catch (error) {
    logger.debug(
      `retryExpectOk: ${toString(error.response ? error.response : error)}`
    );
  }
  await Promise.delay(delay);
  return retryExpectOk({ fn, isOk, delay }, --count);
};

exports.retryExpectOk = retryExpectOk;
