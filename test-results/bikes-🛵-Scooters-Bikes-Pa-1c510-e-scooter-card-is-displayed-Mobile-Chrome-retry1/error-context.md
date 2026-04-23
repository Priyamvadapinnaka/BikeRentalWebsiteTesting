# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bikes.spec.js >> 🛵 Scooters / Bikes Page >> TC31 - At least one scooter card is displayed
- Location: tests\bikes.spec.js:21:3

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - link "Winev Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Winev Logo" [ref=e6]
        - button "Open menu" [ref=e8] [cursor=pointer]:
          - img
          - generic [ref=e9]: Open menu
    - main [ref=e10]:
      - main [ref=e11]:
        - generic [ref=e15]:
          - generic [ref=e16]:
            - img [ref=e17]
            - generic [ref=e22]: Premium Fleet
          - heading "Explore Our Scooter Universe" [level=1] [ref=e23]
          - paragraph [ref=e24]: Experience the next generation of urban mobility with our fleet of 15+ specialized electric scooters. Each unit is meticulously maintained, GPS-tracked, and sanitized after every trip to provide Hyderabad with the most reliable and eco-friendly ride available today.
          - generic [ref=e25]:
            - generic [ref=e26]:
              - paragraph [ref=e27]: 15+
              - paragraph [ref=e28]: Units
            - generic [ref=e30]:
              - paragraph [ref=e31]: 100km
              - paragraph [ref=e32]: Range
            - generic [ref=e34]:
              - paragraph [ref=e35]: 80kmh
              - paragraph [ref=e36]: Speed
        - generic [ref=e38]:
          - heading "Available Models" [level=2] [ref=e40]
          - generic [ref=e42]:
            - generic [ref=e43]:
              - img "VIDA VX2 Plus" [ref=e46]
              - generic [ref=e47]:
                - generic [ref=e48]:
                  - generic [ref=e49]: VIDA VX2 Plus
                  - generic [ref=e50]: Available
                - generic [ref=e51]:
                  - generic [ref=e52]:
                    - img [ref=e53]
                    - generic [ref=e55]: 100 km
                  - generic [ref=e56]:
                    - img [ref=e57]
                    - generic [ref=e60]: 80 km/h
              - generic [ref=e61]:
                - generic [ref=e62]: ₹35/hr
                - button "View Details" [ref=e63] [cursor=pointer]
            - generic [ref=e64]:
              - img "VIDA VX2 Plus" [ref=e67]
              - generic [ref=e68]:
                - generic [ref=e69]:
                  - generic [ref=e70]: VIDA VX2 Plus
                  - generic [ref=e71]: Available
                - generic [ref=e72]:
                  - generic [ref=e73]:
                    - img [ref=e74]
                    - generic [ref=e76]: 100 km
                  - generic [ref=e77]:
                    - img [ref=e78]
                    - generic [ref=e81]: 80 km/h
              - generic [ref=e82]:
                - generic [ref=e83]: ₹35/hr
                - button "View Details" [ref=e84] [cursor=pointer]
            - generic [ref=e85]:
              - img "VIDA VX2 Plus" [ref=e88]
              - generic [ref=e89]:
                - generic [ref=e90]:
                  - generic [ref=e91]: VIDA VX2 Plus
                  - generic [ref=e92]: Available
                - generic [ref=e93]:
                  - generic [ref=e94]:
                    - img [ref=e95]
                    - generic [ref=e97]: 100 km
                  - generic [ref=e98]:
                    - img [ref=e99]
                    - generic [ref=e102]: 80 km/h
              - generic [ref=e103]:
                - generic [ref=e104]: ₹35/hr
                - button "View Details" [ref=e105] [cursor=pointer]
            - generic [ref=e106]:
              - img "VIDA VX2 Plus" [ref=e109]
              - generic [ref=e110]:
                - generic [ref=e111]:
                  - generic [ref=e112]: VIDA VX2 Plus
                  - generic [ref=e113]: Available
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - img [ref=e116]
                    - generic [ref=e118]: 100 km
                  - generic [ref=e119]:
                    - img [ref=e120]
                    - generic [ref=e123]: 80 km/h
              - generic [ref=e124]:
                - generic [ref=e125]: ₹35/hr
                - button "View Details" [ref=e126] [cursor=pointer]
            - generic [ref=e127]:
              - img "VIDA VX2 Plus" [ref=e130]
              - generic [ref=e131]:
                - generic [ref=e132]:
                  - generic [ref=e133]: VIDA VX2 Plus
                  - generic [ref=e134]: Available
                - generic [ref=e135]:
                  - generic [ref=e136]:
                    - img [ref=e137]
                    - generic [ref=e139]: 100 km
                  - generic [ref=e140]:
                    - img [ref=e141]
                    - generic [ref=e144]: 80 km/h
              - generic [ref=e145]:
                - generic [ref=e146]: ₹35/hr
                - button "View Details" [ref=e147] [cursor=pointer]
            - generic [ref=e148]:
              - img "VIDA VX2 Plus" [ref=e151]
              - generic [ref=e152]:
                - generic [ref=e153]:
                  - generic [ref=e154]: VIDA VX2 Plus
                  - generic [ref=e155]: Available
                - generic [ref=e156]:
                  - generic [ref=e157]:
                    - img [ref=e158]
                    - generic [ref=e160]: 100 km
                  - generic [ref=e161]:
                    - img [ref=e162]
                    - generic [ref=e165]: 80 km/h
              - generic [ref=e166]:
                - generic [ref=e167]: ₹35/hr
                - button "View Details" [ref=e168] [cursor=pointer]
            - generic [ref=e169]:
              - img "VIDA VX2 Plus" [ref=e172]
              - generic [ref=e173]:
                - generic [ref=e174]:
                  - generic [ref=e175]: VIDA VX2 Plus
                  - generic [ref=e176]: Available
                - generic [ref=e177]:
                  - generic [ref=e178]:
                    - img [ref=e179]
                    - generic [ref=e181]: 100 km
                  - generic [ref=e182]:
                    - img [ref=e183]
                    - generic [ref=e186]: 80 km/h
              - generic [ref=e187]:
                - generic [ref=e188]: ₹35/hr
                - button "View Details" [ref=e189] [cursor=pointer]
            - generic [ref=e190]:
              - img "VIDA VX2 Plus" [ref=e193]
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: VIDA VX2 Plus
                  - generic [ref=e197]: Available
                - generic [ref=e198]:
                  - generic [ref=e199]:
                    - img [ref=e200]
                    - generic [ref=e202]: 100 km
                  - generic [ref=e203]:
                    - img [ref=e204]
                    - generic [ref=e207]: 80 km/h
              - generic [ref=e208]:
                - generic [ref=e209]: ₹35/hr
                - button "View Details" [ref=e210] [cursor=pointer]
            - generic [ref=e211]:
              - img "VIDA VX2 Plus" [ref=e214]
              - generic [ref=e215]:
                - generic [ref=e216]:
                  - generic [ref=e217]: VIDA VX2 Plus
                  - generic [ref=e218]: Available
                - generic [ref=e219]:
                  - generic [ref=e220]:
                    - img [ref=e221]
                    - generic [ref=e223]: 100 km
                  - generic [ref=e224]:
                    - img [ref=e225]
                    - generic [ref=e228]: 80 km/h
              - generic [ref=e229]:
                - generic [ref=e230]: ₹35/hr
                - button "View Details" [ref=e231] [cursor=pointer]
            - generic [ref=e232]:
              - img "VIDA VX2 Plus" [ref=e235]
              - generic [ref=e236]:
                - generic [ref=e237]:
                  - generic [ref=e238]: VIDA VX2 Plus
                  - generic [ref=e239]: Available
                - generic [ref=e240]:
                  - generic [ref=e241]:
                    - img [ref=e242]
                    - generic [ref=e244]: 100 km
                  - generic [ref=e245]:
                    - img [ref=e246]
                    - generic [ref=e249]: 80 km/h
              - generic [ref=e250]:
                - generic [ref=e251]: ₹35/hr
                - button "View Details" [ref=e252] [cursor=pointer]
            - generic [ref=e253]:
              - img "VIDA VX2 Plus" [ref=e256]
              - generic [ref=e257]:
                - generic [ref=e258]:
                  - generic [ref=e259]: VIDA VX2 Plus
                  - generic [ref=e260]: Available
                - generic [ref=e261]:
                  - generic [ref=e262]:
                    - img [ref=e263]
                    - generic [ref=e265]: 100 km
                  - generic [ref=e266]:
                    - img [ref=e267]
                    - generic [ref=e270]: 80 km/h
              - generic [ref=e271]:
                - generic [ref=e272]: ₹35/hr
                - button "View Details" [ref=e273] [cursor=pointer]
            - generic [ref=e274]:
              - img "VIDA VX2 Plus" [ref=e277]
              - generic [ref=e278]:
                - generic [ref=e279]:
                  - generic [ref=e280]: VIDA VX2 Plus
                  - generic [ref=e281]: Available
                - generic [ref=e282]:
                  - generic [ref=e283]:
                    - img [ref=e284]
                    - generic [ref=e286]: 100 km
                  - generic [ref=e287]:
                    - img [ref=e288]
                    - generic [ref=e291]: 80 km/h
              - generic [ref=e292]:
                - generic [ref=e293]: ₹35/hr
                - button "View Details" [ref=e294] [cursor=pointer]
            - generic [ref=e295]:
              - img "VIDA VX2 Plus" [ref=e298]
              - generic [ref=e299]:
                - generic [ref=e300]:
                  - generic [ref=e301]: VIDA VX2 Plus
                  - generic [ref=e302]: Available
                - generic [ref=e303]:
                  - generic [ref=e304]:
                    - img [ref=e305]
                    - generic [ref=e307]: 100 km
                  - generic [ref=e308]:
                    - img [ref=e309]
                    - generic [ref=e312]: 80 km/h
              - generic [ref=e313]:
                - generic [ref=e314]: ₹35/hr
                - button "View Details" [ref=e315] [cursor=pointer]
            - generic [ref=e316]:
              - img "VIDA VX2 Plus" [ref=e319]
              - generic [ref=e320]:
                - generic [ref=e321]:
                  - generic [ref=e322]: VIDA VX2 Plus
                  - generic [ref=e323]: Available
                - generic [ref=e324]:
                  - generic [ref=e325]:
                    - img [ref=e326]
                    - generic [ref=e328]: 100 km
                  - generic [ref=e329]:
                    - img [ref=e330]
                    - generic [ref=e333]: 80 km/h
              - generic [ref=e334]:
                - generic [ref=e335]: ₹35/hr
                - button "View Details" [ref=e336] [cursor=pointer]
            - generic [ref=e337]:
              - img "VIDA VX2 Plus" [ref=e340]
              - generic [ref=e341]:
                - generic [ref=e342]:
                  - generic [ref=e343]: VIDA VX2 Plus
                  - generic [ref=e344]: Available
                - generic [ref=e345]:
                  - generic [ref=e346]:
                    - img [ref=e347]
                    - generic [ref=e349]: 100 km
                  - generic [ref=e350]:
                    - img [ref=e351]
                    - generic [ref=e354]: 80 km/h
              - generic [ref=e355]:
                - generic [ref=e356]: ₹35/hr
                - button "View Details" [ref=e357] [cursor=pointer]
          - button "Next Page" [ref=e359] [cursor=pointer]:
            - generic [ref=e360]: Next Page
            - img
    - contentinfo [ref=e361]:
      - generic [ref=e362]:
        - generic [ref=e363]:
          - generic [ref=e364]:
            - link "Winev Logo" [ref=e365] [cursor=pointer]:
              - /url: /
              - img "Winev Logo" [ref=e366]
            - paragraph [ref=e367]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
            - generic [ref=e368]:
              - link "instagram" [ref=e369] [cursor=pointer]:
                - /url: https://www.instagram.com/winevbike
                - img [ref=e370]
              - link "youtube" [ref=e373] [cursor=pointer]:
                - /url: "#"
                - img [ref=e374]
              - link "facebook" [ref=e377] [cursor=pointer]:
                - /url: "#"
                - img [ref=e378]
          - generic [ref=e380]:
            - heading "Quick Links" [level=3] [ref=e381]
            - list [ref=e382]:
              - listitem [ref=e383]:
                - link "Home" [ref=e384] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e385]:
                - link "Scooters" [ref=e386] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e387]:
                - link "About" [ref=e388] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e389]:
                - link "Contact" [ref=e390] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e391]:
                - link "Privacy Policy" [ref=e392] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e393]:
                - link "Terms and Conditions" [ref=e394] [cursor=pointer]:
                  - /url: /terms
          - generic [ref=e395]:
            - heading "Services" [level=3] [ref=e396]
            - list [ref=e397]:
              - listitem [ref=e398]:
                - link "Hourly Rental" [ref=e399] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e400]:
                - link "Daily Rental" [ref=e401] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e402]:
                - link "Weekly Rental" [ref=e403] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e404]:
                - link "Monthly Rental" [ref=e405] [cursor=pointer]:
                  - /url: /bikes
          - generic [ref=e406]:
            - heading "Contact Us" [level=3] [ref=e407]
            - list [ref=e408]:
              - listitem [ref=e409]:
                - img [ref=e410]
                - generic [ref=e413]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
              - listitem [ref=e414]:
                - generic [ref=e415]:
                  - img [ref=e416]
                  - link "090148 27770" [ref=e418] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e419]:
                  - link "078931 16525" [ref=e420] [cursor=pointer]:
                    - /url: tel:917893116525
                  - generic [ref=e421]: Secondary
              - listitem [ref=e422]:
                - img [ref=e423]
                - link "info@winevbikerentals.in" [ref=e426] [cursor=pointer]:
                  - /url: mailto:info@winevbikerentals.in
              - listitem [ref=e427]:
                - img [ref=e428]
                - generic [ref=e431]:
                  - text: "Mon–Sat: 8:00 AM – 6:00 PM | Sun: 8:00 AM – 1:00 PM"
                  - generic [ref=e432]: Busy Day
        - generic [ref=e433]:
          - paragraph [ref=e434]: © 2026 Ashwin Traders. All Rights Reserved.
          - generic [ref=e435]:
            - paragraph [ref=e436]:
              - text: Made with
              - img [ref=e437]
              - text: in Hyderabad
            - generic [ref=e439] [cursor=pointer]:
              - generic [ref=e440]: Designed & Coded by
              - generic [ref=e441]:
                - text: Tekloria Solutions
                - img "Tekloria Logo" [ref=e442]
  - region "Notifications (F8)":
    - list
  - alert [ref=e443]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { BikesPage } = require('./pages/BikesPage');
  3  | 
  4  | test.describe('🛵 Scooters / Bikes Page', () => {
  5  |   let bikesPage;
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     bikesPage = new BikesPage(page);
  9  |     await bikesPage.goto();
  10 |   });
  11 | 
  12 |   test('TC29 - /bikes page loads successfully', async ({ page }) => {
  13 |     await expect(page).toHaveURL(/\/bikes/);
  14 |     expect(page.url()).toContain('bikes');
  15 |   });
  16 | 
  17 |   test('TC30 - Page title still contains Winev', async ({ page }) => {
  18 |     await expect(page).toHaveTitle(/Winev/i);
  19 |   });
  20 | 
  21 |   test('TC31 - At least one scooter card is displayed', async () => {
  22 |     const count = await bikesPage.viewDetailsLinks.count();
> 23 |     expect(count).toBeGreaterThan(0);
     |                   ^ Error: expect(received).toBeGreaterThan(expected)
  24 |   });
  25 | 
  26 |   test('TC32 - Available status badge is shown on scooters', async () => {
  27 |     await expect(bikesPage.availableBadges.first()).toBeVisible();
  28 |   });
  29 | 
  30 |   test('TC33 - WhatsApp booking links are present', async () => {
  31 |     const count = await bikesPage.bookViaWhatsAppLinks.count();
  32 |     expect(count).toBeGreaterThan(0);
  33 |   });
  34 | 
  35 |   test('TC34 - WhatsApp links point to correct number', async () => {
  36 |     const href = await bikesPage.bookViaWhatsAppLinks.first().getAttribute('href');
  37 |     expect(href).toContain('wa.me');
  38 |     expect(href).toContain('9014827770');
  39 |   });
  40 | 
  41 |   test('TC35 - Scooter price ₹35/hr is displayed', async ({ page }) => {
  42 |     await expect(page.locator('text=₹35').first()).toBeVisible();
  43 |   });
  44 | 
  45 |   test('TC36 - Scooter range 100km is displayed', async ({ page }) => {
  46 |     await expect(page.locator('text=100').first()).toBeVisible();
  47 |   });
  48 | });
  49 | 
```