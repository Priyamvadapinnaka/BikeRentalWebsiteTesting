const { test, expect } = require('@playwright/test');

test.describe('📱 Responsive Design', () => {
  test('TC48 - Homepage renders on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('text=Winev').first()).toBeVisible();
  });

  test('TC49 - Homepage renders on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('text=₹35').first()).toBeVisible();
  });

  test('TC50 - Homepage renders on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('text=₹35').first()).toBeVisible();
  });

  test('TC51 - No broken images on homepage (all images have src)', async ({ page }) => {
    await page.goto('/');
    const images = await page.locator('img').all();
    for (const img of images) {
      const src = await img.getAttribute('src');
      expect(src).toBeTruthy();
    }
  });

  test('TC52 - Page has no console errors on load', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors.length).toBe(0);
  });

  test('TC53 - Homepage screenshot (visual baseline)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });
  });
});

test.describe('⚡ Performance', () => {
  test('TC54 - Homepage loads within 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(5000);
  });

  test('TC55 - Bikes page loads within 5 seconds', async ({ page }) => {
    const start = Date.now();
    await page.goto('/bikes');
    await page.waitForLoadState('domcontentloaded');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(5000);
  });
});
