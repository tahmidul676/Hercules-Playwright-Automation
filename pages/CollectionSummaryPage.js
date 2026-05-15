exports.CollectionSummaryPage = class CollectionSummaryPage {
  constructor(page) {
    this.page = page;
  }

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

    console.log(`\n======= TABLE DATA =======`);
    console.log(`Total rows found: ${rowCount}`);
    console.log(`Searching for retailer name: "${expectedOrderFrom}"`);
    console.log(`==========================\n`);

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const cells = row.locator("td");
      const totalCells = await cells.count();

      if (totalCells === 0) continue;

      // Collect all cell values for this row
      const cellValues = [];
      for (let c = 0; c < totalCells; c++) {
        const raw = await cells
          .nth(c)
          .evaluate((el) => el.innerText.trim().replace(/\u200C/g, ""));
        cellValues.push(raw);
      }

      // Log the full row as a readable table line
      console.log(`Row[${i}] => ${cellValues.join(" | ")}`);

      const rowText = cellValues.join(" ");

      if (rowText.includes(expectedOrderFrom.trim())) {
        console.log(`\n✅ Match found at Row[${i}] for "${expectedOrderFrom}"`);

        await this.page.evaluate((index) => {
          const rows = document.querySelectorAll("table tbody tr");
          const checkbox = rows[index]?.querySelector("input[type='checkbox']");
          if (checkbox) checkbox.click();
        }, i);

        found = true;
        break;
      }
    }

    if (!found) {
      console.log(`\n❌ "${expectedOrderFrom}" not found in any row.`);
    }

    return found;
  }
};
