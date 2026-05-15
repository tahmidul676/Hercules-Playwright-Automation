# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_016_SND_PI_CollectionSummery_CreateFilterTest.spec.js >> SND_PI_CollectionSummery_CreateFilterTest
- Location: tests\TC_016_SND_PI_CollectionSummery_CreateFilterTest.spec.js:9:5

# Error details

```
Error: Retailer Name: "Bismillah" not found in table

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
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
        - option "Select Business Unit" [selected]
        - option "CBU of Consumer Healthcare"
        - option "Chief Business Officer-Pediatrics"
        - option "Head of Business"
        - combobox [ref=e80]
        - combobox [ref=e82]
        - combobox [ref=e84]
        - combobox [ref=e86]
        - combobox [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e91]:
            - heading "Picked PI List" [level=5] [ref=e92]
            - paragraph
          - generic [ref=e94]:
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
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236508 Abcd Store 7 8801670000726 ORD-260420-236502-00006 2026-04-20 03:53 PM PI001-ORD-260420-236502-00006 2026-05-14 13:14 PM 1,500 - - 1,500 1,500 NAAFCO User Picked" [ref=e120]:
                  - cell [ref=e121]:
                    - checkbox [ref=e122]
                  - cell "Rampura Branch" [ref=e123]
                  - cell "Rampura Route 1" [ref=e124]
                  - cell "Rampura Market 1" [ref=e125]
                  - cell "R00236508" [ref=e126]
                  - cell "Abcd Store 7" [ref=e127]
                  - cell "8801670000726" [ref=e128]
                  - cell "ORD-260420-236502-00006" [ref=e129]
                  - cell "2026-04-20" [ref=e130]
                  - cell "03:53 PM" [ref=e131]
                  - cell "PI001-ORD-260420-236502-00006" [ref=e132]
                  - cell "2026-05-14" [ref=e133]
                  - cell "13:14 PM" [ref=e134]
                  - cell "1,500" [ref=e135]
                  - cell "-" [ref=e136]
                  - cell "-" [ref=e137]
                  - cell "1,500" [ref=e138]
                  - cell "1,500" [ref=e139]
                  - cell "NAAFCO User" [ref=e140]
                  - cell "Picked" [ref=e141]:
                    - generic [ref=e142]: Picked
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260510-236502-00013 2026-05-10 03:04 PM PI001-ORD-260510-236502-00013 2026-05-14 13:12 PM 2,490 - - 2,490 2,490 NAAFCO User Picked" [ref=e143]:
                  - cell [ref=e144]:
                    - checkbox [ref=e145]
                  - cell "Rampura Branch" [ref=e146]
                  - cell "Rampura Route 1" [ref=e147]
                  - cell "Rampura Market 1" [ref=e148]
                  - cell "R00236507" [ref=e149]
                  - cell "City Store 3" [ref=e150]
                  - cell "8801670000725" [ref=e151]
                  - cell "ORD-260510-236502-00013" [ref=e152]
                  - cell "2026-05-10" [ref=e153]
                  - cell "03:04 PM" [ref=e154]
                  - cell "PI001-ORD-260510-236502-00013" [ref=e155]
                  - cell "2026-05-14" [ref=e156]
                  - cell "13:12 PM" [ref=e157]
                  - cell "2,490" [ref=e158]
                  - cell "-" [ref=e159]
                  - cell "-" [ref=e160]
                  - cell "2,490" [ref=e161]
                  - cell "2,490" [ref=e162]
                  - cell "NAAFCO User" [ref=e163]
                  - cell "Picked" [ref=e164]:
                    - generic [ref=e165]: Picked
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260505-236502-00003 2026-05-05 03:16 PM PI001-ORD-260505-236502-00003 2026-05-12 10:30 AM 10,022.50 - - 10,022.50 10,022.50 NAAFCO User Picked" [ref=e166]:
                  - cell [ref=e167]:
                    - checkbox [ref=e168]
                  - cell "Rampura Branch" [ref=e169]
                  - cell "Rampura Route 1" [ref=e170]
                  - cell "Rampura Market 1" [ref=e171]
                  - cell "R00236507" [ref=e172]
                  - cell "City Store 3" [ref=e173]
                  - cell "8801670000725" [ref=e174]
                  - cell "ORD-260505-236502-00003" [ref=e175]
                  - cell "2026-05-05" [ref=e176]
                  - cell "03:16 PM" [ref=e177]
                  - cell "PI001-ORD-260505-236502-00003" [ref=e178]
                  - cell "2026-05-12" [ref=e179]
                  - cell "10:30 AM" [ref=e180]
                  - cell "10,022.50" [ref=e181]
                  - cell "-" [ref=e182]
                  - cell "-" [ref=e183]
                  - cell "10,022.50" [ref=e184]
                  - cell "10,022.50" [ref=e185]
                  - cell "NAAFCO User" [ref=e186]
                  - cell "Picked" [ref=e187]:
                    - generic [ref=e188]: Picked
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260505-236502-01142 2026-05-05 02:57 PM PI001-ORD-260505-236502-01142 2026-05-09 00:36 AM 3,820 - - 3,820 3,820 NAAFCO User Picked" [ref=e189]:
                  - cell [ref=e190]:
                    - checkbox [ref=e191]
                  - cell "Rampura Branch" [ref=e192]
                  - cell "Rampura Route 1" [ref=e193]
                  - cell "Rampura Market 1" [ref=e194]
                  - cell "R00236507" [ref=e195]
                  - cell "City Store 3" [ref=e196]
                  - cell "8801670000725" [ref=e197]
                  - cell "ORD-260505-236502-01142" [ref=e198]
                  - cell "2026-05-05" [ref=e199]
                  - cell "02:57 PM" [ref=e200]
                  - cell "PI001-ORD-260505-236502-01142" [ref=e201]
                  - cell "2026-05-09" [ref=e202]
                  - cell "00:36 AM" [ref=e203]
                  - cell "3,820" [ref=e204]
                  - cell "-" [ref=e205]
                  - cell "-" [ref=e206]
                  - cell "3,820" [ref=e207]
                  - cell "3,820" [ref=e208]
                  - cell "NAAFCO User" [ref=e209]
                  - cell "Picked" [ref=e210]:
                    - generic [ref=e211]: Picked
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260507-236502-00007 2026-05-07 03:03 PM PI001-ORD-260507-236502-00007 2026-05-07 15:46 PM 9,380 - - 9,380 9,380 NAAFCO User Picked" [ref=e212]:
                  - cell [ref=e213]:
                    - checkbox [ref=e214]
                  - cell "Rampura Branch" [ref=e215]
                  - cell "Rampura Route 1" [ref=e216]
                  - cell "Rampura Market 1" [ref=e217]
                  - cell "R00236507" [ref=e218]
                  - cell "City Store 3" [ref=e219]
                  - cell "8801670000725" [ref=e220]
                  - cell "ORD-260507-236502-00007" [ref=e221]
                  - cell "2026-05-07" [ref=e222]
                  - cell "03:03 PM" [ref=e223]
                  - cell "PI001-ORD-260507-236502-00007" [ref=e224]
                  - cell "2026-05-07" [ref=e225]
                  - cell "15:46 PM" [ref=e226]
                  - cell "9,380" [ref=e227]
                  - cell "-" [ref=e228]
                  - cell "-" [ref=e229]
                  - cell "9,380" [ref=e230]
                  - cell "9,380" [ref=e231]
                  - cell "NAAFCO User" [ref=e232]
                  - cell "Picked" [ref=e233]:
                    - generic [ref=e234]: Picked
            - generic [ref=e235]:
              - combobox [ref=e238] [cursor=pointer]:
                - option "10 / page" [selected]
                - option "20 / page"
                - option "50 / page"
                - option "100 / page"
              - navigation "Page navigation example" [ref=e239]:
                - list [ref=e240]:
                  - listitem [ref=e241]:
                    - button "<<"
                  - listitem "You are on the first page" [ref=e242]:
                    - button "<" [disabled]
                  - listitem [ref=e243]:
                    - button "1" [disabled] [ref=e244]
                  - listitem "You are on the last page" [ref=e245]:
                    - button ">" [disabled]
                  - listitem [ref=e246]:
                    - button ">>" [disabled]
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
  28 |   const pickingData = pickingTestData[0];
  29 |   await pickingPage.clickFilter();
  30 |   await pickingPage.selectBranch(pickingData.branch);
  31 |   await pickingPage.selectRoute(pickingData.route);
  32 |   await pickingPage.selectRetailer(pickingData.retailer);
  33 |   await pickingPage.clickSubmit();
  34 |   await pickingPage.clickFinalFilter();
  35 | 
  36 |   const summaryPage = new CollectionSummaryPage(page);
  37 |   const summaryData = collectionSummaryTestData[0];
  38 |   const found = await summaryPage.selectOrderByOrderFrom(
  39 |     summaryData.retailerName,
  40 |   );
  41 |   expect(
  42 |     found,
  43 |     `Retailer Name: "${summaryData.retailerName}" not found in table`,
> 44 |   ).toBe(true);
     |     ^ Error: Retailer Name: "Bismillah" not found in table
  45 |   console.log(`Retailer Name: "${summaryData.retailerName}" found in table`);
  46 | });
  47 | 
```