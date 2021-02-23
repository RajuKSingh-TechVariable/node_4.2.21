const ValidationError = require("./ValidationError");
// const { validationErrorMsgs } = require("../../resources/errorMessages");

class InvalidParamsException extends ValidationError {
  constructor(payload) {
    super(payload);
    // this.error = payload;
  }
}
module.exports = InvalidParamsException;
