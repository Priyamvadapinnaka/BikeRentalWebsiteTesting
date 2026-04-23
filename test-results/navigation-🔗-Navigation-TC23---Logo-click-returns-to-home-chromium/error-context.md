# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> 🔗 Navigation >> TC23 - Logo click returns to home
- Location: tests\navigation.spec.js:32:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('nav img[alt="Winev Logo"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - link "Winev Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Winev Logo" [ref=e6]
        - navigation [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
          - link "Scooters" [active] [ref=e9] [cursor=pointer]:
            - /url: /bikes
          - link "About" [ref=e10] [cursor=pointer]:
            - /url: /about
          - link "Contact" [ref=e11] [cursor=pointer]:
            - /url: /contact
        - generic [ref=e12]:
          - link "090148 27770" [ref=e13] [cursor=pointer]:
            - /url: tel:919014827770
            - img [ref=e14]
            - text: 090148 27770
          - link "Book a Ride" [ref=e16] [cursor=pointer]:
            - /url: https://wa.me/919014827770
    - main [ref=e17]:
      - main [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e22]:
            - generic [ref=e23]:
              - img [ref=e24]
              - generic [ref=e29]: Premium Fleet
            - heading "Explore Our Scooter Universe" [level=1] [ref=e30]
            - paragraph [ref=e31]: Experience the next generation of urban mobility with our fleet of 15+ specialized electric scooters. Each unit is meticulously maintained, GPS-tracked, and sanitized after every trip to provide Hyderabad with the most reliable and eco-friendly ride available today.
            - generic [ref=e32]:
              - generic [ref=e33]:
                - paragraph [ref=e34]: 15+
                - paragraph [ref=e35]: Units
              - generic [ref=e37]:
                - paragraph [ref=e38]: 100km
                - paragraph [ref=e39]: Range
              - generic [ref=e41]:
                - paragraph [ref=e42]: 80kmh
                - paragraph [ref=e43]: Speed
          - generic:
            - generic:
              - generic:
                - img "Premium Winev Scooter Fleet"
        - generic [ref=e45]:
          - heading "Available Models" [level=2] [ref=e47]
          - generic [ref=e49]:
            - generic [ref=e50]:
              - img "VIDA VX2 Plus" [ref=e53]
              - generic [ref=e54]:
                - generic [ref=e55]:
                  - generic [ref=e56]: VIDA VX2 Plus
                  - generic [ref=e57]: Available
                - generic [ref=e58]:
                  - generic [ref=e59]:
                    - img [ref=e60]
                    - generic [ref=e62]: 100 km
                  - generic [ref=e63]:
                    - img [ref=e64]
                    - generic [ref=e67]: 80 km/h
              - generic [ref=e68]:
                - generic [ref=e69]: ₹35/hr
                - button "View Details" [ref=e70] [cursor=pointer]
            - generic [ref=e71]:
              - img "VIDA VX2 Plus" [ref=e74]
              - generic [ref=e75]:
                - generic [ref=e76]:
                  - generic [ref=e77]: VIDA VX2 Plus
                  - generic [ref=e78]: Available
                - generic [ref=e79]:
                  - generic [ref=e80]:
                    - img [ref=e81]
                    - generic [ref=e83]: 100 km
                  - generic [ref=e84]:
                    - img [ref=e85]
                    - generic [ref=e88]: 80 km/h
              - generic [ref=e89]:
                - generic [ref=e90]: ₹35/hr
                - button "View Details" [ref=e91] [cursor=pointer]
            - generic [ref=e92]:
              - img "VIDA VX2 Plus" [ref=e95]
              - generic [ref=e96]:
                - generic [ref=e97]:
                  - generic [ref=e98]: VIDA VX2 Plus
                  - generic [ref=e99]: Available
                - generic [ref=e100]:
                  - generic [ref=e101]:
                    - img [ref=e102]
                    - generic [ref=e104]: 100 km
                  - generic [ref=e105]:
                    - img [ref=e106]
                    - generic [ref=e109]: 80 km/h
              - generic [ref=e110]:
                - generic [ref=e111]: ₹35/hr
                - button "View Details" [ref=e112] [cursor=pointer]
            - generic [ref=e113]:
              - img "VIDA VX2 Plus" [ref=e116]
              - generic [ref=e117]:
                - generic [ref=e118]:
                  - generic [ref=e119]: VIDA VX2 Plus
                  - generic [ref=e120]: Available
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - img [ref=e123]
                    - generic [ref=e125]: 100 km
                  - generic [ref=e126]:
                    - img [ref=e127]
                    - generic [ref=e130]: 80 km/h
              - generic [ref=e131]:
                - generic [ref=e132]: ₹35/hr
                - button "View Details" [ref=e133] [cursor=pointer]
            - generic [ref=e134]:
              - img "VIDA VX2 Plus" [ref=e137]
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]: VIDA VX2 Plus
                  - generic [ref=e141]: Available
                - generic [ref=e142]:
                  - generic [ref=e143]:
                    - img [ref=e144]
                    - generic [ref=e146]: 100 km
                  - generic [ref=e147]:
                    - img [ref=e148]
                    - generic [ref=e151]: 80 km/h
              - generic [ref=e152]:
                - generic [ref=e153]: ₹35/hr
                - button "View Details" [ref=e154] [cursor=pointer]
            - generic [ref=e155]:
              - img "VIDA VX2 Plus" [ref=e158]
              - generic [ref=e159]:
                - generic [ref=e160]:
                  - generic [ref=e161]: VIDA VX2 Plus
                  - generic [ref=e162]: Available
                - generic [ref=e163]:
                  - generic [ref=e164]:
                    - img [ref=e165]
                    - generic [ref=e167]: 100 km
                  - generic [ref=e168]:
                    - img [ref=e169]
                    - generic [ref=e172]: 80 km/h
              - generic [ref=e173]:
                - generic [ref=e174]: ₹35/hr
                - button "View Details" [ref=e175] [cursor=pointer]
            - generic [ref=e176]:
              - img "VIDA VX2 Plus" [ref=e179]
              - generic [ref=e180]:
                - generic [ref=e181]:
                  - generic [ref=e182]: VIDA VX2 Plus
                  - generic [ref=e183]: Available
                - generic [ref=e184]:
                  - generic [ref=e185]:
                    - img [ref=e186]
                    - generic [ref=e188]: 100 km
                  - generic [ref=e189]:
                    - img [ref=e190]
                    - generic [ref=e193]: 80 km/h
              - generic [ref=e194]:
                - generic [ref=e195]: ₹35/hr
                - button "View Details" [ref=e196] [cursor=pointer]
            - generic [ref=e197]:
              - img "VIDA VX2 Plus" [ref=e200]
              - generic [ref=e201]:
                - generic [ref=e202]:
                  - generic [ref=e203]: VIDA VX2 Plus
                  - generic [ref=e204]: Available
                - generic [ref=e205]:
                  - generic [ref=e206]:
                    - img [ref=e207]
                    - generic [ref=e209]: 100 km
                  - generic [ref=e210]:
                    - img [ref=e211]
                    - generic [ref=e214]: 80 km/h
              - generic [ref=e215]:
                - generic [ref=e216]: ₹35/hr
                - button "View Details" [ref=e217] [cursor=pointer]
            - generic [ref=e218]:
              - img "VIDA VX2 Plus" [ref=e221]
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: VIDA VX2 Plus
                  - generic [ref=e225]: Available
                - generic [ref=e226]:
                  - generic [ref=e227]:
                    - img [ref=e228]
                    - generic [ref=e230]: 100 km
                  - generic [ref=e231]:
                    - img [ref=e232]
                    - generic [ref=e235]: 80 km/h
              - generic [ref=e236]:
                - generic [ref=e237]: ₹35/hr
                - button "View Details" [ref=e238] [cursor=pointer]
            - generic [ref=e239]:
              - img "VIDA VX2 Plus" [ref=e242]
              - generic [ref=e243]:
                - generic [ref=e244]:
                  - generic [ref=e245]: VIDA VX2 Plus
                  - generic [ref=e246]: Available
                - generic [ref=e247]:
                  - generic [ref=e248]:
                    - img [ref=e249]
                    - generic [ref=e251]: 100 km
                  - generic [ref=e252]:
                    - img [ref=e253]
                    - generic [ref=e256]: 80 km/h
              - generic [ref=e257]:
                - generic [ref=e258]: ₹35/hr
                - button "View Details" [ref=e259] [cursor=pointer]
            - generic [ref=e260]:
              - img "VIDA VX2 Plus" [ref=e263]
              - generic [ref=e264]:
                - generic [ref=e265]:
                  - generic [ref=e266]: VIDA VX2 Plus
                  - generic [ref=e267]: Available
                - generic [ref=e268]:
                  - generic [ref=e269]:
                    - img [ref=e270]
                    - generic [ref=e272]: 100 km
                  - generic [ref=e273]:
                    - img [ref=e274]
                    - generic [ref=e277]: 80 km/h
              - generic [ref=e278]:
                - generic [ref=e279]: ₹35/hr
                - button "View Details" [ref=e280] [cursor=pointer]
            - generic [ref=e281]:
              - img "VIDA VX2 Plus" [ref=e284]
              - generic [ref=e285]:
                - generic [ref=e286]:
                  - generic [ref=e287]: VIDA VX2 Plus
                  - generic [ref=e288]: Available
                - generic [ref=e289]:
                  - generic [ref=e290]:
                    - img [ref=e291]
                    - generic [ref=e293]: 100 km
                  - generic [ref=e294]:
                    - img [ref=e295]
                    - generic [ref=e298]: 80 km/h
              - generic [ref=e299]:
                - generic [ref=e300]: ₹35/hr
                - button "View Details" [ref=e301] [cursor=pointer]
            - generic [ref=e302]:
              - img "VIDA VX2 Plus" [ref=e305]
              - generic [ref=e306]:
                - generic [ref=e307]:
                  - generic [ref=e308]: VIDA VX2 Plus
                  - generic [ref=e309]: Available
                - generic [ref=e310]:
                  - generic [ref=e311]:
                    - img [ref=e312]
                    - generic [ref=e314]: 100 km
                  - generic [ref=e315]:
                    - img [ref=e316]
                    - generic [ref=e319]: 80 km/h
              - generic [ref=e320]:
                - generic [ref=e321]: ₹35/hr
                - button "View Details" [ref=e322] [cursor=pointer]
            - generic [ref=e323]:
              - img "VIDA VX2 Plus" [ref=e326]
              - generic [ref=e327]:
                - generic [ref=e328]:
                  - generic [ref=e329]: VIDA VX2 Plus
                  - generic [ref=e330]: Available
                - generic [ref=e331]:
                  - generic [ref=e332]:
                    - img [ref=e333]
                    - generic [ref=e335]: 100 km
                  - generic [ref=e336]:
                    - img [ref=e337]
                    - generic [ref=e340]: 80 km/h
              - generic [ref=e341]:
                - generic [ref=e342]: ₹35/hr
                - button "View Details" [ref=e343] [cursor=pointer]
            - generic [ref=e344]:
              - img "VIDA VX2 Plus" [ref=e347]
              - generic [ref=e348]:
                - generic [ref=e349]:
                  - generic [ref=e350]: VIDA VX2 Plus
                  - generic [ref=e351]: Available
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - img [ref=e354]
                    - generic [ref=e356]: 100 km
                  - generic [ref=e357]:
                    - img [ref=e358]
                    - generic [ref=e361]: 80 km/h
              - generic [ref=e362]:
                - generic [ref=e363]: ₹35/hr
                - button "View Details" [ref=e364] [cursor=pointer]
          - button "Next Page" [ref=e366] [cursor=pointer]:
            - generic [ref=e367]: Next Page
            - img
    - contentinfo [ref=e368]:
      - generic [ref=e369]:
        - generic [ref=e370]:
          - generic [ref=e371]:
            - link "Winev Logo" [ref=e372] [cursor=pointer]:
              - /url: /
              - img "Winev Logo" [ref=e373]
            - paragraph [ref=e374]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
            - generic [ref=e375]:
              - link "instagram" [ref=e376] [cursor=pointer]:
                - /url: https://www.instagram.com/winevbike
                - img [ref=e377]
              - link "youtube" [ref=e380] [cursor=pointer]:
                - /url: "#"
                - img [ref=e381]
              - link "facebook" [ref=e384] [cursor=pointer]:
                - /url: "#"
                - img [ref=e385]
          - generic [ref=e387]:
            - heading "Quick Links" [level=3] [ref=e388]
            - list [ref=e389]:
              - listitem [ref=e390]:
                - link "Home" [ref=e391] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e392]:
                - link "Scooters" [ref=e393] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e394]:
                - link "About" [ref=e395] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e396]:
                - link "Contact" [ref=e397] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e398]:
                - link "Privacy Policy" [ref=e399] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e400]:
                - link "Terms and Conditions" [ref=e401] [cursor=pointer]:
                  - /url: /terms
          - generic [ref=e402]:
            - heading "Services" [level=3] [ref=e403]
            - list [ref=e404]:
              - listitem [ref=e405]:
                - link "Hourly Rental" [ref=e406] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e407]:
                - link "Daily Rental" [ref=e408] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e409]:
                - link "Weekly Rental" [ref=e410] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e411]:
                - link "Monthly Rental" [ref=e412] [cursor=pointer]:
                  - /url: /bikes
          - generic [ref=e413]:
            - heading "Contact Us" [level=3] [ref=e414]
            - list [ref=e415]:
              - listitem [ref=e416]:
                - img [ref=e417]
                - generic [ref=e420]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
              - listitem [ref=e421]:
                - generic [ref=e422]:
                  - img [ref=e423]
                  - link "090148 27770" [ref=e425] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e426]:
                  - link "078931 16525" [ref=e427] [cursor=pointer]:
                    - /url: tel:917893116525
                  - generic [ref=e428]: Secondary
              - listitem [ref=e429]:
                - img [ref=e430]
                - link "info@winevbikerentals.in" [ref=e433] [cursor=pointer]:
                  - /url: mailto:info@winevbikerentals.in
              - listitem [ref=e434]:
                - img [ref=e435]
                - generic [ref=e438]:
                  - text: "Mon–Sat: 8:00 AM – 6:00 PM | Sun: 8:00 AM – 1:00 PM"
                  - generic [ref=e439]: Busy Day
        - generic [ref=e440]:
          - paragraph [ref=e441]: © 2026 Ashwin Traders. All Rights Reserved.
          - generic [ref=e442]:
            - paragraph [ref=e443]:
              - text: Made with
              - img [ref=e444]
              - text: in Hyderabad
            - generic [ref=e446] [cursor=pointer]:
              - generic [ref=e447]: Designed & Coded by
              - generic [ref=e448]:
                - text: Tekloria Solutions
                - img "Tekloria Logo" [ref=e449]
  - region "Notifications (F8)":
    - list
  - alert [ref=e450]: Our Premium Scooter Fleet | Winev Scooter Rental
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { HomePage } = require('./pages/HomePage');
  3  | 
  4  | test.describe('🔗 Navigation', () => {
  5  |   let homePage;
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     homePage = new HomePage(page);
  9  |     await homePage.goto();
  10 |   });
  11 | 
  12 |   test('TC19 - Clicking Scooters nav goes to /bikes', async ({ page }) => {
  13 |     await homePage.clickNavScooters();
  14 |     await expect(page).toHaveURL(/\/bikes/);
  15 |   });
  16 | 
  17 |   test('TC20 - Clicking About nav goes to /about', async ({ page }) => {
  18 |     await homePage.clickNavAbout();
  19 |     await expect(page).toHaveURL(/\/about/);
  20 |   });
  21 | 
  22 |   test('TC21 - Clicking Contact nav goes to /contact', async ({ page }) => {
  23 |     await homePage.clickNavContact();
  24 |     await expect(page).toHaveURL(/\/contact/);
  25 |   });
  26 | 
  27 |   test('TC22 - See All Scooters link navigates to /bikes', async ({ page }) => {
  28 |     await homePage.clickSeeAllScooters();
  29 |     await expect(page).toHaveURL(/\/bikes/);
  30 |   });
  31 | 
  32 |   test('TC23 - Logo click returns to home', async ({ page }) => {
  33 |     await homePage.clickNavScooters();
  34 |     await expect(page).toHaveURL(/\/bikes/);
> 35 |     await homePage.logo.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  36 |     await expect(page).toHaveURL(new RegExp('^https://winev-bike-rentals.vercel.app/?$'));
  37 |   });
  38 | 
  39 |   test('TC24 - Footer Privacy Policy link navigates to /privacy', async ({ page }) => {
  40 |     await homePage.footerPrivacyLink.click();
  41 |     await expect(page).toHaveURL(/\/privacy/);
  42 |   });
  43 | 
  44 |   test('TC25 - Footer Terms link navigates to /terms', async ({ page }) => {
  45 |     await homePage.footerTermsLink.click();
  46 |     await expect(page).toHaveURL(/\/terms/);
  47 |   });
  48 | 
  49 |   test('TC26 - See All FAQs link navigates to /faq', async ({ page }) => {
  50 |     await homePage.seeAllFaqsLink.click();
  51 |     await expect(page).toHaveURL(/\/faq/);
  52 |   });
  53 | 
  54 |   test('TC27 - Book a Ride opens WhatsApp link', async () => {
  55 |     const href = await homePage.bookARideBtn.getAttribute('href');
  56 |     expect(href).toContain('wa.me');
  57 |   });
  58 | 
  59 |   test('TC28 - Book Now hero button links to WhatsApp or booking', async () => {
  60 |     const href = await homePage.heroBookNowBtn.getAttribute('href');
  61 |     expect(href).toBeTruthy();
  62 |   });
  63 | });
  64 | 
```