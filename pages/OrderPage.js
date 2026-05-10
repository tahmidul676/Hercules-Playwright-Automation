const { expect } = require("@playwright/test");
exports.OrderPage = class OrderPage {
  constructor(page) {
    this.page = page;

    this.selectBranchDropdown = page
      .locator("div")
      .filter({ hasText: /^Select Branch$/ })
      .nth(1);
    this.selectRouteDropdown = page
      .locator("div")
      .filter({ hasText: /^Select Route$/ })
      .nth(1);
    this.selectRetailerDropdown = page
      .locator("div")
      .filter({ hasText: /^Select Retailer$/ })
      .nth(1);
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.confirmOrderBtn = page.getByRole("button", { name: "Confirm Order" });
    this.filterBtn = page.getByText("Filter", { exact: true });

    this.statusDropdown = page.getByLabel("Status");

    this.submitButtonApprove = page.getByRole("button", {
      name: "Submit",
      exact: true,
    });
  }

  async selectBranch(branchName) {
    await this.selectBranchDropdown.click();
    await this.page.waitForSelector('[role="option"]', {
      state: "visible",
    });
    await this.page.getByRole("option", { name: branchName }).click();
  }

  async selectRoute(routeName) {
    await this.selectRouteDropdown.click();
    await this.page.waitForSelector('[role="option"]', {
      state: "visible",
    });
    await this.page.getByRole("option", { name: routeName }).click();
  }
  async selectRetailer(retailerName) {
    await this.selectRetailerDropdown.click();
    await this.page.waitForSelector('[role="option"]', {
      state: "visible",
    });
    await this.page.getByRole("option", { name: retailerName }).click();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async clickFilter() {
    await this.filterBtn.click();
  }

  async selectCheckboxByOrderId(orderId) {
    const rows = this.page.locator("tbody tr");

    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const text = await row.textContent();

      if (orderId.some((id) => text.includes(id))) {
        const checkbox = row.locator('input[type="checkbox"]');

        if (!(await checkbox.isChecked())) {
          await checkbox.check();
        }
      }
    }
  }

  async clickConfirmOrder() {
    await expect(this.confirmOrderBtn).toBeVisible();
    await this.confirmOrderBtn.click();
  }

  async selectStatus(statusValue) {
    await expect(this.statusDropdown).toBeVisible();
    await this.statusDropdown.selectOption(statusValue);
  }

  async clickSubmitApprove() {
    await expect(this.submitButtonApprove).toBeVisible();
    await this.submitButtonApprove.click();

  }
};
