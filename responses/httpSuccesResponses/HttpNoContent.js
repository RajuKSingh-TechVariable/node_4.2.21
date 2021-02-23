const HttpSuccesBase = require("./HttpSuccesBase");
const { NO_CONTENT } = require("../../constants/httpStatusCodes");

/**
 * HttpNoContent
 * See {@link HttpSuccesBase}
 */

/**
 * class to create a HttpNoContent object
 */

class HttpSuccesCreated extends HttpSuccesBase {
  /**
   * @param {void}
   * @returns {void}
   */
  constructor() {
    /**
     * @param {number} NO_CONTENT
     * @returns {void}
     */
    super(NO_CONTENT);
  }
}
module.exports = HttpSuccesCreated;
