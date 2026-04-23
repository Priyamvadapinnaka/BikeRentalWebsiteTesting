const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

test.describe('🔗 Navigation', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC19 - Clicking Scooters nav goes to /bikes', async ({ page }) => {
    await homePage.clickNavScooters();
    await expect(page).toHaveURL(/\/bikes/);
  });

  test('TC20 - Clicking About nav goes to /about', async ({ page }) => {
    await homePage.clickNavAbout();
    await expect(page).toHaveURL(/\/about/);
  });

  test('TC21 - Clicking Contact nav goes to /contact', async ({ page }) => {
    await homePage.clickNavContact();
    await expect(page).toHaveURL(/\/contact/);
  });

  test('TC22 - See All Scooters link navigates to /bikes', async ({ page }) => {
    await homePage.clickSeeAllScooters();
    await expect(page).toHaveURL(/\/bikes/);
  });

  test('TC23 - Logo click returns to home', async ({ page }) => {
    await homePage.clickNavScooters();
    await expect(page).toHaveURL(/\/bikes/);
    await homePage.logo.click();
    await expect(page).toHaveURL(new RegExp('^https://winev-bike-rentals.vercel.app/?$'));
  });

  test('TC24 - Footer Privacy Policy link navigates to /privacy', async ({ page }) => {
    await homePage.footerPrivacyLink.click();
    await expect(page).toHaveURL(/\/privacy/);
  });

  test('TC25 - Footer Terms link navigates to /terms', async ({ page }) => {
    await homePage.footerTermsLink.click();
    await expect(page).toHaveURL(/\/terms/);
  });

  test('TC26 - See All FAQs link navigates to /faq', async ({ page }) => {
    await homePage.seeAllFaqsLink.click();
    await expect(page).toHaveURL(/\/faq/);
  });

  test('TC27 - Book a Ride opens WhatsApp link', async () => {
    const href = await homePage.bookARideBtn.getAttribute('href');
    expect(href).toContain('wa.me');
  });

  test('TC28 - Book Now hero button links to WhatsApp or booking', async () => {
    const href = await homePage.heroBookNowBtn.getAttribute('href');
    expect(href).toBeTruthy();
  });
});
