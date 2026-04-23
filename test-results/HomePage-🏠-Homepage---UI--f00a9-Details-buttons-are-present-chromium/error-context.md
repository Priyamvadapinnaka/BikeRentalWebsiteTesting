# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.js >> 🏠 Homepage - UI & Content >> TC11 - View Details buttons are present
- Location: tests\HomePage.spec.js:64:3

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 1
Received:    0
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e13]: Initialising
  - generic [ref=e14]:
    - banner [ref=e15]:
      - generic [ref=e16]:
        - link "Winev Logo" [ref=e17] [cursor=pointer]:
          - /url: /
          - img "Winev Logo" [ref=e18]
        - navigation [ref=e19]:
          - link "Home" [ref=e20] [cursor=pointer]:
            - /url: /
          - link "Scooters" [ref=e21] [cursor=pointer]:
            - /url: /bikes
          - link "About" [ref=e22] [cursor=pointer]:
            - /url: /about
          - link "Contact" [ref=e23] [cursor=pointer]:
            - /url: /contact
        - generic [ref=e24]:
          - link "090148 27770" [ref=e25] [cursor=pointer]:
            - /url: tel:919014827770
            - img [ref=e26]
            - text: 090148 27770
          - link "Book a Ride" [ref=e28] [cursor=pointer]:
            - /url: https://wa.me/919014827770
    - main [ref=e29]:
      - main [ref=e30]:
        - generic [ref=e34]:
          - generic [ref=e35]:
            - generic [ref=e36]:
              - img [ref=e37]
              - generic [ref=e42]: Premium Mobility
            - heading "Premi" [level=1] [ref=e43]:
              - generic [ref=e44]: Premi
            - paragraph [ref=e45]:
              - text: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
              - text: Minimal deposit, GPS tracked & cleaned fleet. Book on WhatsApp instantly.
            - button "Book Now" [ref=e47] [cursor=pointer]:
              - generic [ref=e48]: Book Now
              - img
          - generic [ref=e50]:
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
            - img "Premium Winev Scooter" [ref=e51]
        - generic [ref=e54]:
          - generic [ref=e55]:
            - paragraph [ref=e56]: 100km
            - paragraph [ref=e57]: Top Range
          - generic [ref=e58]:
            - paragraph [ref=e59]: 80kmh
            - paragraph [ref=e60]: Top Speed
          - generic [ref=e61]:
            - paragraph [ref=e62]: ₹2199
            - paragraph [ref=e63]: Weekly Rent
          - generic [ref=e64]:
            - paragraph [ref=e65]: ₹2000
            - paragraph [ref=e66]: Minimal Deposit
        - generic [ref=e68]:
          - generic [ref=e69]:
            - generic [ref=e70]: The Winev Advantage
            - heading "Why Choose Winev?" [level=2] [ref=e71]
            - paragraph [ref=e72]: We don't just rent bikes; we provide a seamless, sustainable, and premium mobility experience tailored for Hyderabad.
          - generic [ref=e73]:
            - generic [ref=e76]:
              - img [ref=e78]
              - heading "Affordable EV Rentals" [level=3] [ref=e81]
              - paragraph [ref=e82]: Premium rides that fit your budget, starting as low as ₹35 per hour.
            - generic [ref=e85]:
              - img [ref=e87]
              - heading "Flexible Rental Plans" [level=3] [ref=e91]
              - paragraph [ref=e92]: From hourly errands to monthly commutes, we have a plan for every need.
            - generic [ref=e95]:
              - img [ref=e97]
              - heading "Easy Online Booking" [level=3] [ref=e100]
              - paragraph [ref=e101]: Hassle-free booking instantly via WhatsApp and smooth documentation.
            - generic [ref=e104]:
              - img [ref=e106]
              - heading "Eco-Friendly Electric Bikes" [level=3] [ref=e109]
              - paragraph [ref=e110]: Zero emissions, 100% sustainable. Join the green revolution in Hyderabad.
            - generic [ref=e113]:
              - img [ref=e115]
              - heading "Smooth and Reliable Rides" [level=3] [ref=e118]
              - paragraph [ref=e119]: Well-maintained, sanitized, and GPS-tracked fleet for your absolute safety.
        - generic [ref=e122]:
          - generic [ref=e123]:
            - heading "Our Rental Plans" [level=2] [ref=e124]
            - paragraph [ref=e126]: At Winev Bike Rentals, we provide flexible rental options so you can ride when you want and for as long as you need.
          - generic [ref=e127]:
            - generic [ref=e129]:
              - generic [ref=e130]:
                - heading "Hourly Rentals" [level=3] [ref=e131]
                - paragraph [ref=e132]: Perfect for short rides around the city.
              - generic [ref=e133]:
                - generic [ref=e134]:
                  - generic [ref=e135]: ₹35
                  - generic [ref=e136]: per hour
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - generic [ref=e139]: Minimum Booking
                    - generic [ref=e140]: 12 hours
                  - generic [ref=e141]:
                    - generic [ref=e142]: Ideal for
                    - generic [ref=e143]: Quick trips, errands & short commutes
            - generic [ref=e145]:
              - generic [ref=e146]:
                - heading "Daily Rentals" [level=3] [ref=e147]
                - paragraph [ref=e148]: Best option for full-day usage and city travel.
              - generic [ref=e149]:
                - generic [ref=e150]:
                  - generic [ref=e151]: ₹449
                  - generic [ref=e152]: per day
                - generic [ref=e153]:
                  - generic [ref=e154]:
                    - generic [ref=e155]: Hourly Rate
                    - generic [ref=e156]: ₹18.75 /hr
                  - generic [ref=e157]:
                    - generic [ref=e158]: Ideal for
                    - generic [ref=e159]: Daily commuting & city exploration
            - generic [ref=e161]:
              - generic [ref=e163]: Most Popular
              - generic [ref=e164]:
                - heading "Weekly Rentals" [level=3] [ref=e165]
                - paragraph [ref=e166]: Great for longer usage with better savings.
              - generic [ref=e167]:
                - generic [ref=e168]:
                  - generic [ref=e169]: ₹2,199
                  - generic [ref=e170]: per week
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - generic [ref=e173]: Per Day
                    - generic [ref=e174]: ₹366
                  - generic [ref=e175]:
                    - generic [ref=e176]: Per Hour
                    - generic [ref=e177]: ₹35
                  - generic [ref=e178]:
                    - generic [ref=e179]: Ideal for
                    - generic [ref=e180]: Work commute & extended usage
            - generic [ref=e182]:
              - generic [ref=e183]:
                - heading "Monthly Rentals" [level=3] [ref=e184]
                - paragraph [ref=e185]: Most economical option for regular riders.
              - generic [ref=e186]:
                - generic [ref=e187]:
                  - generic [ref=e188]: ₹8,799
                  - generic [ref=e189]: per month
                - generic [ref=e190]:
                  - generic [ref=e191]:
                    - generic [ref=e192]: Weekly Equivalent
                    - generic [ref=e193]: ₹2,199
                  - generic [ref=e194]:
                    - generic [ref=e195]: Ideal for
                    - generic [ref=e196]: Daily commuters & maximum savings
        - generic [ref=e200]:
          - generic [ref=e201]:
            - heading "Our Featured Scooters" [level=2] [ref=e202]
            - paragraph [ref=e204]: Explore our top-of-the-line electric scooters meticulously maintained for every city commute.
          - generic [ref=e205]:
            - generic [ref=e206]:
              - img "VIDA VX2 Plus" [ref=e209]
              - generic [ref=e210]:
                - generic [ref=e211]:
                  - generic [ref=e212]: VIDA VX2 Plus
                  - generic [ref=e213]: Available
                - generic [ref=e214]:
                  - generic [ref=e215]:
                    - img [ref=e216]
                    - generic [ref=e218]: 100 km
                  - generic [ref=e219]:
                    - img [ref=e220]
                    - generic [ref=e223]: 80 km/h
              - generic [ref=e224]:
                - generic [ref=e225]: ₹35/hr
                - button "View Details" [ref=e226] [cursor=pointer]
            - generic [ref=e227]:
              - img "VIDA VX2 Plus" [ref=e230]
              - generic [ref=e231]:
                - generic [ref=e232]:
                  - generic [ref=e233]: VIDA VX2 Plus
                  - generic [ref=e234]: Available
                - generic [ref=e235]:
                  - generic [ref=e236]:
                    - img [ref=e237]
                    - generic [ref=e239]: 100 km
                  - generic [ref=e240]:
                    - img [ref=e241]
                    - generic [ref=e244]: 80 km/h
              - generic [ref=e245]:
                - generic [ref=e246]: ₹35/hr
                - button "View Details" [ref=e247] [cursor=pointer]
            - generic [ref=e248]:
              - img "VIDA VX2 Plus" [ref=e251]
              - generic [ref=e252]:
                - generic [ref=e253]:
                  - generic [ref=e254]: VIDA VX2 Plus
                  - generic [ref=e255]: Available
                - generic [ref=e256]:
                  - generic [ref=e257]:
                    - img [ref=e258]
                    - generic [ref=e260]: 100 km
                  - generic [ref=e261]:
                    - img [ref=e262]
                    - generic [ref=e265]: 80 km/h
              - generic [ref=e266]:
                - generic [ref=e267]: ₹35/hr
                - button "View Details" [ref=e268] [cursor=pointer]
            - generic [ref=e269]:
              - img "VIDA VX2 Plus" [ref=e272]
              - generic [ref=e273]:
                - generic [ref=e274]:
                  - generic [ref=e275]: VIDA VX2 Plus
                  - generic [ref=e276]: Available
                - generic [ref=e277]:
                  - generic [ref=e278]:
                    - img [ref=e279]
                    - generic [ref=e281]: 100 km
                  - generic [ref=e282]:
                    - img [ref=e283]
                    - generic [ref=e286]: 80 km/h
              - generic [ref=e287]:
                - generic [ref=e288]: ₹35/hr
                - button "View Details" [ref=e289] [cursor=pointer]
            - generic [ref=e290]:
              - img "VIDA VX2 Plus" [ref=e293]
              - generic [ref=e294]:
                - generic [ref=e295]:
                  - generic [ref=e296]: VIDA VX2 Plus
                  - generic [ref=e297]: Available
                - generic [ref=e298]:
                  - generic [ref=e299]:
                    - img [ref=e300]
                    - generic [ref=e302]: 100 km
                  - generic [ref=e303]:
                    - img [ref=e304]
                    - generic [ref=e307]: 80 km/h
              - generic [ref=e308]:
                - generic [ref=e309]: ₹35/hr
                - button "View Details" [ref=e310] [cursor=pointer]
          - link "See All Scooters" [ref=e312] [cursor=pointer]:
            - /url: /bikes
            - text: See All Scooters
            - img
        - generic [ref=e314]:
          - generic [ref=e315]:
            - heading "Get Rolling in 3 Simple Steps" [level=2] [ref=e316]
            - paragraph [ref=e317]: Renting an electric scooter has never been easier.
          - generic [ref=e318]:
            - generic [ref=e319]:
              - generic [ref=e321]: "1"
              - heading "Choose Your Bike" [level=3] [ref=e322]
              - paragraph [ref=e323]: Browse our fleet and pick the electric bike that suits your style and needs.
            - generic [ref=e324]:
              - generic [ref=e326]: "2"
              - heading "Book via WhatsApp" [level=3] [ref=e327]
              - paragraph [ref=e328]: Send a message to 090148 27770 to confirm your booking instantly.
            - generic [ref=e329]:
              - generic [ref=e331]: "3"
              - heading "Pick Up & Ride" [level=3] [ref=e332]
              - paragraph [ref=e333]: Visit our location, pick up your sanitized bike, and start your journey.
        - generic [ref=e335]:
          - generic [ref=e336]:
            - heading "Required Documents" [level=2] [ref=e337]
            - paragraph [ref=e338]: Please bring the following original documents for a quick and easy pickup.
          - generic [ref=e339]:
            - generic [ref=e340]:
              - img [ref=e342]
              - heading "License & ID" [level=3] [ref=e346]
              - paragraph [ref=e347]: Valid Driving License and Aadhaar Card or PAN Card (Original).
            - generic [ref=e348]:
              - img [ref=e350]
              - heading "Address Proof" [level=3] [ref=e352]
              - paragraph [ref=e353]: Proof of local address (Electricity bill, rental agreement, or similar).
            - generic [ref=e354]:
              - img [ref=e356]
              - heading "Student ID (Optional)" [level=3] [ref=e359]
              - paragraph [ref=e360]: College ID for students to unlock exclusive discount rates.
        - generic [ref=e362]:
          - generic [ref=e363]:
            - generic [ref=e364]:
              - img [ref=e366]
              - generic [ref=e371]: 4.9/5
              - text: Google Rating
            - heading "What Our Riders Say" [level=2] [ref=e372]
          - generic [ref=e373]:
            - generic [ref=e375]:
              - generic [ref=e376]:
                - img "Mothilal Dharavath" [ref=e378]
                - generic [ref=e379]:
                  - paragraph [ref=e380]: Mothilal Dharavath
                  - paragraph [ref=e381]: Verified Rider
              - generic [ref=e382]:
                - img [ref=e383]
                - img [ref=e385]
                - img [ref=e387]
                - img [ref=e389]
                - img [ref=e391]
              - paragraph [ref=e393]: "\"The best service in Hyderabad. Really good response and great communication with customers. Highly recommended! ❤️\""
            - generic [ref=e395]:
              - generic [ref=e396]:
                - generic [ref=e398]: P
                - generic [ref=e399]:
                  - paragraph [ref=e400]: Pavanchowdary
                  - paragraph [ref=e401]: Daily Commuter
              - generic [ref=e402]:
                - img [ref=e403]
                - img [ref=e405]
                - img [ref=e407]
                - img [ref=e409]
                - img [ref=e411]
              - paragraph [ref=e413]: "\"Smooth ride, low cost, best EV rental experience in the city. Truly value for money. 👍\""
            - generic [ref=e415]:
              - generic [ref=e416]:
                - generic [ref=e418]: PR
                - generic [ref=e419]:
                  - paragraph [ref=e420]: PASUNURI RAMU
                  - paragraph [ref=e421]: Frequent User
              - generic [ref=e422]:
                - img [ref=e423]
                - img [ref=e425]
                - img [ref=e427]
                - img [ref=e429]
                - img [ref=e431]
              - paragraph [ref=e433]: "\"My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service.\""
            - generic [ref=e435]:
              - generic [ref=e436]:
                - img "Lala" [ref=e438]
                - generic [ref=e439]:
                  - paragraph [ref=e440]: Lala
                  - paragraph [ref=e441]: Verified Rider
              - generic [ref=e442]:
                - img [ref=e443]
                - img [ref=e445]
                - img [ref=e447]
                - img [ref=e449]
                - img [ref=e451]
              - paragraph [ref=e453]: "\"Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike.\""
            - generic [ref=e455]:
              - generic [ref=e456]:
                - generic [ref=e458]: SP
                - generic [ref=e459]:
                  - paragraph [ref=e460]: Santosh P
                  - paragraph [ref=e461]: Local Guide
              - generic [ref=e462]:
                - img [ref=e463]
                - img [ref=e465]
                - img [ref=e467]
                - img [ref=e469]
                - img [ref=e471]
              - paragraph [ref=e473]: "\"Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable.\""
            - generic [ref=e475]:
              - generic [ref=e476]:
                - generic [ref=e478]: DA
                - generic [ref=e479]:
                  - paragraph [ref=e480]: Dharavath Anil
                  - paragraph [ref=e481]: Verified Rider
              - generic [ref=e482]:
                - img [ref=e483]
                - img [ref=e485]
                - img [ref=e487]
                - img [ref=e489]
                - img [ref=e491]
              - paragraph [ref=e493]: "\"The best and most friendly service in Hyderabad. The staff is very cooperative and helpful throughout the process.\""
          - link "Read all reviews on Google" [ref=e495] [cursor=pointer]:
            - /url: https://www.google.com/maps/place/Winev+Bike+Rental(Ashwin+traders)/@17.3472448,78.5251052,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99005b8ca1e7:0xf01abdfa866df6b2!8m2!3d17.3472448!4d78.5251052!16s%2Fg%2F11yrln8392
            - generic [ref=e496]: Read all reviews on Google
            - img
        - generic [ref=e498]:
          - generic [ref=e499]:
            - heading "Common Questions" [level=2] [ref=e500]
            - paragraph [ref=e501]: Have a question? We've got answers.
            - link "See All FAQs" [ref=e502] [cursor=pointer]:
              - /url: /faq
          - generic [ref=e504]:
            - heading "What documents are required?" [level=3] [ref=e506]:
              - button "What documents are required?" [ref=e507] [cursor=pointer]:
                - text: What documents are required?
                - img [ref=e508]
            - heading "Is there a security deposit?" [level=3] [ref=e511]:
              - button "Is there a security deposit?" [ref=e512] [cursor=pointer]:
                - text: Is there a security deposit?
                - img [ref=e513]
            - heading "What is the charging speed?" [level=3] [ref=e516]:
              - button "What is the charging speed?" [ref=e517] [cursor=pointer]:
                - text: What is the charging speed?
                - img [ref=e518]
            - heading "Do you offer weekly rates?" [level=3] [ref=e521]:
              - button "Do you offer weekly rates?" [ref=e522] [cursor=pointer]:
                - text: Do you offer weekly rates?
                - img [ref=e523]
        - generic [ref=e527]:
          - generic [ref=e528]:
            - img [ref=e530]
            - heading "Start Your Electric Adventure" [level=2] [ref=e535]
            - paragraph [ref=e536]: Join thousands of happy riders in Hyderabad. Experience the future of eco-friendly urban travel with Winev.
            - button "Enquire Now & Book" [ref=e538] [cursor=pointer]
          - generic:
            - generic:
              - img "Winev Electric Bike"
    - contentinfo [ref=e539]:
      - generic [ref=e540]:
        - generic [ref=e541]:
          - generic [ref=e542]:
            - link "Winev Logo" [ref=e543] [cursor=pointer]:
              - /url: /
              - img "Winev Logo" [ref=e544]
            - paragraph [ref=e545]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
            - generic [ref=e546]:
              - link "instagram" [ref=e547] [cursor=pointer]:
                - /url: https://www.instagram.com/winevbike
                - img [ref=e548]
              - link "youtube" [ref=e551] [cursor=pointer]:
                - /url: "#"
                - img [ref=e552]
              - link "facebook" [ref=e555] [cursor=pointer]:
                - /url: "#"
                - img [ref=e556]
          - generic [ref=e558]:
            - heading "Quick Links" [level=3] [ref=e559]
            - list [ref=e560]:
              - listitem [ref=e561]:
                - link "Home" [ref=e562] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e563]:
                - link "Scooters" [ref=e564] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e565]:
                - link "About" [ref=e566] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e567]:
                - link "Contact" [ref=e568] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e569]:
                - link "Privacy Policy" [ref=e570] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e571]:
                - link "Terms and Conditions" [ref=e572] [cursor=pointer]:
                  - /url: /terms
          - generic [ref=e573]:
            - heading "Services" [level=3] [ref=e574]
            - list [ref=e575]:
              - listitem [ref=e576]:
                - link "Hourly Rental" [ref=e577] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e578]:
                - link "Daily Rental" [ref=e579] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e580]:
                - link "Weekly Rental" [ref=e581] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e582]:
                - link "Monthly Rental" [ref=e583] [cursor=pointer]:
                  - /url: /bikes
          - generic [ref=e584]:
            - heading "Contact Us" [level=3] [ref=e585]
            - list [ref=e586]:
              - listitem [ref=e587]:
                - img [ref=e588]
                - generic [ref=e591]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
              - listitem [ref=e592]:
                - generic [ref=e593]:
                  - img [ref=e594]
                  - link "090148 27770" [ref=e596] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e597]:
                  - link "078931 16525" [ref=e598] [cursor=pointer]:
                    - /url: tel:917893116525
                  - generic [ref=e599]: Secondary
              - listitem [ref=e600]:
                - img [ref=e601]
                - link "info@winevbikerentals.in" [ref=e604] [cursor=pointer]:
                  - /url: mailto:info@winevbikerentals.in
              - listitem [ref=e605]:
                - img [ref=e606]
                - generic [ref=e609]:
                  - text: "Mon–Sat: 8:00 AM – 6:00 PM | Sun: 8:00 AM – 1:00 PM"
                  - generic [ref=e610]: Busy Day
        - generic [ref=e611]:
          - paragraph [ref=e612]: © 2026 Ashwin Traders. All Rights Reserved.
          - generic [ref=e613]:
            - paragraph [ref=e614]:
              - text: Made with
              - img [ref=e615]
              - text: in Hyderabad
            - generic [ref=e617] [cursor=pointer]:
              - generic [ref=e618]: Designed & Coded by
              - generic [ref=e619]:
                - text: Tekloria Solutions
                - img "Tekloria Logo" [ref=e620]
  - region "Notifications (F8)":
    - list
  - alert [ref=e621]
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
  30 |     await expect(homePage.bookARideBtn).toBeVisible();
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
> 66 |     expect(count).toBeGreaterThanOrEqual(1);
     |                   ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
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