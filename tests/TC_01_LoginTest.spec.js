// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
// import loginData from "../testData/loginData.json";
// import { allure } from 'allure-playwright';
// test("Login Test", async ({ page }) => {
//   allure.epic('Authentication');
//     allure.feature('Login');
//     allure.story('Valid user login');
//   const loginPage = new LoginPage(page);
//   const data = loginData[0];
//   await loginPage.gotoLoginPage(data.url);
//   await loginPage.login(data.userMobileNumberInput, data.password);

//   await expect(page.locator(".Toastify__toast-body")).toHaveText(
//     "successfully logged in",
//   );
// });
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import loginData from "../testData/loginData.json";
import { allure } from "allure-playwright";

test.describe("Authentication Module", () => {

  test("Valid Login Test", async ({ page }) => {

    allure.label("epic", "Authentication");
    allure.label("feature", "Login");
    allure.label("story", "Valid user login");

    const loginPage = new LoginPage(page);
    const data = loginData[0];

    await loginPage.gotoLoginPage(data.url);
    await loginPage.login(data.userMobileNumberInput, data.password);

    await expect(page.locator(".Toastify__toast-body"))
      .toHaveText("successfully logged in");
  });

});