# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_014_SND_PI_Picking_CreateFilterTest.spec.js >> TC_08_SND_PI_Picking_CreateTest
- Location: tests\TC_014_SND_PI_Picking_CreateFilterTest.spec.js:8:5

# Error details

```
Error: Retailer Name: "City Store 3" not found in table

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: undefined
```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - generic:
      - generic:
        - generic [ref=e1]:
          - link "application logo" [ref=e3] [cursor=pointer]:
            - /url: /
            - img "application logo" [ref=e4]
          - searchbox "Search menu items" [ref=e7]
          - generic [ref=e8]:
            - link "" [ref=e9] [cursor=pointer]:
              - /url: /bulk-upload-list
              - generic "Upload Manager" [ref=e10]: 
            - link "" [ref=e11] [cursor=pointer]:
              - /url: /download-manager
              - generic "Download Manager" [ref=e12]: 
            - generic "View In Full Screen" [ref=e13] [cursor=pointer]: 
            - generic "Notifications" [ref=e14] [cursor=pointer]:
              - generic [ref=e15]:
                - text: 
                - generic "8 unread messages" [ref=e16]: "8"
            - img "Profile" [ref=e19] [cursor=pointer]
        - generic [ref=e21] [cursor=pointer]:
          - button "Open sidebar" [ref=e22]:
            - generic [ref=e24]: 󰅂
          - generic [ref=e25]:
            - link "󰄫 Dashboard" [ref=e27]:
              - /url: /
              - generic [ref=e28]: 󰄫
              - generic: Dashboard
            - generic [ref=e31]: 
            - generic [ref=e34]: 
            - generic [ref=e37]: 
            - generic [ref=e40]: 
            - generic [ref=e43]: 
            - generic [ref=e46]: 
            - generic [ref=e49]: 
            - generic [ref=e52]: 
            - generic [ref=e55]: 
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e59]:
              - heading "Picking" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Picking
            - generic [ref=e64]:
              - link "List" [ref=e65] [cursor=pointer]:
                - /url: /snd/pi/picking/list
                - button "List" [ref=e67]:
                  - generic [ref=e68]: 
                  - text: List
              - button "Filter" [ref=e71] [cursor=pointer]:
                - generic [ref=e72]: 
                - text: Filter
          - option "Select Business Unit" [selected]
          - option "CBU of Consumer Healthcare"
          - option "Chief Business Officer-Pediatrics"
          - option "Head of Business"
          - combobox [ref=e75]
          - combobox [ref=e77]
          - combobox [ref=e79]
          - combobox [ref=e81]
          - combobox [ref=e83]
          - generic [ref=e84]:
            - generic [ref=e86]:
              - heading "Processed PI List" [level=5] [ref=e87]
              - paragraph
            - generic [ref=e89]:
              - table [ref=e91]:
                - rowgroup [ref=e92]:
                  - row "SL Branch Route Market Retailer Code Retailer Name Mobile Number Order Number Order Date Order Time Proforma Number Proforma Date Proforma Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Status" [ref=e93]:
                    - columnheader "SL" [ref=e94]
                    - columnheader "Branch" [ref=e95]
                    - columnheader "Route" [ref=e96]
                    - columnheader "Market" [ref=e97]
                    - columnheader "Retailer Code" [ref=e98]
                    - columnheader "Retailer Name" [ref=e99]
                    - columnheader "Mobile Number" [ref=e100]
                    - columnheader "Order Number" [ref=e101]
                    - columnheader "Order Date" [ref=e102]
                    - columnheader "Order Time" [ref=e103]
                    - columnheader "Proforma Number" [ref=e104]
                    - columnheader "Proforma Date" [ref=e105]
                    - columnheader "Proforma Time" [ref=e106]
                    - columnheader "TP Amount" [ref=e107]
                    - columnheader "VAT Amount" [ref=e108]
                    - columnheader "Discount Amount" [ref=e109]
                    - columnheader "Net TP Amount" [ref=e110]
                    - columnheader "Net Amount" [ref=e111]
                    - columnheader "Created By" [ref=e112]
                    - columnheader "Status" [ref=e113]
                - rowgroup [ref=e114]:
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260510-236502-00013 2026-05-10 03:04 PM PI001-ORD-260510-236502-00013 2026-05-14 13:12 PM 2,490 - - 2,490 2,490 NAAFCO User Pending" [ref=e115]:
                    - cell [ref=e116]:
                      - checkbox [ref=e117]
                    - cell "Rampura Branch" [ref=e118]
                    - cell "Rampura Route 1" [ref=e119]
                    - cell "Rampura Market 1" [ref=e120]
                    - cell "R00236507" [ref=e121]
                    - cell "City Store 3" [ref=e122]
                    - cell "8801670000725" [ref=e123]
                    - cell "ORD-260510-236502-00013" [ref=e124]
                    - cell "2026-05-10" [ref=e125]
                    - cell "03:04 PM" [ref=e126]
                    - cell "PI001-ORD-260510-236502-00013" [ref=e127]
                    - cell "2026-05-14" [ref=e128]
                    - cell "13:12 PM" [ref=e129]
                    - cell "2,490" [ref=e130]
                    - cell "-" [ref=e131]
                    - cell "-" [ref=e132]
                    - cell "2,490" [ref=e133]
                    - cell "2,490" [ref=e134]
                    - cell "NAAFCO User" [ref=e135]
                    - cell "Pending" [ref=e136]:
                      - generic [ref=e137]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00013 2026-04-26 05:07 PM PI002-ORD-260426-236502-00013 2026-05-07 14:56 PM 14,310 337.50 - 14,310 14,647.50 NAAFCO User Pending" [ref=e138]:
                    - cell [ref=e139]:
                      - checkbox [ref=e140]
                    - cell "Rampura Branch" [ref=e141]
                    - cell "Rampura Route 1" [ref=e142]
                    - cell "Rampura Market 1" [ref=e143]
                    - cell "R00236507" [ref=e144]
                    - cell "City Store 3" [ref=e145]
                    - cell "8801670000725" [ref=e146]
                    - cell "ORD-260426-236502-00013" [ref=e147]
                    - cell "2026-04-26" [ref=e148]
                    - cell "05:07 PM" [ref=e149]
                    - cell "PI002-ORD-260426-236502-00013" [ref=e150]
                    - cell "2026-05-07" [ref=e151]
                    - cell "14:56 PM" [ref=e152]
                    - cell "14,310" [ref=e153]
                    - cell "337.50" [ref=e154]
                    - cell "-" [ref=e155]
                    - cell "14,310" [ref=e156]
                    - cell "14,647.50" [ref=e157]
                    - cell "NAAFCO User" [ref=e158]
                    - cell "Pending" [ref=e159]:
                      - generic [ref=e160]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00015 2026-04-26 05:10 PM PI002-ORD-260426-236502-00015 2026-05-07 09:38 AM 3,500 45 - 3,500 3,545 NAAFCO User Pending" [ref=e161]:
                    - cell [ref=e162]:
                      - checkbox [ref=e163]
                    - cell "Rampura Branch" [ref=e164]
                    - cell "Rampura Route 1" [ref=e165]
                    - cell "Rampura Market 1" [ref=e166]
                    - cell "R00236507" [ref=e167]
                    - cell "City Store 3" [ref=e168]
                    - cell "8801670000725" [ref=e169]
                    - cell "ORD-260426-236502-00015" [ref=e170]
                    - cell "2026-04-26" [ref=e171]
                    - cell "05:10 PM" [ref=e172]
                    - cell "PI002-ORD-260426-236502-00015" [ref=e173]
                    - cell "2026-05-07" [ref=e174]
                    - cell "09:38 AM" [ref=e175]
                    - cell "3,500" [ref=e176]
                    - cell "45" [ref=e177]
                    - cell "-" [ref=e178]
                    - cell "3,500" [ref=e179]
                    - cell "3,545" [ref=e180]
                    - cell "NAAFCO User" [ref=e181]
                    - cell "Pending" [ref=e182]:
                      - generic [ref=e183]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00016 2026-04-26 05:14 PM PI002-ORD-260426-236502-00016 2026-05-07 09:38 AM 5,490 135 - 5,490 5,625 NAAFCO User Pending" [ref=e184]:
                    - cell [ref=e185]:
                      - checkbox [ref=e186]
                    - cell "Rampura Branch" [ref=e187]
                    - cell "Rampura Route 1" [ref=e188]
                    - cell "Rampura Market 1" [ref=e189]
                    - cell "R00236507" [ref=e190]
                    - cell "City Store 3" [ref=e191]
                    - cell "8801670000725" [ref=e192]
                    - cell "ORD-260426-236502-00016" [ref=e193]
                    - cell "2026-04-26" [ref=e194]
                    - cell "05:14 PM" [ref=e195]
                    - cell "PI002-ORD-260426-236502-00016" [ref=e196]
                    - cell "2026-05-07" [ref=e197]
                    - cell "09:38 AM" [ref=e198]
                    - cell "5,490" [ref=e199]
                    - cell "135" [ref=e200]
                    - cell "-" [ref=e201]
                    - cell "5,490" [ref=e202]
                    - cell "5,625" [ref=e203]
                    - cell "NAAFCO User" [ref=e204]
                    - cell "Pending" [ref=e205]:
                      - generic [ref=e206]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260421-236502-00002 2026-04-21 09:10 AM PI001-ORD-260421-236502-00002 2026-04-30 11:31 AM 2,400 120 - 2,400 2,520 NAAFCO User Pending" [ref=e207]:
                    - cell [ref=e208]:
                      - checkbox [ref=e209]
                    - cell "Rampura Branch" [ref=e210]
                    - cell "Rampura Route 1" [ref=e211]
                    - cell "Rampura Market 1" [ref=e212]
                    - cell "R00236507" [ref=e213]
                    - cell "City Store 3" [ref=e214]
                    - cell "8801670000725" [ref=e215]
                    - cell "ORD-260421-236502-00002" [ref=e216]
                    - cell "2026-04-21" [ref=e217]
                    - cell "09:10 AM" [ref=e218]
                    - cell "PI001-ORD-260421-236502-00002" [ref=e219]
                    - cell "2026-04-30" [ref=e220]
                    - cell "11:31 AM" [ref=e221]
                    - cell "2,400" [ref=e222]
                    - cell "120" [ref=e223]
                    - cell "-" [ref=e224]
                    - cell "2,400" [ref=e225]
                    - cell "2,520" [ref=e226]
                    - cell "NAAFCO User" [ref=e227]
                    - cell "Pending" [ref=e228]:
                      - generic [ref=e229]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260421-236502-00978 2026-04-21 09:09 AM PI001-ORD-260421-236502-00978 2026-04-30 11:31 AM 2,100 105 - 2,100 2,205 NAAFCO User Pending" [ref=e230]:
                    - cell [ref=e231]:
                      - checkbox [ref=e232]
                    - cell "Rampura Branch" [ref=e233]
                    - cell "Rampura Route 1" [ref=e234]
                    - cell "Rampura Market 1" [ref=e235]
                    - cell "R00236507" [ref=e236]
                    - cell "City Store 3" [ref=e237]
                    - cell "8801670000725" [ref=e238]
                    - cell "ORD-260421-236502-00978" [ref=e239]
                    - cell "2026-04-21" [ref=e240]
                    - cell "09:09 AM" [ref=e241]
                    - cell "PI001-ORD-260421-236502-00978" [ref=e242]
                    - cell "2026-04-30" [ref=e243]
                    - cell "11:31 AM" [ref=e244]
                    - cell "2,100" [ref=e245]
                    - cell "105" [ref=e246]
                    - cell "-" [ref=e247]
                    - cell "2,100" [ref=e248]
                    - cell "2,205" [ref=e249]
                    - cell "NAAFCO User" [ref=e250]
                    - cell "Pending" [ref=e251]:
                      - generic [ref=e252]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260420-236502-00013 2026-04-20 05:42 PM PI001-ORD-260420-236502-00013 2026-04-30 11:31 AM 600 30 - 600 630 NAAFCO User Pending" [ref=e253]:
                    - cell [ref=e254]:
                      - checkbox [ref=e255]
                    - cell "Rampura Branch" [ref=e256]
                    - cell "Rampura Route 1" [ref=e257]
                    - cell "Rampura Market 1" [ref=e258]
                    - cell "R00236507" [ref=e259]
                    - cell "City Store 3" [ref=e260]
                    - cell "8801670000725" [ref=e261]
                    - cell "ORD-260420-236502-00013" [ref=e262]
                    - cell "2026-04-20" [ref=e263]
                    - cell "05:42 PM" [ref=e264]
                    - cell "PI001-ORD-260420-236502-00013" [ref=e265]
                    - cell "2026-04-30" [ref=e266]
                    - cell "11:31 AM" [ref=e267]
                    - cell "600" [ref=e268]
                    - cell "30" [ref=e269]
                    - cell "-" [ref=e270]
                    - cell "600" [ref=e271]
                    - cell "630" [ref=e272]
                    - cell "NAAFCO User" [ref=e273]
                    - cell "Pending" [ref=e274]:
                      - generic [ref=e275]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260420-236502-00012 2026-04-20 05:05 PM PI001-ORD-260420-236502-00012 2026-04-30 11:31 AM 300 15 - 300 315 NAAFCO User Pending" [ref=e276]:
                    - cell [ref=e277]:
                      - checkbox [ref=e278]
                    - cell "Rampura Branch" [ref=e279]
                    - cell "Rampura Route 1" [ref=e280]
                    - cell "Rampura Market 1" [ref=e281]
                    - cell "R00236507" [ref=e282]
                    - cell "City Store 3" [ref=e283]
                    - cell "8801670000725" [ref=e284]
                    - cell "ORD-260420-236502-00012" [ref=e285]
                    - cell "2026-04-20" [ref=e286]
                    - cell "05:05 PM" [ref=e287]
                    - cell "PI001-ORD-260420-236502-00012" [ref=e288]
                    - cell "2026-04-30" [ref=e289]
                    - cell "11:31 AM" [ref=e290]
                    - cell "300" [ref=e291]
                    - cell "15" [ref=e292]
                    - cell "-" [ref=e293]
                    - cell "300" [ref=e294]
                    - cell "315" [ref=e295]
                    - cell "NAAFCO User" [ref=e296]
                    - cell "Pending" [ref=e297]:
                      - generic [ref=e298]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260420-236502-00010 2026-04-20 04:31 PM PI001-ORD-260420-236502-00010 2026-04-30 11:31 AM 1,20,000 6,000 - 1,20,000 1,26,000 NAAFCO User Pending" [ref=e299]:
                    - cell [ref=e300]:
                      - checkbox [ref=e301]
                    - cell "Rampura Branch" [ref=e302]
                    - cell "Rampura Route 1" [ref=e303]
                    - cell "Rampura Market 1" [ref=e304]
                    - cell "R00236507" [ref=e305]
                    - cell "City Store 3" [ref=e306]
                    - cell "8801670000725" [ref=e307]
                    - cell "ORD-260420-236502-00010" [ref=e308]
                    - cell "2026-04-20" [ref=e309]
                    - cell "04:31 PM" [ref=e310]
                    - cell "PI001-ORD-260420-236502-00010" [ref=e311]
                    - cell "2026-04-30" [ref=e312]
                    - cell "11:31 AM" [ref=e313]
                    - cell "1,20,000" [ref=e314]
                    - cell "6,000" [ref=e315]
                    - cell "-" [ref=e316]
                    - cell "1,20,000" [ref=e317]
                    - cell "1,26,000" [ref=e318]
                    - cell "NAAFCO User" [ref=e319]
                    - cell "Pending" [ref=e320]:
                      - generic [ref=e321]: Pending
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 05:02 PM PI001-ORD-260426-236502-00010 2026-04-26 17:21 PM 11,275 150 - 11,275 11,425 NAAFCO User Pending" [ref=e322]:
                    - cell [ref=e323]:
                      - checkbox [ref=e324]
                    - cell "Rampura Branch" [ref=e325]
                    - cell "Rampura Route 1" [ref=e326]
                    - cell "Rampura Market 1" [ref=e327]
                    - cell "R00236507" [ref=e328]
                    - cell "City Store 3" [ref=e329]
                    - cell "8801670000725" [ref=e330]
                    - cell "ORD-260426-236502-00010" [ref=e331]
                    - cell "2026-04-26" [ref=e332]
                    - cell "05:02 PM" [ref=e333]
                    - cell "PI001-ORD-260426-236502-00010" [ref=e334]
                    - cell "2026-04-26" [ref=e335]
                    - cell "17:21 PM" [ref=e336]
                    - cell "11,275" [ref=e337]
                    - cell "150" [ref=e338]
                    - cell "-" [ref=e339]
                    - cell "11,275" [ref=e340]
                    - cell "11,425" [ref=e341]
                    - cell "NAAFCO User" [ref=e342]
                    - cell "Pending" [ref=e343]:
                      - generic [ref=e344]: Pending
              - generic [ref=e345]:
                - combobox [ref=e348] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e349]:
                  - list [ref=e350]:
                    - listitem [ref=e351]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e352]:
                      - button "<" [disabled]
                    - listitem [ref=e353]:
                      - button "1" [ref=e354] [cursor=pointer]
                    - listitem [ref=e355]:
                      - button "2" [ref=e356] [cursor=pointer]
                    - listitem [ref=e357] [cursor=pointer]:
                      - button ">" [ref=e358]
                    - listitem [ref=e359]:
                      - button ">>" [disabled] [ref=e360]
      - generic [ref=e362] [cursor=pointer]:
        - alert [ref=e363]:
          - img [ref=e365]
          - generic [ref=e367]: successfully logged in
        - button "close" [ref=e368]:
          - img [ref=e369]
        - progressbar "notification timer" [ref=e373]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { DashboardPage } from "../pages/DashboardPage";
  4  | import { PickingPage } from "../pages/PickingPage";
  5  | import loginData from "../testData/loginData.json";
  6  | import pickingTestData from "../testData/pickingTestData.json";
  7  | 
  8  | test("TC_08_SND_PI_Picking_CreateTest", async ({ page }) => {
  9  |   // Login Page
  10 |   const loginPage = new LoginPage(page);
  11 |   const data = loginData[0];
  12 |   await loginPage.gotoLoginPage(data.url);
  13 |   await loginPage.login(data.userMobileNumberInput, data.password);
  14 |   await expect(page.locator(".Toastify__toast-body")).toHaveText(
  15 |     "successfully logged in",
  16 |   );
  17 | 
  18 |   // Dashboard Page
  19 |   const dashboardPage = new DashboardPage(page);
  20 |   await dashboardPage.clickChevronRight();
  21 |   await dashboardPage.clickSND();
  22 |   await dashboardPage.clickPIMenu();
  23 |   await dashboardPage.clickPickingMenu();
  24 |   await dashboardPage.clickCreatePicking();
  25 |   await expect(page).toHaveURL(/\/snd\/pi\/picking\/create/);
  26 | 
  27 |   // Picking Page
  28 |   const pickingPage = new PickingPage(page);
  29 |   const pickingData = pickingTestData[0];
  30 |   await pickingPage.clickFilter();
  31 |   await pickingPage.selectBranch(pickingData.branch);
  32 |   await pickingPage.selectRoute(pickingData.route);
  33 |   await pickingPage.selectRetailer(pickingData.retailer);
  34 |   await pickingPage.clickSubmit();
  35 |   await pickingPage.clickFinalFilter();
  36 | //   await pickingPage.selectCheckboxByOrderId(pickingData.orderId);
  37 | //   await pickingPage.clickProcess();
  38 | //   await page.waitForTimeout(2000);
  39 | 
  40 | //await pickingPage.selectOrderByOrderFrom(pickingData.retailerName);
  41 |   const found = await pickingPage.selectOrderByOrderFrom(
  42 |     pickingData.retailerName,
  43 |   );
  44 |   expect(
  45 |     found,
  46 |     `Retailer Name: "${pickingData.retailerName}" not found in table`,
> 47 |   ).toBe(true);
     |     ^ Error: Retailer Name: "City Store 3" not found in table
  48 |   console.log(`Retailer Name: "${pickingData.retailerName}" found in table`);
  49 | });
  50 | 
```