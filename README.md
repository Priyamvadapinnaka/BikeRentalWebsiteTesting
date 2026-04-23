# 🛵 Winev Bike Rentals – Playwright Test Suite

Automated test suite for [winev-bike-rentals.vercel.app](https://winev-bike-rentals.vercel.app) using **Playwright + JavaScript**.

## 📁 Project Structure

```
winev-tests/
├── playwright.config.js
├── package.json
├── tests/
│   ├── pages/                  # Page Object Models
│   │   ├── HomePage.js
│   │   ├── BikesPage.js
│   │   └── ContactPage.js
│   ├── homepage.spec.js        # TC01–TC18  (UI & Content)
│   ├── navigation.spec.js      # TC19–TC28  (Navigation)
│   ├── bikes.spec.js           # TC29–TC36  (Scooters Page)
│   ├── contact.spec.js         # TC37–TC43  (Contact Page)
│   ├── faq.spec.js             # TC44–TC47  (FAQ Page)
│   ├── about.spec.js           # TC56–TC58  (About Page)
│   └── responsive.spec.js      # TC48–TC55  (Responsive + Performance)
└── screenshots/                # Auto-created on screenshot tests
```

## ⚙️ Setup

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install chromium
```

## ▶️ Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/homepage.spec.js

# Run with browser visible (headed mode)
npx playwright test --headed

# Run only on mobile viewport
npx playwright test --project="Mobile Chrome"

# Run with HTML report
npx playwright test --reporter=html
npx playwright show-report
```

## 📊 Test Coverage (55 Test Cases)

| File                  | TCs        | What's Tested                        |
|-----------------------|------------|--------------------------------------|
| homepage.spec.js      | TC01–TC18  | Title, logo, nav, hero stats, pricing, scooters, footer |
| navigation.spec.js    | TC19–TC28  | All nav links, internal routing, WhatsApp links |
| bikes.spec.js         | TC29–TC36  | Scooters page content, availability, pricing |
| contact.spec.js       | TC37–TC43  | Phone, email, WhatsApp, address      |
| faq.spec.js           | TC44–TC47  | FAQ page load and content             |
| about.spec.js         | TC56–TC58  | About page load and content           |
| responsive.spec.js    | TC48–TC55  | Mobile/tablet/desktop, images, console errors, load time |

## 🏗️ Architecture

- **Page Object Model (POM)** used for reusable selectors
- **Chromium + Mobile Chrome** tested by default
- **Screenshots** saved on failure automatically
- **Videos** retained on test failure for debugging
