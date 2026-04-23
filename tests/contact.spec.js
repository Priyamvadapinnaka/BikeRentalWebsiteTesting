const { test, expect } = require('@playwright/test');
const { ContactPage } = require('./pages/ContactPage');

test.describe('📞 Contact Page', () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test('TC37 - Contact page loads at /contact', async ({ page }) => {
    await expect(page).toHaveURL(/\/contact/);
  });

  test('TC38 - Phone number link is present', async () => {
    await expect(contactPage.phoneLink).toBeVisible();
  });

  test('TC39 - Phone href is correct', async () => {
    const href = await contactPage.phoneLink.getAttribute('href');
    expect(href).toMatch(/tel:/);
    expect(href).toContain('9014827770');
  });

  test('TC40 - WhatsApp link is present on contact page', async () => {
    await expect(contactPage.whatsAppLink).toBeVisible();
  });

  test('TC41 - Email link is present', async () => {
    await expect(contactPage.emailLink).toBeVisible();
  });

  test('TC42 - Email href is correct', async () => {
    const href = await contactPage.emailLink.getAttribute('href');
    expect(href).toBe('mailto:info@winevbikerentals.in');
  });

  test('TC43 - Hyderabad address is shown', async () => {
    await expect(contactPage.addressText.first()).toBeVisible();
  });
});
