# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.js >> 🏠 Homepage - UI & Content >> TC04 - Book a Ride button is visible in navbar
- Location: tests\HomePage.spec.js:29:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('a').filter({ hasText: 'Book a Ride' }).first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a').filter({ hasText: 'Book a Ride' }).first()
    8 × locator resolved to <a target="_blank" rel="noopener noreferrer" href="https://wa.me/919014827770" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[11px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-7 px-2.…>Book a Ride</a>
      - unexpected value "hidden"

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
            - generic [ref=e17]:
              - img [ref=e18]
              - generic [ref=e23]: Premium Mobility
            - heading "Premium EV Scooter Rentals" [level=1] [ref=e24]:
              - generic [ref=e25]: Premium EV Scooter Rentals
            - paragraph [ref=e26]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr. Minimal deposit, GPS tracked & cleaned fleet. Book on WhatsApp instantly.
            - button "Book Now" [ref=e28] [cursor=pointer]:
              - generic [ref=e29]: Book Now
              - img
          - generic [ref=e31]:
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
            - img "Premium Winev Scooter" [ref=e32]
        - generic [ref=e35]:
          - generic [ref=e36]:
            - paragraph [ref=e37]: 100km
            - paragraph [ref=e38]: Top Range
          - generic [ref=e39]:
            - paragraph [ref=e40]: 80kmh
            - paragraph [ref=e41]: Top Speed
          - generic [ref=e42]:
            - paragraph [ref=e43]: ₹2199
            - paragraph [ref=e44]: Weekly Rent
          - generic [ref=e45]:
            - paragraph [ref=e46]: ₹2000
            - paragraph [ref=e47]: Minimal Deposit
        - generic [ref=e49]:
          - generic [ref=e50]:
            - generic [ref=e51]: The Winev Advantage
            - heading "Why Choose Winev?" [level=2] [ref=e52]
            - paragraph [ref=e53]: We don't just rent bikes; we provide a seamless, sustainable, and premium mobility experience tailored for Hyderabad.
          - generic [ref=e54]:
            - generic [ref=e57]:
              - img [ref=e59]
              - heading "Affordable EV Rentals" [level=3] [ref=e62]
              - paragraph [ref=e63]: Premium rides that fit your budget, starting as low as ₹35 per hour.
            - generic [ref=e66]:
              - img [ref=e68]
              - heading "Flexible Rental Plans" [level=3] [ref=e72]
              - paragraph [ref=e73]: From hourly errands to monthly commutes, we have a plan for every need.
            - generic [ref=e76]:
              - img [ref=e78]
              - heading "Easy Online Booking" [level=3] [ref=e81]
              - paragraph [ref=e82]: Hassle-free booking instantly via WhatsApp and smooth documentation.
            - generic [ref=e85]:
              - img [ref=e87]
              - heading "Eco-Friendly Electric Bikes" [level=3] [ref=e90]
              - paragraph [ref=e91]: Zero emissions, 100% sustainable. Join the green revolution in Hyderabad.
            - generic [ref=e94]:
              - img [ref=e96]
              - heading "Smooth and Reliable Rides" [level=3] [ref=e99]
              - paragraph [ref=e100]: Well-maintained, sanitized, and GPS-tracked fleet for your absolute safety.
        - generic [ref=e103]:
          - generic [ref=e104]:
            - heading "Our Rental Plans" [level=2] [ref=e105]
            - paragraph [ref=e107]: At Winev Bike Rentals, we provide flexible rental options so you can ride when you want and for as long as you need.
          - generic [ref=e108]:
            - generic [ref=e110]:
              - generic [ref=e111]:
                - heading "Hourly Rentals" [level=3] [ref=e112]
                - paragraph [ref=e113]: Perfect for short rides around the city.
              - generic [ref=e114]:
                - generic [ref=e115]:
                  - generic [ref=e116]: ₹35
                  - generic [ref=e117]: per hour
                - generic [ref=e118]:
                  - generic [ref=e119]:
                    - generic [ref=e120]: Minimum Booking
                    - generic [ref=e121]: 12 hours
                  - generic [ref=e122]:
                    - generic [ref=e123]: Ideal for
                    - generic [ref=e124]: Quick trips, errands & short commutes
            - generic [ref=e126]:
              - generic [ref=e127]:
                - heading "Daily Rentals" [level=3] [ref=e128]
                - paragraph [ref=e129]: Best option for full-day usage and city travel.
              - generic [ref=e130]:
                - generic [ref=e131]:
                  - generic [ref=e132]: ₹449
                  - generic [ref=e133]: per day
                - generic [ref=e134]:
                  - generic [ref=e135]:
                    - generic [ref=e136]: Hourly Rate
                    - generic [ref=e137]: ₹18.75 /hr
                  - generic [ref=e138]:
                    - generic [ref=e139]: Ideal for
                    - generic [ref=e140]: Daily commuting & city exploration
            - generic [ref=e142]:
              - generic [ref=e144]: Most Popular
              - generic [ref=e145]:
                - heading "Weekly Rentals" [level=3] [ref=e146]
                - paragraph [ref=e147]: Great for longer usage with better savings.
              - generic [ref=e148]:
                - generic [ref=e149]:
                  - generic [ref=e150]: ₹2,199
                  - generic [ref=e151]: per week
                - generic [ref=e152]:
                  - generic [ref=e153]:
                    - generic [ref=e154]: Per Day
                    - generic [ref=e155]: ₹366
                  - generic [ref=e156]:
                    - generic [ref=e157]: Per Hour
                    - generic [ref=e158]: ₹35
                  - generic [ref=e159]:
                    - generic [ref=e160]: Ideal for
                    - generic [ref=e161]: Work commute & extended usage
            - generic [ref=e163]:
              - generic [ref=e164]:
                - heading "Monthly Rentals" [level=3] [ref=e165]
                - paragraph [ref=e166]: Most economical option for regular riders.
              - generic [ref=e167]:
                - generic [ref=e168]:
                  - generic [ref=e169]: ₹8,799
                  - generic [ref=e170]: per month
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - generic [ref=e173]: Weekly Equivalent
                    - generic [ref=e174]: ₹2,199
                  - generic [ref=e175]:
                    - generic [ref=e176]: Ideal for
                    - generic [ref=e177]: Daily commuters & maximum savings
        - generic [ref=e181]:
          - generic [ref=e182]:
            - heading "Our Featured Scooters" [level=2] [ref=e183]
            - paragraph [ref=e185]: Explore our top-of-the-line electric scooters meticulously maintained for every city commute.
          - generic [ref=e186]:
            - generic [ref=e187]:
              - img "VIDA VX2 Plus" [ref=e190]
              - generic [ref=e191]:
                - generic [ref=e192]:
                  - generic [ref=e193]: VIDA VX2 Plus
                  - generic [ref=e194]: Available
                - generic [ref=e195]:
                  - generic [ref=e196]:
                    - img [ref=e197]
                    - generic [ref=e199]: 100 km
                  - generic [ref=e200]:
                    - img [ref=e201]
                    - generic [ref=e204]: 80 km/h
              - generic [ref=e205]:
                - generic [ref=e206]: ₹35/hr
                - button "View Details" [ref=e207] [cursor=pointer]
            - generic [ref=e208]:
              - img "VIDA VX2 Plus" [ref=e211]
              - generic [ref=e212]:
                - generic [ref=e213]:
                  - generic [ref=e214]: VIDA VX2 Plus
                  - generic [ref=e215]: Available
                - generic [ref=e216]:
                  - generic [ref=e217]:
                    - img [ref=e218]
                    - generic [ref=e220]: 100 km
                  - generic [ref=e221]:
                    - img [ref=e222]
                    - generic [ref=e225]: 80 km/h
              - generic [ref=e226]:
                - generic [ref=e227]: ₹35/hr
                - button "View Details" [ref=e228] [cursor=pointer]
            - generic [ref=e229]:
              - img "VIDA VX2 Plus" [ref=e232]
              - generic [ref=e233]:
                - generic [ref=e234]:
                  - generic [ref=e235]: VIDA VX2 Plus
                  - generic [ref=e236]: Available
                - generic [ref=e237]:
                  - generic [ref=e238]:
                    - img [ref=e239]
                    - generic [ref=e241]: 100 km
                  - generic [ref=e242]:
                    - img [ref=e243]
                    - generic [ref=e246]: 80 km/h
              - generic [ref=e247]:
                - generic [ref=e248]: ₹35/hr
                - button "View Details" [ref=e249] [cursor=pointer]
            - generic [ref=e250]:
              - img "VIDA VX2 Plus" [ref=e253]
              - generic [ref=e254]:
                - generic [ref=e255]:
                  - generic [ref=e256]: VIDA VX2 Plus
                  - generic [ref=e257]: Available
                - generic [ref=e258]:
                  - generic [ref=e259]:
                    - img [ref=e260]
                    - generic [ref=e262]: 100 km
                  - generic [ref=e263]:
                    - img [ref=e264]
                    - generic [ref=e267]: 80 km/h
              - generic [ref=e268]:
                - generic [ref=e269]: ₹35/hr
                - button "View Details" [ref=e270] [cursor=pointer]
            - generic [ref=e271]:
              - img "VIDA VX2 Plus" [ref=e274]
              - generic [ref=e275]:
                - generic [ref=e276]:
                  - generic [ref=e277]: VIDA VX2 Plus
                  - generic [ref=e278]: Available
                - generic [ref=e279]:
                  - generic [ref=e280]:
                    - img [ref=e281]
                    - generic [ref=e283]: 100 km
                  - generic [ref=e284]:
                    - img [ref=e285]
                    - generic [ref=e288]: 80 km/h
              - generic [ref=e289]:
                - generic [ref=e290]: ₹35/hr
                - button "View Details" [ref=e291] [cursor=pointer]
          - link "See All Scooters" [ref=e293] [cursor=pointer]:
            - /url: /bikes
            - text: See All Scooters
            - img
        - generic [ref=e295]:
          - generic [ref=e296]:
            - heading "Get Rolling in 3 Simple Steps" [level=2] [ref=e297]
            - paragraph [ref=e298]: Renting an electric scooter has never been easier.
          - generic [ref=e299]:
            - generic [ref=e300]:
              - generic [ref=e302]: "1"
              - heading "Choose Your Bike" [level=3] [ref=e303]
              - paragraph [ref=e304]: Browse our fleet and pick the electric bike that suits your style and needs.
            - generic [ref=e305]:
              - generic [ref=e307]: "2"
              - heading "Book via WhatsApp" [level=3] [ref=e308]
              - paragraph [ref=e309]: Send a message to 090148 27770 to confirm your booking instantly.
            - generic [ref=e310]:
              - generic [ref=e312]: "3"
              - heading "Pick Up & Ride" [level=3] [ref=e313]
              - paragraph [ref=e314]: Visit our location, pick up your sanitized bike, and start your journey.
        - generic [ref=e316]:
          - generic [ref=e317]:
            - heading "Required Documents" [level=2] [ref=e318]
            - paragraph [ref=e319]: Please bring the following original documents for a quick and easy pickup.
          - generic [ref=e320]:
            - generic [ref=e321]:
              - img [ref=e323]
              - heading "License & ID" [level=3] [ref=e327]
              - paragraph [ref=e328]: Valid Driving License and Aadhaar Card or PAN Card (Original).
            - generic [ref=e329]:
              - img [ref=e331]
              - heading "Address Proof" [level=3] [ref=e333]
              - paragraph [ref=e334]: Proof of local address (Electricity bill, rental agreement, or similar).
            - generic [ref=e335]:
              - img [ref=e337]
              - heading "Student ID (Optional)" [level=3] [ref=e340]
              - paragraph [ref=e341]: College ID for students to unlock exclusive discount rates.
        - generic [ref=e343]:
          - generic [ref=e344]:
            - generic [ref=e345]:
              - img [ref=e347]
              - generic [ref=e352]: 4.9/5
              - text: Google Rating
            - heading "What Our Riders Say" [level=2] [ref=e353]
          - generic [ref=e354]:
            - generic [ref=e356]:
              - generic [ref=e357]:
                - img "Mothilal Dharavath" [ref=e359]
                - generic [ref=e360]:
                  - paragraph [ref=e361]: Mothilal Dharavath
                  - paragraph [ref=e362]: Verified Rider
              - generic [ref=e363]:
                - img [ref=e364]
                - img [ref=e366]
                - img [ref=e368]
                - img [ref=e370]
                - img [ref=e372]
              - paragraph [ref=e374]: "\"The best service in Hyderabad. Really good response and great communication with customers. Highly recommended! ❤️\""
            - generic [ref=e376]:
              - generic [ref=e377]:
                - img "Pavanchowdary" [ref=e379]
                - generic [ref=e380]:
                  - paragraph [ref=e381]: Pavanchowdary
                  - paragraph [ref=e382]: Daily Commuter
              - generic [ref=e383]:
                - img [ref=e384]
                - img [ref=e386]
                - img [ref=e388]
                - img [ref=e390]
                - img [ref=e392]
              - paragraph [ref=e394]: "\"Smooth ride, low cost, best EV rental experience in the city. Truly value for money. 👍\""
            - generic [ref=e396]:
              - generic [ref=e397]:
                - img "PASUNURI RAMU" [ref=e399]
                - generic [ref=e400]:
                  - paragraph [ref=e401]: PASUNURI RAMU
                  - paragraph [ref=e402]: Frequent User
              - generic [ref=e403]:
                - img [ref=e404]
                - img [ref=e406]
                - img [ref=e408]
                - img [ref=e410]
                - img [ref=e412]
              - paragraph [ref=e414]: "\"My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service.\""
            - generic [ref=e416]:
              - generic [ref=e417]:
                - img "Lala" [ref=e419]
                - generic [ref=e420]:
                  - paragraph [ref=e421]: Lala
                  - paragraph [ref=e422]: Verified Rider
              - generic [ref=e423]:
                - img [ref=e424]
                - img [ref=e426]
                - img [ref=e428]
                - img [ref=e430]
                - img [ref=e432]
              - paragraph [ref=e434]: "\"Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike.\""
            - generic [ref=e436]:
              - generic [ref=e437]:
                - img "Santosh P" [ref=e439]
                - generic [ref=e440]:
                  - paragraph [ref=e441]: Santosh P
                  - paragraph [ref=e442]: Local Guide
              - generic [ref=e443]:
                - img [ref=e444]
                - img [ref=e446]
                - img [ref=e448]
                - img [ref=e450]
                - img [ref=e452]
              - paragraph [ref=e454]: "\"Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable.\""
            - generic [ref=e456]:
              - generic [ref=e457]:
                - img "Dharavath Anil" [ref=e459]
                - generic [ref=e460]:
                  - paragraph [ref=e461]: Dharavath Anil
                  - paragraph [ref=e462]: Verified Rider
              - generic [ref=e463]:
                - img [ref=e464]
                - img [ref=e466]
                - img [ref=e468]
                - img [ref=e470]
                - img [ref=e472]
              - paragraph [ref=e474]: "\"The best and most friendly service in Hyderabad. The staff is very cooperative and helpful throughout the process.\""
          - link "Read all reviews on Google" [ref=e476] [cursor=pointer]:
            - /url: https://www.google.com/maps/place/Winev+Bike+Rental(Ashwin+traders)/@17.3472448,78.5251052,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99005b8ca1e7:0xf01abdfa866df6b2!8m2!3d17.3472448!4d78.5251052!16s%2Fg%2F11yrln8392
            - generic [ref=e477]: Read all reviews on Google
            - img
        - generic [ref=e479]:
          - generic [ref=e480]:
            - heading "Common Questions" [level=2] [ref=e481]
            - paragraph [ref=e482]: Have a question? We've got answers.
            - link "See All FAQs" [ref=e483] [cursor=pointer]:
              - /url: /faq
          - generic [ref=e485]:
            - heading "What documents are required?" [level=3] [ref=e487]:
              - button "What documents are required?" [ref=e488] [cursor=pointer]:
                - text: What documents are required?
                - img [ref=e489]
            - heading "Is there a security deposit?" [level=3] [ref=e492]:
              - button "Is there a security deposit?" [ref=e493] [cursor=pointer]:
                - text: Is there a security deposit?
                - img [ref=e494]
            - heading "What is the charging speed?" [level=3] [ref=e497]:
              - button "What is the charging speed?" [ref=e498] [cursor=pointer]:
                - text: What is the charging speed?
                - img [ref=e499]
            - heading "Do you offer weekly rates?" [level=3] [ref=e502]:
              - button "Do you offer weekly rates?" [ref=e503] [cursor=pointer]:
                - text: Do you offer weekly rates?
                - img [ref=e504]
        - generic [ref=e509]:
          - img [ref=e511]
          - heading "Start Your Electric Adventure" [level=2] [ref=e516]
          - paragraph [ref=e517]: Join thousands of happy riders in Hyderabad. Experience the future of eco-friendly urban travel with Winev.
          - button "Enquire Now & Book" [ref=e519] [cursor=pointer]
    - contentinfo [ref=e520]:
      - generic [ref=e521]:
        - generic [ref=e522]:
          - generic [ref=e523]:
            - link "Winev Logo" [ref=e524] [cursor=pointer]:
              - /url: /
              - img "Winev Logo" [ref=e525]
            - paragraph [ref=e526]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
            - generic [ref=e527]:
              - link "instagram" [ref=e528] [cursor=pointer]:
                - /url: https://www.instagram.com/winevbike
                - img [ref=e529]
              - link "youtube" [ref=e532] [cursor=pointer]:
                - /url: "#"
                - img [ref=e533]
              - link "facebook" [ref=e536] [cursor=pointer]:
                - /url: "#"
                - img [ref=e537]
          - generic [ref=e539]:
            - heading "Quick Links" [level=3] [ref=e540]
            - list [ref=e541]:
              - listitem [ref=e542]:
                - link "Home" [ref=e543] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e544]:
                - link "Scooters" [ref=e545] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e546]:
                - link "About" [ref=e547] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e548]:
                - link "Contact" [ref=e549] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e550]:
                - link "Privacy Policy" [ref=e551] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e552]:
                - link "Terms and Conditions" [ref=e553] [cursor=pointer]:
                  - /url: /terms
          - generic [ref=e554]:
            - heading "Services" [level=3] [ref=e555]
            - list [ref=e556]:
              - listitem [ref=e557]:
                - link "Hourly Rental" [ref=e558] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e559]:
                - link "Daily Rental" [ref=e560] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e561]:
                - link "Weekly Rental" [ref=e562] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e563]:
                - link "Monthly Rental" [ref=e564] [cursor=pointer]:
                  - /url: /bikes
          - generic [ref=e565]:
            - heading "Contact Us" [level=3] [ref=e566]
            - list [ref=e567]:
              - listitem [ref=e568]:
                - img [ref=e569]
                - generic [ref=e572]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
              - listitem [ref=e573]:
                - generic [ref=e574]:
                  - img [ref=e575]
                  - link "090148 27770" [ref=e577] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e578]:
                  - link "078931 16525" [ref=e579] [cursor=pointer]:
                    - /url: tel:917893116525
                  - generic [ref=e580]: Secondary
              - listitem [ref=e581]:
                - img [ref=e582]
                - link "info@winevbikerentals.in" [ref=e585] [cursor=pointer]:
                  - /url: mailto:info@winevbikerentals.in
              - listitem [ref=e586]:
                - img [ref=e587]
                - generic [ref=e590]:
                  - text: "Mon–Sat: 8:00 AM – 6:00 PM | Sun: 8:00 AM – 1:00 PM"
                  - generic [ref=e591]: Busy Day
        - generic [ref=e592]:
          - paragraph [ref=e593]: © 2026 Ashwin Traders. All Rights Reserved.
          - generic [ref=e594]:
            - paragraph [ref=e595]:
              - text: Made with
              - img [ref=e596]
              - text: in Hyderabad
            - generic [ref=e598] [cursor=pointer]:
              - generic [ref=e599]: Designed & Coded by
              - generic [ref=e600]:
                - text: Tekloria Solutions
                - img "Tekloria Logo" [ref=e601]
  - region "Notifications (F8)":
    - list
  - alert [ref=e602]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { HomePage } = require('./pages/HomePage');
  3  | 
  4  | const BASE_URL = 'https://winev-bike-rentals.vercel.app';
  5  | 
  6  | test.describe('🏠 Homepage - UI & Content', () => {
  7  |   let homePage;
  8  | 
  9  |   test.beforeEach(async ({ page }) => {
  10 |     homePage = new HomePage(page);
  11 |     await homePage.goto();
  12 |   });
  13 | 
  14 |   test('TC01 - Page title is correct', async ({ page }) => {
  15 |     await expect(page).toHaveTitle(/Winev/i);
  16 |   });
  17 | 
  18 |   test('TC02 - Logo is visible in navbar', async () => {
  19 |     await expect(homePage.logo).toBeVisible();
  20 |   });
  21 | 
  22 |   test('TC03 - All nav links are present', async () => {
  23 |     await expect(homePage.navHome).toBeVisible();
  24 |     await expect(homePage.navScooters).toBeVisible();
  25 |     await expect(homePage.navAbout).toBeVisible();
  26 |     await expect(homePage.navContact).toBeVisible();
  27 |   });
  28 | 
  29 |   test('TC04 - Book a Ride button is visible in navbar', async () => {
> 30 |     await expect(homePage.bookARideBtn).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  31 |   });
  32 | 
  33 |   test('TC05 - Hero section stats are displayed correctly', async () => {
  34 |     await expect(homePage.heroStatRange).toBeVisible();
  35 |     await expect(homePage.heroStatSpeed).toBeVisible();
  36 |     await expect(homePage.heroStatWeekly).toBeVisible();
  37 |     await expect(homePage.heroStatDeposit).toBeVisible();
  38 |   });
  39 | 
  40 |   test('TC06 - Book Now button is visible in hero', async () => {
  41 |     await expect(homePage.heroBookNowBtn).toBeVisible();
  42 |   });
  43 | 
  44 |   test('TC07 - All 4 rental plan cards are shown', async ({ page }) => {
  45 |     await expect(homePage.hourlyCard).toBeVisible();
  46 |     await expect(homePage.dailyCard).toBeVisible();
  47 |     await expect(homePage.weeklyCard).toBeVisible();
  48 |     await expect(homePage.monthlyCard).toBeVisible();
  49 |   });
  50 | 
  51 |   test('TC08 - Hourly price is ₹35', async ({ page }) => {
  52 |     await expect(page.locator('text=₹35')).toBeVisible();
  53 |   });
  54 | 
  55 |   test('TC09 - Daily price is ₹449', async ({ page }) => {
  56 |     await expect(page.locator('text=₹449')).toBeVisible();
  57 |   });
  58 | 
  59 |   test('TC10 - Scooter cards are displayed (min 3)', async () => {
  60 |     const count = await homePage.scooterCards.count();
  61 |     expect(count).toBeGreaterThanOrEqual(3);
  62 |   });
  63 | 
  64 |   test('TC11 - View Details buttons are present', async () => {
  65 |     const count = await homePage.viewDetailsButtons.count();
  66 |     expect(count).toBeGreaterThanOrEqual(1);
  67 |   });
  68 | 
  69 |   test('TC12 - See All Scooters link is visible', async () => {
  70 |     await expect(homePage.seeAllScootersLink).toBeVisible();
  71 |   });
  72 | 
  73 |   test('TC13 - FAQ section is present', async () => {
  74 |     await expect(homePage.faqSection).toBeVisible();
  75 |   });
  76 | 
  77 |   test('TC14 - Footer logo is visible', async () => {
  78 |     await expect(homePage.footerLogo).toBeVisible();
  79 |   });
  80 | 
  81 |   test('TC15 - Footer email link is correct', async () => {
  82 |     await expect(homePage.footerEmail).toHaveAttribute('href', 'mailto:info@winevbikerentals.in');
  83 |   });
  84 | 
  85 |   test('TC16 - Footer phone link is correct', async () => {
  86 |     await expect(homePage.footerPhone).toHaveAttribute('href', 'tel:919014827770');
  87 |   });
  88 | 
  89 |   test('TC17 - Privacy Policy link is present in footer', async () => {
  90 |     await expect(homePage.footerPrivacyLink).toBeVisible();
  91 |   });
  92 | 
  93 |   test('TC18 - Terms and Conditions link is in footer', async () => {
  94 |     await expect(homePage.footerTermsLink).toBeVisible();
  95 |   });
  96 | });
  97 | 
```