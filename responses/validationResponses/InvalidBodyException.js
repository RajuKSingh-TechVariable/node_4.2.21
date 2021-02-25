/* eslint-disable no-useless-constructor */
const ValidationError = require('./ValidationError');

class InvalidBodyException extends ValidationError {
  constructor(payload) {
    super(payload);
  }
}
module.exports = InvalidBodyException;
