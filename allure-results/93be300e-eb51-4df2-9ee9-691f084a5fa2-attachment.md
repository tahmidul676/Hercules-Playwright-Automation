# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderUpdateTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderUpdateTest.spec.js:8:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic:
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
              - heading "Update Order" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Update Order
            - link "List" [ref=e64] [cursor=pointer]:
              - /url: /snd/orders/approval-pending?from=2026-05-05&to=2026-05-12&warehouse_id=400&route_id=3611&retailer_id=236507&retailer_name=City+Store+3
              - button "List" [ref=e66]:
                - generic [ref=e67]: 
                - text: List
          - generic [ref=e71]:
            - generic [ref=e72]:
              - heading "Sold To" [level=6] [ref=e73]
              - paragraph [ref=e74]:
                - strong [ref=e75]: R00236507
                - text: City Store 3
              - paragraph [ref=e76]:
                - generic [ref=e77]: 
                - text: "-"
              - paragraph [ref=e78]:
                - generic [ref=e79]: 
                - text: "8801670000725"
            - generic [ref=e80]:
              - heading "Order Information" [level=6] [ref=e81]
              - paragraph [ref=e82]:
                - strong [ref=e83]: "Branch:"
                - text: Rampura Branch
              - paragraph [ref=e84]:
                - strong [ref=e85]: "Route:"
                - text: Rampura Route 1
              - paragraph [ref=e86]:
                - strong [ref=e87]: "Market:"
                - text: Rampura Market 1
              - paragraph [ref=e88]:
                - strong [ref=e89]: "Sub Market:"
                - text: Rampura Submarket 1
            - generic [ref=e90]:
              - heading "Order Details" [level=6] [ref=e91]
              - paragraph [ref=e92]:
                - strong [ref=e93]: "Order ID:"
                - text: ORD-260510-236502-00014
              - paragraph [ref=e94]:
                - strong [ref=e95]: "Status:"
                - generic [ref=e96]: Pending
              - paragraph [ref=e97]:
                - strong [ref=e98]: "Distributor:"
                - text: Territory Manager - Pediatrics
              - paragraph [ref=e99]:
                - strong [ref=e100]: "Order Date:"
                - text: 10-05-2026
              - paragraph [ref=e101]:
                - strong [ref=e102]: "Expected Delivery:"
                - text: 10-05-2026
          - generic [ref=e103]:
            - table [ref=e106]:
              - rowgroup [ref=e107]:
                - row "Code Description Quantity Per Pack Total Discount Net TP Net Value Action" [ref=e108]:
                  - columnheader "Code" [ref=e109]
                  - columnheader "Description" [ref=e110]
                  - columnheader "Quantity" [ref=e111]
                  - columnheader "Per Pack" [ref=e112]
                  - columnheader "Total" [ref=e113]
                  - columnheader "Discount" [ref=e114]
                  - columnheader "Net TP" [ref=e115]
                  - columnheader "Net Value" [ref=e116]
                  - columnheader "Action" [ref=e117]
                - row "TP VAT (%) TP VAT % Amount" [ref=e118]:
                  - columnheader "TP" [ref=e119]
                  - columnheader "VAT (%)" [ref=e120]
                  - columnheader "TP" [ref=e121]
                  - columnheader "VAT" [ref=e122]
                  - columnheader "%" [ref=e123]
                  - columnheader "Amount" [ref=e124]
              - rowgroup [ref=e125]:
                - row "Electrolyte Sports Drinks Orange (SKC01) Sports Drink 1 300 - 300 - - - 300 300 Remove" [ref=e126]:
                  - cell "Electrolyte Sports Drinks Orange (SKC01)" [ref=e127]:
                    - combobox [ref=e129] [cursor=pointer]:
                      - option "Select Product"
                      - option "Cefinaaf 400 mg Capsule (SKU00011)"
                      - option "Acrobat MZ (SKU00019)"
                      - option "Zampro DM (SKU00018)"
                      - option "Mancer 75 WP (SKU00017)"
                      - option "Forastin 50 WP (SKU00016)"
                      - option "Rabenaaf 20 mg Capsule (SKU00015)"
                      - option "Dexnaaf 60 mg Capsule (SKU00014)"
                      - option "Esonaaf 20 mg Capsule (SKU00013)"
                      - option "Cipronaaf 500 mg Tablet (SKU00012)"
                      - option "Azinaaf 500 mg Tablet (SKU00010)"
                      - option "Confidor (SKU00022)"
                      - option "Virtako (SKU00023)"
                      - option "Ampligo (SKU00024)"
                      - option "Voliam Flexi (SKU00025)"
                      - option "Secure 600 WG (SKU00020)"
                      - option "Electrolyte Sports Drinks Mango (SKC03)"
                      - option "Electrolyte Sports Drinks Orange (SKC01)" [selected]
                      - option "Rugby 10G (SKU00021)"
                      - option "Electrolyte Sports Drinks Lemon (SKC02)"
                  - cell "Sports Drink" [ref=e130]
                  - cell "1" [ref=e131]:
                    - spinbutton [ref=e134]: "1"
                  - cell "300" [ref=e135]
                  - cell "-" [ref=e136]
                  - cell "300" [ref=e137]
                  - cell "-" [ref=e138]
                  - cell "-" [ref=e139]
                  - cell "-" [ref=e140]
                  - cell "300" [ref=e141]
                  - cell "300" [ref=e142]
                  - cell "Remove" [ref=e143]:
                    - button "Remove" [ref=e145] [cursor=pointer]:
                      - generic [ref=e146]: 
                - row "Esonaaf 20 mg Capsule (SKU00013) Esonaaf 20 mg Capsule 1 100 - 100 - - - 100 100 Remove" [ref=e147]:
                  - cell "Esonaaf 20 mg Capsule (SKU00013)" [ref=e148]:
                    - combobox [ref=e150] [cursor=pointer]:
                      - option "Select Product"
                      - option "Cefinaaf 400 mg Capsule (SKU00011)"
                      - option "Acrobat MZ (SKU00019)"
                      - option "Zampro DM (SKU00018)"
                      - option "Mancer 75 WP (SKU00017)"
                      - option "Forastin 50 WP (SKU00016)"
                      - option "Rabenaaf 20 mg Capsule (SKU00015)"
                      - option "Dexnaaf 60 mg Capsule (SKU00014)"
                      - option "Esonaaf 20 mg Capsule (SKU00013)" [selected]
                      - option "Cipronaaf 500 mg Tablet (SKU00012)"
                      - option "Azinaaf 500 mg Tablet (SKU00010)"
                      - option "Confidor (SKU00022)"
                      - option "Virtako (SKU00023)"
                      - option "Ampligo (SKU00024)"
                      - option "Voliam Flexi (SKU00025)"
                      - option "Secure 600 WG (SKU00020)"
                      - option "Electrolyte Sports Drinks Mango (SKC03)"
                      - option "Electrolyte Sports Drinks Orange (SKC01)"
                      - option "Rugby 10G (SKU00021)"
                      - option "Electrolyte Sports Drinks Lemon (SKC02)"
                  - cell "Esonaaf 20 mg Capsule" [ref=e151]
                  - cell "1" [ref=e152]:
                    - spinbutton [ref=e155]: "1"
                  - cell "100" [ref=e156]
                  - cell "-" [ref=e157]
                  - cell "100" [ref=e158]
                  - cell "-" [ref=e159]
                  - cell "-" [ref=e160]
                  - cell "-" [ref=e161]
                  - cell "100" [ref=e162]
                  - cell "100" [ref=e163]
                  - cell "Remove" [ref=e164]:
                    - button "Remove" [ref=e166] [cursor=pointer]:
                      - generic [ref=e167]: 
                - row "Mancer 75 WP (SKU00017) Mancer 75 WP 1 430 - 430 - - - 430 430 Remove" [ref=e168]:
                  - cell "Mancer 75 WP (SKU00017)" [ref=e169]:
                    - combobox [ref=e171] [cursor=pointer]:
                      - option "Select Product"
                      - option "Cefinaaf 400 mg Capsule (SKU00011)"
                      - option "Acrobat MZ (SKU00019)"
                      - option "Zampro DM (SKU00018)"
                      - option "Mancer 75 WP (SKU00017)" [selected]
                      - option "Forastin 50 WP (SKU00016)"
                      - option "Rabenaaf 20 mg Capsule (SKU00015)"
                      - option "Dexnaaf 60 mg Capsule (SKU00014)"
                      - option "Esonaaf 20 mg Capsule (SKU00013)"
                      - option "Cipronaaf 500 mg Tablet (SKU00012)"
                      - option "Azinaaf 500 mg Tablet (SKU00010)"
                      - option "Confidor (SKU00022)"
                      - option "Virtako (SKU00023)"
                      - option "Ampligo (SKU00024)"
                      - option "Voliam Flexi (SKU00025)"
                      - option "Secure 600 WG (SKU00020)"
                      - option "Electrolyte Sports Drinks Mango (SKC03)"
                      - option "Electrolyte Sports Drinks Orange (SKC01)"
                      - option "Rugby 10G (SKU00021)"
                      - option "Electrolyte Sports Drinks Lemon (SKC02)"
                  - cell "Mancer 75 WP" [ref=e172]
                  - cell "1" [ref=e173]:
                    - spinbutton [ref=e176]: "1"
                  - cell "430" [ref=e177]
                  - cell "-" [ref=e178]
                  - cell "430" [ref=e179]
                  - cell "-" [ref=e180]
                  - cell "-" [ref=e181]
                  - cell "-" [ref=e182]
                  - cell "430" [ref=e183]
                  - cell "430" [ref=e184]
                  - cell "Remove" [ref=e185]:
                    - button "Remove" [active] [ref=e187] [cursor=pointer]:
                      - generic [ref=e188]: 
                - row "Select Product - - - - - - - - Add New Row" [ref=e189]:
                  - cell "Select Product" [ref=e190]:
                    - combobox [ref=e192] [cursor=pointer]:
                      - option "Select Product" [selected]
                      - option "Cefinaaf 400 mg Capsule (SKU00011)"
                      - option "Acrobat MZ (SKU00019)"
                      - option "Zampro DM (SKU00018)"
                      - option "Mancer 75 WP (SKU00017)"
                      - option "Forastin 50 WP (SKU00016)"
                      - option "Rabenaaf 20 mg Capsule (SKU00015)"
                      - option "Dexnaaf 60 mg Capsule (SKU00014)"
                      - option "Esonaaf 20 mg Capsule (SKU00013)"
                      - option "Cipronaaf 500 mg Tablet (SKU00012)"
                      - option "Azinaaf 500 mg Tablet (SKU00010)"
                      - option "Confidor (SKU00022)"
                      - option "Virtako (SKU00023)"
                      - option "Ampligo (SKU00024)"
                      - option "Voliam Flexi (SKU00025)"
                      - option "Secure 600 WG (SKU00020)"
                      - option "Electrolyte Sports Drinks Mango (SKC03)"
                      - option "Electrolyte Sports Drinks Orange (SKC01)"
                      - option "Rugby 10G (SKU00021)"
                      - option "Electrolyte Sports Drinks Lemon (SKC02)"
                  - cell [ref=e193]
                  - cell [ref=e194]:
                    - spinbutton [ref=e197]
                  - cell "-" [ref=e198]
                  - cell "-" [ref=e199]
                  - cell "-" [ref=e200]
                  - cell "-" [ref=e201]
                  - cell "-" [ref=e202]
                  - cell "-" [ref=e203]
                  - cell "-" [ref=e204]
                  - cell "-" [ref=e205]
                  - cell "Add New Row" [ref=e206]:
                    - button "Add New Row" [ref=e208] [cursor=pointer]:
                      - generic [ref=e209]: 
              - rowgroup [ref=e210]:
                - 'row "Gross Total: 830 - - - 830 830" [ref=e211]':
                  - cell "Gross Total:" [ref=e212]
                  - cell "830" [ref=e213]
                  - cell "-" [ref=e214]
                  - cell "-" [ref=e215]
                  - cell "-" [ref=e216]
                  - cell "830" [ref=e217]
                  - cell "830" [ref=e218]
                  - cell [ref=e219]
                - 'row "TP + VAT: 830 Adjustment(+/-): 250 250" [ref=e220]':
                  - cell "TP + VAT:" [ref=e221]
                  - cell "830" [ref=e222]
                  - cell "Adjustment(+/-):" [ref=e223]
                  - cell "250" [ref=e224]:
                    - spinbutton [ref=e226]: "250"
                  - cell "250" [ref=e227]
                  - cell [ref=e228]
                - 'row "Gross Discount: -" [ref=e229]':
                  - cell [ref=e230]
                  - cell "Gross Discount:" [ref=e231]
                  - cell [ref=e232]:
                    - spinbutton [ref=e234]
                  - cell "-" [ref=e235]
                  - cell [ref=e236]
                - 'row "Net Payable(BDT): One Thousand Eighty 1,080" [ref=e237]':
                  - cell "Net Payable(BDT):" [ref=e238]
                  - cell "One Thousand Eighty" [ref=e239]
                  - cell "1,080" [ref=e240]
                  - cell [ref=e241]
            - textbox "Comment" [ref=e246]
            - generic [ref=e247]:
              - button "Calculate Profit" [ref=e249] [cursor=pointer]:
                - generic [ref=e250]: 
                - text: Calculate Profit
              - generic "Update" [ref=e251]:
                - button "Update" [ref=e252] [cursor=pointer]:
                  - generic [ref=e253]: Update
  - tooltip "Remove" [ref=e254]:
    - generic [ref=e256]: Remove
