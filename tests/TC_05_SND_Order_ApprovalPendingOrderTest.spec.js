import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrderPage } from "../pages/OrderPage";
import loginData from "../testData/loginData.json";
import approvalPendingOrder from "../testData/approvalPendingOrder.json";
import { DashboardPage } from "../pages/DashboardPage";

test("TC_05_SND_Order_ApprovalPendingOrderTest", async ({ page }) => {
  // Login Page
  const loginPage = new LoginPage(page);
  const data = loginData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);
  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "successfully logged in",
  );

  // Dashboard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickChevronRight();
  await dashboardPage.clickSND();
  await dashboardPage.clickOrder();
  await dashboardPage.clickApprovalPendingOrder();
  await expect(page).toHaveURL(/\/snd\/orders\/approval-pending/);

  // Order Page
  const orderPage = new OrderPage(page);
  const appPendingData = approvalPendingOrder[0];

  await orderPage.selectBranch(appPendingData.branch);
  await orderPage.selectRoute(appPendingData.route);
  await orderPage.selectRetailer(appPendingData.retailer);
  await orderPage.clickSubmit();
  await orderPage.clickFilter();
  await orderPage.selectCheckboxByOrderId(appPendingData.orderId);
  await orderPage.clickConfirmOrder();
  await orderPage.selectStatus(appPendingData.status);
  //await page.waitForTimeout(2000); // waits 2 seconds
  await orderPage.clickSubmitApprove();
  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "request successfully done",
  );

});
