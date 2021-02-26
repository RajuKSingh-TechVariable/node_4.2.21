const { HttpNotFound } = require('http-response-rks');
const { globalErrorMsgs } = require('../resources/errorMessages');

module.exports = () => {
  throw new HttpNotFound(globalErrorMsgs.routeNotFound);
};
