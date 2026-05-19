import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../testData/loginData.json";

test.use({ storageState: { cookies: [], origins: [] } });

test("Valid Login Test", async ({ page }) => {
    // Login Page
  const loginPage = new LoginPage(page);
  const data = loginData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);

  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "successfully logged inss",
  );
});

// Invalid Login Test
test("Invalid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const data = loginData[1];

  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);

  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "The mobile number must be a valid phone number.",
  );
});
