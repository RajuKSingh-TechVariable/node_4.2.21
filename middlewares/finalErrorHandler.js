const { HttpErrorBase } = require("../responses/httpErrorsResponses");
const { globalErrorMsgs } = require("../resources/errorMessages");
const { HttpInternalServer } = require("../responses/httpErrorsResponses");
const { INTERNAL_SERVER_ERROR } = require("../constants/httpStatusCodes");
const { defaultLogger } = require("../appLogger");

module.exports = (err, _req, res, _next) => {
  if (err) {
    defaultLogger.error(err);
    if (err instanceof HttpErrorBase) {
      res.status(err.statusCode).json(err);
    } else {
      console.log(err.stack);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json(new HttpInternalServer(globalErrorMsgs.wentWrong));
    }
  }
};
