const httpResponse = require('http-response-rks');
const { defaultLogger } = require('../appLogger');

module.exports = (controller) => async (req, res, next) => {
  try {
    const response = await controller(req, res, next);
    defaultLogger.debug(response);
    if (response instanceof httpResponse.httpSucces.HttpFileOk) {
      res.writeHead(200, { 'Content-type': 'image/jpg' });
      res.end(response.payload);
    } else {
      res.status(response.statusCode).send(response.payload || undefined);
    }
  } catch (err) {
    defaultLogger.error(err);
    next(err);
  }
};
