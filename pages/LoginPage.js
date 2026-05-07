exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.userMobileNumberInput = page.getByRole("textbox", {
      name: "User Mobile Number *",
    });
    this.passwordInput = page.getByRole("textbox", { name: "Password *" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    
  }

  async gotoLoginPage(url) {
    await this.page.goto(url);
  }

  async gotoLoginPage(url) {
    // await this.page.setViewportSize({ width: 1920, height: 1080 }); // ✅ maximize
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle");
  }

  async login(username, password) {
    await this.userMobileNumberInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
