# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_012_SND_PI_CreateFilterTest.spec.js >> TC_012_SND_PI_CreateFilterTest
- Location: tests\TC_012_SND_PI_CreateFilterTest.spec.js:10:5

# Error details

```
Error: Retailer Name: "Bismillah" not found in table

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic:
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
              - heading "Create Proforma Invoice" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Create Proforma Invoice
            - button "Filter" [active] [ref=e66] [cursor=pointer]:
              - generic [ref=e67]: 
              - text: Filter
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: Business Unit
              - combobox [ref=e73] [cursor=pointer]:
                - option "Select Business Unit" [selected]
                - option "CBU of Consumer Healthcare"
                - option "Chief Business Officer-Pediatrics"
                - option "Head of Business"
            - generic [ref=e74] [cursor=pointer]:
              - generic [ref=e75]: Branch
              - generic [ref=e76]:
                - log [ref=e78]
                - generic [ref=e79]:
                  - generic [ref=e80]:
                    - generic [ref=e81]: Select Branch
                    - combobox [ref=e83]
                  - img [ref=e87]
              - textbox "Branch"
            - generic [ref=e89] [cursor=pointer]:
              - generic [ref=e90]: Route
              - generic [ref=e91]:
                - log [ref=e93]
                - generic [ref=e94]:
                  - generic [ref=e95]:
                    - generic [ref=e96]: Select Route
                    - combobox [ref=e98]
                  - img [ref=e102]
              - textbox "Route"
            - generic [ref=e104] [cursor=pointer]:
              - generic [ref=e105]: Market
              - generic [ref=e106]:
                - log [ref=e108]
                - generic [ref=e109]:
                  - generic [ref=e110]:
                    - generic [ref=e111]: Select Market
                    - combobox [ref=e113]
                  - img [ref=e117]
              - textbox "Market"
            - generic [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: Sub Market
              - generic [ref=e121]:
                - log [ref=e123]
                - generic [ref=e124]:
                  - generic [ref=e125]:
                    - generic [ref=e126]: Select Sub Market
                    - combobox [ref=e128]
                  - img [ref=e132]
              - textbox "Sub Market"
            - generic [ref=e134] [cursor=pointer]:
              - generic "This field is required" [ref=e135]: Retailer *
              - generic [ref=e136]:
                - log [ref=e138]
                - generic [ref=e139]:
                  - generic [ref=e140]:
                    - generic [ref=e141]: Loading...
                    - combobox [ref=e143]
                  - img [ref=e151]
              - textbox "Retailer *"
            - generic [ref=e153]:
              - generic [ref=e154]: Order Number
              - textbox "Order Number" [ref=e156]
            - generic [ref=e157]:
              - generic [ref=e158]: Date Range
              - generic [ref=e160]:
                - generic [ref=e161]:
                  - spinbutton [ref=e162]
                  - text: "-"
                  - spinbutton [ref=e163]
                  - text: "-"
                  - spinbutton [ref=e164]
                - generic [ref=e165]: "-"
                - generic [ref=e166]:
                  - spinbutton [ref=e167]
                  - text: "-"
                  - spinbutton [ref=e168]
                  - text: "-"
                  - spinbutton [ref=e169]
                - button [ref=e170] [cursor=pointer]:
                  - generic [ref=e171]: 
            - group [ref=e173]:
              - button "󰍉 Submit" [ref=e174] [cursor=pointer]:
                - text: 󰍉
                - generic [ref=e175]: Submit
              - button "Reset Filter" [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: 󰑐
                - text: Reset
          - generic [ref=e178]:
            - generic [ref=e180]:
              - heading "Order List" [level=5] [ref=e181]
              - paragraph
            - generic [ref=e183]:
              - table [ref=e185]:
                - rowgroup [ref=e186]:
                  - row "SL Retailer Code Retailer Name Mobile Number Order Number Date Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Order Status Action" [ref=e187]:
                    - columnheader "SL" [ref=e188]
                    - columnheader "Retailer Code" [ref=e189]
                    - columnheader "Retailer Name" [ref=e190]
                    - columnheader "Mobile Number" [ref=e191]
                    - columnheader "Order Number" [ref=e192]
                    - columnheader "Date" [ref=e193]
                    - columnheader "Time" [ref=e194]
                    - columnheader "TP Amount" [ref=e195]
                    - columnheader "VAT Amount" [ref=e196]
                    - columnheader "Discount Amount" [ref=e197]
                    - columnheader "Net TP Amount" [ref=e198]
                    - columnheader "Net Amount" [ref=e199]
                    - columnheader "Created By" [ref=e200]
                    - columnheader "Order Status" [ref=e201]
                    - columnheader "Action" [ref=e202]
                - rowgroup [ref=e203]:
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00012 2026-04-26 17:05 PM 32,770 1,064.75 - 32,770 33,834.75 MPO 06 Partial PI Create PI" [ref=e204]:
                    - cell "-" [ref=e205]
                    - cell "R00236507" [ref=e206]
                    - cell "City Store 3" [ref=e207]
                    - cell "8801670000725" [ref=e208]
                    - cell "ORD-260426-236502-00012" [ref=e209]
                    - cell "2026-04-26" [ref=e210]
                    - cell "17:05 PM" [ref=e211]
                    - cell "32,770" [ref=e212]
                    - cell "1,064.75" [ref=e213]
                    - cell "-" [ref=e214]
                    - cell "32,770" [ref=e215]
                    - cell "33,834.75" [ref=e216]
                    - cell "MPO 06" [ref=e217]
                    - cell "Partial PI" [ref=e218]:
                      - generic [ref=e219]: Partial PI
                    - cell "Create PI" [ref=e220]:
                      - button "Create PI" [ref=e222] [cursor=pointer]:
                        - generic [ref=e223]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00011 2026-04-26 17:04 PM 43,000 550.75 - 43,000 43,550.75 MPO 06 Partial PI Create PI" [ref=e224]:
                    - cell "-" [ref=e225]
                    - cell "R00236507" [ref=e226]
                    - cell "City Store 3" [ref=e227]
                    - cell "8801670000725" [ref=e228]
                    - cell "ORD-260426-236502-00011" [ref=e229]
                    - cell "2026-04-26" [ref=e230]
                    - cell "17:04 PM" [ref=e231]
                    - cell "43,000" [ref=e232]
                    - cell "550.75" [ref=e233]
                    - cell "-" [ref=e234]
                    - cell "43,000" [ref=e235]
                    - cell "43,550.75" [ref=e236]
                    - cell "MPO 06" [ref=e237]
                    - cell "Partial PI" [ref=e238]:
                      - generic [ref=e239]: Partial PI
                    - cell "Create PI" [ref=e240]:
                      - button "Create PI" [ref=e242] [cursor=pointer]:
                        - generic [ref=e243]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 17:02 PM 23,465 315 - 23,465 23,780 MPO 06 Partial PI Create PI" [ref=e244]:
                    - cell "-" [ref=e245]
                    - cell "R00236507" [ref=e246]
                    - cell "City Store 3" [ref=e247]
                    - cell "8801670000725" [ref=e248]
                    - cell "ORD-260426-236502-00010" [ref=e249]
                    - cell "2026-04-26" [ref=e250]
                    - cell "17:02 PM" [ref=e251]
                    - cell "23,465" [ref=e252]
                    - cell "315" [ref=e253]
                    - cell "-" [ref=e254]
                    - cell "23,465" [ref=e255]
                    - cell "23,780" [ref=e256]
                    - cell "MPO 06" [ref=e257]
                    - cell "Partial PI" [ref=e258]:
                      - generic [ref=e259]: Partial PI
                    - cell "Create PI" [ref=e260]:
                      - button "Create PI" [ref=e262] [cursor=pointer]:
                        - generic [ref=e263]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260420-236502-00011 2026-04-20 16:51 PM 900 45 - 900 945 MPO 06 Pending Create PI" [ref=e264]:
                    - cell [ref=e265]:
                      - checkbox [ref=e266]
                    - cell "R00236507" [ref=e267]
                    - cell "City Store 3" [ref=e268]
                    - cell "8801670000725" [ref=e269]
                    - cell "ORD-260420-236502-00011" [ref=e270]
                    - cell "2026-04-20" [ref=e271]
                    - cell "16:51 PM" [ref=e272]
                    - cell "900" [ref=e273]
                    - cell "45" [ref=e274]
                    - cell "-" [ref=e275]
                    - cell "900" [ref=e276]
                    - cell "945" [ref=e277]
                    - cell "MPO 06" [ref=e278]
                    - cell "Pending" [ref=e279]:
                      - generic [ref=e280]: Pending
                    - cell "Create PI" [ref=e281]:
                      - button "Create PI" [ref=e283] [cursor=pointer]:
                        - generic [ref=e284]: 
              - generic [ref=e285]:
                - combobox [ref=e288] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e289]:
                  - list [ref=e290]:
                    - listitem [ref=e291]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e292]:
                      - button "<" [disabled]
                    - listitem [ref=e293]:
                      - button "1" [disabled] [ref=e294]
                    - listitem "You are on the last page" [ref=e295]:
                      - button ">" [disabled]
                    - listitem [ref=e296]:
                      - button ">>" [disabled]
      - generic [ref=e298] [cursor=pointer]:
        - alert [ref=e299]:
          - img [ref=e301]
          - generic [ref=e303]: successfully logged in
        - button "close" [ref=e304]:
          - img [ref=e305]
        - progressbar "notification timer" [ref=e309]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { OrderPage } from "../pages/OrderPage";
  4  | import loginData from "../testData/loginData.json";
  5  | import approvalPendingOrder from "../testData/approvalPendingOrder.json";
  6  | import { DashboardPage } from "../pages/DashboardPage";
  7  | import { PIPage } from "../pages/PIPage";
  8  | import piTestData from "../testData/piTestData.json";
  9  | 
  10 | test("TC_012_SND_PI_CreateFilterTest", async ({ page }) => {
  11 |   // Login Page
  12 |   const loginPage = new LoginPage(page);
  13 |   const data = loginData[0];
  14 |   await loginPage.gotoLoginPage(data.url);
  15 |   await loginPage.login(data.userMobileNumberInput, data.password);
  16 |   await expect(page.locator(".Toastify__toast-body")).toHaveText(
  17 |     "successfully logged in",
  18 |   );
  19 | 
  20 |   // Dashboard Page
  21 |   const dashboardPage = new DashboardPage(page);
  22 |   await dashboardPage.clickChevronRight();
  23 |   await dashboardPage.clickSND();
  24 |   await dashboardPage.clickPIMenu();
  25 |   await dashboardPage.clickCreatePI();
  26 |   await expect(page).toHaveURL(/\/snd\/pi/);
  27 | 
  28 |   // Order Page
  29 |   const orderPage = new OrderPage(page);
  30 |   const appPendingData = approvalPendingOrder[0];
  31 | 
  32 |   // PI Page
  33 |   const createPIPage = new PIPage(page);
  34 |   const piData = piTestData[0];
  35 |   await createPIPage.clickSelectDropdown();
  36 |   await createPIPage.selectBranch(piData.branch);
  37 |   await createPIPage.selectRoute(piData.route);
  38 |   await createPIPage.selectRetailer(piData.retailer);
  39 |   await createPIPage.clickSubmit();
  40 |   await createPIPage.clickFilter();
  41 |   //   await createPIPage.selectCheckboxByOrderId(piData.orderId);
  42 |   //await createPIPage.selectOrderByOrderFrom(piData.retailerName);
  43 |   const found = await createPIPage.selectOrderByOrderFrom(piData.retailerName,);
  44 |   expect(
  45 |     found,
  46 |     `Retailer Name: "${piData.retailerName}" not found in table`,
> 47 |   ).toBe(true);
     |     ^ Error: Retailer Name: "Bismillah" not found in table
  48 |   console.log(`Retailer Name: "${piData.retailerName}" found in table`);
  49 | });
  50 | 
```