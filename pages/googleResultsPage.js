const { expect } = require('@playwright/test');

exports.GoogleResultsPage = class GoogleResultsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.results = page.locator('#rso > div > div > div > div > div > a');
  }

  async openResultInPos(pos) {
    await this.results.nth(pos-1).click({ button: "middle" });
    await this.page.waitForTimeout(2000);
  }
}