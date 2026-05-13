# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderViewTableInfoTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderViewTableInfoTest.spec.js:8:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
Call log:
  - attempting scroll into view action
    - waiting for element to be stable
    - element is not stable
  - retrying scroll into view action
    - waiting for element to be stable

```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - generic:
      - generic:
        - generic [ref=e1]:
          - link "application logo" [ref=e3] [cursor=pointer]:
            - /url: /
            - img "application logo" [ref=e4]
          - searchbox "Search menu items" [ref=e7]
          - generic [ref=e8]:
            - link "" [ref=e9] [cursor=pointer]:
              - /url: /bulk-upload-list
              - generic "Upload Manager" [ref=e10]: 
            - link "" [ref=e11] [cursor=pointer]:
              - /url: /download-manager
              - generic "Download Manager" [ref=e12]: 
            - generic "View In Full Screen" [ref=e13] [cursor=pointer]: 
            - generic "Notifications" [ref=e14] [cursor=pointer]:
              - generic [ref=e15]:
                - text: 
                - generic "8 unread messages" [ref=e16]: "8"
            - img "Profile" [ref=e19] [cursor=pointer]
        - generic [ref=e21] [cursor=pointer]:
          - button "Open sidebar" [ref=e22]:
            - generic [ref=e24]: 󰅂
          - generic [ref=e25]:
            - link "󰄫 Dashboard" [ref=e27]:
              - /url: /
              - generic [ref=e28]: 󰄫
              - generic: Dashboard
            - generic [ref=e31]: 
            - generic [ref=e34]: 
            - generic [ref=e37]: 
            - generic [ref=e40]: 
            - generic [ref=e43]: 
            - generic [ref=e46]: 
            - generic [ref=e49]: 
            - generic [ref=e52]: 
            - generic [ref=e55]: 
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e59]:
              - heading "Order Details" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Order Details
            - link "List" [ref=e64] [cursor=pointer]:
              - /url: /snd/orders/approval-pending?from=2026-05-06&to=2026-05-13&warehouse_id=400&route_id=3611&retailer_id=236507&retailer_name=City+Store+3
              - button "List" [ref=e66]:
                - generic [ref=e67]: 
                - text: List
          - generic [ref=e73]:
            - generic [ref=e75]:
              - generic [ref=e77]: "1"
              - generic "Order" [ref=e79]
            - generic [ref=e80]:
              - generic [ref=e82]: "2"
              - generic "Proforma" [ref=e84]
            - generic [ref=e85]:
              - generic [ref=e87]: "3"
              - generic "Picking" [ref=e89]
            - generic [ref=e90]:
              - generic [ref=e92]: "4"
              - generic "Collection Summary" [ref=e94]
            - generic [ref=e95]:
              - generic [ref=e97]: "5"
              - generic "Delivery" [ref=e99]
            - generic [ref=e100]:
              - generic [ref=e102]: "6"
              - generic "Collection Posting" [ref=e104]
          - generic [ref=e107]:
            - generic [ref=e108]:
              - heading "Sold To" [level=6] [ref=e109]
              - paragraph [ref=e110]:
                - strong [ref=e111]: R00236507
                - text: City Store 3
              - paragraph [ref=e112]:
                - generic [ref=e113]: 
                - text: "-"
              - paragraph [ref=e114]:
                - generic [ref=e115]: 
                - text: "8801670000725"
            - generic [ref=e116]:
              - heading "Order Information" [level=6] [ref=e117]
              - paragraph [ref=e118]:
                - strong [ref=e119]: "Branch:"
                - text: Rampura Branch
              - paragraph [ref=e120]:
                - strong [ref=e121]: "Route:"
                - text: Rampura Route 1
              - paragraph [ref=e122]:
                - strong [ref=e123]: "Market:"
                - text: Rampura Market 1
              - paragraph [ref=e124]:
                - strong [ref=e125]: "Sub Market:"
                - text: Rampura Submarket 1
            - generic [ref=e126]:
              - heading "Order Details" [level=6] [ref=e127]
              - paragraph [ref=e128]:
                - strong [ref=e129]: "Order ID:"
                - text: ORD-260510-236502-00013
              - paragraph [ref=e130]:
                - strong [ref=e131]: "Status:"
                - generic [ref=e132]: Pending
              - paragraph [ref=e133]:
                - strong [ref=e134]: "Distributor:"
                - text: Territory Manager - Pediatrics
              - paragraph [ref=e135]:
                - strong [ref=e136]: "Order Date:"
                - text: 10-05-2026
              - paragraph [ref=e137]:
                - strong [ref=e138]: "Expected Delivery:"
                - text: 10-05-2026
          - table [ref=e141]:
            - rowgroup [ref=e142]:
              - row "Code Description Quantity Per Pack Total Discount Net TP Net Value" [ref=e143]:
                - columnheader "Code" [ref=e144]
                - columnheader "Description" [ref=e145]
                - columnheader "Quantity" [ref=e146]
                - columnheader "Per Pack" [ref=e147]
                - columnheader "Total" [ref=e148]
                - columnheader "Discount" [ref=e149]
                - columnheader "Net TP" [ref=e150]
                - columnheader "Net Value" [ref=e151]
              - row "TP VAT (%) TP VAT % Amount" [ref=e152]:
                - columnheader "TP" [ref=e153]
                - columnheader "VAT (%)" [ref=e154]
                - columnheader "TP" [ref=e155]
                - columnheader "VAT" [ref=e156]
                - columnheader "%" [ref=e157]
                - columnheader "Amount" [ref=e158]
            - rowgroup [ref=e159]:
              - row "SKC01 Electrolyte Sports Drinks Orange 3 300 - 900 - - - 900 900" [ref=e160]:
                - cell "SKC01" [ref=e161]
                - cell "Electrolyte Sports Drinks Orange" [ref=e162]:
                  - generic [ref=e163]: Electrolyte Sports Drinks Orange
                - cell "3" [ref=e164]
                - cell "300" [ref=e165]
                - cell "-" [ref=e166]
                - cell "900" [ref=e167]
                - cell "-" [ref=e168]
                - cell "-" [ref=e169]
                - cell "-" [ref=e170]
                - cell "900" [ref=e171]
                - cell "900" [ref=e172]
              - row "SKU00013 Esonaaf 20 mg Capsule 3 100 - 300 - - - 300 300" [ref=e173]:
                - cell "SKU00013" [ref=e174]
                - cell "Esonaaf 20 mg Capsule" [ref=e175]:
                  - generic [ref=e176]: Esonaaf 20 mg Capsule
                - cell "3" [ref=e177]
                - cell "100" [ref=e178]
                - cell "-" [ref=e179]
                - cell "300" [ref=e180]
                - cell "-" [ref=e181]
                - cell "-" [ref=e182]
                - cell "-" [ref=e183]
                - cell "300" [ref=e184]
                - cell "300" [ref=e185]
              - row "SKU00017 Mancer 75 WP 3 430 - 1,290 - - - 1,290 1,290" [ref=e186]:
                - cell "SKU00017" [ref=e187]
                - cell "Mancer 75 WP" [ref=e188]:
                  - generic [ref=e189]: Mancer 75 WP
                - cell "3" [ref=e190]
                - cell "430" [ref=e191]
                - cell "-" [ref=e192]
                - cell "1,290" [ref=e193]
                - cell "-" [ref=e194]
                - cell "-" [ref=e195]
                - cell "-" [ref=e196]
                - cell "1,290" [ref=e197]
                - cell "1,290" [ref=e198]
            - rowgroup [ref=e199]:
              - 'row "Gross Total: 2,490 - - - 2,490 2,490" [ref=e200]':
                - cell "Gross Total:" [ref=e201]
                - cell "2,490" [ref=e202]
                - cell "-" [ref=e203]
                - cell "-" [ref=e204]
                - cell "-" [ref=e205]
                - cell "2,490" [ref=e206]
                - cell "2,490" [ref=e207]
              - 'row "TP + VAT: 2,490 Adjustment(+/-): 50" [ref=e208]':
                - cell "TP + VAT:" [ref=e209]
                - cell "2,490" [ref=e210]
                - cell "Adjustment(+/-):" [ref=e211]
                - cell "50" [ref=e212]
              - 'row "Gross Discount: -" [ref=e213]':
                - cell [ref=e214]
                - cell "Gross Discount:" [ref=e215]
                - cell "-" [ref=e216]
              - 'row "Net Payable(BDT): Two Thousand Five Hundred Forty 2,540" [ref=e217]':
                - cell "Net Payable(BDT):" [ref=e218]
                - cell "Two Thousand Five Hundred Forty" [ref=e219]
                - cell "2,540" [ref=e220]
      - generic [ref=e222] [cursor=pointer]:
        - alert [ref=e223]:
          - img [ref=e225]
          - generic [ref=e227]: successfully logged in
        - button "close" [ref=e228]:
          - img [ref=e229]
        - progressbar "notification timer" [ref=e233]
```

