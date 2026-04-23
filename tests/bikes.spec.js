const { test, expect } = require('@playwright/test');
const { BikesPage } = require('./pages/BikesPage');

test.describe('🛵 Scooters / Bikes Page', () => {
  let bikesPage;

  test.beforeEach(async ({ page }) => {
    bikesPage = new BikesPage(page);
    await bikesPage.goto();
  });

  test('TC29 - /bikes page loads successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/bikes/);
    expect(page.url()).toContain('bikes');
  });

  test('TC30 - Page title still contains Winev', async ({ page }) => {
    await expect(page).toHaveTitle(/Winev/i);
  });

  test('TC31 - At least one scooter card is displayed', async () => {
    const count = await bikesPage.viewDetailsLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC32 - Available status badge is shown on scooters', async () => {
    await expect(bikesPage.availableBadges.first()).toBeVisible();
  });

  test('TC33 - WhatsApp booking links are present', async () => {
    const count = await bikesPage.bookViaWhatsAppLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC34 - WhatsApp links point to correct number', async () => {
    const href = await bikesPage.bookViaWhatsAppLinks.first().getAttribute('href');
    expect(href).toContain('wa.me');
    expect(href).toContain('9014827770');
  });

  test('TC35 - Scooter price ₹35/hr is displayed', async ({ page }) => {
    await expect(page.locator('text=₹35').first()).toBeVisible();
  });

  test('TC36 - Scooter range 100km is displayed', async ({ page }) => {
    await expect(page.locator('text=100').first()).toBeVisible();
  });
});
