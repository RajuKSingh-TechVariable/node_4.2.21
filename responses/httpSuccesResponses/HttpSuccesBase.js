/**
 * class to create a HttpSuccesBase object
 */
class HttpSuccesBase {
  /**
   * @param {number} statusCode - Http Response Status Code
   * @returns {void}
   */
  constructor(statusCode) {
    /**
     * @property {number} statusCode - Http response status code
     */

    this.statusCode = statusCode;
  }
}
module.exports = HttpSuccesBase;
