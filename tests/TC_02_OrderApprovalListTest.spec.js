import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrderPage } from "../pages/OrderPage";
import testData from "../testData/testData.json";

test("Approval Pending Order Test", async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const data = testData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);

  const orderPage = new OrderPage(page);

  await orderPage.clickChevronRight();
  await orderPage.clickSND();
  await orderPage.clickOrder();
  await orderPage.clickApprovalPendingOrder();
  await page.waitForTimeout(5000);
  await orderPage.selectBranch(data.branch);
  await page.waitForTimeout(5000);
  await orderPage.selectRoute(data.route);
  await orderPage.selectRetailer(data.retailer);
  await orderPage.clickSubmit();
  await orderPage.clickFilter();
  await orderPage.scrollDown();
  await page.waitForTimeout(5000);
  await orderPage.selectCheckboxByOrderId(data.orderId);
  await page.waitForTimeout(5000);
  //await orderPage.clickConfirmOrder();
});
