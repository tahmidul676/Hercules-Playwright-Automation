# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_012_SND_PI_CreateFilterTest.spec.js >> TC_012_SND_PI_CreateFilterTest
- Location: tests\TC_012_SND_PI_CreateFilterTest.spec.js:10:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.check: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('table tbody tr').nth(4).locator('input[type=\'checkbox\']')
    - locator resolved to <input type="checkbox"/>

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
              - heading "Create Proforma Invoice" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Create Proforma Invoice
            - button "Filter" [active] [ref=e66] [cursor=pointer]:
              - generic [ref=e67]: 
              - text: Filter
          - option "Select Business Unit" [selected]
          - option "CBU of Consumer Healthcare"
          - option "Chief Business Officer-Pediatrics"
          - option "Head of Business"
          - combobox [ref=e70]
          - combobox [ref=e72]
          - combobox [ref=e74]
          - combobox [ref=e76]
          - combobox [ref=e78]
          - generic [ref=e79]:
            - generic [ref=e81]:
              - heading "Order List" [level=5] [ref=e82]
              - paragraph
            - generic [ref=e84]:
              - table [ref=e86]:
                - rowgroup [ref=e87]:
                  - row "SL Retailer Code Retailer Name Mobile Number Order Number Date Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Order Status Action" [ref=e88]:
                    - columnheader "SL" [ref=e89]
                    - columnheader "Retailer Code" [ref=e90]
                    - columnheader "Retailer Name" [ref=e91]
                    - columnheader "Mobile Number" [ref=e92]
                    - columnheader "Order Number" [ref=e93]
                    - columnheader "Date" [ref=e94]
                    - columnheader "Time" [ref=e95]
                    - columnheader "TP Amount" [ref=e96]
                    - columnheader "VAT Amount" [ref=e97]
                    - columnheader "Discount Amount" [ref=e98]
                    - columnheader "Net TP Amount" [ref=e99]
                    - columnheader "Net Amount" [ref=e100]
                    - columnheader "Created By" [ref=e101]
                    - columnheader "Order Status" [ref=e102]
                    - columnheader "Action" [ref=e103]
                - rowgroup [ref=e104]:
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00012 2026-04-26 17:05 PM 32,770 1,064.75 - 32,770 33,834.75 MPO 06 Partial PI Create PI" [ref=e105]:
                    - cell "-" [ref=e106]
                    - cell "R00236507" [ref=e107]
                    - cell "City Store 3" [ref=e108]
                    - cell "8801670000725" [ref=e109]
                    - cell "ORD-260426-236502-00012" [ref=e110]
                    - cell "2026-04-26" [ref=e111]
                    - cell "17:05 PM" [ref=e112]
                    - cell "32,770" [ref=e113]
                    - cell "1,064.75" [ref=e114]
                    - cell "-" [ref=e115]
                    - cell "32,770" [ref=e116]
                    - cell "33,834.75" [ref=e117]
                    - cell "MPO 06" [ref=e118]
                    - cell "Partial PI" [ref=e119]:
                      - generic [ref=e120]: Partial PI
                    - cell "Create PI" [ref=e121]:
                      - button "Create PI" [ref=e123] [cursor=pointer]:
                        - generic [ref=e124]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00011 2026-04-26 17:04 PM 43,000 550.75 - 43,000 43,550.75 MPO 06 Partial PI Create PI" [ref=e125]:
                    - cell "-" [ref=e126]
                    - cell "R00236507" [ref=e127]
                    - cell "City Store 3" [ref=e128]
                    - cell "8801670000725" [ref=e129]
                    - cell "ORD-260426-236502-00011" [ref=e130]
                    - cell "2026-04-26" [ref=e131]
                    - cell "17:04 PM" [ref=e132]
                    - cell "43,000" [ref=e133]
                    - cell "550.75" [ref=e134]
                    - cell "-" [ref=e135]
                    - cell "43,000" [ref=e136]
                    - cell "43,550.75" [ref=e137]
                    - cell "MPO 06" [ref=e138]
                    - cell "Partial PI" [ref=e139]:
                      - generic [ref=e140]: Partial PI
                    - cell "Create PI" [ref=e141]:
                      - button "Create PI" [ref=e143] [cursor=pointer]:
                        - generic [ref=e144]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 17:02 PM 23,465 315 - 23,465 23,780 MPO 06 Partial PI Create PI" [ref=e145]:
                    - cell "-" [ref=e146]
                    - cell "R00236507" [ref=e147]
                    - cell "City Store 3" [ref=e148]
                    - cell "8801670000725" [ref=e149]
                    - cell "ORD-260426-236502-00010" [ref=e150]
                    - cell "2026-04-26" [ref=e151]
                    - cell "17:02 PM" [ref=e152]
                    - cell "23,465" [ref=e153]
                    - cell "315" [ref=e154]
                    - cell "-" [ref=e155]
                    - cell "23,465" [ref=e156]
                    - cell "23,780" [ref=e157]
                    - cell "MPO 06" [ref=e158]
                    - cell "Partial PI" [ref=e159]:
                      - generic [ref=e160]: Partial PI
                    - cell "Create PI" [ref=e161]:
                      - button "Create PI" [ref=e163] [cursor=pointer]:
                        - generic [ref=e164]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260420-236502-00011 2026-04-20 16:51 PM 900 45 - 900 945 MPO 06 Pending Create PI" [ref=e165]:
                    - cell [ref=e166]:
                      - checkbox [ref=e167]
                    - cell "R00236507" [ref=e168]
                    - cell "City Store 3" [ref=e169]
                    - cell "8801670000725" [ref=e170]
                    - cell "ORD-260420-236502-00011" [ref=e171]
                    - cell "2026-04-20" [ref=e172]
                    - cell "16:51 PM" [ref=e173]
                    - cell "900" [ref=e174]
                    - cell "45" [ref=e175]
                    - cell "-" [ref=e176]
                    - cell "900" [ref=e177]
                    - cell "945" [ref=e178]
                    - cell "MPO 06" [ref=e179]
                    - cell "Pending" [ref=e180]:
                      - generic [ref=e181]: Pending
                    - cell "Create PI" [ref=e182]:
                      - button "Create PI" [ref=e184] [cursor=pointer]:
                        - generic [ref=e185]: 
              - generic [ref=e186]:
                - combobox [ref=e189] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e190]:
                  - list [ref=e191]:
                    - listitem [ref=e192]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e193]:
                      - button "<" [disabled]
                    - listitem [ref=e194]:
                      - button "1" [disabled] [ref=e195]
                    - listitem "You are on the last page" [ref=e196]:
                      - button ">" [disabled]
                    - listitem [ref=e197]:
                      - button ">>" [disabled]
