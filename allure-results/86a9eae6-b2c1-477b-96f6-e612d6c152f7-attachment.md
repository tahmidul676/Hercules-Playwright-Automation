# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js >> SND_Order_ApprovalPendingOrderFilterTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js:8:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('i.mdi.mdi-chevron-right')

```

# Page snapshot

```yaml
- generic [ref=e9]:
  - img "Login Logo" [ref=e11]
  - generic [ref=e12]:
    - generic [ref=e13]:
      - generic "This field is required" [ref=e14]: User Mobile Number *
      - generic [ref=e15]:
        - combobox [ref=e16] [cursor=pointer]:
          - option "+88" [selected]
          - option "+6"
        - textbox "User Mobile Number *" [ref=e17]
    - generic [ref=e18]:
      - generic "This field is required" [ref=e19]: Password *
      - generic [ref=e21]:
        - textbox "Password *" [ref=e22]:
          - /placeholder: Password
        - generic "Show password" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: 
    - generic [ref=e25]:
      - generic "reCAPTCHA is loading..." [ref=e26]:
        - button "" [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: 
      - generic "Login" [ref=e30]:
        - button "Login" [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: Login
    - generic [ref=e33]: New to biometric login? Set up your fingerprint
```

# Test source

```ts
  1  | exports.DashboardPage = class DashboardPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.chevronRight = page.locator("i.mdi.mdi-chevron-right");
  6  |     this.sndMenu = page.locator("div").filter({ hasText: /^SND$/ }).nth(1);
  7  |     this.orderMenu = page
  8  |       .locator("div")
  9  |       .filter({ hasText: /^Order$/ })
  10 |       .nth(1);
  11 |     this.approvalPendingOrder = page.getByRole("link", {
  12 |       name: "Approval Pending Order",
  13 |     });
  14 |     // PI
  15 |     this.piMenu = page.locator("div").filter({ hasText: /^PI$/ }).nth(1);
  16 | 
  17 |     this.createLinkPI = page.getByRole("link", { name: "Create" }).nth(0);
  18 | 
  19 |     // Picking
  20 |     this.pickingMenu = page
  21 |       .locator("div")
  22 |       .filter({ hasText: /^Picking$/ })
  23 |       .nth(1);
  24 | 
  25 |     this.createLinkPicking = page.getByRole("link", { name: "Create" }).nth(1);
  26 | 
  27 |     // Collection Summary
  28 |     this.createLinkCollectionSummary = page.locator(
  29 |       "//a[@href='/snd/pi/collection-summary-create']//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
  30 |     );
  31 | 
  32 |     this.collectionSummaryMenu = page
  33 |       .locator("div")
  34 |       .filter({ hasText: /^Collection Summary$/ })
  35 |       .nth(1);
  36 | 
  37 |     this.createLinkSummery = page.locator(
  38 |       "//a[@href='/snd/pi/collection-summary-create']",
  39 |     );
  40 |   }
  41 | 
  42 |   async clickChevronRight() {
> 43 |     await this.chevronRight.click();
     |                             ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  44 |   }
  45 | 
  46 |   async clickSND() {
  47 |     await this.sndMenu.click();
  48 |   }
  49 |   // Order
  50 |   async clickOrder() {
  51 |     await this.orderMenu.click();
  52 |   }
  53 | 
  54 |   async clickApprovalPendingOrder() {
  55 |     await this.approvalPendingOrder.click();
  56 |   }
  57 |   // PI
  58 |   async clickPIMenu() {
  59 |     await this.piMenu.click();
  60 |   }
  61 | 
  62 |   async clickCreatePI() {
  63 |     await this.createLinkPI.waitFor({ state: "visible" });
  64 |     await this.createLinkPI.click();
  65 |   }
  66 |   // Picking
  67 |   async clickPickingMenu() {
  68 |     await this.pickingMenu.click();
  69 |   }
  70 | 
  71 |   async clickCreatePicking() {
  72 |     await this.createLinkPicking.waitFor({ state: "visible" });
  73 |     await this.createLinkPicking.click();
  74 |   }
  75 | 
  76 |   // Collection Summary
  77 |   async clickCollectionSummaryMenu() {
  78 |     await this.collectionSummaryMenu.click();
  79 |   }
  80 | 
  81 |   async clickCreateCollectionSummary() {
  82 |     await this.createLinkSummery.waitFor({ state: "visible" });
  83 |     await this.createLinkSummery.click();
  84 |   }
  85 | };
  86 | 
```