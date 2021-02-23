const ValidationError = require("./ValidationError");
const {
  validationErrorMsgs: validationErrorMsgs,
} = require("../../resources/errorMessages");

class InvalidBodyException extends ValidationError {
  constructor(payload) {
    super(payload);
    // this.error = payload;
  }
}
module.exports = InvalidBodyException;
