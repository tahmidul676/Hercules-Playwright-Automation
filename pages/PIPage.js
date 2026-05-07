exports.PIPage = class PIPage {
  constructor(page) {
    this.page = page;

    this.selectDropdown = page.locator("span").nth(2);
    this.branchDropdown = page
      .locator("div")
      .filter({ hasText: /^Select Branch$/ })
      .nth(1);
    this.routeDropdown = page
      .locator("div")
      .filter({ hasText: /^Select Route$/ })
      .nth(1);
    this.retailerDropdown = page
      .locator("div")
      .filter({ hasText: /^Select Retailer$/ })
      .nth(1);
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.filterButton = page.getByRole("button", {
      name: "Filter",
      exact: true,
    });

    this.processSelectedOrderBtn = page.getByRole("button", {
      name: "Process Selected Orders",
    });
  }

  async clickSelectDropdown() {
    await this.selectDropdown.click();
  }

  async selectBranch(branchName) {
    await this.branchDropdown.click();
    await this.page.getByRole("option", { name: branchName }).click();
  }

  async selectRoute(routeName) {
    await this.routeDropdown.click();
    await this.page.getByRole("option", { name: routeName }).click();
  }

  async selectRetailer(retailerName) {
    await this.retailerDropdown.click();
    await this.page.getByRole("option", { name: retailerName }).click();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async clickFilter() {
     await this.filterButton.waitFor({ state: 'visible', timeout: 60000 })
    await this.filterButton.click();
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

  async clickProcessSelectedOrder() {
    await this.processSelectedOrderBtn.waitFor({ state: 'visible', timeout: 60000 })
    await this.processSelectedOrderBtn.click();
  }
};
