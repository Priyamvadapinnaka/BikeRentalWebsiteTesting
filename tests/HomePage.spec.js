const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

const BASE_URL = 'https://winev-bike-rentals.vercel.app';

test.describe('🏠 Homepage - UI & Content', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC01 - Page title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Winev/i);
  });

  test('TC02 - Logo is visible in navbar', async () => {
    await expect(homePage.logo).toBeVisible();
  });

  test('TC03 - All nav links are present', async () => {
    await expect(homePage.navHome).toBeVisible();
    await expect(homePage.navScooters).toBeVisible();
    await expect(homePage.navAbout).toBeVisible();
    await expect(homePage.navContact).toBeVisible();
  });

  test('TC04 - Book a Ride button is visible in navbar', async () => {
    await expect(homePage.bookARideBtn).toBeVisible();
  });

  test('TC05 - Hero section stats are displayed correctly', async () => {
    await expect(homePage.heroStatRange).toBeVisible();
    await expect(homePage.heroStatSpeed).toBeVisible();
    await expect(homePage.heroStatWeekly).toBeVisible();
    await expect(homePage.heroStatDeposit).toBeVisible();
  });

  test('TC06 - Book Now button is visible in hero', async () => {
    await expect(homePage.heroBookNowBtn).toBeVisible();
  });

  test('TC07 - All 4 rental plan cards are shown', async ({ page }) => {
    await expect(homePage.hourlyCard).toBeVisible();
    await expect(homePage.dailyCard).toBeVisible();
    await expect(homePage.weeklyCard).toBeVisible();
    await expect(homePage.monthlyCard).toBeVisible();
  });

  test('TC08 - Hourly price is ₹35', async ({ page }) => {
    await expect(page.locator('text=₹35')).toBeVisible();
  });

  test('TC09 - Daily price is ₹449', async ({ page }) => {
    await expect(page.locator('text=₹449')).toBeVisible();
  });

  test('TC10 - Scooter cards are displayed (min 3)', async () => {
    const count = await homePage.scooterCards.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('TC11 - View Details buttons are present', async () => {
    const count = await homePage.viewDetailsButtons.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('TC12 - See All Scooters link is visible', async () => {
    await expect(homePage.seeAllScootersLink).toBeVisible();
  });

  test('TC13 - FAQ section is present', async () => {
    await expect(homePage.faqSection).toBeVisible();
  });

  test('TC14 - Footer logo is visible', async () => {
    await expect(homePage.footerLogo).toBeVisible();
  });

  test('TC15 - Footer email link is correct', async () => {
    await expect(homePage.footerEmail).toHaveAttribute('href', 'mailto:info@winevbikerentals.in');
  });

  test('TC16 - Footer phone link is correct', async () => {
    await expect(homePage.footerPhone).toHaveAttribute('href', 'tel:919014827770');
  });

  test('TC17 - Privacy Policy link is present in footer', async () => {
    await expect(homePage.footerPrivacyLink).toBeVisible();
  });

  test('TC18 - Terms and Conditions link is in footer', async () => {
    await expect(homePage.footerTermsLink).toBeVisible();
  });
});
