import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { PIPage } from "../pages/PIPage";
import loginData from "../testData/loginData.json";
import piTestData from "../testData/piTestData.json";

test("TC_06_SND_PI_CreateTest", async ({ page }) => {
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
  await dashboardPage.clickCreatePI();
  await expect(page).toHaveURL(/\/snd\/pi/);

  // PI Page
  const createPIPage = new PIPage(page);
  const piData = piTestData[0];
  await createPIPage.clickSelectDropdown();
  await createPIPage.selectBranch(piData.branch);
  await createPIPage.selectRoute(piData.route);
  await createPIPage.selectRetailer(piData.retailer);
  await createPIPage.clickSubmit();
  await createPIPage.clickFilter();
  await createPIPage.selectCheckboxByOrderId(piData.orderId);
  await createPIPage.clickProcessSelectedOrder();
    await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "Provisional Invoices created successfully for all orders.",
  );
});
