const { test, expect } = require('@playwright/test');

test.describe('❓ FAQ Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/faq');
  });

  test('TC44 - FAQ page loads at /faq', async ({ page }) => {
    await expect(page).toHaveURL(/\/faq/);
  });

  test('TC45 - Page title includes Winev', async ({ page }) => {
    await expect(page).toHaveTitle(/Winev/i);
  });

  test('TC46 - Documents required FAQ is present', async ({ page }) => {
    await expect(page.locator('text=documents')).toBeVisible();
  });

  test('TC47 - Security deposit FAQ is present', async ({ page }) => {
    await expect(page.locator('text=deposit')).toBeVisible();
  });
});