```

# Test source

```ts
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
  279 | ///
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
  301 | 
  302 | // ==================== UPDATE ORDER ====================
  303 |  async updateOrderWithJson(testData) {
  304 |     console.log("🔄 Starting order update...");
  305 | 
  306 |     await this.page.waitForSelector("#wrapper-content", { timeout: 20000 });
  307 |     await this.page.waitForTimeout(1500);
  308 | 
  309 |     const scrollContainer = this.page.locator(".table-responsive.report-table");
  310 |     await scrollContainer.scrollIntoViewIfNeeded();
  311 |     await scrollContainer.evaluate(el => el.scrollTop = 0);
  312 | 
  313 |     const rows = this.page.locator("#wrapper-content tbody tr");
  314 |     const rowCount = await rows.count();
  315 |     console.log(`🔍 Found ${rowCount} rows before update`);
  316 | 
  317 |     // Update Quantities
  318 |     for (let i = 0; i < rowCount; i++) {
  319 |       const row = rows.nth(i);
  320 |       await row.scrollIntoViewIfNeeded().catch(() => {});
  321 | 
  322 |       const optionText = await row.locator("td:nth-child(1) select option:checked")
  323 |                             .textContent().catch(() => '');
  324 | 
  325 |       let currentCode = '';
  326 |       if (optionText) {
  327 |         const match = optionText.match(/\(([^)]+)\)/);
  328 |         if (match) currentCode = match[1].trim();
  329 |       }
  330 | 
  331 |       if (!currentCode) continue;
  332 | 
  333 |       const matching = testData.products?.find(p => p.code === currentCode);
  334 |       if (matching?.quantity) {
  335 |         const input = row.locator("td:nth-child(3) input");
  336 |         await input.fill(String(matching.quantity));
  337 |         await input.press('Tab');
  338 |         console.log(`✅ Updated → ${currentCode} : ${matching.quantity}`);
  339 |       }
  340 |     }
  341 | 
  342 |     // Adjustment & Gross Discount
  343 |     if (testData.adjustment !== undefined) {
  344 |       await this.page.locator('input[placeholder*="Adjustment"]').fill(String(testData.adjustment)).catch(() => {});
  345 |     }
  346 |     if (testData.grossDiscount !== undefined) {
  347 |       await this.page.locator('input[placeholder*="Gross Discount"]').fill(String(testData.grossDiscount)).catch(() => {});
  348 |     }
  349 | 
