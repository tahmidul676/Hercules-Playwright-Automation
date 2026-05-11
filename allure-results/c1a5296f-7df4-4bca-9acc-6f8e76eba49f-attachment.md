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
              - button [disabled] [ref=e174]:
                - progressbar "three-dots-loading" [ref=e176]:
                  - img [ref=e177]
              - button "Reset Filter" [disabled] [ref=e181]:
                - generic [ref=e182]: 󰑐
                - text: Reset
          - generic [ref=e183]:
            - generic [ref=e185]:
              - heading "Order List" [level=5] [ref=e186]
              - paragraph
            - generic [ref=e189]:
              - progressbar "circles-loading" [ref=e191]:
                - img "circles-loading" [ref=e192]
              - table [ref=e195]:
                - rowgroup [ref=e196]:
                  - row "SL Retailer Code Retailer Name Mobile Number Order Number Date Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Order Status Action" [ref=e197]:
                    - columnheader "SL" [ref=e198]
                    - columnheader "Retailer Code" [ref=e199]
                    - columnheader "Retailer Name" [ref=e200]
                    - columnheader "Mobile Number" [ref=e201]
                    - columnheader "Order Number" [ref=e202]
                    - columnheader "Date" [ref=e203]
                    - columnheader "Time" [ref=e204]
                    - columnheader "TP Amount" [ref=e205]
                    - columnheader "VAT Amount" [ref=e206]
                    - columnheader "Discount Amount" [ref=e207]
                    - columnheader "Net TP Amount" [ref=e208]
                    - columnheader "Net Amount" [ref=e209]
                    - columnheader "Created By" [ref=e210]
                    - columnheader "Order Status" [ref=e211]
                    - columnheader "Action" [ref=e212]
                - rowgroup [ref=e213]:
                  - row "R00236507 City Store 3 8801670000725 ORD-260505-236502-00003 2026-05-05 15:16 PM 10,022.50 - - 10,022.50 10,022.50 MPO 06 Pending Create PI" [ref=e214]:
                    - cell [ref=e215]:
                      - checkbox [ref=e216]
                    - cell "R00236507" [ref=e217]
                    - cell "City Store 3" [ref=e218]
                    - cell "8801670000725" [ref=e219]
                    - cell "ORD-260505-236502-00003" [ref=e220]
                    - cell "2026-05-05" [ref=e221]
                    - cell "15:16 PM" [ref=e222]
                    - cell "10,022.50" [ref=e223]
                    - cell "-" [ref=e224]
                    - cell "-" [ref=e225]
                    - cell "10,022.50" [ref=e226]
                    - cell "10,022.50" [ref=e227]
                    - cell "MPO 06" [ref=e228]
                    - cell "Pending" [ref=e229]:
                      - generic [ref=e230]: Pending
                    - cell "Create PI" [ref=e231]:
                      - button "Create PI" [ref=e233] [cursor=pointer]:
                        - generic [ref=e234]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260505-236502-00002 2026-05-05 15:07 PM 10,022.50 - - 10,022.50 10,022.50 MPO 06 Pending Create PI" [ref=e235]:
                    - cell [ref=e236]:
                      - checkbox [ref=e237]
                    - cell "R00236507" [ref=e238]
                    - cell "City Store 3" [ref=e239]
                    - cell "8801670000725" [ref=e240]
                    - cell "ORD-260505-236502-00002" [ref=e241]
                    - cell "2026-05-05" [ref=e242]
                    - cell "15:07 PM" [ref=e243]
                    - cell "10,022.50" [ref=e244]
                    - cell "-" [ref=e245]
                    - cell "-" [ref=e246]
                    - cell "10,022.50" [ref=e247]
                    - cell "10,022.50" [ref=e248]
                    - cell "MPO 06" [ref=e249]
                    - cell "Pending" [ref=e250]:
                      - generic [ref=e251]: Pending
                    - cell "Create PI" [ref=e252]:
                      - button "Create PI" [ref=e254] [cursor=pointer]:
                        - generic [ref=e255]: 
                  - row "R00236465 BOrak store 8801674173955 ORD-260430-236517-00024 2026-04-30 11:32 AM 11,400 465 - 11,400 11,865 MPO user 8 Pending Create PI" [ref=e256]:
                    - cell [ref=e257]:
                      - checkbox [ref=e258]
                    - cell "R00236465" [ref=e259]
                    - cell "BOrak store" [ref=e260]
                    - cell "8801674173955" [ref=e261]
                    - cell "ORD-260430-236517-00024" [ref=e262]
                    - cell "2026-04-30" [ref=e263]
                    - cell "11:32 AM" [ref=e264]
                    - cell "11,400" [ref=e265]
                    - cell "465" [ref=e266]
                    - cell "-" [ref=e267]
                    - cell "11,400" [ref=e268]
                    - cell "11,865" [ref=e269]
                    - cell "MPO user 8" [ref=e270]
                    - cell "Pending" [ref=e271]:
                      - generic [ref=e272]: Pending
                    - cell "Create PI" [ref=e273]:
                      - button "Create PI" [ref=e275] [cursor=pointer]:
                        - generic [ref=e276]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00012 2026-04-26 17:05 PM 32,770 1,064.75 - 32,770 33,834.75 MPO 06 Partial PI Create PI" [ref=e277]:
                    - cell "-" [ref=e278]
                    - cell "R00236507" [ref=e279]
                    - cell "City Store 3" [ref=e280]
                    - cell "8801670000725" [ref=e281]
                    - cell "ORD-260426-236502-00012" [ref=e282]
                    - cell "2026-04-26" [ref=e283]
                    - cell "17:05 PM" [ref=e284]
                    - cell "32,770" [ref=e285]
                    - cell "1,064.75" [ref=e286]
                    - cell "-" [ref=e287]
                    - cell "32,770" [ref=e288]
                    - cell "33,834.75" [ref=e289]
                    - cell "MPO 06" [ref=e290]
                    - cell "Partial PI" [ref=e291]:
                      - generic [ref=e292]: Partial PI
                    - cell "Create PI" [ref=e293]:
                      - button "Create PI" [ref=e295] [cursor=pointer]:
                        - generic [ref=e296]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00011 2026-04-26 17:04 PM 43,000 550.75 - 43,000 43,550.75 MPO 06 Partial PI Create PI" [ref=e297]:
                    - cell "-" [ref=e298]
                    - cell "R00236507" [ref=e299]
                    - cell "City Store 3" [ref=e300]
                    - cell "8801670000725" [ref=e301]
                    - cell "ORD-260426-236502-00011" [ref=e302]
                    - cell "2026-04-26" [ref=e303]
                    - cell "17:04 PM" [ref=e304]
                    - cell "43,000" [ref=e305]
                    - cell "550.75" [ref=e306]
                    - cell "-" [ref=e307]
                    - cell "43,000" [ref=e308]
                    - cell "43,550.75" [ref=e309]
                    - cell "MPO 06" [ref=e310]
                    - cell "Partial PI" [ref=e311]:
                      - generic [ref=e312]: Partial PI
                    - cell "Create PI" [ref=e313]:
                      - button "Create PI" [ref=e315] [cursor=pointer]:
                        - generic [ref=e316]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 17:02 PM 23,465 315 - 23,465 23,780 MPO 06 Partial PI Create PI" [ref=e317]:
                    - cell "-" [ref=e318]
                    - cell "R00236507" [ref=e319]
                    - cell "City Store 3" [ref=e320]
                    - cell "8801670000725" [ref=e321]
                    - cell "ORD-260426-236502-00010" [ref=e322]
                    - cell "2026-04-26" [ref=e323]
                    - cell "17:02 PM" [ref=e324]
                    - cell "23,465" [ref=e325]
                    - cell "315" [ref=e326]
                    - cell "-" [ref=e327]
                    - cell "23,465" [ref=e328]
                    - cell "23,780" [ref=e329]
                    - cell "MPO 06" [ref=e330]
                    - cell "Partial PI" [ref=e331]:
                      - generic [ref=e332]: Partial PI
                    - cell "Create PI" [ref=e333]:
                      - button "Create PI" [ref=e335] [cursor=pointer]:
                        - generic [ref=e336]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260420-236502-00011 2026-04-20 16:51 PM 900 45 - 900 945 MPO 06 Pending Create PI" [ref=e337]:
                    - cell [ref=e338]:
                      - checkbox [ref=e339]
                    - cell "R00236507" [ref=e340]
                    - cell "City Store 3" [ref=e341]
                    - cell "8801670000725" [ref=e342]
                    - cell "ORD-260420-236502-00011" [ref=e343]
                    - cell "2026-04-20" [ref=e344]
                    - cell "16:51 PM" [ref=e345]
                    - cell "900" [ref=e346]
                    - cell "45" [ref=e347]
                    - cell "-" [ref=e348]
                    - cell "900" [ref=e349]
                    - cell "945" [ref=e350]
                    - cell "MPO 06" [ref=e351]
                    - cell "Pending" [ref=e352]:
                      - generic [ref=e353]: Pending
                    - cell "Create PI" [ref=e354]:
                      - button "Create PI" [ref=e356] [cursor=pointer]:
                        - generic [ref=e357]: 
                  - row "R00236508 Abcd Store 7 8801670000726 ORD-260420-236502-00006 2026-04-20 15:53 PM 1,500 75 - 1,500 1,575 MPO 06 Pending Create PI" [ref=e358]:
                    - cell [ref=e359]:
                      - checkbox [ref=e360]
                    - cell "R00236508" [ref=e361]
                    - cell "Abcd Store 7" [ref=e362]
                    - cell "8801670000726" [ref=e363]
                    - cell "ORD-260420-236502-00006" [ref=e364]
                    - cell "2026-04-20" [ref=e365]
                    - cell "15:53 PM" [ref=e366]
                    - cell "1,500" [ref=e367]
                    - cell "75" [ref=e368]
                    - cell "-" [ref=e369]
                    - cell "1,500" [ref=e370]
                    - cell "1,575" [ref=e371]
                    - cell "MPO 06" [ref=e372]
                    - cell "Pending" [ref=e373]:
                      - generic [ref=e374]: Pending
                    - cell "Create PI" [ref=e375]:
                      - button "Create PI" [ref=e377] [cursor=pointer]:
                        - generic [ref=e378]: 
                  - row "- R00236465 BOrak store 8801674173955 ORD-251223-236461-00003 2025-12-23 14:24 PM 30,000 1,500 200 29,800 31,300 User Sub Territory Partial PI Create PI" [ref=e379]:
                    - cell "-" [ref=e380]
                    - cell "R00236465" [ref=e381]
                    - cell "BOrak store" [ref=e382]
                    - cell "8801674173955" [ref=e383]
                    - cell "ORD-251223-236461-00003" [ref=e384]
                    - cell "2025-12-23" [ref=e385]
                    - cell "14:24 PM" [ref=e386]
                    - cell "30,000" [ref=e387]
                    - cell "1,500" [ref=e388]
                    - cell "200" [ref=e389]
                    - cell "29,800" [ref=e390]
                    - cell "31,300" [ref=e391]
                    - cell "User Sub Territory" [ref=e392]
                    - cell "Partial PI" [ref=e393]:
                      - generic [ref=e394]: Partial PI
                    - cell "Create PI" [ref=e395]:
                      - button "Create PI" [ref=e397] [cursor=pointer]:
                        - generic [ref=e398]: 
      - generic [ref=e400] [cursor=pointer]:
        - alert [ref=e401]:
          - img [ref=e403]
          - generic [ref=e405]: successfully logged in
        - button "close" [ref=e406]:
          - img [ref=e407]
        - progressbar "notification timer" [ref=e411]
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