/**
 * class to create a HttpErrorBase object
 */

class HttpErrorBase {
  /**
   * @param {number} statusCode - Http Error Response Status Code
   * @param {string} message - Http Error message
   * @returns {void}
   */
  constructor(statusCode, message) {
    /**
     * @property {number} statusCode - Http response status code
     */
    this.statusCode = statusCode;
    /**
     * @property {string} message - Http error message
     */
    this.message = message;
  }
}
module.exports = HttpErrorBase;
