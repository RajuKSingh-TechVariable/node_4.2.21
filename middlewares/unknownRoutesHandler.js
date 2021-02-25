const httpResponse = require('http-response-rks');
const { globalErrorMsgs } = require('../resources/errorMessages');

module.exports = () => {
  throw new httpResponse.httpError.HttpNotFound(globalErrorMsgs.routeNotFound);
};
