import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PickingPage } from "../pages/PickingPage";
import loginData from "../testData/loginData.json";
import pickingTestData from "../testData/pickingTestData.json";

test("SND_PI_Picking_CreateTest", async ({ page }) => {
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
  await dashboardPage.clickPIMenu();
  await dashboardPage.clickPickingMenu();
  await dashboardPage.clickCreatePicking();
  await expect(page).toHaveURL(/\/snd\/pi\/picking\/create/);

  // Picking Page
  const pickingPage = new PickingPage(page);
  const pickingData = pickingTestData[0];
  await pickingPage.clickFilter();
  await pickingPage.selectBranch(pickingData.branch);
  await pickingPage.selectRoute(pickingData.route);
  await pickingPage.selectRetailer(pickingData.retailer);
  await pickingPage.clickSubmit();
  await pickingPage.clickFinalFilter();
  await pickingPage.selectCheckboxByOrderId(pickingData.orderId);
  await pickingPage.clickProcess();
  await page.waitForTimeout(2000);
});
