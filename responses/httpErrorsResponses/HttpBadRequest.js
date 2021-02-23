const HttpErrorBase = require("./HttpErrorBase");
const { BAD_REQUEST } = require("../../constants/httpStatusCodes");

/**
 * HttpBadRequest
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpBadRequest object
 */

class HttpBadRequest extends HttpErrorBase {
  /**
   * @param {string} message - Http Error message
   * @param {Object} error
   * @returns {void}
   */
  constructor(message, error) {
    /**
     * @param {number} BAD_REQUEST
     * @param {string} message
     */
    super(BAD_REQUEST, message);
    /**
     * @property {Object} error
     */
    this.error = error;
  }
}
module.exports = HttpBadRequest;