> 350 |     await this.page.waitForTimeout(1500);
      |                     ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  351 | 
  352 |     console.log("✅ Clicking Update Button...");
  353 | 
  354 |     // Handle navigation after Update
  355 |     try {
  356 |       await Promise.all([
  357 |         this.page.waitForNavigation({ timeout: 12000 }).catch(() => console.log("📌 No navigation detected")),
  358 |         this.page.locator('button:has-text("Update"), button:has-text("Save"), button[type="submit"]').click()
  359 |       ]);
  360 |       console.log("🔄 Navigation occurred after update");
  361 |     } catch (e) {
  362 |       console.log("⚠️ Update clicked but no navigation");
  363 |       await this.page.waitForTimeout(3000);
  364 |     }
  365 | 
  366 |     await this.page.waitForTimeout(4000); // Final stabilization wait
  367 |     console.log("✅ Update process completed");
  368 |   }
  369 | 
  370 |   // ==================== GET TABLE DATA ====================
  371 |   async getFullProductTableData() {
  372 |     console.log("📊 Extracting final table data...");
  373 | 
  374 |     await this.page.waitForSelector("#wrapper-content", { timeout: 20000 });
  375 |     await this.page.waitForTimeout(3500);
  376 | 
  377 |     const tableData = await this.page.evaluate(() => {
  378 |       const products = [];
  379 |       const rows = document.querySelectorAll("#wrapper-content tbody tr");
  380 | 
  381 |       rows.forEach(row => {
  382 |         const select = row.querySelector("td:nth-child(1) select");
  383 |         let code = '';
  384 | 
  385 |         if (select && select.selectedIndex > -1) {
  386 |           const text = select.options[select.selectedIndex].textContent || '';
  387 |           const match = text.match(/\(([^)]+)\)/);
  388 |           if (match) code = match[1].trim();
  389 |         }
  390 | 
  391 |         if (!code || code.includes("Select Product")) return;
  392 | 
  393 |         const qtyInput = row.querySelector("td:nth-child(3) input");
  394 |         const quantity = qtyInput ? parseFloat(qtyInput.value) || 0 : 0;
  395 | 
  396 |         products.push({ code, quantity });
  397 |       });
  398 | 
  399 |       const netPayableEl = document.querySelector("tfoot tr:last-child td:last-child");
  400 |       const netPayable = netPayableEl ? parseFloat(netPayableEl.textContent.replace(/,/g, '')) || 0 : 0;
  401 | 
  402 |       return { products, netPayable };
  403 |     });
  404 | 
  405 |     console.log(`🎯 Extracted Products: ${tableData.products.length}`);
  406 |     tableData.products.forEach(p => console.log(`   → ${p.code} | Qty: ${p.quantity}`));
  407 | 
  408 |     return {
  409 |       products: tableData.products,
  410 |       summary: { netPayable: tableData.netPayable },
  411 |       totalItems: tableData.products.length
  412 |     };
  413 |   }
  414 |   //----------------------------------------//
  415 | };
  416 | 
```