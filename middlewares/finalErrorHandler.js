/* eslint-disable no-unused-vars */
// const { HttpErrorBase } = require('../responses/httpErrorsResponses');
const httpResponse = require('http-response-rks');
const { globalErrorMsgs } = require('../resources/errorMessages');
const { INTERNAL_SERVER_ERROR } = require('../constants/httpStatusCodes');
const { defaultLogger } = require('../appLogger');

module.exports = (err, _req, res, _next) => {
  if (err) {
    defaultLogger.error(err);
    if (err instanceof httpResponse.httpError.HttpErrorBase) {
      res.status(err.statusCode).json(err);
    } else {
      defaultLogger.info(err.stack);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json(
          new httpResponse.httpError.HttpInternalServer(
            globalErrorMsgs.wentWrong,
          ),
        );
    }
  }
};
