import { test as setup, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"; // 👈 adjust path if needed
import loginData from "../testData/loginData.json"; // 👈 adjust path if needed

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const data = loginData[0];

  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);
  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "successfully logged in",
  );

  // 👇 Save session to file
  await page.context().storageState({ path: "auth/user.json" });
});
