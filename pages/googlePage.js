const { expect } = require('@playwright/test');

exports.GooglePage = class GooglePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole('combobox');
  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }

  async doGoogleSearch(text) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }
}