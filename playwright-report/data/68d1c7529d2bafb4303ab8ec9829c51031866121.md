# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact.spec.js >> 📞 Contact Page >> TC38 - Phone number link is present
- Location: tests\contact.spec.js:16:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('a[href*="tel:"]').first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href*="tel:"]').first()
    8 × locator resolved to <a href="tel:919014827770" class="flex items-center gap-2 text-[11px] font-medium text-zinc-600 hover:text-zinc-900">…</a>
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
        - generic [ref=e13]:
          - heading "Contact Us" [level=1] [ref=e14]
          - paragraph [ref=e15]: Have questions or need support? We're here to help.
        - generic [ref=e18]:
          - generic [ref=e19]:
            - heading "Get in Touch" [level=2] [ref=e20]
            - paragraph [ref=e21]: Fill out the form and we'll get back to you as soon as possible.
            - generic [ref=e22]:
              - generic [ref=e23]:
                - text: Full Name
                - textbox "Full Name" [ref=e24]:
                  - /placeholder: John Doe
              - generic [ref=e25]:
                - text: Email Address
                - textbox "Email Address" [ref=e26]:
                  - /placeholder: john.doe@example.com
              - generic [ref=e27]:
                - text: Message
                - textbox "Message" [ref=e28]:
                  - /placeholder: How can we help you?
              - button "Send Message" [ref=e29] [cursor=pointer]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - heading "Our Location" [level=3] [ref=e32]
              - generic [ref=e33]:
                - generic [ref=e34]:
                  - img [ref=e35]
                  - generic [ref=e38]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
                - generic [ref=e39]:
                  - img [ref=e40]
                  - link "090148 27770" [ref=e42] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e43]:
                  - img [ref=e44]
                  - link "info@winevbikerentals.in" [ref=e47] [cursor=pointer]:
                    - /url: mailto:info@winevbikerentals.in
            - iframe [ref=e49]:
              - generic [ref=f2e3]:
                - generic:
                  - button "Keyboard shortcuts"
                - region "Map" [ref=f2e4]
                - generic [ref=f2e5]:
                  - iframe [ref=f2e21]:
                    
                  - button "Map camera controls" [ref=f2e23] [cursor=pointer]
                  - button "Show satellite imagery" [ref=f2e26] [cursor=pointer]
                  - img "Google" [ref=f2e31]
                  - generic [ref=f2e32]:
                    - button "Keyboard shortcuts" [ref=f2e38] [cursor=pointer]
                    - generic [ref=f2e43]: Map data ©2026
                    - link "Terms (opens in new tab)" [ref=f2e48] [cursor=pointer]:
                      - /url: https://www.google.com/intl/en-US_US/help/terms_maps.html
                      - text: Terms
        - generic [ref=e51]:
          - generic [ref=e52]:
            - heading "Frequently Asked Questions" [level=2] [ref=e53]
            - paragraph [ref=e54]: Quick answers to common questions about our scooter rentals.
          - generic [ref=e56]:
            - heading "What documents are required to rent a scooter?" [level=3] [ref=e58]:
              - button "What documents are required to rent a scooter?" [ref=e59] [cursor=pointer]:
                - text: What documents are required to rent a scooter?
                - img [ref=e60]
            - heading "Is there a security deposit?" [level=3] [ref=e63]:
              - button "Is there a security deposit?" [ref=e64] [cursor=pointer]:
                - text: Is there a security deposit?
                - img [ref=e65]
            - heading "What are the performance specs of the scooters?" [level=3] [ref=e68]:
              - button "What are the performance specs of the scooters?" [ref=e69] [cursor=pointer]:
                - text: What are the performance specs of the scooters?
                - img [ref=e70]
            - heading "Do you offer weekly or long-term rentals?" [level=3] [ref=e73]:
              - button "Do you offer weekly or long-term rentals?" [ref=e74] [cursor=pointer]:
                - text: Do you offer weekly or long-term rentals?
                - img [ref=e75]
            - heading "What is the booking process?" [level=3] [ref=e78]:
              - button "What is the booking process?" [ref=e79] [cursor=pointer]:
                - text: What is the booking process?
                - img [ref=e80]
    - contentinfo [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]:
          - generic [ref=e85]:
            - link "Winev Logo" [ref=e86] [cursor=pointer]:
              - /url: /
              - img "Winev Logo" [ref=e87]
            - paragraph [ref=e88]: Rent from our fleet of 15+ premium electric scooters in Hyderabad from ₹35/hr.
            - generic [ref=e89]:
              - link "instagram" [ref=e90] [cursor=pointer]:
                - /url: https://www.instagram.com/winevbike
                - img [ref=e91]
              - link "youtube" [ref=e94] [cursor=pointer]:
                - /url: "#"
                - img [ref=e95]
              - link "facebook" [ref=e98] [cursor=pointer]:
                - /url: "#"
                - img [ref=e99]
          - generic [ref=e101]:
            - heading "Quick Links" [level=3] [ref=e102]
            - list [ref=e103]:
              - listitem [ref=e104]:
                - link "Home" [ref=e105] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e106]:
                - link "Scooters" [ref=e107] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e108]:
                - link "About" [ref=e109] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e110]:
                - link "Contact" [ref=e111] [cursor=pointer]:
                  - /url: /contact
              - listitem [ref=e112]:
                - link "Privacy Policy" [ref=e113] [cursor=pointer]:
                  - /url: /privacy
              - listitem [ref=e114]:
                - link "Terms and Conditions" [ref=e115] [cursor=pointer]:
                  - /url: /terms
          - generic [ref=e116]:
            - heading "Services" [level=3] [ref=e117]
            - list [ref=e118]:
              - listitem [ref=e119]:
                - link "Hourly Rental" [ref=e120] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e121]:
                - link "Daily Rental" [ref=e122] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e123]:
                - link "Weekly Rental" [ref=e124] [cursor=pointer]:
                  - /url: /bikes
              - listitem [ref=e125]:
                - link "Monthly Rental" [ref=e126] [cursor=pointer]:
                  - /url: /bikes
          - generic [ref=e127]:
            - heading "Contact Us" [level=3] [ref=e128]
            - list [ref=e129]:
              - listitem [ref=e130]:
                - img [ref=e131]
                - generic [ref=e134]: 8-8-2/3/4, Road No. 2, Thapovan Colony, Green Park Colony, Saroor Nagar East, Hyderabad, Telangana 500079
              - listitem [ref=e135]:
                - generic [ref=e136]:
                  - img [ref=e137]
                  - link "090148 27770" [ref=e139] [cursor=pointer]:
                    - /url: tel:919014827770
                - generic [ref=e140]:
                  - link "078931 16525" [ref=e141] [cursor=pointer]:
                    - /url: tel:917893116525
                  - generic [ref=e142]: Secondary
              - listitem [ref=e143]:
                - img [ref=e144]
                - link "info@winevbikerentals.in" [ref=e147] [cursor=pointer]:
                  - /url: mailto:info@winevbikerentals.in
              - listitem [ref=e148]:
                - img [ref=e149]
                - generic [ref=e152]:
                  - text: "Mon–Sat: 8:00 AM – 6:00 PM | Sun: 8:00 AM – 1:00 PM"
                  - generic [ref=e153]: Busy Day
        - generic [ref=e154]:
          - paragraph [ref=e155]: © 2026 Ashwin Traders. All Rights Reserved.
          - generic [ref=e156]:
            - paragraph [ref=e157]:
              - text: Made with
              - img [ref=e158]
              - text: in Hyderabad
            - generic [ref=e160] [cursor=pointer]:
              - generic [ref=e161]: Designed & Coded by
              - generic [ref=e162]:
                - text: Tekloria Solutions
                - img "Tekloria Logo" [ref=e163]
  - region "Notifications (F8)":
    - list
  - alert [ref=e164]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { ContactPage } = require('./pages/ContactPage');
  3  | 
  4  | test.describe('📞 Contact Page', () => {
  5  |   let contactPage;
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     contactPage = new ContactPage(page);
  9  |     await contactPage.goto();
  10 |   });
  11 | 
  12 |   test('TC37 - Contact page loads at /contact', async ({ page }) => {
  13 |     await expect(page).toHaveURL(/\/contact/);
  14 |   });
  15 | 
  16 |   test('TC38 - Phone number link is present', async () => {
> 17 |     await expect(contactPage.phoneLink).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  18 |   });
  19 | 
  20 |   test('TC39 - Phone href is correct', async () => {
  21 |     const href = await contactPage.phoneLink.getAttribute('href');
  22 |     expect(href).toMatch(/tel:/);
  23 |     expect(href).toContain('9014827770');
  24 |   });
  25 | 
  26 |   test('TC40 - WhatsApp link is present on contact page', async () => {
  27 |     await expect(contactPage.whatsAppLink).toBeVisible();
  28 |   });
  29 | 
  30 |   test('TC41 - Email link is present', async () => {
  31 |     await expect(contactPage.emailLink).toBeVisible();
  32 |   });
  33 | 
  34 |   test('TC42 - Email href is correct', async () => {
  35 |     const href = await contactPage.emailLink.getAttribute('href');
  36 |     expect(href).toBe('mailto:info@winevbikerentals.in');
  37 |   });
  38 | 
  39 |   test('TC43 - Hyderabad address is shown', async () => {
  40 |     await expect(contactPage.addressText.first()).toBeVisible();
  41 |   });
  42 | });
  43 | 
```