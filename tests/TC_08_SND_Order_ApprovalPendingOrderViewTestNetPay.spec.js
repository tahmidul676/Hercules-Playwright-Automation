import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrderPage } from "../pages/OrderPage";
import loginData from "../testData/loginData.json";
import approvalPendingOrder from "../testData/approvalPendingOrder.json";
import { DashboardPage } from "../pages/DashboardPage";

test("SND_Order_ApprovalPendingOrderViewTestNetPay", async ({ page }) => {
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
  await orderPage.selectCheckboxByOrderIdViewClick(appPendingData.orderId);
  await expect(page).toHaveURL(/\/snd\/orders\/details/);
  const value = await orderPage.getNetPayableValue();
  console.log(value);
  expect(value).not.toBeNull();
  expect(value).not.toBe("");
});
