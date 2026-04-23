class HomePage {
  constructor(page) {
    this.page = page;

    // Nav
    this.logo = page.locator('nav img[alt="Winev Logo"]');
    this.navHome = page.locator('nav a', { hasText: 'Home' });
    this.navScooters = page.locator('nav a', { hasText: 'Scooters' });
    this.navAbout = page.locator('nav a', { hasText: 'About' });
    this.navContact = page.locator('nav a', { hasText: 'Contact' });
    this.bookARideBtn = page.locator('a', { hasText: 'Book a Ride' }).first();

    // Hero
    this.heroHeading = page.locator('h1');
    this.heroBookNowBtn = page.locator('a', { hasText: 'Book Now' });
    this.heroStatRange = page.locator('text=100km');
    this.heroStatSpeed = page.locator('text=80kmh');
    this.heroStatWeekly = page.locator('text=₹2199');
    this.heroStatDeposit = page.locator('text=₹2000');

    // Pricing cards
    this.hourlyCard = page.locator('text=Hourly Rentals');
    this.dailyCard = page.locator('text=Daily Rentals');
    this.weeklyCard = page.locator('text=Weekly Rentals');
    this.monthlyCard = page.locator('text=Monthly Rentals');

    // Scooters section
    this.scooterCards = page.locator('text=VIDA VX2 Plus');
    this.viewDetailsButtons = page.locator('a', { hasText: 'View Details' });
    this.seeAllScootersLink = page.locator('a', { hasText: 'See All Scooters' });

    // FAQ
    this.faqSection = page.locator('text=Common Questions');
    this.seeAllFaqsLink = page.locator('a', { hasText: 'See All FAQs' });

    // Footer
    this.footerLogo = page.locator('footer img[alt="Winev Logo"]');
    this.footerPrivacyLink = page.locator('a', { hasText: 'Privacy Policy' });
    this.footerTermsLink = page.locator('a', { hasText: 'Terms and Conditions' });
    this.footerEmail = page.locator('a[href="mailto:info@winevbikerentals.in"]');
    this.footerPhone = page.locator('a[href="tel:919014827770"]').first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickBookNow() {
    await this.heroBookNowBtn.click();
  }

  async clickNavScooters() {
    await this.navScooters.click();
  }

  async clickNavAbout() {
    await this.navAbout.click();
  }

  async clickNavContact() {
    await this.navContact.click();
  }

  async clickSeeAllScooters() {
    await this.seeAllScootersLink.click();
  }
}

module.exports = { HomePage };
