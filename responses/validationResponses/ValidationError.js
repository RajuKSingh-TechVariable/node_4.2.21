class ValidationError {
  constructor(message) {
    if (message.userName || message.password) {
      this.body = message;
    } else {
      this.params = message;
    }
  }
}
module.exports = ValidationError;
