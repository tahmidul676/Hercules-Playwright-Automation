exports.OrderPage = class OrderPage {
  constructor(page) {
    this.page = page;
    // SND / Order locators
    this.chevronRight = page.locator("i.mdi.mdi-chevron-right");
    this.sndMenu = page.locator("div").filter({ hasText: /^SND$/ }).nth(1);
    this.orderMenu = page
      .locator("div")
      .filter({ hasText: /^Order$/ })
      .nth(1);
    this.approvalPendingOrder = page.getByRole("link", {
      name: "Approval Pending Order",
    });

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
  }
  async clickChevronRight() {
    await this.chevronRight.click();
  }

  async clickSND() {
    await this.sndMenu.click();
  }

  async clickOrder() {
    await this.orderMenu.click();
  }

  async clickApprovalPendingOrder() {
    await this.approvalPendingOrder.click();
  }

  async selectBranch(branchName) {
    await this.selectBranchDropdown.click();
    await this.page.getByRole("option", { name: branchName }).click();
  }

  async selectRoute(routeName) {
    await this.selectRouteDropdown.click();
    await this.page.getByRole("option", { name: routeName }).click();
  }
  async selectRetailer(retailerName) {
    await this.selectRetailerDropdown.click();
    await this.page.getByRole("option", { name: retailerName }).click();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async clickFilter() {
    await this.filterBtn.click();
  }
  async scrollDown() {
    await this.page.evaluate(() => window.scrollBy(0, 1500));
  }

  async selectCheckboxByOrderId(orderId) {
  const rows = this.page.locator('tbody tr');

  for (let i = 0; i < await rows.count(); i++) {
    const row = rows.nth(i);
    const text = await row.textContent();

    if (orderId.some(id => text.includes(id))) {
      const checkbox = row.locator('input[type="checkbox"]');

      if (!(await checkbox.isChecked())) {
        await checkbox.check();
      }
    }
  }
}

  async clickConfirmOrder() {
    await confirmBtn.waitFor({ state: "visible" });
    await this.confirmOrderBtn.click();
  }
};
