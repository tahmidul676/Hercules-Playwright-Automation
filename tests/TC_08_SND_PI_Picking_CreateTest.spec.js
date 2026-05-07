import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PickingPage } from "../pages/PickingPage";
import testData from "../testData/testData.json";
import pickingTestData from "../testData/pickingTestData.json";

test("TC_08_SND_PI_Picking_CreateTest", async ({ page }) => {
  // Login Page
  const loginPage = new LoginPage(page);
  const data = testData[0];
  //await page.waitForTimeout(3000);
  await loginPage.gotoLoginPage(data.url);
  //await page.waitForTimeout(3000);
  await loginPage.login(data.userMobileNumberInput, data.password);
  //await page.waitForTimeout(9000);

  // Dashboard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickChevronRight();
  await dashboardPage.clickSND();
  await dashboardPage.clickPIMenu();
  await dashboardPage.clickPickingMenu();
  await dashboardPage.clickCreatePicking();

  // Picking Page
  const pickingPage = new PickingPage(page);
  const pickingData = pickingTestData[0];
  //await page.waitForTimeout(3000);
  await pickingPage.clickFilter();
  await pickingPage.selectBranch(pickingData.branch);
  await pickingPage.selectRoute(pickingData.route);
  await pickingPage.selectRetailer(pickingData.retailer);
  await pickingPage.clickSubmit();
  await pickingPage.clickFinalFilter();
  // await expect(page.getByText(pickingData.orderId)).toBeVisible();
  //await page.waitForTimeout(5000);
  await pickingPage.selectCheckboxByOrderId(pickingData.orderId);
  // await page.waitForLoadState("networkidle"); 
   await pickingPage.clickProcess();
   await page.waitForTimeout(2000);
});
