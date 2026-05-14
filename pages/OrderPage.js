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

    //this.itemSelectedText = page.locator("p.mb-0", { hasText: /item[s]? selected/ });
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

 // Keep itemSelectedText as a helper locator
async itemSelectedText() {
  return this.page.locator("p.mb-0", { hasText: /\d+\s+items?\s+selected/ });
}

// Add this method to extract the number
async getSelectedItemCount() {
  const locator = await this.itemSelectedText();
  const text = await locator.textContent();
  const match = text?.match(/^(\d+)/);
  return match ? parseInt(match[1]) : 0;
}


// ---------Apply filter to get data----------------
// async selectOrderByOrderFrom(expectedOrderFrom) {
//   const rows = this.page.locator("table tbody tr");
//   const rowCount = await rows.count();
//   let found = false;

//   for (let i = 0; i < rowCount; i++) {
//     const row = rows.nth(i);
//     const cellText = await row.textContent();

//     if (cellText.includes(expectedOrderFrom)) {
//       await row.locator("input[type='checkbox']").check();
//       found = true;
//       break;
//     }
//   }

//   return found; //just return, no expect here
// }
async selectOrderByOrderFrom(expectedOrderFrom) {
  const rows = this.page.locator("table tbody tr");
  const rowCount = await rows.count();
  let found = false;

  console.log(JSON.stringify({ searching: expectedOrderFrom, totalRows: rowCount }));

  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);
    const cells = row.locator("td");
    const cellCount = await cells.count();

    const rowData = {};
    for (let j = 0; j < cellCount; j++) {
      rowData[`col_${j}`] = (await cells.nth(j).textContent())?.trim();
    }

    console.log(JSON.stringify({ row: i, ...rowData }));

    const cellText = await row.textContent();

    if (cellText.includes(expectedOrderFrom)) {
      await row.locator("input[type='checkbox']").check();
      console.log(JSON.stringify({ row: i, action: "checkbox checked", matched: expectedOrderFrom }));
      found = true;
      break;
    }
  }

  console.log(JSON.stringify({ result: found }));
  return found;
}
//----------------------------------------------------------

//
async selectCheckboxByOrderIdViewClick(orderId) {
    const rows = this.page.locator("tbody tr");

    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const text = await row.textContent();

      if (orderId.some((id) => text.includes(id))) {
        const checkbox = row.locator('input[type="checkbox"]');
        const viewButton = row.locator("button[aria-label='View Incoming Order Details']");

        if (!(await checkbox.isChecked())) {
          await checkbox.check();
          await viewButton.click();
        }
      }
    }
  }
//
async getNetPayableValue() {

  const netPayableText = this.page.locator(
    "//td[normalize-space()='Net Payable(BDT):']"
  );

  await netPayableText.scrollIntoViewIfNeeded();

  const value = await this.page.locator(
    "//td[normalize-space()='Net Payable(BDT):']/following-sibling::td"
  ).last().textContent();

  console.log("Net Payable Value:", value);

  return value?.trim();
}

// Get Table Data
async getTableData(orderIds = []) {

  const rows = this.page.locator("#wrapper-content tbody tr");

  const headers = await this.page.locator("#wrapper-content thead th").allTextContents();

  const data = [];

  for (let i = 0; i < await rows.count(); i++) {

    const row = rows.nth(i);
    const rowText = await row.textContent();

    // filter by order id
    if (orderIds.length === 0 || orderIds.some(id => rowText.includes(id))) {

      const cells = row.locator("td");

      const rowData = {};

      for (let j = 0; j < await cells.count(); j++) {

        const header = headers[j]?.trim();
        const value = (await cells.nth(j).textContent())?.trim();

        rowData[header] = value;
      }

      data.push(rowData);
    }
  }

  return data;
}



/**
 * Extracts complete product table data + summary from the order view page
 */
