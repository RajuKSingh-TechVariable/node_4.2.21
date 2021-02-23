const HttpSuccesBase = require("./HttpSuccesBase");
const { CREATED } = require("../../constants/httpStatusCodes");
/**
 * HttpSuccesCreated
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpSuccesCreated object
 */
class HttpSuccesCreated extends HttpSuccesBase {
  /**
   * @param {Object} payload - Response Payload
   * @returns {void}
   */
  constructor(payload) {
    /**
     * @param {number} CREATED
     * @returns {void}
     */
    super(CREATED);
    /**
     * @property {Object} payload - Http response status code
     */
    this.payload = payload;
  }
}
module.exports = HttpSuccesCreated;
