import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrderPage } from "../pages/OrderPage";
import testData from "../testData/testData.json";
import approvalPendingOrder from "../testData/approvalPendingOrder.json";
import { DashboardPage } from "../pages/DashboardPage";

test("Approval Pending Order Test", async ({ page }) => {
  // Login Page
  const loginPage = new LoginPage(page);
  const data = testData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);

  // Dashboard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickChevronRight();
  await dashboardPage.clickSND();
  await dashboardPage.clickOrder();
  await dashboardPage.clickApprovalPendingOrder();

  const orderPage = new OrderPage(page);
  const appPendingData = approvalPendingOrder[0];
  // Order Page
  //await page.waitForTimeout(5000);
  await orderPage.selectBranch(appPendingData.branch);
  // await page.waitForTimeout(5000);
  await orderPage.selectRoute(appPendingData.route);
  await orderPage.selectRetailer(appPendingData.retailer);
  await orderPage.clickSubmit();
  await orderPage.clickFilter();
  //await orderPage.scrollDown();
  // await page.waitForTimeout(5000);
  await orderPage.selectCheckboxByOrderId(appPendingData.orderId);
  // await page.waitForTimeout(5000);
  await orderPage.clickConfirmOrder();
  await orderPage.selectStatus(appPendingData.status);
  await orderPage.clickSubmitApprove();
  // await page.waitForTimeout(5000);
});
