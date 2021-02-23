const { HttpNotFound } = require("../responses/httpErrorsResponses");
const { globalErrorMsgs } = require("../resources/errorMessages");

module.exports = (_req, _res, _next) => {
  throw new HttpNotFound(globalErrorMsgs.routeNotFound);
};
