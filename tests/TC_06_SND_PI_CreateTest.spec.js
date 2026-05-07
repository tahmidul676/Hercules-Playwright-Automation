import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PIPage } from "../pages/PIPage";
import testData from "../testData/testData.json";
import piTestData from "../testData/piTestData.json";

test("TC_06_SND_PI_CreateTest", async ({ page }) => {

  // Login Page
  const loginPage = new LoginPage(page);
  const data = testData[0];
  await page.waitForTimeout(3000);
  await loginPage.gotoLoginPage(data.url);
  await page.waitForTimeout(3000);
  await loginPage.login(data.userMobileNumberInput, data.password);
  await page.waitForTimeout(9000);

  // Dashboard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickChevronRight();
  await dashboardPage.clickSND();
  await dashboardPage.clickPIMenu();
  await dashboardPage.clickCreatePI();

  // PI Page 
  const createPIPage = new PIPage(page);
  const piData = piTestData[0];
  //await page.waitForTimeout(3000);
  await createPIPage.clickSelectDropdown();
  await createPIPage.selectBranch(piData.branch);
  await createPIPage.selectRoute(piData.route);
  await createPIPage.selectRetailer(piData.retailer);
  await createPIPage.clickSubmit();
  await createPIPage.clickFilter();
  //await page.waitForTimeout(3000);
  await createPIPage.selectCheckboxByOrderId(piData.orderId);
  //await page.waitForTimeout(3000);
  await createPIPage.clickProcessSelectedOrder();
});
