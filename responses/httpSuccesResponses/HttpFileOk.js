const HttpSuccesBase = require('./HttpSuccesBase');
const { OK } = require('../../constants/httpStatusCodes');

/**
 * HttpAvatar
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpAvatar object
 */

class HttpFileOk extends HttpSuccesBase {
  /**
   * @param {Object} payload - Response Payload
   * @returns {void}
   */
  constructor(payload) {
    /**
     * @param {number} OK
     * @returns {void}
     */
    super(OK);
    /**
     * @property {Object} payload - Http response status code
     */
    this.payload = payload;
  }
}
module.exports = HttpFileOk;
