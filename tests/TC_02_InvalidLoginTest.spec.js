
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../testData/loginData.json";

test("LnValid Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const data = loginData[1];

  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);

  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "The mobile number must be a valid phone number.",
  );
});
