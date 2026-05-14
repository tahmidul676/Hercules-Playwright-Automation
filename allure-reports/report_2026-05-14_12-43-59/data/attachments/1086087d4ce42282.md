# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_016_SND_PI_CollectionSummery_CreateTest.spec.js >> TC_010_SND_PI_CollectionSummery_CreateTest
- Location: tests\TC_016_SND_PI_CollectionSummery_CreateTest.spec.js:9:5

# Error details

```
Error: No checkboxes were checked. Order IDs not found: ORD-260511-236502-00007
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
              - heading "Collection Summary Create" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Collection Summary Create
            - generic [ref=e64]:
              - link "List" [ref=e65] [cursor=pointer]:
                - /url: /snd/pi/collection-summary-list
                - button "List" [ref=e67]:
                  - generic [ref=e68]: 
                  - text: List
              - button "Filter" [ref=e71] [cursor=pointer]:
                - generic [ref=e72]: 
                - text: Filter
          - option "Select Business Unit" [selected]
          - option "CBU of Consumer Healthcare"
          - option "Chief Business Officer-Pediatrics"
          - option "Head of Business"
          - combobox [ref=e75]
          - combobox [ref=e77]
          - combobox [ref=e79]
          - combobox [ref=e81]
          - combobox [ref=e83]
          - generic [ref=e84]:
            - generic [ref=e86]:
              - heading "Picked PI List" [level=5] [ref=e87]
              - paragraph
            - generic [ref=e89]:
              - table [ref=e91]:
                - rowgroup [ref=e92]:
                  - row "SL Branch Route Market Retailer Code Retailer Name Mobile Number Order Number Order Date Order Time Proforma Number Proforma Date Proforma Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Status" [ref=e93]:
                    - columnheader "SL" [ref=e94]
                    - columnheader "Branch" [ref=e95]
                    - columnheader "Route" [ref=e96]
                    - columnheader "Market" [ref=e97]
                    - columnheader "Retailer Code" [ref=e98]
                    - columnheader "Retailer Name" [ref=e99]
                    - columnheader "Mobile Number" [ref=e100]
                    - columnheader "Order Number" [ref=e101]
                    - columnheader "Order Date" [ref=e102]
                    - columnheader "Order Time" [ref=e103]
                    - columnheader "Proforma Number" [ref=e104]
                    - columnheader "Proforma Date" [ref=e105]
                    - columnheader "Proforma Time" [ref=e106]
                    - columnheader "TP Amount" [ref=e107]
                    - columnheader "VAT Amount" [ref=e108]
                    - columnheader "Discount Amount" [ref=e109]
                    - columnheader "Net TP Amount" [ref=e110]
                    - columnheader "Net Amount" [ref=e111]
                    - columnheader "Created By" [ref=e112]
                    - columnheader "Status" [ref=e113]
                - rowgroup [ref=e114]:
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260505-236502-00003 2026-05-05 03:16 PM PI001-ORD-260505-236502-00003 2026-05-12 10:30 AM 10,022.50 - - 10,022.50 10,022.50 NAAFCO User Picked" [ref=e115]:
                    - cell [ref=e116]:
                      - checkbox [ref=e117]
                    - cell "Rampura Branch" [ref=e118]
                    - cell "Rampura Route 1" [ref=e119]
                    - cell "Rampura Market 1" [ref=e120]
                    - cell "R00236507" [ref=e121]
                    - cell "City Store 3" [ref=e122]
                    - cell "8801670000725" [ref=e123]
                    - cell "ORD-260505-236502-00003" [ref=e124]
                    - cell "2026-05-05" [ref=e125]
                    - cell "03:16 PM" [ref=e126]
                    - cell "PI001-ORD-260505-236502-00003" [ref=e127]
                    - cell "2026-05-12" [ref=e128]
                    - cell "10:30 AM" [ref=e129]
                    - cell "10,022.50" [ref=e130]
                    - cell "-" [ref=e131]
                    - cell "-" [ref=e132]
                    - cell "10,022.50" [ref=e133]
                    - cell "10,022.50" [ref=e134]
                    - cell "NAAFCO User" [ref=e135]
                    - cell "Picked" [ref=e136]:
                      - generic [ref=e137]: Picked
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260505-236502-01142 2026-05-05 02:57 PM PI001-ORD-260505-236502-01142 2026-05-09 00:36 AM 3,820 - - 3,820 3,820 NAAFCO User Picked" [ref=e138]:
                    - cell [ref=e139]:
                      - checkbox [ref=e140]
                    - cell "Rampura Branch" [ref=e141]
                    - cell "Rampura Route 1" [ref=e142]
                    - cell "Rampura Market 1" [ref=e143]
                    - cell "R00236507" [ref=e144]
                    - cell "City Store 3" [ref=e145]
                    - cell "8801670000725" [ref=e146]
                    - cell "ORD-260505-236502-01142" [ref=e147]
                    - cell "2026-05-05" [ref=e148]
                    - cell "02:57 PM" [ref=e149]
                    - cell "PI001-ORD-260505-236502-01142" [ref=e150]
                    - cell "2026-05-09" [ref=e151]
                    - cell "00:36 AM" [ref=e152]
                    - cell "3,820" [ref=e153]
                    - cell "-" [ref=e154]
                    - cell "-" [ref=e155]
                    - cell "3,820" [ref=e156]
                    - cell "3,820" [ref=e157]
                    - cell "NAAFCO User" [ref=e158]
                    - cell "Picked" [ref=e159]:
                      - generic [ref=e160]: Picked
                  - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260507-236502-00007 2026-05-07 03:03 PM PI001-ORD-260507-236502-00007 2026-05-07 15:46 PM 9,380 - - 9,380 9,380 NAAFCO User Picked" [ref=e161]:
                    - cell [ref=e162]:
                      - checkbox [ref=e163]
                    - cell "Rampura Branch" [ref=e164]
                    - cell "Rampura Route 1" [ref=e165]
                    - cell "Rampura Market 1" [ref=e166]
                    - cell "R00236507" [ref=e167]
                    - cell "City Store 3" [ref=e168]
                    - cell "8801670000725" [ref=e169]
                    - cell "ORD-260507-236502-00007" [ref=e170]
                    - cell "2026-05-07" [ref=e171]
                    - cell "03:03 PM" [ref=e172]
                    - cell "PI001-ORD-260507-236502-00007" [ref=e173]
                    - cell "2026-05-07" [ref=e174]
                    - cell "15:46 PM" [ref=e175]
                    - cell "9,380" [ref=e176]
                    - cell "-" [ref=e177]
                    - cell "-" [ref=e178]
                    - cell "9,380" [ref=e179]
                    - cell "9,380" [ref=e180]
                    - cell "NAAFCO User" [ref=e181]
                    - cell "Picked" [ref=e182]:
                      - generic [ref=e183]: Picked
              - generic [ref=e184]:
                - combobox [ref=e187] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e188]:
                  - list [ref=e189]:
                    - listitem [ref=e190]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e191]:
                      - button "<" [disabled]
                    - listitem [ref=e192]:
                      - button "1" [disabled] [ref=e193]
                    - listitem "You are on the last page" [ref=e194]:
                      - button ">" [disabled]
                    - listitem [ref=e195]:
                      - button ">>" [disabled]
      - generic [ref=e197] [cursor=pointer]:
        - alert [ref=e198]:
          - img [ref=e200]
          - generic [ref=e202]: successfully logged in
        - button "close" [ref=e203]:
          - img [ref=e204]
        - progressbar "notification timer" [ref=e208]
```

