# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js
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
              - heading "Approval Pending Order" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Approval Pending Order
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
              - generic [ref=e135]: Retailer
              - generic [ref=e136]:
                - log [ref=e138]
                - generic [ref=e139]:
                  - generic [ref=e140]:
                    - generic [ref=e141]: Select Retailer
                    - combobox [ref=e143]
                  - img [ref=e147]
              - textbox "Retailer"
            - generic [ref=e149]:
              - generic [ref=e150]: Invoice No
              - textbox "Invoice No" [ref=e152]
            - generic [ref=e153]:
              - generic [ref=e154]: Order ID
              - textbox "Order ID" [ref=e156]
            - generic [ref=e157]:
              - generic [ref=e158]: Source
              - combobox "Source Source" [ref=e159] [cursor=pointer]:
                - option "Select Source" [selected]
                - option "SR App"
                - option "Web"
            - generic [ref=e160]:
              - generic [ref=e161]: Date Range
              - generic [ref=e163]:
                - generic [ref=e164]:
                  - generic [ref=e165]: "0"
                  - spinbutton [ref=e166]: "7"
                  - text: "-"
                  - generic [ref=e167]: "0"
                  - spinbutton [ref=e168]: "5"
                  - text: "-"
                  - spinbutton [ref=e169]: "2026"
                - generic [ref=e170]: "-"
                - generic [ref=e171]:
                  - spinbutton [ref=e172]: "14"
                  - text: "-"
                  - generic [ref=e173]: "0"
                  - spinbutton [ref=e174]: "5"
                  - text: "-"
                  - spinbutton [ref=e175]: "2026"
                - button [ref=e176] [cursor=pointer]:
                  - generic [ref=e177]: 
            - generic [ref=e178]:
              - generic [ref=e179]: Source
              - combobox [ref=e180] [cursor=pointer]:
                - option "Select Source" [selected]
                - option "SR App"
                - option "Web"
            - generic [ref=e181]:
              - generic [ref=e182]: Retailer Code
              - textbox "Retailer Code" [ref=e184]
            - group [ref=e186]:
              - button "󰍉 Submit" [ref=e187] [cursor=pointer]:
                - text: 󰍉
                - generic [ref=e188]: Submit
              - button "Reset Filter" [ref=e189] [cursor=pointer]:
                - generic [ref=e190]: 󰑐
                - text: Reset
          - generic [ref=e192]:
            - generic [ref=e193]:
              - generic [ref=e194]:
                - heading "Approval Pending Order List" [level=5] [ref=e195]
                - paragraph
              - group [ref=e197] [cursor=pointer]:
                - button "Download Sheet" [ref=e199]:
                  - generic [ref=e200]: 
            - generic [ref=e201]:
              - table [ref=e203]:
                - rowgroup [ref=e204]:
                  - row "SL Order Id Invoice Id Order Date Discount Amount Total Paid Amount Order From Order To Comment Status Action" [ref=e205]:
                    - columnheader "SL" [ref=e206]
                    - columnheader "Order Id" [ref=e207]
                    - columnheader "Invoice Id" [ref=e208]
                    - columnheader "Order Date" [ref=e209]
                    - columnheader "Discount Amount" [ref=e210]
                    - columnheader "Total" [ref=e211]
                    - columnheader "Paid Amount" [ref=e212]
                    - columnheader "Order From" [ref=e213]
                    - columnheader "Order To" [ref=e214]
                    - columnheader "Comment" [ref=e215]
                    - columnheader "Status" [ref=e216]
                    - columnheader "Action" [ref=e217]
                - rowgroup [ref=e218]:
                  - row "ORD-260510-236502-00014 1778404228853 2026-05-10 - 2,230 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e219]:
                    - cell [ref=e220]:
                      - checkbox [ref=e221]
                    - cell "ORD-260510-236502-00014" [ref=e222]
                    - cell "1778404228853" [ref=e223]
                    - cell "2026-05-10" [ref=e224]
                    - cell "-" [ref=e225]
                    - cell "2,230" [ref=e226]
                    - cell "0.00" [ref=e227]
                    - cell "City Store 3" [ref=e228]
                    - cell "MPO 06" [ref=e229]
                    - cell "-" [ref=e230]
                    - cell "Pending" [ref=e231]:
                      - generic [ref=e232]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e233]:
                      - button "View Incoming Order Details" [ref=e235] [cursor=pointer]:
                        - generic [ref=e236]: 
                      - button "Update Order" [ref=e238] [cursor=pointer]:
                        - generic [ref=e239]: 
                  - row "ORD-260510-236502-00012 1778403481105 2026-05-10 - 6,210 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e240]:
                    - cell [ref=e241]:
                      - checkbox [ref=e242]
                    - cell "ORD-260510-236502-00012" [ref=e243]
                    - cell "1778403481105" [ref=e244]
                    - cell "2026-05-10" [ref=e245]
                    - cell "-" [ref=e246]
                    - cell "6,210" [ref=e247]
                    - cell "0.00" [ref=e248]
                    - cell "City Store 3" [ref=e249]
                    - cell "MPO 06" [ref=e250]
                    - cell "-" [ref=e251]
                    - cell "Pending" [ref=e252]:
                      - generic [ref=e253]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e254]:
                      - button "View Incoming Order Details" [ref=e256] [cursor=pointer]:
                        - generic [ref=e257]: 
                      - button "Update Order" [ref=e259] [cursor=pointer]:
                        - generic [ref=e260]: 
              - generic [ref=e261]:
                - combobox [ref=e264] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e265]:
                  - list [ref=e266]:
                    - listitem [ref=e267]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e268]:
                      - button "<" [disabled]
                    - listitem [ref=e269]:
                      - button "1" [disabled] [ref=e270]
                    - listitem "You are on the last page" [ref=e271]:
                      - button ">" [disabled]
                    - listitem [ref=e272]:
                      - button ">>" [disabled]
      - generic [ref=e274] [cursor=pointer]:
        - generic [ref=e275]:
          - img [ref=e277]
          - generic [ref=e279]: successfully logged in
        - button "close" [ref=e280]:
          - img [ref=e281]
        - generic [ref=e283]:
          - progressbar "notification timer"
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
  8  | test("TC_05_SND_Order_ApprovalPendingOrderFilterTest.spec.js", async ({ page }) => {
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
  22 |   await dashboardPage.clickOrder();
  23 |   await dashboardPage.clickApprovalPendingOrder();
  24 |   await expect(page).toHaveURL(/\/snd\/orders\/approval-pending/);
  25 | 
  26 |   // Order Page
  27 |   const orderPage = new OrderPage(page);
  28 |   const appPendingData = approvalPendingOrder[0];
  29 | 
  30 |   await orderPage.selectBranch(appPendingData.branch);
  31 |   await orderPage.selectRoute(appPendingData.route);
  32 |   await orderPage.selectRetailer(appPendingData.retailer);
  33 |   await orderPage.clickSubmit();
  34 |   await orderPage.clickFilter();
  35 |  await orderPage.selectOrderByOrderFrom(appPendingData.orderFrom);
  36 |  const found = await orderPage.selectOrderByOrderFrom(appPendingData.orderFrom);
> 37 | expect(found, `Order From: "${appPendingData.orderFrom}" not found in table`).toBe(true);
     |                                                                               ^ Error: Order From: "Bismillah" not found in table
  38 | console.log(`Order From: "${appPendingData.orderFrom}" found in table`);
  39 |   
  40 | 
  41 | });
  42 | 
```