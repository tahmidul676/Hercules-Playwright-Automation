# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_016_SND_PI_CollectionSummery_CreateTest.spec.js >> SND_PI_CollectionSummery_CreateTest
- Location: tests\TC_016_SND_PI_CollectionSummery_CreateTest.spec.js:9:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[@href=\'/snd/pi/collection-summary-create\']//span[@class=\'_fourthLevelText_m0gtk_961\'][normalize-space()=\'Create\']')

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
  16 |     //this.createLink = page.getByRole("link", { name: "Create" });
  17 | 
  18 |     // Picking
  19 |     this.pickingMenu = page
  20 |       .locator("div")
  21 |       .filter({ hasText: /^Picking$/ })
  22 |       .nth(1);
  23 | 
  24 |     this.createLinkPI = page.locator(
  25 |       "//span[contains(@class,'_thirdLevelText_m0gtk_861')][normalize-space()='Create']",
  26 |     );
  27 | 
  28 |     this.createLinkPicking = page.locator(
  29 |       "//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
  30 |     );
  31 | 
  32 |     // // Collection Summary
  33 |     this.createLinkCollectionSummary = page.locator(
  34 |       "//a[@href='/snd/pi/collection-summary-create']//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
  35 |     );
  36 |     // this.createLinkCollectionSummary = page.locator(
  37 |     //   "(//a[@href='/snd/pi/collection-summary-create']//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create'])[2]",
  38 |     // );
  39 | 
  40 |     this.collectionSummaryMenu = page
  41 |       .locator("div")
  42 |       .filter({ hasText: /^Collection Summary$/ })
  43 |       .nth(1);
  44 | 
  45 |     // this.collectionSummaryMenu = page.locator(
  46 |     //   "//span[normalize-space()='Collection Summary']",
  47 |     // );
  48 |   }
  49 | 
  50 |   async clickChevronRight() {
  51 |     await this.chevronRight.click();
  52 |   }
  53 | 
  54 |   async clickSND() {
  55 |     await this.sndMenu.click();
  56 |   }
  57 | 
  58 |   async clickOrder() {
  59 |     await this.orderMenu.click();
  60 |   }
  61 | 
  62 |   async clickApprovalPendingOrder() {
  63 |     await this.approvalPendingOrder.click();
  64 |   }
  65 | 
  66 |   async clickPIMenu() {
  67 |     await this.piMenu.click();
  68 |   }
  69 | 
  70 |   async clickCreatePI() {
  71 |     await this.createLinkPI.click();
  72 |   }
  73 | 
  74 |   async clickPickingMenu() {
  75 |     await this.pickingMenu.click();
  76 |   }
  77 | 
  78 |   // same create as Picking
  79 |   async clickCreatePicking() {
  80 |     await this.createLinkPicking.waitFor({ state: "visible" });
  81 |     await this.createLinkPicking.click();
  82 |   }
  83 | 
  84 |   async clickCollectionSummaryMenu() {
  85 |     await this.collectionSummaryMenu.click();
  86 |   }
  87 | 
  88 |   async clickCreateCollectionSummary() {
  89 |     //await this.createLinkCollectionSummary.waitFor({ state: "visible" });
> 90 |     await this.createLinkCollectionSummary.click();
     |                                            ^ Error: locator.click: Target page, context or browser has been closed
  91 |   }
  92 | };
  93 | 
```