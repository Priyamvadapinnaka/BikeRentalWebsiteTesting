# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> 🔗 Navigation >> TC28 - Book Now hero button links to WhatsApp or booking
- Location: tests\navigation.spec.js:59:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: 'Book Now' })

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
        - navigation [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /
          - link "Scooters" [ref=e9] [cursor=pointer]:
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
        - generic [ref=e22]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - img [ref=e25]
              - generic [ref=e30]: Premium Mobility
            - heading "Premium Rides for Every Journey." [level=1] [ref=e31]:
              - generic [ref=e32]: Premium Rides for Every Journey.
            - paragraph [ref=e33]:
              - text: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
              - text: Minimal deposit, GPS tracked & cleaned fleet. Book on WhatsApp instantly.
            - button "Book Now" [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: Book Now
              - img
          - generic [ref=e38]:
            - generic:
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
            - img "Premium Winev Scooter" [ref=e39]
        - generic [ref=e42]:
          - generic [ref=e43]:
            - paragraph [ref=e44]: 100km
            - paragraph [ref=e45]: Top Range
          - generic [ref=e46]:
            - paragraph [ref=e47]: 80kmh
            - paragraph [ref=e48]: Top Speed
          - generic [ref=e49]:
            - paragraph [ref=e50]: ₹2199
            - paragraph [ref=e51]: Weekly Rent
          - generic [ref=e52]:
            - paragraph [ref=e53]: ₹2000
            - paragraph [ref=e54]: Minimal Deposit
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]: The Winev Advantage
            - heading "Why Choose Winev?" [level=2] [ref=e59]
            - paragraph [ref=e60]: We don't just rent bikes; we provide a seamless, sustainable, and premium mobility experience tailored for Hyderabad.
          - generic [ref=e61]:
            - generic [ref=e64]:
              - img [ref=e66]
              - heading "Affordable EV Rentals" [level=3] [ref=e69]
              - paragraph [ref=e70]: Premium rides that fit your budget, starting as low as ₹35 per hour.
            - generic [ref=e73]:
              - img [ref=e75]
              - heading "Flexible Rental Plans" [level=3] [ref=e79]
              - paragraph [ref=e80]: From hourly errands to monthly commutes, we have a plan for every need.
            - generic [ref=e83]:
              - img [ref=e85]
              - heading "Easy Online Booking" [level=3] [ref=e88]
              - paragraph [ref=e89]: Hassle-free booking instantly via WhatsApp and smooth documentation.
            - generic [ref=e92]:
              - img [ref=e94]
              - heading "Eco-Friendly Electric Bikes" [level=3] [ref=e97]
              - paragraph [ref=e98]: Zero emissions, 100% sustainable. Join the green revolution in Hyderabad.
            - generic [ref=e101]:
              - img [ref=e103]
              - heading "Smooth and Reliable Rides" [level=3] [ref=e106]
              - paragraph [ref=e107]: Well-maintained, sanitized, and GPS-tracked fleet for your absolute safety.
        - generic [ref=e110]:
          - generic [ref=e111]:
            - heading "Our Rental Plans" [level=2] [ref=e112]
            - paragraph [ref=e114]: At Winev Bike Rentals, we provide flexible rental options so you can ride when you want and for as long as you need.
          - generic [ref=e115]:
            - generic [ref=e117]:
              - generic [ref=e118]:
                - heading "Hourly Rentals" [level=3] [ref=e119]
                - paragraph [ref=e120]: Perfect for short rides around the city.
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - generic [ref=e123]: ₹35
                  - generic [ref=e124]: per hour
                - generic [ref=e125]:
                  - generic [ref=e126]:
                    - generic [ref=e127]: Minimum Booking
                    - generic [ref=e128]: 12 hours
                  - generic [ref=e129]:
                    - generic [ref=e130]: Ideal for
                    - generic [ref=e131]: Quick trips, errands & short commutes
            - generic [ref=e133]:
              - generic [ref=e134]:
                - heading "Daily Rentals" [level=3] [ref=e135]
                - paragraph [ref=e136]: Best option for full-day usage and city travel.
              - generic [ref=e137]:
                - generic [ref=e138]:
                  - generic [ref=e139]: ₹449
                  - generic [ref=e140]: per day
                - generic [ref=e141]:
                  - generic [ref=e142]:
                    - generic [ref=e143]: Hourly Rate
                    - generic [ref=e144]: ₹18.75 /hr
                  - generic [ref=e145]:
                    - generic [ref=e146]: Ideal for
                    - generic [ref=e147]: Daily commuting & city exploration
            - generic [ref=e149]:
              - generic [ref=e151]: Most Popular
              - generic [ref=e152]:
                - heading "Weekly Rentals" [level=3] [ref=e153]
                - paragraph [ref=e154]: Great for longer usage with better savings.
              - generic [ref=e155]:
                - generic [ref=e156]:
                  - generic [ref=e157]: ₹2,199
                  - generic [ref=e158]: per week
                - generic [ref=e159]:
                  - generic [ref=e160]:
                    - generic [ref=e161]: Per Day
                    - generic [ref=e162]: ₹366
                  - generic [ref=e163]:
                    - generic [ref=e164]: Per Hour
                    - generic [ref=e165]: ₹35
                  - generic [ref=e166]:
                    - generic [ref=e167]: Ideal for
                    - generic [ref=e168]: Work commute & extended usage
            - generic [ref=e170]:
              - generic [ref=e171]:
                - heading "Monthly Rentals" [level=3] [ref=e172]
                - paragraph [ref=e173]: Most economical option for regular riders.
              - generic [ref=e174]:
                - generic [ref=e175]:
                  - generic [ref=e176]: ₹8,799
                  - generic [ref=e177]: per month
                - generic [ref=e178]:
                  - generic [ref=e179]:
                    - generic [ref=e180]: Weekly Equivalent
                    - generic [ref=e181]: ₹2,199
                  - generic [ref=e182]:
                    - generic [ref=e183]: Ideal for
                    - generic [ref=e184]: Daily commuters & maximum savings
        - generic [ref=e188]:
          - generic [ref=e189]:
            - heading "Our Featured Scooters" [level=2] [ref=e190]
            - paragraph [ref=e192]: Explore our top-of-the-line electric scooters meticulously maintained for every city commute.
          - generic [ref=e193]:
            - generic [ref=e194]:
              - img "VIDA VX2 Plus" [ref=e197]
              - generic [ref=e198]:
                - generic [ref=e199]:
                  - generic [ref=e200]: VIDA VX2 Plus
                  - generic [ref=e201]: Available
                - generic [ref=e202]:
                  - generic [ref=e203]:
                    - img [ref=e204]
                    - generic [ref=e206]: 100 km
                  - generic [ref=e207]:
                    - img [ref=e208]
                    - generic [ref=e211]: 80 km/h
              - generic [ref=e212]:
                - generic [ref=e213]: ₹35/hr
                - button "View Details" [ref=e214] [cursor=pointer]
            - generic [ref=e215]:
              - img "VIDA VX2 Plus" [ref=e218]
              - generic [ref=e219]:
                - generic [ref=e220]:
                  - generic [ref=e221]: VIDA VX2 Plus
                  - generic [ref=e222]: Available
                - generic [ref=e223]:
                  - generic [ref=e224]:
                    - img [ref=e225]
                    - generic [ref=e227]: 100 km
                  - generic [ref=e228]:
                    - img [ref=e229]
                    - generic [ref=e232]: 80 km/h
              - generic [ref=e233]:
                - generic [ref=e234]: ₹35/hr
                - button "View Details" [ref=e235] [cursor=pointer]
            - generic [ref=e236]:
              - img "VIDA VX2 Plus" [ref=e239]
              - generic [ref=e240]:
                - generic [ref=e241]:
                  - generic [ref=e242]: VIDA VX2 Plus
                  - generic [ref=e243]: Available
                - generic [ref=e244]:
                  - generic [ref=e245]:
                    - img [ref=e246]
                    - generic [ref=e248]: 100 km
                  - generic [ref=e249]:
                    - img [ref=e250]
                    - generic [ref=e253]: 80 km/h
              - generic [ref=e254]:
                - generic [ref=e255]: ₹35/hr
                - button "View Details" [ref=e256] [cursor=pointer]
            - generic [ref=e257]:
              - img "VIDA VX2 Plus" [ref=e260]
              - generic [ref=e261]:
                - generic [ref=e262]:
                  - generic [ref=e263]: VIDA VX2 Plus
                  - generic [ref=e264]: Available
                - generic [ref=e265]:
                  - generic [ref=e266]:
                    - img [ref=e267]
                    - generic [ref=e269]: 100 km
                  - generic [ref=e270]:
                    - img [ref=e271]
                    - generic [ref=e274]: 80 km/h
              - generic [ref=e275]:
                - generic [ref=e276]: ₹35/hr
                - button "View Details" [ref=e277] [cursor=pointer]
            - generic [ref=e278]:
              - img "VIDA VX2 Plus" [ref=e281]
              - generic [ref=e282]:
                - generic [ref=e283]:
                  - generic [ref=e284]: VIDA VX2 Plus
                  - generic [ref=e285]: Available
                - generic [ref=e286]:
                  - generic [ref=e287]:
                    - img [ref=e288]
                    - generic [ref=e290]: 100 km
                  - generic [ref=e291]:
                    - img [ref=e292]
                    - generic [ref=e295]: 80 km/h
              - generic [ref=e296]:
                - generic [ref=e297]: ₹35/hr
                - button "View Details" [ref=e298] [cursor=pointer]
          - link "See All Scooters" [ref=e300] [cursor=pointer]:
            - /url: /bikes
            - text: See All Scooters
            - img
        - generic [ref=e302]:
          - generic [ref=e303]:
            - heading "Get Rolling in 3 Simple Steps" [level=2] [ref=e304]
            - paragraph [ref=e305]: Renting an electric scooter has never been easier.
          - generic [ref=e306]:
            - generic [ref=e307]:
              - generic [ref=e309]: "1"
              - heading "Choose Your Bike" [level=3] [ref=e310]
              - paragraph [ref=e311]: Browse our fleet and pick the electric bike that suits your style and needs.
            - generic [ref=e312]:
              - generic [ref=e314]: "2"
              - heading "Book via WhatsApp" [level=3] [ref=e315]
              - paragraph [ref=e316]: Send a message to 090148 27770 to confirm your booking instantly.
            - generic [ref=e317]:
              - generic [ref=e319]: "3"
              - heading "Pick Up & Ride" [level=3] [ref=e320]
              - paragraph [ref=e321]: Visit our location, pick up your sanitized bike, and start your journey.
        - generic [ref=e323]:
          - generic [ref=e324]:
            - heading "Required Documents" [level=2] [ref=e325]
            - paragraph [ref=e326]: Please bring the following original documents for a quick and easy pickup.
          - generic [ref=e327]:
            - generic [ref=e328]:
              - img [ref=e330]
              - heading "License & ID" [level=3] [ref=e334]
              - paragraph [ref=e335]: Valid Driving License and Aadhaar Card or PAN Card (Original).
            - generic [ref=e336]:
              - img [ref=e338]
              - heading "Address Proof" [level=3] [ref=e340]
              - paragraph [ref=e341]: Proof of local address (Electricity bill, rental agreement, or similar).
            - generic [ref=e342]:
              - img [ref=e344]
              - heading "Student ID (Optional)" [level=3] [ref=e347]
              - paragraph [ref=e348]: College ID for students to unlock exclusive discount rates.
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]:
              - img [ref=e354]
              - generic [ref=e359]: 4.9/5
              - text: Google Rating
            - heading "What Our Riders Say" [level=2] [ref=e360]
          - generic [ref=e361]:
            - generic [ref=e363]:
              - generic [ref=e364]:
                - img "Mothilal Dharavath" [ref=e366]
                - generic [ref=e367]:
                  - paragraph [ref=e368]: Mothilal Dharavath
                  - paragraph [ref=e369]: Verified Rider
              - generic [ref=e370]:
                - img [ref=e371]
                - img [ref=e373]
                - img [ref=e375]
                - img [ref=e377]
                - img [ref=e379]
              - paragraph [ref=e381]: "\"The best service in Hyderabad. Really good response and great communication with customers. Highly recommended! ❤️\""
            - generic [ref=e383]:
              - generic [ref=e384]:
                - img "Pavanchowdary" [ref=e386]
                - generic [ref=e387]:
                  - paragraph [ref=e388]: Pavanchowdary
                  - paragraph [ref=e389]: Daily Commuter
              - generic [ref=e390]:
                - img [ref=e391]
                - img [ref=e393]
                - img [ref=e395]
                - img [ref=e397]
                - img [ref=e399]
              - paragraph [ref=e401]: "\"Smooth ride, low cost, best EV rental experience in the city. Truly value for money. 👍\""
            - generic [ref=e403]:
              - generic [ref=e404]:
                - img "PASUNURI RAMU" [ref=e406]
                - generic [ref=e407]:
                  - paragraph [ref=e408]: PASUNURI RAMU
                  - paragraph [ref=e409]: Frequent User
              - generic [ref=e410]:
                - img [ref=e411]
                - img [ref=e413]
                - img [ref=e415]
                - img [ref=e417]
                - img [ref=e419]
              - paragraph [ref=e421]: "\"My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service.\""
            - generic [ref=e423]:
              - generic [ref=e424]:
                - img "Lala" [ref=e426]
                - generic [ref=e427]:
                  - paragraph [ref=e428]: Lala
                  - paragraph [ref=e429]: Verified Rider
              - generic [ref=e430]:
                - img [ref=e431]
                - img [ref=e433]
                - img [ref=e435]
                - img [ref=e437]
                - img [ref=e439]
              - paragraph [ref=e441]: "\"Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike.\""
            - generic [ref=e443]:
              - generic [ref=e444]:
                - img "Santosh P" [ref=e446]
                - generic [ref=e447]:
                  - paragraph [ref=e448]: Santosh P
                  - paragraph [ref=e449]: Local Guide
              - generic [ref=e450]:
                - img [ref=e451]
                - img [ref=e453]
                - img [ref=e455]
                - img [ref=e457]
                - img [ref=e459]
              - paragraph [ref=e461]: "\"Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable.\""
            - generic [ref=e463]:
              - generic [ref=e464]:
                - img "Dharavath Anil" [ref=e466]
                - generic [ref=e467]:
                  - paragraph [ref=e468]: Dharavath Anil
                  - paragraph [ref=e469]: Verified Rider
              - generic [ref=e470]:
                - img [ref=e471]
                - img [ref=e473]
                - img [ref=e475]
                - img [ref=e477]
                - img [ref=e479]
              - paragraph [ref=e481]: "\"The best and most friendly service in Hyderabad. The staff is very cooperative and helpful throughout the process.\""
          - link "Read all reviews on Google" [ref=e483] [cursor=pointer]:
            - /url: https://www.google.com/maps/place/Winev+Bike+Rental(Ashwin+traders)/@17.3472448,78.5251052,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99005b8ca1e7:0xf01abdfa866df6b2!8m2!3d17.3472448!4d78.5251052!16s%2Fg%2F11yrln8392
            - generic [ref=e484]: Read all reviews on Google
            - img
        - generic [ref=e486]:
          - generic [ref=e487]:
            - heading "Common Questions" [level=2] [ref=e488]
            - paragraph [ref=e489]: Have a question? We've got answers.
            - link "See All FAQs" [ref=e490] [cursor=pointer]:
              - /url: /faq
          - generic [ref=e492]:
            - heading "What documents are required?" [level=3] [ref=e494]:
              - button "What documents are required?" [ref=e495] [cursor=pointer]:
                - text: What documents are required?
                - img [ref=e496]
            - heading "Is there a security deposit?" [level=3] [ref=e499]:
              - button "Is there a security deposit?" [ref=e500] [cursor=pointer]:
                - text: Is there a security deposit?
                - img [ref=e501]
            - heading "What is the charging speed?" [level=3] [ref=e504]:
              - button "What is the charging speed?" [ref=e505] [cursor=pointer]:
                - text: What is the charging speed?
                - img [ref=e506]
            - heading "Do you offer weekly rates?" [level=3] [ref=e509]:
              - button "Do you offer weekly rates?" [ref=e510] [cursor=pointer]:
                - text: Do you offer weekly rates?
                - img [ref=e511]
        - generic [ref=e515]:
          - generic [ref=e516]:
            - img [ref=e518]
            - heading "Start Your Electric Adventure" [level=2] [ref=e523]
            - paragraph [ref=e524]: Join thousands of happy riders in Hyderabad. Experience the future of eco-friendly urban travel with Winev.
            - button "Enquire Now & Book" [ref=e526] [cursor=pointer]
          - generic:
            - generic:
              - img "Winev Electric Bike"
    - contentinfo [ref=e527]:
      - generic [ref=e528]:
        - generic [ref=e529]:
          - generic [ref=e530]:
            - link "Winev Logo" [ref=e531] [cursor=pointer]:
              - /url: /
              - img "Winev Logo" [ref=e532]
            - paragraph [ref=e533]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
            - generic [ref=e534]:
              - link "instagram" [ref=e535] [cursor=pointer]:
                - /url: https://www.instagram.com/winevbike
                - img [ref=e536]
              - link "youtube" [ref=e539] [cursor=pointer]:
                - /url: "#"
                - img [ref=e540]
              - link "facebook" [ref=e543] [cursor=pointer]:
                - /url: "#"
                - img [ref=e544]
          - generic [ref=e546]:
            - heading "Quick Links" [level=3] [ref=e547]
            - list [ref=e548]:
              - listitem [ref=e549]:
                - link "Home" [ref=e550] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e551]:
                - link "Scooters" [ref=e552] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e553]:
                - link "About" [ref=e554] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e555]:
                - link "Contact" [ref=e556] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e557]:
                - link "Privacy Policy" [ref=e558] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e559]:
                - link "Terms and Conditions" [ref=e560] [cursor=pointer]:
                  - /url: /terms
          - generic [ref=e561]:
            - heading "Services" [level=3] [ref=e562]
            - list [ref=e563]:
              - listitem [ref=e564]:
                - link "Hourly Rental" [ref=e565] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e566]:
                - link "Daily Rental" [ref=e567] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e568]:
                - link "Weekly Rental" [ref=e569] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e570]:
                - link "Monthly Rental" [ref=e571] [cursor=pointer]:
                  - /url: /bikes
          - generic [ref=e572]:
            - heading "Contact Us" [level=3] [ref=e573]
            - list [ref=e574]:
              - listitem [ref=e575]:
                - img [ref=e576]
                - generic [ref=e579]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
              - listitem [ref=e580]:
                - generic [ref=e581]:
                  - img [ref=e582]
                  - link "090148 27770" [ref=e584] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e585]:
                  - link "078931 16525" [ref=e586] [cursor=pointer]:
                    - /url: tel:917893116525
                  - generic [ref=e587]: Secondary
              - listitem [ref=e588]:
                - img [ref=e589]
                - link "info@winevbikerentals.in" [ref=e592] [cursor=pointer]:
                  - /url: mailto:info@winevbikerentals.in
              - listitem [ref=e593]:
                - img [ref=e594]
                - generic [ref=e597]:
                  - text: "Mon–Sat: 8:00 AM – 6:00 PM | Sun: 8:00 AM – 1:00 PM"
                  - generic [ref=e598]: Busy Day
        - generic [ref=e599]:
          - paragraph [ref=e600]: © 2026 Ashwin Traders. All Rights Reserved.
          - generic [ref=e601]:
            - paragraph [ref=e602]:
              - text: Made with
              - img [ref=e603]
              - text: in Hyderabad
            - generic [ref=e605] [cursor=pointer]:
              - generic [ref=e606]: Designed & Coded by
              - generic [ref=e607]:
                - text: Tekloria Solutions
                - img "Tekloria Logo" [ref=e608]
  - region "Notifications (F8)":
    - list
  - alert [ref=e609]
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
  35 |     await homePage.logo.click();
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
> 60 |     const href = await homePage.heroBookNowBtn.getAttribute('href');
     |                                                ^ Error: locator.getAttribute: Test timeout of 30000ms exceeded.
  61 |     expect(href).toBeTruthy();
  62 |   });
  63 | });
  64 | 
```