# Test source

```ts
  59  | 
  60  |   async selectRetailer(retailerName) {
  61  |     await this.retailerDropdown.click();
  62  |     await this.page.waitForSelector('[role="option"]', {
  63  |       state: "visible",
  64  |     });
  65  |     await this.page.getByRole("option", { name: retailerName }).click();
  66  |   }
  67  | 
  68  |   async clickSubmit() {
  69  |     await this.submitButton.click();
  70  |   }
  71  | 
  72  |   async clickFinalFilter() {
  73  |     await expect(this.finalFilterButton).toBeVisible();
  74  |     await this.finalFilterButton.click();
  75  |   }
  76  | 
  77  |   async selectCheckboxByOrderId(orderIds) {
  78  |     await this.page.waitForFunction(
  79  |       () => {
  80  |         const rows = document.querySelectorAll("tbody tr");
  81  |         if (rows.length === 0) return false;
  82  | 
  83  |         const cells = document.querySelectorAll("tbody tr td");
  84  |         for (const cell of cells) {
  85  |           const text = cell.textContent
  86  |             ?.replace(/[\u200B\u200C\u200D\uFEFF]/g, "")
  87  |             .trim();
  88  |           if (text && text.length > 3) return true;
  89  |         }
  90  |         return false;
  91  |       },
  92  |       { timeout: 30000 },
  93  |     );
  94  | 
  95  |     console.log("Table fully loaded");
  96  | 
  97  |     const rows = this.page.locator("tbody tr");
  98  |     const rowCount = await rows.count();
  99  |     console.log(`Total rows found: ${rowCount}`);
  100 | 
  101 |     // DEBUG: Print cells of first row
  102 |     if (rowCount > 0) {
  103 |       const firstRow = rows.nth(0);
  104 |       const cells = firstRow.locator("td");
  105 |       const cellCount = await cells.count();
  106 |       console.log(`Total cells in first row: ${cellCount}`);
  107 |       for (let c = 0; c < cellCount; c++) {
  108 |         const text = await cells.nth(c).textContent();
  109 |         console.log(`  Cell[${c + 1}]: "${text?.trim()}"`);
  110 |       }
  111 |     }
  112 | 
  113 |     let checkedCount = 0;
  114 | 
  115 |     for (let i = 0; i < rowCount; i++) {
  116 |       const row = rows.nth(i);
  117 |       const cells = row.locator("td");
  118 |       const cellCount = await cells.count();
  119 | 
  120 |       let orderIdFound = false;
  121 | 
  122 |       for (let c = 0; c < cellCount; c++) {
  123 |         let cellText = "";
  124 |         try {
  125 |           cellText = (await cells.nth(c).textContent()) ?? "";
  126 |           // Strip zero-width characters
  127 |           cellText = cellText.replace(/[\u200B\u200C\u200D\uFEFF]/g, "").trim();
  128 |         } catch {
  129 |           continue;
  130 |         }
  131 | 
  132 |         if (orderIds.some((id) => cellText === id.trim())) {
  133 |           console.log(
  134 |             `Found Order ID "${cellText}" at row ${i + 1}, cell ${c + 1}`,
  135 |           );
  136 |           orderIdFound = true;
  137 |           break;
  138 |         }
  139 |       }
  140 | 
  141 |       if (orderIdFound) {
  142 |         const checkbox = row.locator('input[type="checkbox"]');
  143 |         try {
  144 |           await checkbox.waitFor({ state: "visible", timeout: 3000 });
  145 |           if (!(await checkbox.isChecked())) {
  146 |             await checkbox.check();
  147 |             await expect(checkbox).toBeChecked();
  148 |             checkedCount++;
  149 |           }
  150 |         } catch (e) {
  151 |           console.warn(`Checkbox not found in row ${i + 1}:`, e.message);
  152 |         }
  153 |       }
  154 |     }
  155 | 
  156 |     console.log(`Total checkboxes checked: ${checkedCount}`);
  157 | 
  158 |     if (checkedCount === 0) {
> 159 |       throw new Error(
      |             ^ Error: No checkboxes were checked. Order IDs not found: ORD-260511-236502-00007
  160 |         `No checkboxes were checked. Order IDs not found: ${orderIds.join(", ")}`,
  161 |       );
  162 |     }
  163 |   }
  164 | 
  165 |   async clickProcess() {
  166 |     await expect(this.processBtn).toBeVisible();
  167 |     await this.processBtn.click();
  168 |   }
  169 | 
  170 | 
  171 | 
  172 |   // ---------Apply filter to get data----------------
  173 | // async selectOrderByOrderFrom(expectedOrderFrom) {
  174 | //   const rows = this.page.locator("table tbody tr");
  175 | //   const rowCount = await rows.count();
  176 | //   let found = false;
  177 | 
  178 | //   for (let i = 0; i < rowCount; i++) {
  179 | //     const row = rows.nth(i);
  180 | //     const cellText = await row.textContent();
  181 | 
  182 | //     if (cellText.includes(expectedOrderFrom)) {
  183 | //       await row.locator("input[type='checkbox']").check();
  184 | //       found = true;
  185 | //       break;
  186 | //     }
  187 | //   }
  188 | 
  189 | //   return found; //just return, no expect here
  190 | // }
  191 | 
  192 | 
  193 | 
  194 | async selectOrderByOrderFrom(expectedOrderFrom) {
  195 |   let found = false;
  196 | 
  197 |   while (true) {
  198 |     // Wait for table rows to load with real content
  199 |     await this.page.waitForFunction(() => {
  200 |       const rows = document.querySelectorAll("table tbody tr");
  201 |       return [...rows].some(row => row.innerText.trim().length > 0);
  202 |     }, { timeout: 15000 });
  203 | 
  204 |     const rows = this.page.locator("table tbody tr");
  205 |     const rowCount = await rows.count();
  206 | 
  207 |     for (let i = 0; i < rowCount; i++) {
  208 |       const row = rows.nth(i);
  209 |       const cellText = await row.innerText();
  210 | 
  211 |       if (cellText.trim().includes(expectedOrderFrom.trim())) {
  212 |         await row.locator("input[type='checkbox']").check();
  213 |         found = true;
  214 |         break;
  215 |       }
  216 |     }
  217 | 
  218 |     if (found) break;
  219 | 
  220 |     // Check if "Next" page button is enabled
  221 |     const nextBtn = this.page.locator("ul.pagination button").filter({ hasText: ">" });
  222 |     const isDisabled = await nextBtn.isDisabled();
  223 |     if (isDisabled) break;
  224 | 
  225 |     // Go to next page and loop
  226 |     await nextBtn.click();
  227 |     await this.page.waitForTimeout(500); // brief wait for page transition
  228 |   }
  229 | 
  230 |   return found;
  231 | }
  232 | 
  233 | };
  234 | 
```