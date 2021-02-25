const { defaultLogger } = require('../appLogger');
const { HttpFileOk } = require('../responses/httpSuccesResponses');

module.exports = (controller) => async (req, res, next) => {
  try {
    const response = await controller(req, res, next);
    defaultLogger.debug(response);
    if (response instanceof HttpFileOk) {
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