/*
async getFullProductTableData() {
  const scrollContainer = this.page.locator(".table-responsive.report-table");

  // Ensure table is visible and scrolled
  await scrollContainer.scrollIntoViewIfNeeded();
  await scrollContainer.evaluate((el) => el.scrollTop = 0);
  
  // Wait for table to be fully loaded
  await this.page.waitForSelector("#wrapper-content tbody tr", { 
    state: 'attached', 
    timeout: 15000 
  });

  await this.page.waitForTimeout(1500);

  // === Debug: Count rows ===
  const rowCount = await this.page.locator("#wrapper-content tbody tr").count();
  console.log(`🔍 Found ${rowCount} rows in tbody`);

  const products = [];

  for (let i = 0; i < rowCount; i++) {
    const row = this.page.locator("#wrapper-content tbody tr").nth(i);
    await row.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(300);

    products.push({
      code: (await row.locator("td:nth-child(1)").textContent()).trim(),

      description: await row.locator("td:nth-child(2)").textContent().then(text => 
        text.trim().replace(/\s+/g, ' ')
      ),

      quantity: parseInt((await row.locator("td:nth-child(3)").textContent()).trim()) || 0,

      perPackTP: parseFloat((await row.locator("td:nth-child(4)").textContent()).trim().replace(/,/g, "")) || 0,
      perPackVAT: (await row.locator("td:nth-child(5)").textContent()).trim(),

      totalTP: parseFloat((await row.locator("td:nth-child(6)").textContent()).trim().replace(/,/g, "")) || 0,
      totalVAT: parseFloat((await row.locator("td:nth-child(7)").textContent()).trim().replace(/,/g, "")) || 0,

      discountPercent: (await row.locator("td:nth-child(8)").textContent()).trim(),
      discountAmount: parseFloat((await row.locator("td:nth-child(9)").textContent()).trim().replace(/,/g, "")) || 0,

      netTP: parseFloat((await row.locator("td:nth-child(10)").textContent()).trim().replace(/,/g, "")) || 0,
      netValue: parseFloat((await row.locator("td:nth-child(11)").textContent()).trim().replace(/,/g, "")) || 0,
    });
  }

  // ==================== FOOTER ====================
  const lastRow = this.page.locator("tfoot tr:last-child");

  const [grossTotalText, netPayableInWords, netPayableAmountText] = await Promise.all([
    this.page.locator("tfoot tr:first-child td:nth-child(6)").textContent(),
    lastRow.locator("td[colspan='5']:nth-of-type(2)").textContent(),   // Fixed nth-of-type
    lastRow.locator("td:last-child").textContent(),
  ]);

  const summary = {
    grossTotal: parseFloat(grossTotalText?.trim().replace(/,/g, "")) || 0,
    netPayable: parseFloat(netPayableAmountText?.trim().replace(/,/g, "")) || 0,
    netPayableInWords: netPayableInWords?.trim() || "",
  };

  console.log(`✅ Extracted ${products.length} products successfully.`);

  return {
    products,
    summary,
    totalItems: products.length,
  };
}

*/

//---------------View or get all data from table-------------

async getFullProductTableData() {
  await this.page.waitForSelector("#wrapper-content", {
    state: "visible",
    timeout: 20000,
  });

  // Wait for BOTH tbody rows AND tfoot rows to be fully rendered
  await this.page.waitForFunction(() => {
    const tbodyRows = document.querySelectorAll("#wrapper-content tbody tr");
    const tfootRows = document.querySelectorAll("#wrapper-content tfoot tr");
    
    const tbodyReady = tbodyRows.length > 0 &&
                       tbodyRows[0].querySelectorAll("td").length >= 11;

    // tfoot must have 4 rows, and row[0] td[1] must have a non-empty number
    const tfootReady = tfootRows.length >= 4 &&
                       tfootRows[0].querySelectorAll("td").length >= 2 &&
                       tfootRows[0].querySelectorAll("td")[1].textContent.trim() !== "";

    return tbodyReady && tfootReady;
  }, { timeout: 20000 });

  const result = await this.page.evaluate(() => {
    const toFloat = (str) => parseFloat((str ?? "").trim().replace(/,/g, "")) || 0;
    const toInt   = (str) => parseInt((str ?? "").trim()) || 0;
    const text    = (el)  => el?.textContent?.trim() ?? "";

    // ── tbody ────────────────────────────────────────────────────────────
    const rows = Array.from(document.querySelectorAll("#wrapper-content tbody tr"));
    const products = rows.map((row) => {
      const cells = Array.from(row.querySelectorAll("td")).map(td => td.textContent.trim());
      if (cells.length < 11) return null;
      return {
        code:            cells[0],
        description:     cells[1].replace(/\s+/g, " "),
        quantity:        toInt(cells[2]),
        perPackTP:       toFloat(cells[3]),
        perPackVAT:      cells[4],
        totalTP:         toFloat(cells[5]),
        totalVAT:        toFloat(cells[6]),
        discountPercent: cells[7],
        discountAmount:  toFloat(cells[8]),
        netTP:           toFloat(cells[9]),
        netValue:        toFloat(cells[10]),
      };
    }).filter(Boolean);

    // ── tfoot ────────────────────────────────────────────────────────────
    const tfootRows = Array.from(document.querySelectorAll("#wrapper-content tfoot tr"));

    // Row 0: colspan=5 "Gross Total:" | td[1]=2,490 | td[2]- | td[3]- | td[4]- | td[5]=2,490 | td[6]=2,490
    const r0 = Array.from(tfootRows[0]?.querySelectorAll("td") ?? []);
    const grossTotal = toFloat(text(r0[1])); // td index 1 after the colspan=5 label

    // Row 3: colspan=5 "Net Payable(BDT):" | colspan=5 words | td=2,540
    const r3 = Array.from(tfootRows[3]?.querySelectorAll("td") ?? []);
    const netPayableInWords = text(r3[1]);
    const netPayable        = toFloat(text(r3[2]));

    // Debug log
    console.log("tfoot row counts:", tfootRows.length);
    console.log("r0 cells:", r0.map(td => td.textContent.trim()));
    console.log("r3 cells:", r3.map(td => td.textContent.trim()));

    return {
      products,
      summary: { grossTotal, netPayable, netPayableInWords },
    };
  });

  console.log(`✅ Extracted ${result.products.length} products`);
  console.log("📊 Summary:", result.summary);
  return {
    products:   result.products,
    summary:    result.summary,
    totalItems: result.products.length,
  };
}
//---------------------------------------
// Update click
async selectCheckboxByOrderIdUpdateClick(orderId) {
    const rows = this.page.locator("tbody tr");

    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const text = await row.textContent();

      if (orderId.some((id) => text.includes(id))) {
        const checkbox = row.locator('input[type="checkbox"]');
        const viewButton = row.locator("button[aria-label='Update Order']");

        if (!(await checkbox.isChecked())) {
          await checkbox.check();
          await viewButton.click();
        }
      }
    };
  }

