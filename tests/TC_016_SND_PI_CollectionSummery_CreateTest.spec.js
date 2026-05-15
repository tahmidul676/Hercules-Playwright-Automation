import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PickingPage } from "../pages/PickingPage";
import loginData from "../testData/loginData.json";
import pickingTestData from "../testData/pickingTestData.json";
import collectionSummaryTestData from "../testData/collectionSummaryTestData.json";

test("SND_PI_CollectionSummery_CreateTest", async ({ page }) => {
  // Login Page
  const loginPage = new LoginPage(page);
  const data = loginData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);
  //const data = loginData[0];
  //await page.goto(data.url);
  // Dashboard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickChevronRight();
  await dashboardPage.clickSND();
  await dashboardPage.clickPIMenu();
  await dashboardPage.clickCollectionSummaryMenu();
  await page.waitForTimeout(2000);
  await dashboardPage.clickCreateCollectionSummary();

  // Picking Page
  const pickingPage = new PickingPage(page);
  const pickingData = pickingTestData[0];
  await pickingPage.clickFilter();
  await pickingPage.selectBranch(pickingData.branch);
  await pickingPage.selectRoute(pickingData.route);
  await pickingPage.selectRetailer(pickingData.retailer);
  await pickingPage.clickSubmit();
  await pickingPage.clickFinalFilter();

  // Test Data for Collection Summary
  const collData = collectionSummaryTestData[0];
  await pickingPage.selectCheckboxByOrderId(collData.orderId);
  await pickingPage.clickProcess();
});
