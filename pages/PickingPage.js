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

  async clickFinalFilter() {
    await this.finalFilterButton.click();
  }

  // async selectCheckboxByOrderId(orderId) {
  //     const rows = this.page.locator("tbody tr");

  //     for (let i = 0; i < (await rows.count()); i++) {
  //       const row = rows.nth(i);
  //       const text = await row.textContent();

  //       if (orderId.some((id) => text.includes(id))) {
  //         const checkbox = row.locator('input[type="checkbox"]');

  //         if (!(await checkbox.isChecked())) {
  //           await checkbox.check();
  //         }
  //       }
  //     }
  //   }

  //    async clickProcess() {
  //   await this.processBtn.waitFor({ state: "visible", timeout: 300000 }); // ✅ Uncomment and increase timeout
  //   await this.processBtn.click();
  // }

  async selectCheckboxByOrderId(orderIds) {
    // Wait for the table to fully load - wait for actual text content in cells
    await this.page.waitForFunction(
      () => {
        const rows = document.querySelectorAll("tbody tr");
        if (rows.length === 0) return false;

        // Check if any cell has real text content (not empty/zero-width chars)
        const cells = document.querySelectorAll("tbody tr td");
        for (const cell of cells) {
          const text = cell.textContent
            ?.replace(/[\u200B\u200C\u200D\uFEFF]/g, "")
            .trim();
          if (text && text.length > 3) return true; // real content found
        }
        return false;
      },
      { timeout: 30000 },
    );

    console.log("✅ Table fully loaded");

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
            `✅ Found Order ID "${cellText}" at row ${i + 1}, cell ${c + 1}`,
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
          console.warn(`⚠️ Checkbox not found in row ${i + 1}:`, e.message);
        }
      }
    }

    console.log(`Total checkboxes checked: ${checkedCount}`);

    if (checkedCount === 0) {
      throw new Error(
        `❌ No checkboxes were checked. Order IDs not found: ${orderIds.join(", ")}`,
      );
    }
  }

  async clickProcess() {
     await this.processBtn.waitFor({ state: "visible", timeout: 20000 }); // ✅ Uncomment and increase timeout
    await this.processBtn.click();
  }
};