```

# Test source

```ts
  29  | 
  30  |   async clickSelectDropdown() {
  31  |     await this.selectDropdown.click();
  32  |   }
  33  | 
  34  |   async selectBranch(branchName) {
  35  |     await this.branchDropdown.click();
  36  |     await this.page.waitForSelector('[role="option"]', {
  37  |       state: "visible",
  38  |     });
  39  |     await this.page.getByRole("option", { name: branchName }).click();
  40  |   }
  41  | 
  42  |   async selectRoute(routeName) {
  43  |     await this.routeDropdown.click();
  44  |     await this.page.waitForSelector('[role="option"]', {
  45  |       state: "visible",
  46  |     });
  47  |     await this.page.getByRole("option", { name: routeName }).click();
  48  |   }
  49  | 
  50  |   async selectRetailer(retailerName) {
  51  |     await this.retailerDropdown.click();
  52  |     await this.page.waitForSelector('[role="option"]', {
  53  |       state: "visible",
  54  |     });
  55  |     await this.page.getByRole("option", { name: retailerName }).click();
  56  |   }
  57  | 
  58  |   async clickSubmit() {
  59  |     await this.submitButton.click();
  60  |   }
  61  | 
  62  |   async clickFilter() {
  63  |     await expect(this.filterButton).toBeVisible();
  64  |     await this.filterButton.click();
  65  |   }
  66  | 
  67  |   async selectCheckboxByOrderId(orderId) {
  68  |     const rows = this.page.locator("tbody tr");
  69  | 
  70  |     for (let i = 0; i < (await rows.count()); i++) {
  71  |       const row = rows.nth(i);
  72  |       const text = await row.textContent();
  73  | 
  74  |       if (orderId.some((id) => text.includes(id))) {
  75  |         const checkbox = row.locator('input[type="checkbox"]');
  76  | 
  77  |         if (!(await checkbox.isChecked())) {
  78  |           await checkbox.check();
  79  |          // await checkbox.check({ force: true });
  80  |         }
  81  |       }
  82  |     }
  83  |   }
  84  | 
  85  |   async clickProcessSelectedOrder() {
  86  |     await expect(this.processSelectedOrderBtn).toBeVisible();
  87  |     await this.processSelectedOrderBtn.click();
  88  |   }
  89  | 
  90  | 
  91  | // ---------Apply filter to get data----------------
  92  | /*
  93  | async selectOrderByOrderFrom(expectedOrderFrom) {
  94  |   const rows = this.page.locator("table tbody tr");
  95  |   const rowCount = await rows.count();
  96  |   let found = false;
  97  | 
  98  |   for (let i = 0; i < rowCount; i++) {
  99  |     const row = rows.nth(i);
  100 |     const cellText = await row.textContent();
  101 | 
  102 |     if (cellText.includes(expectedOrderFrom)) {
  103 |       await row.locator("input[type='checkbox']").check();
  104 |       found = true;
  105 |       break;
  106 |     }
  107 |   }
  108 | 
  109 |   return found; //just return, no expect here
  110 | }
  111 |         */
  112 | 
  113 | //------------------------
  114 | 
  115 | async selectOrderByOrderFrom(expectedOrderFrom) {
  116 |   const rows = this.page.locator("table tbody tr");
  117 |   const rowCount = await rows.count();
  118 |   let found = false;
  119 | 
  120 |   for (let i = 0; i < rowCount; i++) {
  121 |     const row = rows.nth(i);
  122 |     const cellText = await row.textContent();
  123 | 
  124 |     // Skip rows without a checkbox (e.g. Partial PI rows)
  125 |     const hasCheckbox = await row.locator("input[type='checkbox']").count();
  126 |     if (hasCheckbox === 0) continue;
  127 | 
  128 |     if (cellText.includes(expectedOrderFrom)) {
> 129 |       await row.locator("input[type='checkbox']").check({ force: true });
      |                                                   ^ Error: locator.check: Test timeout of 60000ms exceeded.
  130 |       found = true;
  131 |       break;
  132 |     }
  133 |   }
  134 | 
  135 |   return found;
  136 | }
  137 | 
  138 | //--------------------------
  139 |   
  140 | };
  141 | 
```