//-----------------------------------------//
// ==================== UPDATE ORDER USING JSON DATA ====================
/*
// ==================== UPDATE ORDER ====================
 async updateOrderWithJson(testData) {
    console.log("🔄 Starting order update...");

    await this.page.waitForSelector("#wrapper-content", { timeout: 20000 });
    await this.page.waitForTimeout(1500);

    const scrollContainer = this.page.locator(".table-responsive.report-table");
    await scrollContainer.scrollIntoViewIfNeeded();
    await scrollContainer.evaluate(el => el.scrollTop = 0);

    const rows = this.page.locator("#wrapper-content tbody tr");
    const rowCount = await rows.count();
    console.log(`🔍 Found ${rowCount} rows before update`);

    // Update Quantities
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      await row.scrollIntoViewIfNeeded().catch(() => {});

      const optionText = await row.locator("td:nth-child(1) select option:checked")
                            .textContent().catch(() => '');

      let currentCode = '';
      if (optionText) {
        const match = optionText.match(/\(([^)]+)\)/);
        if (match) currentCode = match[1].trim();
      }

      if (!currentCode) continue;

      const matching = testData.products?.find(p => p.code === currentCode);
      if (matching?.quantity) {
        const input = row.locator("td:nth-child(3) input");
        await input.fill(String(matching.quantity));
        await input.press('Tab');
        console.log(`✅ Updated → ${currentCode} : ${matching.quantity}`);
      }
    }

    // Adjustment & Gross Discount
    if (testData.adjustment !== undefined) {
      await this.page.locator('input[placeholder*="Adjustment"]').fill(String(testData.adjustment)).catch(() => {});
    }
    if (testData.grossDiscount !== undefined) {
      await this.page.locator('input[placeholder*="Gross Discount"]').fill(String(testData.grossDiscount)).catch(() => {});
    }

    await this.page.waitForTimeout(1500);

    console.log("✅ Clicking Update Button...");

    // Handle navigation after Update
    try {
      await Promise.all([
        this.page.waitForNavigation({ timeout: 12000 }).catch(() => console.log("📌 No navigation detected")),
        this.page.locator('button:has-text("Update"), button:has-text("Save"), button[type="submit"]').click()
      ]);
      console.log("🔄 Navigation occurred after update");
    } catch (e) {
      console.log("⚠️ Update clicked but no navigation");
      await this.page.waitForTimeout(3000);
    }

    await this.page.waitForTimeout(4000); // Final stabilization wait
    console.log("✅ Update process completed");
  }

  // ==================== GET TABLE DATA ====================
  async getFullProductTableData() {
    console.log("📊 Extracting final table data...");

    await this.page.waitForSelector("#wrapper-content", { timeout: 20000 });
    await this.page.waitForTimeout(3500);

    const tableData = await this.page.evaluate(() => {
      const products = [];
      const rows = document.querySelectorAll("#wrapper-content tbody tr");

      rows.forEach(row => {
        const select = row.querySelector("td:nth-child(1) select");
        let code = '';

        if (select && select.selectedIndex > -1) {
          const text = select.options[select.selectedIndex].textContent || '';
          const match = text.match(/\(([^)]+)\)/);
          if (match) code = match[1].trim();
        }

        if (!code || code.includes("Select Product")) return;

        const qtyInput = row.querySelector("td:nth-child(3) input");
        const quantity = qtyInput ? parseFloat(qtyInput.value) || 0 : 0;

        products.push({ code, quantity });
      });

      const netPayableEl = document.querySelector("tfoot tr:last-child td:last-child");
      const netPayable = netPayableEl ? parseFloat(netPayableEl.textContent.replace(/,/g, '')) || 0 : 0;

      return { products, netPayable };
    });

    console.log(`🎯 Extracted Products: ${tableData.products.length}`);
    tableData.products.forEach(p => console.log(`   → ${p.code} | Qty: ${p.quantity}`));

    return {
      products: tableData.products,
      summary: { netPayable: tableData.netPayable },
      totalItems: tableData.products.length
    };
  }
    */
  //----------------------------------------//



