# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderUpdateTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderUpdateTest.spec.js:8:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
Call log:
  - attempting scroll into view action
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
              - heading "Approval Pending Order" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Approval Pending Order
            - button "Filter" [ref=e66] [cursor=pointer]:
              - generic [ref=e67]: 
              - text: Filter
          - generic [ref=e71]:
            - generic [ref=e72]:
              - generic [ref=e73]: Business Unit
              - combobox [ref=e74] [cursor=pointer]:
                - option "Select Business Unit" [selected]
                - option "CBU of Consumer Healthcare"
                - option "Chief Business Officer-Pediatrics"
                - option "Head of Business"
            - generic [ref=e75] [cursor=pointer]:
              - generic [ref=e76]: Branch
              - generic [ref=e77]:
                - log [ref=e79]
                - generic [ref=e80]:
                  - generic [ref=e81]:
                    - generic [ref=e82]: Select Branch
                    - combobox [ref=e84]
                  - img [ref=e88]
              - textbox "Branch"
            - generic [ref=e90] [cursor=pointer]:
              - generic [ref=e91]: Route
              - generic [ref=e92]:
                - log [ref=e94]
                - generic [ref=e95]:
                  - generic [ref=e96]:
                    - generic [ref=e97]: Select Route
                    - combobox [ref=e99]
                  - img [ref=e103]
              - textbox "Route"
            - generic [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: Market
              - generic [ref=e107]:
                - log [ref=e109]
                - generic [ref=e110]:
                  - generic [ref=e111]:
                    - generic [ref=e112]: Select Market
                    - combobox [ref=e114]
                  - img [ref=e118]
              - textbox "Market"
            - generic [ref=e120] [cursor=pointer]:
              - generic [ref=e121]: Sub Market
              - generic [ref=e122]:
                - log [ref=e124]
                - generic [ref=e125]:
                  - generic [ref=e126]:
                    - generic [ref=e127]: Select Sub Market
                    - combobox [ref=e129]
                  - img [ref=e133]
              - textbox "Sub Market"
            - generic [ref=e135] [cursor=pointer]:
              - generic [ref=e136]: Retailer
              - generic [ref=e137]:
                - log [ref=e139]
                - generic [ref=e140]:
                  - generic [ref=e141]:
                    - generic [ref=e142]: Select Retailer
                    - combobox [ref=e144]
                  - img [ref=e148]
              - textbox "Retailer"
            - generic [ref=e150]:
              - generic [ref=e151]: Invoice No
              - textbox "Invoice No" [ref=e153]
            - generic [ref=e154]:
              - generic [ref=e155]: Order ID
              - textbox "Order ID" [ref=e157]
            - generic [ref=e158]:
              - generic [ref=e159]: Source
              - combobox "Source Source" [ref=e160] [cursor=pointer]:
                - option "Select Source" [selected]
                - option "SR App"
                - option "Web"
            - generic [ref=e161]:
              - generic [ref=e162]: Date Range
              - generic [ref=e164]:
                - generic [ref=e165]:
                  - generic [ref=e166]: "0"
                  - spinbutton [ref=e167]: "5"
                  - text: "-"
                  - generic [ref=e168]: "0"
                  - spinbutton [ref=e169]: "5"
                  - text: "-"
                  - spinbutton [ref=e170]: "2026"
                - generic [ref=e171]: "-"
                - generic [ref=e172]:
                  - spinbutton [ref=e173]: "12"
                  - text: "-"
                  - generic [ref=e174]: "0"
                  - spinbutton [ref=e175]: "5"
                  - text: "-"
                  - spinbutton [ref=e176]: "2026"
                - button [ref=e177] [cursor=pointer]:
                  - generic [ref=e178]: 
            - generic [ref=e179]:
              - generic [ref=e180]: Source
              - combobox [ref=e181] [cursor=pointer]:
                - option "Select Source" [selected]
                - option "SR App"
                - option "Web"
            - generic [ref=e182]:
              - generic [ref=e183]: Retailer Code
              - textbox "Retailer Code" [ref=e185]
            - group [ref=e187]:
              - button "󰍉 Submit" [ref=e188] [cursor=pointer]:
                - text: 󰍉
                - generic [ref=e189]: Submit
              - button "Reset Filter" [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: 󰑐
                - text: Reset
          - generic [ref=e193]:
            - generic [ref=e194]:
              - generic [ref=e195]:
                - heading "Approval Pending Order List" [level=5] [ref=e196]
                - paragraph
              - group [ref=e198] [cursor=pointer]:
                - button "Download Sheet" [ref=e200]:
                  - generic [ref=e201]: 
            - generic [ref=e202]:
              - table [ref=e204]:
                - rowgroup [ref=e205]:
                  - row "SL Order Id Invoice Id Order Date Discount Amount Total Paid Amount Order From Order To Comment Status Action" [ref=e206]:
                    - columnheader "SL" [ref=e207]
                    - columnheader "Order Id" [ref=e208]
                    - columnheader "Invoice Id" [ref=e209]
                    - columnheader "Order Date" [ref=e210]
                    - columnheader "Discount Amount" [ref=e211]
                    - columnheader "Total" [ref=e212]
                    - columnheader "Paid Amount" [ref=e213]
                    - columnheader "Order From" [ref=e214]
                    - columnheader "Order To" [ref=e215]
                    - columnheader "Comment" [ref=e216]
                    - columnheader "Status" [ref=e217]
                    - columnheader "Action" [ref=e218]
                - rowgroup [ref=e219]:
                  - row "ORD-260510-236502-00014 1778404228853 2026-05-10 - 10,420 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e220]:
                    - cell [ref=e221]:
                      - checkbox [ref=e222]
                    - cell "ORD-260510-236502-00014" [ref=e223]
                    - cell "1778404228853" [ref=e224]
                    - cell "2026-05-10" [ref=e225]
                    - cell "-" [ref=e226]
                    - cell "10,420" [ref=e227]
                    - cell "0.00" [ref=e228]
                    - cell "City Store 3" [ref=e229]
                    - cell "MPO 06" [ref=e230]
                    - cell "-" [ref=e231]
                    - cell "Pending" [ref=e232]:
                      - generic [ref=e233]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e234]:
                      - button "View Incoming Order Details" [ref=e236] [cursor=pointer]:
                        - generic [ref=e237]: 
                      - button "Update Order" [ref=e239] [cursor=pointer]:
                        - generic [ref=e240]: 
                  - row "ORD-260510-236502-00013 1778403873905 2026-05-10 - 11,660 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e241]:
                    - cell [ref=e242]:
                      - checkbox [ref=e243]
                    - cell "ORD-260510-236502-00013" [ref=e244]
                    - cell "1778403873905" [ref=e245]
                    - cell "2026-05-10" [ref=e246]
                    - cell "-" [ref=e247]
                    - cell "11,660" [ref=e248]
                    - cell "0.00" [ref=e249]
                    - cell "City Store 3" [ref=e250]
                    - cell "MPO 06" [ref=e251]
                    - cell "-" [ref=e252]
                    - cell "Pending" [ref=e253]:
                      - generic [ref=e254]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e255]:
                      - button "View Incoming Order Details" [ref=e257] [cursor=pointer]:
                        - generic [ref=e258]: 
                      - button "Update Order" [ref=e260] [cursor=pointer]:
                        - generic [ref=e261]: 
                  - row "ORD-260510-236502-00012 1778403481105 2026-05-10 - 6,210 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e262]:
                    - cell [ref=e263]:
                      - checkbox [ref=e264]
                    - cell "ORD-260510-236502-00012" [ref=e265]
                    - cell "1778403481105" [ref=e266]
                    - cell "2026-05-10" [ref=e267]
                    - cell "-" [ref=e268]
                    - cell "6,210" [ref=e269]
                    - cell "0.00" [ref=e270]
                    - cell "City Store 3" [ref=e271]
                    - cell "MPO 06" [ref=e272]
                    - cell "-" [ref=e273]
                    - cell "Pending" [ref=e274]:
                      - generic [ref=e275]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e276]:
                      - button "View Incoming Order Details" [ref=e278] [cursor=pointer]:
                        - generic [ref=e279]: 
                      - button "Update Order" [ref=e281] [cursor=pointer]:
                        - generic [ref=e282]: 
              - generic [ref=e283]:
                - combobox [ref=e286] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e287]:
                  - list [ref=e288]:
                    - listitem [ref=e289]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e290]:
                      - button "<" [disabled]
                    - listitem [ref=e291]:
                      - button "1" [disabled] [ref=e292]
                    - listitem "You are on the last page" [ref=e293]:
                      - button ">" [disabled]
                    - listitem [ref=e294]:
                      - button ">>" [disabled]
      - generic [ref=e296] [cursor=pointer]:
        - alert [ref=e297]:
          - img [ref=e299]
          - generic [ref=e301]: request successfully done
        - button "close" [ref=e302]:
          - img [ref=e303]
        - progressbar "notification timer" [ref=e307]
