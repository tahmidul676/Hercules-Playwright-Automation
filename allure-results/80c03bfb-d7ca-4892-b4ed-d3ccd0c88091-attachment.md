# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js >> SND_Order_ApprovalPendingOrderFilterTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js:8:5

# Error details

```
Error: Order From: "Bismillah" not found in table

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
            - heading "Approval Pending Order" [level=1]
            - list [ref=e65]:
              - listitem [ref=e66]:
                - link "Dashboard" [ref=e67] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e68]: /
              - listitem: Approval Pending Order
          - button "Filter" [active] [ref=e71] [cursor=pointer]:
            - generic [ref=e72]: 
            - text: Filter
        - generic [ref=e75]:
          - generic [ref=e76]:
            - generic [ref=e77]: Business Unit
            - combobox [ref=e78] [cursor=pointer]:
              - option "Select Business Unit" [selected]
              - option "CBU of Consumer Healthcare"
              - option "Chief Business Officer-Pediatrics"
              - option "Head of Business"
          - generic [ref=e79] [cursor=pointer]:
            - generic [ref=e80]: Branch
            - generic [ref=e81]:
              - log [ref=e83]
              - generic [ref=e84]:
                - generic [ref=e85]:
                  - generic [ref=e86]: Select Branch
                  - combobox [ref=e88]
                - img [ref=e92]
            - textbox "Branch"
          - generic [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: Route
            - generic [ref=e96]:
              - log [ref=e98]
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - generic [ref=e101]: Select Route
                  - combobox [ref=e103]
                - img [ref=e107]
            - textbox "Route"
          - generic [ref=e109] [cursor=pointer]:
            - generic [ref=e110]: Market
            - generic [ref=e111]:
              - log [ref=e113]
              - generic [ref=e114]:
                - generic [ref=e115]:
                  - generic [ref=e116]: Select Market
                  - combobox [ref=e118]
                - img [ref=e122]
            - textbox "Market"
          - generic [ref=e124] [cursor=pointer]:
            - generic [ref=e125]: Sub Market
            - generic [ref=e126]:
              - log [ref=e128]
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - generic [ref=e131]: Select Sub Market
                  - combobox [ref=e133]
                - img [ref=e137]
            - textbox "Sub Market"
          - generic [ref=e139] [cursor=pointer]:
            - generic [ref=e140]: Retailer
            - generic [ref=e141]:
              - log [ref=e143]
              - generic [ref=e144]:
                - generic [ref=e145]:
                  - generic [ref=e146]: Loading...
                  - combobox [ref=e148]
                - img [ref=e156]
            - textbox "Retailer"
          - generic [ref=e158]:
            - generic [ref=e159]: Invoice No
            - textbox "Invoice No" [ref=e161]
          - generic [ref=e162]:
            - generic [ref=e163]: Order ID
            - textbox "Order ID" [ref=e165]
          - generic [ref=e166]:
            - generic [ref=e167]: Source
            - combobox "Source Source" [ref=e168] [cursor=pointer]:
              - option "Select Source" [selected]
              - option "SR App"
              - option "Web"
          - generic [ref=e169]:
            - generic [ref=e170]: Date Range
            - generic [ref=e172]:
              - generic [ref=e173]:
                - generic [ref=e174]: "0"
                - spinbutton [ref=e175]: "8"
                - text: "-"
                - generic [ref=e176]: "0"
                - spinbutton [ref=e177]: "5"
                - text: "-"
                - spinbutton [ref=e178]: "2026"
              - generic [ref=e179]: "-"
              - generic [ref=e180]:
                - spinbutton [ref=e181]: "15"
                - text: "-"
                - generic [ref=e182]: "0"
                - spinbutton [ref=e183]: "5"
                - text: "-"
                - spinbutton [ref=e184]: "2026"
              - button [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: 
          - generic [ref=e187]:
            - generic [ref=e188]: Source
            - combobox [ref=e189] [cursor=pointer]:
              - option "Select Source" [selected]
              - option "SR App"
              - option "Web"
          - generic [ref=e190]:
            - generic [ref=e191]: Retailer Code
            - textbox "Retailer Code" [ref=e193]
          - group [ref=e195]:
            - button "󰍉 Submit" [ref=e196] [cursor=pointer]:
              - text: 󰍉
              - generic [ref=e197]: Submit
            - button "Reset Filter" [ref=e198] [cursor=pointer]:
              - generic [ref=e199]: 󰑐
              - text: Reset
        - generic [ref=e201]:
          - generic [ref=e202]:
            - generic [ref=e203]:
              - heading "Approval Pending Order List" [level=5] [ref=e204]
              - paragraph
            - group [ref=e206] [cursor=pointer]:
              - button "Download Sheet" [ref=e208]:
                - generic [ref=e209]: 
          - generic [ref=e210]:
            - table [ref=e212]:
              - rowgroup [ref=e213]:
                - row "SL Order Id Invoice Id Order Date Discount Amount Total Paid Amount Order From Order To Comment Status Action" [ref=e214]:
                  - columnheader "SL" [ref=e215]
                  - columnheader "Order Id" [ref=e216]
                  - columnheader "Invoice Id" [ref=e217]
                  - columnheader "Order Date" [ref=e218]
                  - columnheader "Discount Amount" [ref=e219]
                  - columnheader "Total" [ref=e220]
                  - columnheader "Paid Amount" [ref=e221]
                  - columnheader "Order From" [ref=e222]
                  - columnheader "Order To" [ref=e223]
                  - columnheader "Comment" [ref=e224]
                  - columnheader "Status" [ref=e225]
                  - columnheader "Action" [ref=e226]
              - rowgroup [ref=e227]:
                - row "ORD-260510-236502-00014 1778404228853 2026-05-10 - 2,230 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e228]:
                  - cell [ref=e229]:
                    - checkbox [ref=e230]
                  - cell "ORD-260510-236502-00014" [ref=e231]
                  - cell "1778404228853" [ref=e232]
                  - cell "2026-05-10" [ref=e233]
                  - cell "-" [ref=e234]
                  - cell "2,230" [ref=e235]
                  - cell "0.00" [ref=e236]
                  - cell "City Store 3" [ref=e237]
                  - cell "MPO 06" [ref=e238]
                  - cell "-" [ref=e239]
                  - cell "Pending" [ref=e240]:
                    - generic [ref=e241]: Pending
                  - cell "View Incoming Order Details Update Order" [ref=e242]:
                    - button "View Incoming Order Details" [ref=e244] [cursor=pointer]:
                      - generic [ref=e245]: 
                    - button "Update Order" [ref=e247] [cursor=pointer]:
                      - generic [ref=e248]: 
                - row "ORD-260510-236502-00012 1778403481105 2026-05-10 - 6,210 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e249]:
                  - cell [ref=e250]:
                    - checkbox [ref=e251]
                  - cell "ORD-260510-236502-00012" [ref=e252]
                  - cell "1778403481105" [ref=e253]
                  - cell "2026-05-10" [ref=e254]
                  - cell "-" [ref=e255]
                  - cell "6,210" [ref=e256]
                  - cell "0.00" [ref=e257]
                  - cell "City Store 3" [ref=e258]
                  - cell "MPO 06" [ref=e259]
                  - cell "-" [ref=e260]
                  - cell "Pending" [ref=e261]:
                    - generic [ref=e262]: Pending
                  - cell "View Incoming Order Details Update Order" [ref=e263]:
                    - button "View Incoming Order Details" [ref=e265] [cursor=pointer]:
                      - generic [ref=e266]: 
                    - button "Update Order" [ref=e268] [cursor=pointer]:
                      - generic [ref=e269]: 
            - generic [ref=e270]:
              - combobox [ref=e273] [cursor=pointer]:
                - option "10 / page" [selected]
                - option "20 / page"
                - option "50 / page"
                - option "100 / page"
              - navigation "Page navigation example" [ref=e274]:
                - list [ref=e275]:
                  - listitem [ref=e276]:
                    - button "<<"
                  - listitem "You are on the first page" [ref=e277]:
                    - button "<" [disabled]
                  - listitem [ref=e278]:
                    - button "1" [disabled] [ref=e279]
                  - listitem "You are on the last page" [ref=e280]:
                    - button ">" [disabled]
                  - listitem [ref=e281]:
                    - button ">>" [disabled]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { OrderPage } from "../pages/OrderPage";
  4  | import loginData from "../testData/loginData.json";
  5  | import approvalPendingOrder from "../testData/approvalPendingOrder.json";
  6  | import { DashboardPage } from "../pages/DashboardPage";
  7  | 
  8  | test("SND_Order_ApprovalPendingOrderFilterTest", async ({ page }) => {
  9  |   // Login Page
  10 |   const loginPage = new LoginPage(page);
  11 |   const data = loginData[0];
  12 |   await loginPage.gotoLoginPage(data.url);
  13 |   await loginPage.login(data.userMobileNumberInput, data.password);
  14 |   //const data = loginData[0];
  15 |   //await page.goto(data.url);
  16 |   // Dashboard Page
  17 |   const dashboardPage = new DashboardPage(page);
  18 |   await dashboardPage.clickChevronRight();
  19 |   await dashboardPage.clickSND();
  20 |   await dashboardPage.clickOrder();
  21 |   await dashboardPage.clickApprovalPendingOrder();
  22 |   await expect(page).toHaveURL(/\/snd\/orders\/approval-pending/);
  23 | 
  24 |   // Order Page
  25 |   const orderPage = new OrderPage(page);
  26 |   const appPendingData = approvalPendingOrder[0];
  27 | 
  28 |   await orderPage.selectBranch(appPendingData.branch);
  29 |   await orderPage.selectRoute(appPendingData.route);
  30 |   await orderPage.selectRetailer(appPendingData.retailer);
  31 |   await orderPage.clickSubmit();
  32 |   await orderPage.clickFilter();
  33 |   await orderPage.selectOrderByOrderFrom(appPendingData.orderFrom);
  34 |   const found = await orderPage.selectOrderByOrderFrom(
  35 |     appPendingData.orderFrom,
  36 |   );
  37 |   expect(
  38 |     found,
  39 |     `Order From: "${appPendingData.orderFrom}" not found in table`,
> 40 |   ).toBe(true);
     |     ^ Error: Order From: "Bismillah" not found in table
  41 |   console.log(`Order From: "${appPendingData.orderFrom}" found in table`);
  42 | });
  43 | 
  44 | // Wrong search in Filter
  45 | 
  46 | test("SND_Order_ApprovalPendingOrderWrongSearchFilterTest", async ({
  47 |   page,
  48 | }) => {
  49 |   // Login Page
  50 |   const loginPage = new LoginPage(page);
  51 |   const data = loginData[0];
  52 |   await loginPage.gotoLoginPage(data.url);
  53 |   await loginPage.login(data.userMobileNumberInput, data.password);
  54 |   //const data = loginData[0];
  55 |   //await page.goto(data.url);
  56 |   // Dashboard Page
  57 |   const dashboardPage = new DashboardPage(page);
  58 |   await dashboardPage.clickChevronRight();
  59 |   await dashboardPage.clickSND();
  60 |   await dashboardPage.clickOrder();
  61 |   await dashboardPage.clickApprovalPendingOrder();
  62 |   await expect(page).toHaveURL(/\/snd\/orders\/approval-pending/);
  63 | 
  64 |   // Order Page
  65 |   const orderPage = new OrderPage(page);
  66 |   const appPendingData = approvalPendingOrder[1];
  67 | 
  68 |   await orderPage.selectBranch(appPendingData.branch);
  69 |   await orderPage.selectRoute(appPendingData.route);
  70 |   await orderPage.selectRetailer(appPendingData.retailer);
  71 |   await orderPage.clickSubmit();
  72 |   await orderPage.clickFilter();
  73 |   await orderPage.selectOrderByOrderFrom(appPendingData.orderFromInvalid);
  74 |   const found = await orderPage.selectOrderByOrderFrom(
  75 |     appPendingData.orderFromInvalid,
  76 |   );
  77 |   expect(
  78 |     found,
  79 |     `Order From: "${appPendingData.orderFromInvalid}" not found in table`,
  80 |   ).toBe(false);
  81 |   console.log(
  82 |     `Order From: "${appPendingData.orderFromInvalid}" not found in table`,
  83 |   );
  84 | });
  85 | 
```