class ContactPage {
  constructor(page) {
    this.page = page;

    this.heading = page.locator('h1, h2').first();
    this.phoneLink = page.locator('a[href*="tel:"]').first();
    this.whatsAppLink = page.locator('a[href*="wa.me"]').first();
    this.emailLink = page.locator('a[href*="mailto:"]').first();
    this.addressText = page.locator('text=Hyderabad');
  }

  async goto() {
    await this.page.goto('/contact');
  }
}

module.exports = { ContactPage };
