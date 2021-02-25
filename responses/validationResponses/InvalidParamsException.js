/* eslint-disable no-useless-constructor */
const ValidationError = require('./ValidationError');
// const { validationErrorMsgs } = require("../../resources/errorMessages");

class InvalidParamsException extends ValidationError {
  constructor(payload) {
    super(payload);
  }
}
module.exports = InvalidParamsException;
