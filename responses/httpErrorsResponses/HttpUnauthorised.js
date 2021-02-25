const { UNAUTHORISED } = require('../../constants/httpStatusCodes');
const HttpErrorBase = require('./HttpErrorBase');
/**
 * HttpUnauthorised
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpUnauthorised object
 */

class HttpUnauthorised extends HttpErrorBase {
  /**
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    /**
     * @param {number} UNAUTHORISED
     * @param {string} message
     * @returns {void}
     */
    super(UNAUTHORISED, message);
  }
}
module.exports = HttpUnauthorised;
