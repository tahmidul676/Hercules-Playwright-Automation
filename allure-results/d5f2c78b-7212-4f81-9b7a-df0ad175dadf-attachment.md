# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_07_SND_Order_ApprovalPendingOrderViewTableInfoTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_07_SND_Order_ApprovalPendingOrderViewTableInfoTest.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 1380
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
              - heading "Order Details" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Order Details
            - link "List" [ref=e64] [cursor=pointer]:
              - /url: /snd/orders/approval-pending?from=2026-05-07&to=2026-05-14&warehouse_id=400&route_id=3611&retailer_id=236507&retailer_name=City+Store+3
              - button "List" [ref=e66]:
                - generic [ref=e67]: 
                - text: List
          - generic [ref=e73]:
            - generic [ref=e75]:
              - generic [ref=e77]: "1"
              - generic "Order" [ref=e79]
            - generic [ref=e80]:
              - generic [ref=e82]: "2"
              - generic "Proforma" [ref=e84]
            - generic [ref=e85]:
              - generic [ref=e87]: "3"
              - generic "Picking" [ref=e89]
            - generic [ref=e90]:
              - generic [ref=e92]: "4"
              - generic "Collection Summary" [ref=e94]
            - generic [ref=e95]:
              - generic [ref=e97]: "5"
              - generic "Delivery" [ref=e99]
            - generic [ref=e100]:
              - generic [ref=e102]: "6"
              - generic "Collection Posting" [ref=e104]
          - generic [ref=e107]:
            - generic [ref=e108]:
              - heading "Sold To" [level=6] [ref=e109]
              - paragraph [ref=e110]:
                - strong [ref=e111]: R00236507
                - text: City Store 3
              - paragraph [ref=e112]:
                - generic [ref=e113]: 
                - text: "-"
              - paragraph [ref=e114]:
                - generic [ref=e115]: 
                - text: "8801670000725"
            - generic [ref=e116]:
              - heading "Order Information" [level=6] [ref=e117]
              - paragraph [ref=e118]:
                - strong [ref=e119]: "Branch:"
                - text: Rampura Branch
              - paragraph [ref=e120]:
                - strong [ref=e121]: "Route:"
                - text: Rampura Route 1
              - paragraph [ref=e122]:
                - strong [ref=e123]: "Market:"
                - text: Rampura Market 1
              - paragraph [ref=e124]:
                - strong [ref=e125]: "Sub Market:"
                - text: Rampura Submarket 1
            - generic [ref=e126]:
              - heading "Order Details" [level=6] [ref=e127]
              - paragraph [ref=e128]:
                - strong [ref=e129]: "Order ID:"
                - text: ORD-260510-236502-00014
              - paragraph [ref=e130]:
                - strong [ref=e131]: "Status:"
                - generic [ref=e132]: Pending
              - paragraph [ref=e133]:
                - strong [ref=e134]: "Distributor:"
                - text: Territory Manager - Pediatrics
              - paragraph [ref=e135]:
                - strong [ref=e136]: "Order Date:"
                - text: 10-05-2026
              - paragraph [ref=e137]:
                - strong [ref=e138]: "Expected Delivery:"
                - text: 10-05-2026
          - table [ref=e141]:
            - rowgroup [ref=e142]:
              - row "Code Description Quantity Per Pack Total Discount Net TP Net Value" [ref=e143]:
                - columnheader "Code" [ref=e144]
                - columnheader "Description" [ref=e145]
                - columnheader "Quantity" [ref=e146]
                - columnheader "Per Pack" [ref=e147]
                - columnheader "Total" [ref=e148]
                - columnheader "Discount" [ref=e149]
                - columnheader "Net TP" [ref=e150]
                - columnheader "Net Value" [ref=e151]
              - row "TP VAT (%) TP VAT % Amount" [ref=e152]:
                - columnheader "TP" [ref=e153]
                - columnheader "VAT (%)" [ref=e154]
                - columnheader "TP" [ref=e155]
                - columnheader "VAT" [ref=e156]
                - columnheader "%" [ref=e157]
                - columnheader "Amount" [ref=e158]
            - rowgroup [ref=e159]:
              - row "SKC01 Electrolyte Sports Drinks Orange 2 300 - 600 - - - 600 600" [ref=e160]:
                - cell "SKC01" [ref=e161]
                - cell "Electrolyte Sports Drinks Orange" [ref=e162]:
                  - generic [ref=e163]: Electrolyte Sports Drinks Orange
                - cell "2" [ref=e164]
                - cell "300" [ref=e165]
                - cell "-" [ref=e166]
                - cell "600" [ref=e167]
                - cell "-" [ref=e168]
                - cell "-" [ref=e169]
                - cell "-" [ref=e170]
                - cell "600" [ref=e171]
                - cell "600" [ref=e172]
              - row "SKU00013 Esonaaf 20 mg Capsule 1 100 - 100 - - - 100 100" [ref=e173]:
                - cell "SKU00013" [ref=e174]
                - cell "Esonaaf 20 mg Capsule" [ref=e175]:
                  - generic [ref=e176]: Esonaaf 20 mg Capsule
                - cell "1" [ref=e177]
                - cell "100" [ref=e178]
                - cell "-" [ref=e179]
                - cell "100" [ref=e180]
                - cell "-" [ref=e181]
                - cell "-" [ref=e182]
                - cell "-" [ref=e183]
                - cell "100" [ref=e184]
                - cell "100" [ref=e185]
              - row "SKU00017 Mancer 75 WP 1 430 - 430 - - - 430 430" [ref=e186]:
                - cell "SKU00017" [ref=e187]
                - cell "Mancer 75 WP" [ref=e188]:
                  - generic [ref=e189]: Mancer 75 WP
                - cell "1" [ref=e190]
                - cell "430" [ref=e191]
                - cell "-" [ref=e192]
                - cell "430" [ref=e193]
                - cell "-" [ref=e194]
                - cell "-" [ref=e195]
                - cell "-" [ref=e196]
                - cell "430" [ref=e197]
                - cell "430" [ref=e198]
            - rowgroup [ref=e199]:
              - 'row "Gross Total: 1,130 - - - 1,130 1,130" [ref=e200]':
                - cell "Gross Total:" [ref=e201]
                - cell "1,130" [ref=e202]
                - cell "-" [ref=e203]
                - cell "-" [ref=e204]
                - cell "-" [ref=e205]
                - cell "1,130" [ref=e206]
                - cell "1,130" [ref=e207]
              - 'row "TP + VAT: 1,130 Adjustment(+/-): 250" [ref=e208]':
                - cell "TP + VAT:" [ref=e209]
                - cell "1,130" [ref=e210]
                - cell "Adjustment(+/-):" [ref=e211]
                - cell "250" [ref=e212]
              - 'row "Gross Discount: -" [ref=e213]':
                - cell [ref=e214]
                - cell "Gross Discount:" [ref=e215]
                - cell "-" [ref=e216]
              - 'row "Net Payable(BDT): One Thousand Three Hundred Eighty 1,380" [ref=e217]':
                - cell "Net Payable(BDT):" [ref=e218]
                - cell "One Thousand Three Hundred Eighty" [ref=e219]
                - cell "1,380" [ref=e220]
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
  8  | test("TC_05_SND_Order_ApprovalPendingOrderTest", async ({ page }) => {
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
  35 | 
  36 |   await orderPage.selectCheckboxByOrderIdViewClick(appPendingData.orderId);
  37 |   await expect(page).toHaveURL(/\/snd\/orders\/details/);
  38 | 
  39 |   const tableData = await orderPage.getFullProductTableData();
  40 | 
  41 |   // ── Row count ─────────────────────────────────────────────────────────────
  42 |   expect(tableData.products).toHaveLength(3);
  43 | 
  44 |   // ── Summary (values from actual HTML) ────────────────────────────────────
  45 |   //xpect(tableData.summary.grossTotal).toBe(2490);
> 46 |   expect(tableData.summary.netPayable).toBe(1,380); // 2490 + 50 adjustment
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  47 |   expect(tableData.summary.netPayableInWords).toContain(
  48 |     "One Thousand Three Hundred Eighty",
  49 |   );
  50 | 
  51 |   // ── Products ──────────────────────────────────────────────────────────────
  52 |   /*
  53 |   const [first, second, third] = tableData.products;
  54 | 
  55 |   expect(first.code).toBe("SKC01");
  56 |   expect(first.description).toBe("Electrolyte Sports Drinks Orange");
  57 |   expect(first.quantity).toBe(3);
  58 |   expect(first.totalTP).toBe(900);
  59 |   expect(first.netValue).toBe(900);
  60 | 
  61 |   expect(second.code).toBe("SKU00013");
  62 |   expect(second.description).toBe("Esonaaf 20 mg Capsule");
  63 |   expect(second.quantity).toBe(3);
  64 |   expect(second.totalTP).toBe(300);
  65 | 
  66 |   expect(third.code).toBe("SKU00017");
  67 |   expect(third.description).toBe("Mancer 75 WP");
  68 |   expect(third.quantity).toBe(3);
  69 |   expect(third.totalTP).toBe(1290);
  70 |   expect(third.netValue).toBe(1290);
  71 |   */
  72 | });
  73 | 
```