const HttpErrorBase = require('./HttpErrorBase');
const { INTERNAL_SERVER_ERROR } = require('../../constants/httpStatusCodes');

/**
 * HttpInternalServerError
 * See {@link HttpErrorBase}
 */

/**
 * class to create a HttpInternalServer object
 */
class HttpInternalServer extends HttpErrorBase {
  /**
   *
   * @param {string} message
   * @returns {void}
   */
  constructor(message) {
    /**
     * @param {number} INTERNAL_SERVER_ERROR
     * @param {string} message
     * @returns {void}
     */
    super(INTERNAL_SERVER_ERROR, message);
  }
}
module.exports = HttpInternalServer;
