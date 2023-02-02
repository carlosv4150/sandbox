const { expect } = require('@playwright/test');

exports.ResultDetailPage = class ResultDetailPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page, context) {
    this.page = page;
    this.context = context;
    
  }

  async openNewTab() {
    const pages = await this.context.pages();
    pages[1].bringToFront();
    await this.setHeader(pages[1]);
    expect(await pages[1].title()).toEqual('Selenium - Wikipedia, la enciclopedia libre');
  }

  async setHeader(pages) {
    this.header = pages.locator('#firstHeading');
  }

  async getHeader() {
    return this.header;
  }
}