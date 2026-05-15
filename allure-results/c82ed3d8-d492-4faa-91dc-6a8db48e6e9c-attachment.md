# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_016_SND_PI_CollectionSummery_CreateFilterTest.spec.js >> SND_PI_CollectionSummery_CreateFilterTest
- Location: tests\TC_016_SND_PI_CollectionSummery_CreateFilterTest.spec.js:9:5

# Error details

```
ReferenceError: Cannot access 'collectionSummaryTestData' before initialization
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - link "application logo" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "application logo" [ref=e9]
      - searchbox "Search menu items" [ref=e12]
      - generic [ref=e13]:
        - link "" [ref=e14] [cursor=pointer]:
          - /url: /bulk-upload-list
          - generic "Upload Manager" [ref=e15]: 
        - link "" [ref=e16] [cursor=pointer]:
          - /url: /download-manager
          - generic "Download Manager" [ref=e17]: 
        - generic "View In Full Screen" [ref=e18] [cursor=pointer]: 
        - generic "Notifications" [ref=e19] [cursor=pointer]:
          - generic [ref=e20]:
            - text: 
            - generic "9 unread messages" [ref=e21]: "9"
        - img "Profile" [ref=e24] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e27] [cursor=pointer]:
        - button "Open sidebar":
          - generic [ref=e29]: 󰅂
        - generic [ref=e30]:
          - link "󰄫 Dashboard" [ref=e32]:
            - /url: /
            - generic [ref=e33]: 󰄫
            - generic: Dashboard
          - generic [ref=e36]: 
          - generic [ref=e39]: 
          - generic [ref=e42]: 
          - generic [ref=e45]: 
          - generic [ref=e48]: 
          - generic [ref=e51]: 
          - generic [ref=e54]: 
          - generic [ref=e57]: 
          - generic [ref=e60]: 
      - main [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - heading "Collection Summary Create" [level=1]
              - list [ref=e65]:
                - listitem [ref=e66]:
                  - link "Dashboard" [ref=e67] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e68]: /
                - listitem: Collection Summary Create
            - generic [ref=e69]:
              - link "List" [ref=e70] [cursor=pointer]:
                - /url: /snd/pi/collection-summary-list
                - button "List" [ref=e72]:
                  - generic [ref=e73]: 
                  - text: List
              - button "Filter" [ref=e76] [cursor=pointer]:
                - generic [ref=e77]: 
                - text: Filter
          - option "Select Regional" [selected]
          - combobox [ref=e80]
          - combobox [ref=e82]
          - combobox [ref=e84]
          - combobox [ref=e86]
          - combobox [ref=e88]
          - generic [ref=e89]:
            - generic [ref=e91]:
              - heading "Picked PI List" [level=5] [ref=e92]
              - paragraph
            - table [ref=e96]:
              - rowgroup [ref=e97]:
                - row "SL Branch Route Market Retailer Code Retailer Name Mobile Number Order Number Order Date Order Time Proforma Number Proforma Date Proforma Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Status" [ref=e98]:
                  - columnheader "SL" [ref=e99]
                  - columnheader "Branch" [ref=e100]
                  - columnheader "Route" [ref=e101]
                  - columnheader "Market" [ref=e102]
                  - columnheader "Retailer Code" [ref=e103]
                  - columnheader "Retailer Name" [ref=e104]
                  - columnheader "Mobile Number" [ref=e105]
                  - columnheader "Order Number" [ref=e106]
                  - columnheader "Order Date" [ref=e107]
                  - columnheader "Order Time" [ref=e108]
                  - columnheader "Proforma Number" [ref=e109]
                  - columnheader "Proforma Date" [ref=e110]
                  - columnheader "Proforma Time" [ref=e111]
                  - columnheader "TP Amount" [ref=e112]
                  - columnheader "VAT Amount" [ref=e113]
                  - columnheader "Discount Amount" [ref=e114]
                  - columnheader "Net TP Amount" [ref=e115]
                  - columnheader "Net Amount" [ref=e116]
                  - columnheader "Created By" [ref=e117]
                  - columnheader "Status" [ref=e118]
              - rowgroup [ref=e119]:
                - row "No Data Found" [ref=e120]:
                  - cell "No Data Found" [ref=e121]:
                    - heading "No Data Found" [level=6] [ref=e123]
  - generic [ref=e125] [cursor=pointer]:
    - alert [ref=e126]:
      - img [ref=e128]
      - generic [ref=e130]: successfully logged in
    - button "close" [ref=e131]:
      - img [ref=e132]
    - progressbar "notification timer" [ref=e136]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { DashboardPage } from "../pages/DashboardPage";
  4  | import { PickingPage } from "../pages/PickingPage";
  5  | import loginData from "../testData/loginData.json";
  6  | import pickingTestData from "../testData/pickingTestData.json";
  7  | import collectionSummaryTestData from "../testData/collectionSummaryTestData.json";
  8  | import { CollectionSummaryPage } from "../pages/CollectionSummaryPage";
  9  | test("SND_PI_CollectionSummery_CreateFilterTest", async ({ page }) => {
  10 |   // Login Page
  11 |   const loginPage = new LoginPage(page);
  12 |   const data = loginData[0];
  13 |   await loginPage.gotoLoginPage(data.url);
  14 |   await loginPage.login(data.userMobileNumberInput, data.password);
  15 |   //const data = loginData[0];
  16 |   //await page.goto(data.url);
  17 |   // Dashboard Page
  18 |   const dashboardPage = new DashboardPage(page);
  19 |   await dashboardPage.clickChevronRight();
  20 |   await dashboardPage.clickSND();
  21 |   await dashboardPage.clickPIMenu();
  22 |   await dashboardPage.clickCollectionSummaryMenu();
  23 |   await page.waitForTimeout(2000);
  24 |   await dashboardPage.clickCreateCollectionSummary();
  25 | 
  26 |   // Picking Page
  27 |   const pickingPage = new PickingPage(page);
  28 |   const summaryPage = new CollectionSummaryPage(page);
> 29 |   const collectionSummaryTestData = collectionSummaryTestData[0];
     |                                     ^ ReferenceError: Cannot access 'collectionSummaryTestData' before initialization
  30 |   const pickingData = pickingTestData[0];
  31 |   await pickingPage.clickFilter();
  32 |   await pickingPage.selectBranch(pickingData.branch);
  33 |   await pickingPage.selectRoute(pickingData.route);
  34 |   await pickingPage.selectRetailer(pickingData.retailer);
  35 |   await pickingPage.clickSubmit();
  36 |   await pickingPage.clickFinalFilter();
  37 | 
  38 |   const found = await summaryPage.selectOrderByOrderFrom(
  39 |     collectionSummaryTestData.retailerName,
  40 |   );
  41 |   expect(
  42 |     found,
  43 |     `Retailer Name: "${collectionSummaryTestData.retailerName}" not found in table`,
  44 |   ).toBe(true);
  45 |   console.log(
  46 |     `Retailer Name: "${collectionSummaryTestData.retailerName}" found in table`,
  47 |   );
  48 | });
  49 | 
```