# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderViewTableInfoTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderViewTableInfoTest.spec.js:8:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('tfoot tr:last-child td[colspan=\'5\']') resolved to 2 elements:
    1) <td colspan="5" class="fw-bold text-end align-middle">Net Payable(BDT):</td> aka getByRole('cell', { name: 'Net Payable(BDT):' })
    2) <td colspan="5" class="fw-bold text-start align-middle">Ten Thousand Four Hundred Twenty</td> aka getByRole('cell', { name: 'Ten Thousand Four Hundred' })

Call log:
  - waiting for locator('tfoot tr:last-child td[colspan=\'5\']')

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
              - /url: /snd/orders/approval-pending?from=2026-05-05&to=2026-05-12&warehouse_id=400&route_id=3611&retailer_id=236507&retailer_name=City+Store+3
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
                - text: ORD-260510-236502-00014
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
              - row "SKC01 Electrolyte Sports Drinks Orange 10 300 - 3,000 - - - 3,000 3,000" [ref=e160]:
                - cell "SKC01" [ref=e161]
                - cell "Electrolyte Sports Drinks Orange" [ref=e162]:
                  - generic [ref=e163]: Electrolyte Sports Drinks Orange
                - cell "10" [ref=e164]
                - cell "300" [ref=e165]
                - cell "-" [ref=e166]
                - cell "3,000" [ref=e167]
                - cell "-" [ref=e168]
                - cell "-" [ref=e169]
                - cell "-" [ref=e170]
                - cell "3,000" [ref=e171]
                - cell "3,000" [ref=e172]
              - row "SKU00013 Esonaaf 20 mg Capsule 14 100 - 1,400 - - - 1,400 1,400" [ref=e173]:
                - cell "SKU00013" [ref=e174]
                - cell "Esonaaf 20 mg Capsule" [ref=e175]:
                  - generic [ref=e176]: Esonaaf 20 mg Capsule
                - cell "14" [ref=e177]
                - cell "100" [ref=e178]
                - cell "-" [ref=e179]
                - cell "1,400" [ref=e180]
                - cell "-" [ref=e181]
                - cell "-" [ref=e182]
                - cell "-" [ref=e183]
                - cell "1,400" [ref=e184]
                - cell "1,400" [ref=e185]
              - row "SKU00017 Mancer 75 WP 14 430 - 6,020 - - - 6,020 6,020" [ref=e186]:
                - cell "SKU00017" [ref=e187]
                - cell "Mancer 75 WP" [ref=e188]:
                  - generic [ref=e189]: Mancer 75 WP
                - cell "14" [ref=e190]
                - cell "430" [ref=e191]
                - cell "-" [ref=e192]
                - cell "6,020" [ref=e193]
                - cell "-" [ref=e194]
                - cell "-" [ref=e195]
                - cell "-" [ref=e196]
                - cell "6,020" [ref=e197]
                - cell "6,020" [ref=e198]
            - rowgroup [ref=e199]:
              - 'row "Gross Total: 10,420 - - - 10,420 10,420" [ref=e200]':
                - cell "Gross Total:" [ref=e201]
                - cell "10,420" [ref=e202]
                - cell "-" [ref=e203]
                - cell "-" [ref=e204]
                - cell "-" [ref=e205]
                - cell "10,420" [ref=e206]
                - cell "10,420" [ref=e207]
              - 'row "TP + VAT: 10,420 Adjustment(+/-): -" [ref=e208]':
                - cell "TP + VAT:" [ref=e209]
                - cell "10,420" [ref=e210]
                - cell "Adjustment(+/-):" [ref=e211]
                - cell "-" [ref=e212]
              - 'row "Gross Discount: -" [ref=e213]':
                - cell [ref=e214]
                - cell "Gross Discount:" [ref=e215]
                - cell "-" [ref=e216]
              - 'row "Net Payable(BDT): Ten Thousand Four Hundred Twenty 10,420" [ref=e217]':
                - cell "Net Payable(BDT):" [ref=e218]
                - cell "Ten Thousand Four Hundred Twenty" [ref=e219]
                - cell "10,420" [ref=e220]
