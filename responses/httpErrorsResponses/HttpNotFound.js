const HttpErrorBase = require('./HttpErrorBase');
const { NOT_FOUND } = require('../../constants/httpStatusCodes');

/**
 * HttpNotFound
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpNotFound object
 */

class HttpNotFound extends HttpErrorBase {
  /**
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    /**
     * @param {number} NOT_FOUND
     * @param {string} message
     * @returns {void}
     */
    super(NOT_FOUND, message);
  }
}
module.exports = HttpNotFound;
