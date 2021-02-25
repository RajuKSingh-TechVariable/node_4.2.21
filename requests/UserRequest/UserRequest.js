const { emailValid } = require('../../utils');
const {
  InvalidBodyException,
  InvalidParamsException,
} = require('../../responses/validationResponses');
const { userErrorMsgs } = require('../../resources/errorMessages');

class UserRequest {
  constructor({ body, params }) {
    this.body = {
      userName: body.userName,
      password: body.password,
    };
    this.params = {
      userId: params.userId,
    };
  }

  validateBody() {
    const errObj = {};
    const userNameErrors = [];
    const passwordErrors = [];

    if (!this.body.userName) {
      userNameErrors.push(userErrorMsgs.userNameReq);
    } else {
      if (this.body.userName.length <= 5) {
        userNameErrors.push(userErrorMsgs.lengthGt5);
      }
      if (!emailValid) {
        userNameErrors.push(userErrorMsgs.emailInvalid);
      }
    }
    if (!this.body.password) {
      passwordErrors.push(userErrorMsgs.passwordReq);
    } else if (this.body.password.length <= 5) {
      passwordErrors.push(userErrorMsgs.lengthGt5);
    }

    if (userNameErrors.length !== 0) {
      errObj.userName = userNameErrors;
    }
    if (passwordErrors.length !== 0) {
      errObj.password = passwordErrors;
    }

    if (Object.keys(errObj).length !== 0) {
      throw new InvalidBodyException(errObj);
    }
  }

  validateParams() {
    const errObj = {};
    const paramErrors = [];
    const hex = /[0-9A-Fa-f]{24}/g;
    if (!hex.test(this.params.userId)) {
      paramErrors.push(userErrorMsgs.paramInvalid);
    }
    if (paramErrors.length !== 0) {
      errObj.userId = paramErrors;
    }
    if (Object.keys(errObj).length !== 0) {
      throw new InvalidParamsException(errObj);
    }
  }
}
module.exports = UserRequest;
