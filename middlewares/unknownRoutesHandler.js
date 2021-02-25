const { HttpNotFound } = require('../responses/httpErrorsResponses');
const { globalErrorMsgs } = require('../resources/errorMessages');

module.exports = () => {
  throw new HttpNotFound(globalErrorMsgs.routeNotFound);
};
