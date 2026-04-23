const { test, expect } = require('@playwright/test');

test.describe('ℹ️ About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('TC56 - About page loads at /about', async ({ page }) => {
    await expect(page).toHaveURL(/\/about/);
  });

  test('TC57 - Page title includes Winev', async ({ page }) => {
    await expect(page).toHaveTitle(/Winev/i);
  });

  test('TC58 - About page contains company-related text', async ({ page }) => {
    // At least one of these should appear on an About page
    const keywords = ['Winev', 'Hyderabad', 'scooter', 'electric', 'rental'];
    let found = false;
    for (const kw of keywords) {
      const el = page.locator(`text=${kw}`).first();
      if (await el.isVisible().catch(() => false)) {
        found = true;
        break;
      }
    }
    expect(found).toBeTruthy();
  });
});