```

# Test source

```ts
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
  209 |   // Scroll to top to ensure full table loads
  210 |   await scrollContainer.evaluate((el) => {
  211 |     el.scrollTop = 0;
  212 |   });
  213 | 
  214 |   await this.page.waitForTimeout(1000);
  215 | 
  216 |   const tbodyRows = this.page.locator("#wrapper-content tbody tr");
  217 |   const rowCount = await tbodyRows.count();
  218 |   const products = [];
  219 | 
  220 |   for (let i = 0; i < rowCount; i++) {
  221 |     const row = tbodyRows.nth(i);
  222 |     await row.scrollIntoViewIfNeeded();
  223 | 
  224 |     products.push({
  225 |       code: (await row.locator("td:nth-child(1)").textContent()).trim(),
  226 | 
  227 |       description: (
  228 |         await row.locator("td:nth-child(2) div").textContent()
  229 |       ).trim() || (await row.locator("td:nth-child(2)").textContent()).trim(),
  230 | 
  231 |       quantity: parseInt(
  232 |         (await row.locator("td:nth-child(3)").textContent()).trim()
  233 |       ) || 0,
  234 | 
  235 |       perPackTP: parseFloat(
  236 |         (await row.locator("td:nth-child(4)").textContent())
  237 |           .trim()
  238 |           .replace(/,/g, "")
  239 |       ) || 0,
  240 | 
  241 |       perPackVAT: (await row.locator("td:nth-child(5)").textContent()).trim(),
  242 | 
  243 |       totalTP: parseFloat(
  244 |         (await row.locator("td:nth-child(6)").textContent())
  245 |           .trim()
  246 |           .replace(/,/g, "")
  247 |       ) || 0,
  248 | 
  249 |       totalVAT: parseFloat(
  250 |         (await row.locator("td:nth-child(7)").textContent())
  251 |           .trim()
  252 |           .replace(/,/g, "")
  253 |       ) || 0,
  254 | 
  255 |       discountPercent: (await row.locator("td:nth-child(8)").textContent()).trim(),
  256 | 
  257 |       discountAmount: parseFloat(
  258 |         (await row.locator("td:nth-child(9)").textContent())
  259 |           .trim()
  260 |           .replace(/,/g, "")
  261 |       ) || 0,
  262 | 
  263 |       netTP: parseFloat(
  264 |         (await row.locator("td:nth-child(10)").textContent())
  265 |           .trim()
  266 |           .replace(/,/g, "")
  267 |       ) || 0,
  268 | 
  269 |       netValue: parseFloat(
  270 |         (await row.locator("td:nth-child(11)").textContent())
  271 |           .trim()
  272 |           .replace(/,/g, "")
  273 |       ) || 0,
  274 |     });
  275 |   }
  276 | 
  277 |   // ==================== FOOTER / SUMMARY ====================
  278 | 
  279 |   // Net Payable in Words (e.g., "Ten Thousand Four Hundred Twenty")
  280 |   const netPayableInWordsLocator = this.page.locator(
  281 |     "tfoot tr:last-child td[colspan='5']"
  282 |   );
  283 | 
  284 |   // Net Payable Amount
  285 |   const netPayableAmountLocator = this.page.locator(
  286 |     "tfoot tr:last-child td:last-child"
  287 |   );
  288 | 
  289 |   const grossTotalLocator = this.page.locator(
  290 |     "tfoot tr:first-child td:nth-child(6)"
  291 |   );
  292 | 
  293 |   const [
  294 |     grossTotalText,
  295 |     netPayableInWords,
  296 |     netPayableAmountText,
  297 |   ] = await Promise.all([
  298 |     grossTotalLocator.textContent(),
> 299 |     netPayableInWordsLocator.textContent(),
      |                              ^ Error: locator.textContent: Error: strict mode violation: locator('tfoot tr:last-child td[colspan=\'5\']') resolved to 2 elements:
  300 |     netPayableAmountLocator.textContent(),
  301 |   ]);
  302 | 
  303 |   const summary = {
  304 |     grossTotal: parseFloat(grossTotalText?.trim().replace(/,/g, "")) || 0,
  305 |     netPayable: parseFloat(netPayableAmountText?.trim().replace(/,/g, "")) || 0,
  306 |     netPayableInWords: netPayableInWords?.trim() || "",
  307 |   };
  308 | 
  309 |   return {
  310 |     products,
  311 |     summary,
  312 |     totalItems: products.length,
  313 |   };
  314 | }
  315 | 
  316 | 
  317 | 
  318 | 
  319 | 
  320 | 
  321 | 
  322 | 
  323 | 
  324 | 
  325 | };
  326 | 
```