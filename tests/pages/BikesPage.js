class BikesPage {
  constructor(page) {
    this.page = page;

    this.heading = page.locator('h1, h2').first();
    this.scooterCards = page.locator('[class*="card"], article, section').filter({ hasText: 'VIDA' });
    this.viewDetailsLinks = page.locator('a', { hasText: 'View Details' });
    this.bookViaWhatsAppLinks = page.locator('a[href*="wa.me"]');
    this.availableBadges = page.locator('text=Available');
  }

  async goto() {
    await this.page.goto('/bikes');
  }
}

module.exports = { BikesPage };

