import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrderPage } from "../pages/OrderPage";
import loginData from "../testData/loginData.json";
import approvalPendingOrder from "../testData/approvalPendingOrder.json";
import { DashboardPage } from "../pages/DashboardPage";
import { PIPage } from "../pages/PIPage";
import piTestData from "../testData/piTestData.json";

test("SND_PI_CreateFilterTest", async ({ page }) => {
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

  // Order Page
  const orderPage = new OrderPage(page);
  const appPendingData = approvalPendingOrder[0];

  // PI Page
  const createPIPage = new PIPage(page);
  const piData = piTestData[0];
  await createPIPage.clickSelectDropdown();
  await createPIPage.selectBranch(piData.branch);
  await createPIPage.selectRoute(piData.route);
  await createPIPage.selectRetailer(piData.retailer);
  await createPIPage.clickSubmit();
  await createPIPage.clickFilter();
  //   await createPIPage.selectCheckboxByOrderId(piData.orderId);
  //await createPIPage.selectOrderByOrderFrom(piData.retailerName);
  const found = await createPIPage.selectOrderByOrderFrom(piData.retailerName,);
  expect(
    found,
    `Retailer Name: "${piData.retailerName}" not found in table`,
  ).toBe(true);
  console.log(`Retailer Name: "${piData.retailerName}" found in table`);
});