```

# Test source

```ts
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
  301 |   async updateOrderWithJson(testData) {
  302 |     const scrollContainer = this.page.locator(".table-responsive.report-table");
  303 |     await scrollContainer.scrollIntoViewIfNeeded();
  304 |     await scrollContainer.evaluate(el => el.scrollTop = 0);
  305 | 
  306 |     await this.page.waitForSelector("#wrapper-content tbody tr", { state: 'attached', timeout: 15000 });
  307 |     await this.page.waitForTimeout(1000);
  308 | 
  309 |     const rows = this.page.locator("#wrapper-content tbody tr");
  310 |     const rowCount = await rows.count();
  311 | 
  312 |     console.log(`🔄 Updating ${rowCount} rows...`);
  313 | 
  314 |     for (let i = 0; i < rowCount; i++) {
  315 |       const row = rows.nth(i);
  316 |       await row.scrollIntoViewIfNeeded();
  317 |       await this.page.waitForTimeout(400);
  318 | 
  319 |       // Extract current code from dropdown
  320 |       let currentCode = '';
  321 |       const selectedOption = row.locator("td:nth-child(1) select option:checked");
  322 |       const optionText = await selectedOption.textContent();
  323 | 
  324 |       if (optionText) {
  325 |         const match = optionText.match(/\(([^)]+)\)/);
  326 |         if (match) currentCode = match[1].trim();
  327 |       }
  328 | 
  329 |       if (!currentCode) continue;
  330 | 
  331 |       const matchingProduct = testData.products?.find(p => p.code === currentCode);
  332 | 
  333 |       if (matchingProduct && matchingProduct.quantity !== undefined) {
  334 |         const qtyInput = row.locator("td:nth-child(3) input");
  335 |         await qtyInput.fill(matchingProduct.quantity.toString());
  336 |         await qtyInput.press('Tab');
  337 |         console.log(`✅ Updated Quantity → ${currentCode} : ${matchingProduct.quantity}`);
  338 |       }
  339 |     }
  340 | 
  341 |     // Update Adjustment
  342 |     if (testData.adjustment !== undefined) {
  343 |       const adjInput = this.page.locator('input[placeholder*="Adjustment"]');
  344 |       if (await adjInput.count() > 0) {
  345 |         await adjInput.fill(testData.adjustment.toString());
  346 |         await adjInput.press('Tab');
  347 |         console.log(`✅ Adjustment set to: ${testData.adjustment}`);
  348 |       }
  349 |     }
  350 | 
  351 |     // Update Gross Discount
  352 |     if (testData.grossDiscount !== undefined) {
  353 |       const discInput = this.page.locator('input[placeholder*="Gross Discount"]');
  354 |       if (await discInput.count() > 0) {
  355 |         await discInput.fill(testData.grossDiscount.toString());
  356 |         await discInput.press('Tab');
  357 |         console.log(`✅ Gross Discount set to: ${testData.grossDiscount}`);
  358 |       }
  359 |     }
  360 | 
  361 |     await this.page.waitForTimeout(1500);
  362 | 
  363 |     // Click Update Button
  364 |     const updateButton = this.page.locator('button:has-text("Update"), button:has-text("Save"), button[type="submit"]');
  365 |     await updateButton.click();
  366 |     console.log("✅ Clicked Update Button");
  367 |     await this.page.waitForTimeout(2000);
  368 |   }
  369 | 
  370 |   // ==================== GET TABLE DATA (ROBUST) ====================
  371 |   async getFullProductTableData() {
  372 |     await this.page.waitForSelector("#wrapper-content tbody tr", { timeout: 15000 });
  373 | 
  374 |     const rows = this.page.locator("#wrapper-content tbody tr");
  375 |     const rowCount = await rows.count();
  376 |     const products = [];
  377 | 
  378 |     console.log(`🔍 Total rows found: ${rowCount}`);
  379 | 
  380 |     for (let i = 0; i < rowCount; i++) {
  381 |       const row = rows.nth(i);
> 382 |       await row.scrollIntoViewIfNeeded();
      |                 ^ Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
  383 |       await this.page.waitForTimeout(300);
  384 | 
  385 |       // Extract Code from dropdown option text
  386 |       let code = '';
  387 |       const selectedOptionText = await row.locator("td:nth-child(1) select option:checked").textContent();
  388 | 
  389 |       if (selectedOptionText) {
  390 |         const match = selectedOptionText.match(/\(([^)]+)\)/);
  391 |         if (match) code = match[1].trim();
  392 |       }
  393 | 
  394 |       if (!code || code.includes("Select Product")) {
  395 |         continue;
  396 |       }
  397 | 
  398 |       const description = (await row.locator("td:nth-child(2)").textContent()).trim();
  399 |       const quantityStr = await row.locator("td:nth-child(3) input").getAttribute('value');
  400 | 
  401 |       products.push({
  402 |         code: code,
  403 |         description: description,
  404 |         quantity: parseFloat(quantityStr) || 0,
  405 |         netValue: parseFloat((await row.locator("td:nth-child(11)").textContent()).trim().replace(/,/g, '')) || 0,
  406 |       });
  407 | 
  408 |       console.log(`✅ Extracted → Code: ${code} | Qty: ${quantityStr}`);
  409 |     }
  410 | 
  411 |     // Footer Summary
  412 |     const netPayableInWords = await this.page.locator("tfoot tr:last-child td[colspan='5']:nth-of-type(2)").textContent();
  413 |     const netPayableAmount = await this.page.locator("tfoot tr:last-child td:last-child").textContent();
  414 | 
  415 |     const result = {
  416 |       products,
  417 |       summary: {
  418 |         netPayable: parseFloat(netPayableAmount?.trim().replace(/,/g, '')) || 0,
  419 |         netPayableInWords: netPayableInWords?.trim() || '',
  420 |       },
  421 |       totalItems: products.length
  422 |     };
  423 | 
  424 |     console.log(`🎯 Final Extracted Products: ${products.length}`);
  425 |     return result;
  426 |   }
  427 | 
  428 |   //----------------------------------------//
  429 | };
  430 | 
```