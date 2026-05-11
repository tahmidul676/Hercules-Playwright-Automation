# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_06_SND_PI_CreateTest.spec.js >> TC_06_SND_PI_CreateTest
- Location: tests\TC_06_SND_PI_CreateTest.spec.js:8:5

# Error details

```
TypeError: createPIPage.clickProcessSelectedOrderssss is not a function
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
              - textbox "Order Number" [ref=e156]:
                - /placeholder: "Order Number "
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
                  - row "R00236507 City Store 3 8801670000725 ORD-260505-236502-00003 2026-05-05 15:16 PM 10,022.50 - - 10,022.50 10,022.50 MPO 06 Pending Create PI" [ref=e204]:
                    - cell [ref=e205]:
                      - checkbox [ref=e206]
                    - cell "R00236507" [ref=e207]
                    - cell "City Store 3" [ref=e208]
                    - cell "8801670000725" [ref=e209]
                    - cell "ORD-260505-236502-00003" [ref=e210]
                    - cell "2026-05-05" [ref=e211]
                    - cell "15:16 PM" [ref=e212]
                    - cell "10,022.50" [ref=e213]
                    - cell "-" [ref=e214]
                    - cell "-" [ref=e215]
                    - cell "10,022.50" [ref=e216]
                    - cell "10,022.50" [ref=e217]
                    - cell "MPO 06" [ref=e218]
                    - cell "Pending" [ref=e219]:
                      - generic [ref=e220]: Pending
                    - cell "Create PI" [ref=e221]:
                      - button "Create PI" [ref=e223] [cursor=pointer]:
                        - generic [ref=e224]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260505-236502-00002 2026-05-05 15:07 PM 10,022.50 - - 10,022.50 10,022.50 MPO 06 Pending Create PI" [ref=e225]:
                    - cell [ref=e226]:
                      - checkbox [ref=e227]
                    - cell "R00236507" [ref=e228]
                    - cell "City Store 3" [ref=e229]
                    - cell "8801670000725" [ref=e230]
                    - cell "ORD-260505-236502-00002" [ref=e231]
                    - cell "2026-05-05" [ref=e232]
                    - cell "15:07 PM" [ref=e233]
                    - cell "10,022.50" [ref=e234]
                    - cell "-" [ref=e235]
                    - cell "-" [ref=e236]
                    - cell "10,022.50" [ref=e237]
                    - cell "10,022.50" [ref=e238]
                    - cell "MPO 06" [ref=e239]
                    - cell "Pending" [ref=e240]:
                      - generic [ref=e241]: Pending
                    - cell "Create PI" [ref=e242]:
                      - button "Create PI" [ref=e244] [cursor=pointer]:
                        - generic [ref=e245]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00012 2026-04-26 17:05 PM 32,770 1,064.75 - 32,770 33,834.75 MPO 06 Partial PI Create PI" [ref=e246]:
                    - cell "-" [ref=e247]
                    - cell "R00236507" [ref=e248]
                    - cell "City Store 3" [ref=e249]
                    - cell "8801670000725" [ref=e250]
                    - cell "ORD-260426-236502-00012" [ref=e251]
                    - cell "2026-04-26" [ref=e252]
                    - cell "17:05 PM" [ref=e253]
                    - cell "32,770" [ref=e254]
                    - cell "1,064.75" [ref=e255]
                    - cell "-" [ref=e256]
                    - cell "32,770" [ref=e257]
                    - cell "33,834.75" [ref=e258]
                    - cell "MPO 06" [ref=e259]
                    - cell "Partial PI" [ref=e260]:
                      - generic [ref=e261]: Partial PI
                    - cell "Create PI" [ref=e262]:
                      - button "Create PI" [ref=e264] [cursor=pointer]:
                        - generic [ref=e265]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00011 2026-04-26 17:04 PM 43,000 550.75 - 43,000 43,550.75 MPO 06 Partial PI Create PI" [ref=e266]:
                    - cell "-" [ref=e267]
                    - cell "R00236507" [ref=e268]
                    - cell "City Store 3" [ref=e269]
                    - cell "8801670000725" [ref=e270]
                    - cell "ORD-260426-236502-00011" [ref=e271]
                    - cell "2026-04-26" [ref=e272]
                    - cell "17:04 PM" [ref=e273]
                    - cell "43,000" [ref=e274]
                    - cell "550.75" [ref=e275]
                    - cell "-" [ref=e276]
                    - cell "43,000" [ref=e277]
                    - cell "43,550.75" [ref=e278]
                    - cell "MPO 06" [ref=e279]
                    - cell "Partial PI" [ref=e280]:
                      - generic [ref=e281]: Partial PI
                    - cell "Create PI" [ref=e282]:
                      - button "Create PI" [ref=e284] [cursor=pointer]:
                        - generic [ref=e285]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 17:02 PM 23,465 315 - 23,465 23,780 MPO 06 Partial PI Create PI" [ref=e286]:
                    - cell "-" [ref=e287]
                    - cell "R00236507" [ref=e288]
                    - cell "City Store 3" [ref=e289]
                    - cell "8801670000725" [ref=e290]
                    - cell "ORD-260426-236502-00010" [ref=e291]
                    - cell "2026-04-26" [ref=e292]
                    - cell "17:02 PM" [ref=e293]
                    - cell "23,465" [ref=e294]
                    - cell "315" [ref=e295]
                    - cell "-" [ref=e296]
                    - cell "23,465" [ref=e297]
                    - cell "23,780" [ref=e298]
                    - cell "MPO 06" [ref=e299]
                    - cell "Partial PI" [ref=e300]:
                      - generic [ref=e301]: Partial PI
                    - cell "Create PI" [ref=e302]:
                      - button "Create PI" [ref=e304] [cursor=pointer]:
                        - generic [ref=e305]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260420-236502-00011 2026-04-20 16:51 PM 900 45 - 900 945 MPO 06 Pending Create PI" [ref=e306]:
                    - cell [ref=e307]:
                      - checkbox [ref=e308]
                    - cell "R00236507" [ref=e309]
                    - cell "City Store 3" [ref=e310]
                    - cell "8801670000725" [ref=e311]
                    - cell "ORD-260420-236502-00011" [ref=e312]
                    - cell "2026-04-20" [ref=e313]
                    - cell "16:51 PM" [ref=e314]
                    - cell "900" [ref=e315]
                    - cell "45" [ref=e316]
                    - cell "-" [ref=e317]
                    - cell "900" [ref=e318]
                    - cell "945" [ref=e319]
                    - cell "MPO 06" [ref=e320]
                    - cell "Pending" [ref=e321]:
                      - generic [ref=e322]: Pending
                    - cell "Create PI" [ref=e323]:
                      - button "Create PI" [ref=e325] [cursor=pointer]:
                        - generic [ref=e326]: 
                  - row "R00236508 Abcd Store 7 8801670000726 ORD-260420-236502-00006 2026-04-20 15:53 PM 1,500 75 - 1,500 1,575 MPO 06 Pending Create PI" [ref=e327]:
                    - cell [ref=e328]:
                      - checkbox [ref=e329]
                    - cell "R00236508" [ref=e330]
                    - cell "Abcd Store 7" [ref=e331]
                    - cell "8801670000726" [ref=e332]
                    - cell "ORD-260420-236502-00006" [ref=e333]
                    - cell "2026-04-20" [ref=e334]
                    - cell "15:53 PM" [ref=e335]
                    - cell "1,500" [ref=e336]
                    - cell "75" [ref=e337]
                    - cell "-" [ref=e338]
                    - cell "1,500" [ref=e339]
                    - cell "1,575" [ref=e340]
                    - cell "MPO 06" [ref=e341]
                    - cell "Pending" [ref=e342]:
                      - generic [ref=e343]: Pending
                    - cell "Create PI" [ref=e344]:
                      - button "Create PI" [ref=e346] [cursor=pointer]:
                        - generic [ref=e347]: 
              - generic [ref=e348]:
                - combobox [ref=e351] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e352]:
                  - list [ref=e353]:
                    - listitem [ref=e354]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e355]:
                      - button "<" [disabled]
                    - listitem [ref=e356]:
                      - button "1" [disabled] [ref=e357]
                    - listitem "You are on the last page" [ref=e358]:
                      - button ">" [disabled]
                    - listitem [ref=e359]:
                      - button ">>" [disabled]
      - generic [ref=e361] [cursor=pointer]:
        - alert [ref=e362]:
          - img [ref=e364]
          - generic [ref=e366]: successfully logged in
        - button "close" [ref=e367]:
          - img [ref=e368]
        - progressbar "notification timer" [ref=e372]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { DashboardPage } from "../pages/DashboardPage";
  4  | import { PIPage } from "../pages/PIPage";
  5  | import loginData from "../testData/loginData.json";
  6  | import piTestData from "../testData/piTestData.json";
  7  | 
  8  | test("TC_06_SND_PI_CreateTest", async ({ page }) => {
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
  23 |   await dashboardPage.clickCreatePI();
  24 |   await expect(page).toHaveURL(/\/snd\/pi/);
  25 | 
  26 |   // PI Page
  27 |   const createPIPage = new PIPage(page);
  28 |   const piData = piTestData[0];
  29 |   await createPIPage.clickSelectDropdown();
  30 |   await createPIPage.selectBranch(piData.branch);
  31 |   await createPIPage.selectRoute(piData.route);
  32 |   await createPIPage.selectRetailer(piData.retailer);
  33 |   await createPIPage.clickSubmit();
  34 |   await createPIPage.clickFilter();
  35 |   await createPIPage.selectCheckboxByOrderId(piData.orderId);
> 36 |   await createPIPage.clickProcessSelectedOrderssss();
     |                      ^ TypeError: createPIPage.clickProcessSelectedOrderssss is not a function
  37 | });
  38 | 
```