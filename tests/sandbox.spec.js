// @ts-check
const { test, expect } = require('@playwright/test');
const { GooglePage, GoogleResultsPage, ResultDetailPage } = require('../pages/index');


test('Verify selenium page', async ({ page, context }) => {

  const googlePage = new GooglePage(page);
  const googleResultsPage = new GoogleResultsPage(page);
  const resultDetailPage = new ResultDetailPage(page, context);

  await googlePage.goto();
  await googlePage.doGoogleSearch('selenium');

  // Open the second link in a new tab.
  await googleResultsPage.openResultInPos(1);

  // Wait until the new page is displayed
  await resultDetailPage.openNewTab();

  // Verify the page title
  expect(await resultDetailPage.getHeader()).toHaveText('Selenium');
});
