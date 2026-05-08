import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import testData from "../testData/testData.json";

test("Login Test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const data = testData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);

  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "successfully logged in",
  );
});