# Test source

```ts
  110 | //   const rows = this.page.locator("table tbody tr");
  111 | //   const rowCount = await rows.count();
  112 | //   let found = false;
  113 | 
  114 | //   for (let i = 0; i < rowCount; i++) {
  115 | //     const row = rows.nth(i);
  116 | //     const cellText = await row.textContent();
  117 | 
  118 | //     if (cellText.includes(expectedOrderFrom)) {
  119 | //       await row.locator("input[type='checkbox']").check();
  120 | //       found = true;
  121 | //       break;
  122 | //     }
  123 | //   }
  124 | 
  125 | //   return found; //just return, no expect here
  126 | // }
  127 | 
  128 | //
  129 | async selectCheckboxByOrderIdViewClick(orderId) {
  130 |     const rows = this.page.locator("tbody tr");
  131 | 
  132 |     for (let i = 0; i < (await rows.count()); i++) {
  133 |       const row = rows.nth(i);
  134 |       const text = await row.textContent();
  135 | 
  136 |       if (orderId.some((id) => text.includes(id))) {
  137 |         const checkbox = row.locator('input[type="checkbox"]');
  138 |         const viewButton = row.locator("button[aria-label='View Incoming Order Details']");
  139 | 
  140 |         if (!(await checkbox.isChecked())) {
  141 |           await checkbox.check();
  142 |           await viewButton.click();
  143 |         }
  144 |       }
  145 |     }
  146 |   }
  147 | //
  148 | async getNetPayableValue() {
  149 | 
  150 |   const netPayableText = this.page.locator(
  151 |     "//td[normalize-space()='Net Payable(BDT):']"
  152 |   );
  153 | 
  154 |   await netPayableText.scrollIntoViewIfNeeded();
  155 | 
  156 |   const value = await this.page.locator(
  157 |     "//td[normalize-space()='Net Payable(BDT):']/following-sibling::td"
  158 |   ).last().textContent();
  159 | 
  160 |   console.log("Net Payable Value:", value);
  161 | 
  162 |   return value?.trim();
  163 | }
  164 | 
  165 | // 
  166 | async getTableData(orderIds = []) {
  167 | 
  168 |   const rows = this.page.locator("#wrapper-content tbody tr");
  169 | 
  170 |   const headers = await this.page.locator("#wrapper-content thead th").allTextContents();
  171 | 
  172 |   const data = [];
  173 | 
  174 |   for (let i = 0; i < await rows.count(); i++) {
  175 | 
  176 |     const row = rows.nth(i);
  177 |     const rowText = await row.textContent();
  178 | 
  179 |     // filter by order id
  180 |     if (orderIds.length === 0 || orderIds.some(id => rowText.includes(id))) {
  181 | 
  182 |       const cells = row.locator("td");
  183 | 
  184 |       const rowData = {};
  185 | 
  186 |       for (let j = 0; j < await cells.count(); j++) {
  187 | 
  188 |         const header = headers[j]?.trim();
  189 |         const value = (await cells.nth(j).textContent())?.trim();
  190 | 
  191 |         rowData[header] = value;
  192 |       }
  193 | 
  194 |       data.push(rowData);
  195 |     }
  196 |   }
  197 | 
  198 |   return data;
  199 | }
  200 | 
  201 | 
  202 | 
  203 | /**
  204 |  * Extracts complete product table data + summary from the order view page
  205 |  */
  206 | async getFullProductTableData() {
  207 |   const scrollContainer = this.page.locator(".table-responsive.report-table");
  208 | 
  209 |   // Ensure table is visible and scrolled
> 210 |   await scrollContainer.scrollIntoViewIfNeeded();
      |                         ^ Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
  211 |   await scrollContainer.evaluate((el) => el.scrollTop = 0);
  212 |   
  213 |   // Wait for table to be fully loaded
  214 |   await this.page.waitForSelector("#wrapper-content tbody tr", { 
  215 |     state: 'attached', 
  216 |     timeout: 15000 
  217 |   });
  218 | 
  219 |   await this.page.waitForTimeout(1500);
  220 | 
  221 |   // === Debug: Count rows ===
  222 |   const rowCount = await this.page.locator("#wrapper-content tbody tr").count();
  223 |   console.log(`🔍 Found ${rowCount} rows in tbody`);
  224 | 
  225 |   const products = [];
  226 | 
  227 |   for (let i = 0; i < rowCount; i++) {
  228 |     const row = this.page.locator("#wrapper-content tbody tr").nth(i);
  229 |     await row.scrollIntoViewIfNeeded();
  230 |     await this.page.waitForTimeout(300);
  231 | 
  232 |     products.push({
  233 |       code: (await row.locator("td:nth-child(1)").textContent()).trim(),
  234 | 
  235 |       description: await row.locator("td:nth-child(2)").textContent().then(text => 
  236 |         text.trim().replace(/\s+/g, ' ')
  237 |       ),
  238 | 
  239 |       quantity: parseInt((await row.locator("td:nth-child(3)").textContent()).trim()) || 0,
  240 | 
  241 |       perPackTP: parseFloat((await row.locator("td:nth-child(4)").textContent()).trim().replace(/,/g, "")) || 0,
  242 |       perPackVAT: (await row.locator("td:nth-child(5)").textContent()).trim(),
  243 | 
  244 |       totalTP: parseFloat((await row.locator("td:nth-child(6)").textContent()).trim().replace(/,/g, "")) || 0,
  245 |       totalVAT: parseFloat((await row.locator("td:nth-child(7)").textContent()).trim().replace(/,/g, "")) || 0,
  246 | 
  247 |       discountPercent: (await row.locator("td:nth-child(8)").textContent()).trim(),
  248 |       discountAmount: parseFloat((await row.locator("td:nth-child(9)").textContent()).trim().replace(/,/g, "")) || 0,
  249 | 
  250 |       netTP: parseFloat((await row.locator("td:nth-child(10)").textContent()).trim().replace(/,/g, "")) || 0,
  251 |       netValue: parseFloat((await row.locator("td:nth-child(11)").textContent()).trim().replace(/,/g, "")) || 0,
  252 |     });
  253 |   }
  254 | 
  255 |   // ==================== FOOTER ====================
  256 |   const lastRow = this.page.locator("tfoot tr:last-child");
  257 | 
  258 |   const [grossTotalText, netPayableInWords, netPayableAmountText] = await Promise.all([
  259 |     this.page.locator("tfoot tr:first-child td:nth-child(6)").textContent(),
  260 |     lastRow.locator("td[colspan='5']:nth-of-type(2)").textContent(),   // Fixed nth-of-type
  261 |     lastRow.locator("td:last-child").textContent(),
  262 |   ]);
  263 | 
  264 |   const summary = {
  265 |     grossTotal: parseFloat(grossTotalText?.trim().replace(/,/g, "")) || 0,
  266 |     netPayable: parseFloat(netPayableAmountText?.trim().replace(/,/g, "")) || 0,
  267 |     netPayableInWords: netPayableInWords?.trim() || "",
  268 |   };
  269 | 
  270 |   console.log(`✅ Extracted ${products.length} products successfully.`);
  271 | 
  272 |   return {
  273 |     products,
  274 |     summary,
  275 |     totalItems: products.length,
  276 |   };
  277 | }
  278 | 
  279 | // Update click
  280 | async selectCheckboxByOrderIdUpdateClick(orderId) {
  281 |     const rows = this.page.locator("tbody tr");
  282 | 
  283 |     for (let i = 0; i < (await rows.count()); i++) {
  284 |       const row = rows.nth(i);
  285 |       const text = await row.textContent();
  286 | 
  287 |       if (orderId.some((id) => text.includes(id))) {
  288 |         const checkbox = row.locator('input[type="checkbox"]');
  289 |         const viewButton = row.locator("button[aria-label='Update Order']");
  290 | 
  291 |         if (!(await checkbox.isChecked())) {
  292 |           await checkbox.check();
  293 |           await viewButton.click();
  294 |         }
  295 |       }
  296 |     }
  297 |   }
  298 | 
  299 | //-----------------------------------------//
  300 | // ==================== UPDATE ORDER USING JSON DATA ====================
  301 | /*
  302 | // ==================== UPDATE ORDER ====================
  303 |  async updateOrderWithJson(testData) {
  304 |     console.log("🔄 Starting order update...");
  305 | 
  306 |     await this.page.waitForSelector("#wrapper-content", { timeout: 20000 });
  307 |     await this.page.waitForTimeout(1500);
  308 | 
  309 |     const scrollContainer = this.page.locator(".table-responsive.report-table");
  310 |     await scrollContainer.scrollIntoViewIfNeeded();
```