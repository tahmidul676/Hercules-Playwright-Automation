# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderViewTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderViewTest.spec.js:8:5

# Error details

```
Error: page.waitForTimeout: Test ended.
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
  35 |   await orderPage.selectCheckboxByOrderId(appPendingData.orderId);
> 36 | page.waitForTimeout(2000);
     |      ^ Error: page.waitForTimeout: Test ended.
  37 | 
  38 | });
  39 | 
```