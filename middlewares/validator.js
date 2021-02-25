const httpResponse = require('http-response-rks');
const { BODY, PARAMS } = require('../constants/validateOn');
const { ValidationError } = require('../responses/validationResponses');
const { validationErrorMsgs } = require('../resources/errorMessages');

module.exports = (ValidatorClass, validateOn) => async (req, _res, next) => {
  try {
    const validator = new ValidatorClass({
      body: req.body,
      params: req.params,
    });
    const errObj = {};
    validateOn.forEach((element) => {
      if (element === PARAMS) {
        try {
          validator.validateParams();
        } catch (err) {
          if (err instanceof ValidationError) {
            errObj.params = err.params;
          }
        }
      } else if (element === BODY) {
        try {
          validator.validateBody();
        } catch (err) {
          if (err instanceof ValidationError) {
            errObj.body = err.body;
          }
        }
      }
    });

    if (Object.keys(errObj).length !== 0) {
      next(
        new httpResponse.httpError.HttpBadRequest(
          validationErrorMsgs.badRequest,
          errObj,
        ),
      );
    }
    req.model = validator;
    next();
  } catch (err) {
    next(err);
  }
};
