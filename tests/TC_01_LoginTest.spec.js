import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import testData from "../testData/testData.json";

test("Login Test", async ({ page }) => {

  const loginPage = new LoginPage(page);

  // use first object from JSON
  const data = testData[0];
await page.waitForTimeout(3000);
  await loginPage.gotoLoginPage(data.url);
  await page.waitForTimeout(3000);
  await loginPage.login(data.userMobileNumberInput, data.password);
  await page.waitForTimeout(9000);
  await loginPage.clickChevronRight();
  await page.waitForTimeout(9000);

});

