/**
 * Represents the homepage of a website.
 */
class HomePage {
  /**
   * @param {Driver} driver - This object for interacting with the website.
   */
  constructor(driver) {
    /**
     * The driver object for interacting with the website.
     * @type {Driver}
     */
    this.driver = driver;
    /**
     * The URL of the homepage.
     * @type {string}
     */
    this.url = 'https://demoqa.com';
  }
}

module.exports = HomePage;
