const HttpSuccesBase = require("./HttpSuccesBase");
const { OK } = require("../../constants/httpStatusCodes");

/**
 * HttpSuccesOK
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpSuccesOK object
 */

class HttpSuccesOK extends HttpSuccesBase {
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
module.exports = HttpSuccesOK;