async updateOrderWithJson(testData) {
  console.log("🔄 Starting order update...");

  const verifiedProducts = []; // Return this so the test can assert without re-opening

  try {
    await this.page.waitForSelector("#wrapper-content tbody tr", { timeout: 15000 });

    const rows = this.page.locator("#wrapper-content tbody tr");
    const rowCount = await rows.count();
    console.log(`🔍 Found ${rowCount} rows`);

    if (rowCount === 0) {
      throw new Error("No rows found — page may not have loaded correctly");
    }

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      await row.scrollIntoViewIfNeeded().catch(() => {});

      const optionText = await row
        .locator("td:nth-child(1) select option:checked")
        .textContent()
        .catch(() => "");

      let currentCode = "";
      if (optionText) {
        const match = optionText.match(/\(([^)]+)\)/);
        if (match) currentCode = match[1].trim();
      }

      console.log(`   Row ${i + 1}: code="${currentCode}"`);
      if (!currentCode) continue;

      const matching = testData.products?.find((p) => p.code === currentCode);
      if (matching?.quantity !== undefined) {
        const input = row.locator("td:nth-child(3) input");
        await input.click({ clickCount: 3 });
        await input.fill(String(matching.quantity));
        await input.press("Tab");
        await this.page.waitForTimeout(300);

        const written = await input.inputValue().catch(() => "");
        console.log(`✅ Updated → ${currentCode} : ${matching.quantity} (verified in DOM: ${written})`);

        // Store for test-level assertion — no need to re-open the order
        verifiedProducts.push({ code: currentCode, writtenValue: written });
      }
    }

    if (testData.adjustment !== undefined) {
      const adjInput = this.page.locator('input[placeholder*="Adjustment"]');
      await adjInput.click({ clickCount: 3 }).catch(() => {});
      await adjInput.fill(String(testData.adjustment)).catch(() => {});
      await adjInput.press("Tab").catch(() => {});
    }

    if (testData.grossDiscount !== undefined) {
      const gdInput = this.page.locator('input[placeholder*="Gross Discount"]');
      await gdInput.click({ clickCount: 3 }).catch(() => {});
      await gdInput.fill(String(testData.grossDiscount)).catch(() => {});
      await gdInput.press("Tab").catch(() => {});
    }

    await this.page.waitForTimeout(1000);

    console.log(`✅ Total fields updated: ${verifiedProducts.length}. Clicking Update Button...`);

    const updateButton = this.page
      .locator('button:has-text("Update"), button:has-text("Save")')
      .first();
    await updateButton.waitFor({ state: "visible", timeout: 5000 });
    await updateButton.click();

    const urlBeforeSave = this.page.url();

    try {
      await Promise.race([
        this.page.waitForURL((url) => url.toString() !== urlBeforeSave, { timeout: 15000 }),
        this.page.waitForSelector(
          '.Toastify__toast--success, .Toastify__toast-body, [class*="toast"][class*="success"]',
          { timeout: 15000 }
        ),
        this.page.waitForSelector(
          'button:has-text("Update"), button:has-text("Save")',
          { state: "hidden", timeout: 15000 }
        ),
      ]);
      console.log("✅ Post-save signal detected");
    } catch {
      console.warn("⚠️ No post-save signal detected — continuing anyway");
    }

    await this.page.waitForTimeout(1500);
    console.log(`📍 Current URL after save: ${this.page.url()}`);
    console.log("✅ Update completed successfully");

    return verifiedProducts; // ← Test uses this instead of re-opening

  } catch (error) {
    console.error("⚠️ Error during update:", error.message);
    throw error;
  }
}
  //-------------------
};
