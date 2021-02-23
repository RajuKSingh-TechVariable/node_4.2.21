const { defaultLogger } = require("../appLogger");

module.exports = (controller) => async (req, res, next) => {
  try {
    const response = await controller(req, res, next);
    defaultLogger.debug(response);
    res.status(response.statusCode).send(response.payload || undefined);
  } catch (err) {
    defaultLogger.error(err);
    next(err);
  }
};
