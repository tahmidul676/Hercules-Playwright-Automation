const { expect } = require("@playwright/test");
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
    await this.page.waitForSelector('[role="option"]', {
      state: "visible",
    });
    await this.page.getByRole("option", { name: branchName }).click();
  }

  async selectRoute(routeName) {
    await this.routeDropdown.click();
    await this.page.waitForSelector('[role="option"]', {
      state: "visible",
    });
    await this.page.getByRole("option", { name: routeName }).click();
  }

  async selectRetailer(retailerName) {
    await this.retailerDropdown.click();
    await this.page.waitForSelector('[role="option"]', {
      state: "visible",
    });
    await this.page.getByRole("option", { name: retailerName }).click();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async clickFilter() {
    await expect(this.filterButton).toBeVisible();
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
         // await checkbox.check({ force: true });
        }
      }
    }
  }

  async clickProcessSelectedOrder() {
    await expect(this.processSelectedOrderBtn).toBeVisible();
    await this.processSelectedOrderBtn.click();
  }


// ---------Apply filter to get data----------------

//------------------------
/*
async selectOrderByOrderFrom(expectedOrderFrom) {
  const rows = this.page.locator("table tbody tr");
  const rowCount = await rows.count();
  let found = false;

  for (let i = 0; i < rowCount; i++) {
    // Re-query fresh each iteration to avoid stale references
    const row = this.page.locator("table tbody tr").nth(i);
    const cellText = await row.textContent();

    const hasCheckbox =
      await this.page
        .locator("table tbody tr")
        .nth(i)
        .locator("input[type='checkbox']")
        .count();

    if (hasCheckbox === 0) continue;

    if (cellText.includes(expectedOrderFrom)) {
      // Direct JS evaluation — no Playwright action chain
      await this.page.evaluate((index) => {
        const rows = document.querySelectorAll("table tbody tr");
        const checkbox = rows[index].querySelector("input[type='checkbox']");
        if (checkbox) checkbox.click();
      }, i);

      found = true;
      break;
    }
  }

  return found;
}

*/
//--------------------------
 async selectOrderByOrderFrom(expectedOrderFrom) {
  const rows = this.page.locator("table tbody tr");
  const rowCount = await rows.count();
  let found = false;

  console.log(JSON.stringify({ searching: expectedOrderFrom, totalRows: rowCount }));

  for (let i = 0; i < rowCount; i++) {
    const row = this.page.locator("table tbody tr").nth(i);
    const cellText = await row.textContent();

    const hasCheckbox =
      await this.page
        .locator("table tbody tr")
        .nth(i)
        .locator("input[type='checkbox']")
        .count();

    console.log(JSON.stringify({ row: i, hasCheckbox: hasCheckbox === 1, text: cellText?.trim() }));

    if (hasCheckbox === 0) continue;

    if (cellText.includes(expectedOrderFrom)) {
      await this.page.evaluate((index) => {
        const rows = document.querySelectorAll("table tbody tr");
        const checkbox = rows[index].querySelector("input[type='checkbox']");
        if (checkbox) checkbox.click();
      }, i);

      console.log(JSON.stringify({ row: i, action: "checkbox clicked", matched: expectedOrderFrom }));
      found = true;
      break;
    }
  }

  console.log(JSON.stringify({ result: found }));
  return found;
}
};
