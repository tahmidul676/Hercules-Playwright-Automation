const { expect } = require("@playwright/test");

exports.PickingPage = class PickingPage {
  constructor(page) {
    this.page = page;

    this.filterButton = page.getByRole("button", {
      name: "Filter",
    });

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

    this.submitButton = page.getByRole("button", {
      name: "Submit",
    });

    this.finalFilterButton = page.getByRole("button", {
      name: "Filter",
      exact: true,
    });

    this.processBtn = page.getByRole("button", {
      name: "Process",
    });
  }

  async clickFilter() {
    await this.filterButton.click();
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

  async clickFinalFilter() {
    await expect(this.finalFilterButton).toBeVisible();
    await this.finalFilterButton.click();
  }

  async selectCheckboxByOrderId(orderIds) {
    await this.page.waitForFunction(
      () => {
        const rows = document.querySelectorAll("tbody tr");
        if (rows.length === 0) return false;

        const cells = document.querySelectorAll("tbody tr td");
        for (const cell of cells) {
          const text = cell.textContent
            ?.replace(/[\u200B\u200C\u200D\uFEFF]/g, "")
            .trim();
          if (text && text.length > 3) return true;
        }
        return false;
      },
      { timeout: 30000 },
    );

    console.log("Table fully loaded");

    const rows = this.page.locator("tbody tr");
    const rowCount = await rows.count();
    console.log(`Total rows found: ${rowCount}`);

    // DEBUG: Print cells of first row
    if (rowCount > 0) {
      const firstRow = rows.nth(0);
      const cells = firstRow.locator("td");
      const cellCount = await cells.count();
      console.log(`Total cells in first row: ${cellCount}`);
      for (let c = 0; c < cellCount; c++) {
        const text = await cells.nth(c).textContent();
        console.log(`  Cell[${c + 1}]: "${text?.trim()}"`);
      }
    }

    let checkedCount = 0;

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const cells = row.locator("td");
      const cellCount = await cells.count();

      let orderIdFound = false;

      for (let c = 0; c < cellCount; c++) {
        let cellText = "";
        try {
          cellText = (await cells.nth(c).textContent()) ?? "";
          // Strip zero-width characters
          cellText = cellText.replace(/[\u200B\u200C\u200D\uFEFF]/g, "").trim();
        } catch {
          continue;
        }

        if (orderIds.some((id) => cellText === id.trim())) {
          console.log(
            `Found Order ID "${cellText}" at row ${i + 1}, cell ${c + 1}`,
          );
          orderIdFound = true;
          break;
        }
      }

      if (orderIdFound) {
        const checkbox = row.locator('input[type="checkbox"]');
        try {
          await checkbox.waitFor({ state: "visible", timeout: 3000 });
          if (!(await checkbox.isChecked())) {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
            checkedCount++;
          }
        } catch (e) {
          console.warn(`Checkbox not found in row ${i + 1}:`, e.message);
        }
      }
    }

    console.log(`Total checkboxes checked: ${checkedCount}`);

    if (checkedCount === 0) {
      throw new Error(
        `No checkboxes were checked. Order IDs not found: ${orderIds.join(", ")}`,
      );
    }
  }

  async clickProcess() {
    await expect(this.processBtn).toBeVisible();
    await this.processBtn.click();
  }

  // ---------Apply filter to get data----------------

  async selectOrderByOrderFrom(expectedOrderFrom) {
    // Wait until at least one td has real visible text (not empty/ZWNJ)
    await this.page.waitForFunction(
      () => {
        const cells = document.querySelectorAll("table tbody tr td");
        return [...cells].some(
          (td) => td.innerText.trim().replace(/\u200C/g, "").length > 0,
        );
      },
      { timeout: 15000 },
    );

    const rows = this.page.locator("table tbody tr");
    const rowCount = await rows.count();
    let found = false;

    console.log(`Total rows: ${rowCount}`);

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const cells = row.locator("td");
      const totalCells = await cells.count();

      if (totalCells === 0) continue;

      // Read ALL cells text and clean ZWNJ characters
      let rowText = "";
      for (let c = 0; c < totalCells; c++) {
        const raw = await cells
          .nth(c)
          .evaluate((el) => el.innerText.trim().replace(/\u200C/g, ""));
        console.log(`  Row[${i}] Col[${c}]: "${raw}"`);
        rowText += raw + " ";
      }

      if (rowText.includes(expectedOrderFrom.trim())) {
        await this.page.evaluate((index) => {
          const rows = document.querySelectorAll("table tbody tr");
          const checkbox = rows[index]?.querySelector("input[type='checkbox']");
          if (checkbox) checkbox.click();
        }, i);

        found = true;
        break;
      }
    }

    return found;
  }
  //---------------
};
