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
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: /^Select Branch$/ }).nth(1)
    - locator resolved to <div class="react_select_custom__control css-ncd6tb-control">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    101 × waiting for element to be visible, enabled and stable
        - element is not visible
      - retrying click action
        - waiting 500ms

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
              - heading "Create Proforma Invoice" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Create Proforma Invoice
            - button "Filter" [ref=e66] [cursor=pointer]:
              - generic [ref=e67]: 
              - text: Filter
          - option "Select Regional" [selected]
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
                  - row "R00236465 BOrak store 8801674173955 ORD-260430-236517-00024 2026-04-30 11:32 AM 11,400 465 - 11,400 11,865 MPO user 8 Pending Create PI" [ref=e105]:
                    - cell [ref=e106]:
                      - checkbox [ref=e107]
                    - cell "R00236465" [ref=e108]
                    - cell "BOrak store" [ref=e109]
                    - cell "8801674173955" [ref=e110]
                    - cell "ORD-260430-236517-00024" [ref=e111]
                    - cell "2026-04-30" [ref=e112]
                    - cell "11:32 AM" [ref=e113]
                    - cell "11,400" [ref=e114]
                    - cell "465" [ref=e115]
                    - cell "-" [ref=e116]
                    - cell "11,400" [ref=e117]
                    - cell "11,865" [ref=e118]
                    - cell "MPO user 8" [ref=e119]
                    - cell "Pending" [ref=e120]:
                      - generic [ref=e121]: Pending
                    - cell "Create PI" [ref=e122]:
                      - button "Create PI" [ref=e124] [cursor=pointer]:
                        - generic [ref=e125]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00012 2026-04-26 17:05 PM 32,770 1,064.75 - 32,770 33,834.75 MPO 06 Partial PI Create PI" [ref=e126]:
                    - cell "-" [ref=e127]
                    - cell "R00236507" [ref=e128]
                    - cell "City Store 3" [ref=e129]
                    - cell "8801670000725" [ref=e130]
                    - cell "ORD-260426-236502-00012" [ref=e131]
                    - cell "2026-04-26" [ref=e132]
                    - cell "17:05 PM" [ref=e133]
                    - cell "32,770" [ref=e134]
                    - cell "1,064.75" [ref=e135]
                    - cell "-" [ref=e136]
                    - cell "32,770" [ref=e137]
                    - cell "33,834.75" [ref=e138]
                    - cell "MPO 06" [ref=e139]
                    - cell "Partial PI" [ref=e140]:
                      - generic [ref=e141]: Partial PI
                    - cell "Create PI" [ref=e142]:
                      - button "Create PI" [ref=e144] [cursor=pointer]:
                        - generic [ref=e145]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00011 2026-04-26 17:04 PM 43,000 550.75 - 43,000 43,550.75 MPO 06 Partial PI Create PI" [ref=e146]:
                    - cell "-" [ref=e147]
                    - cell "R00236507" [ref=e148]
                    - cell "City Store 3" [ref=e149]
                    - cell "8801670000725" [ref=e150]
                    - cell "ORD-260426-236502-00011" [ref=e151]
                    - cell "2026-04-26" [ref=e152]
                    - cell "17:04 PM" [ref=e153]
                    - cell "43,000" [ref=e154]
                    - cell "550.75" [ref=e155]
                    - cell "-" [ref=e156]
                    - cell "43,000" [ref=e157]
                    - cell "43,550.75" [ref=e158]
                    - cell "MPO 06" [ref=e159]
                    - cell "Partial PI" [ref=e160]:
                      - generic [ref=e161]: Partial PI
                    - cell "Create PI" [ref=e162]:
                      - button "Create PI" [ref=e164] [cursor=pointer]:
                        - generic [ref=e165]: 
                  - row "- R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 17:02 PM 23,465 315 - 23,465 23,780 MPO 06 Partial PI Create PI" [ref=e166]:
                    - cell "-" [ref=e167]
                    - cell "R00236507" [ref=e168]
                    - cell "City Store 3" [ref=e169]
                    - cell "8801670000725" [ref=e170]
                    - cell "ORD-260426-236502-00010" [ref=e171]
                    - cell "2026-04-26" [ref=e172]
                    - cell "17:02 PM" [ref=e173]
                    - cell "23,465" [ref=e174]
                    - cell "315" [ref=e175]
                    - cell "-" [ref=e176]
                    - cell "23,465" [ref=e177]
                    - cell "23,780" [ref=e178]
                    - cell "MPO 06" [ref=e179]
                    - cell "Partial PI" [ref=e180]:
                      - generic [ref=e181]: Partial PI
                    - cell "Create PI" [ref=e182]:
                      - button "Create PI" [ref=e184] [cursor=pointer]:
                        - generic [ref=e185]: 
                  - row "R00236507 City Store 3 8801670000725 ORD-260420-236502-00011 2026-04-20 16:51 PM 900 45 - 900 945 MPO 06 Pending Create PI" [ref=e186]:
                    - cell [ref=e187]:
                      - checkbox [ref=e188]
                    - cell "R00236507" [ref=e189]
                    - cell "City Store 3" [ref=e190]
                    - cell "8801670000725" [ref=e191]
                    - cell "ORD-260420-236502-00011" [ref=e192]
                    - cell "2026-04-20" [ref=e193]
                    - cell "16:51 PM" [ref=e194]
                    - cell "900" [ref=e195]
                    - cell "45" [ref=e196]
                    - cell "-" [ref=e197]
                    - cell "900" [ref=e198]
                    - cell "945" [ref=e199]
                    - cell "MPO 06" [ref=e200]
                    - cell "Pending" [ref=e201]:
                      - generic [ref=e202]: Pending
                    - cell "Create PI" [ref=e203]:
                      - button "Create PI" [ref=e205] [cursor=pointer]:
                        - generic [ref=e206]: 
                  - row "- R00236465 BOrak store 8801674173955 ORD-251223-236461-00003 2025-12-23 14:24 PM 30,000 1,500 200 29,800 31,300 User Sub Territory Partial PI Create PI" [ref=e207]:
                    - cell "-" [ref=e208]
                    - cell "R00236465" [ref=e209]
                    - cell "BOrak store" [ref=e210]
                    - cell "8801674173955" [ref=e211]
                    - cell "ORD-251223-236461-00003" [ref=e212]
                    - cell "2025-12-23" [ref=e213]
                    - cell "14:24 PM" [ref=e214]
                    - cell "30,000" [ref=e215]
                    - cell "1,500" [ref=e216]
                    - cell "200" [ref=e217]
                    - cell "29,800" [ref=e218]
                    - cell "31,300" [ref=e219]
                    - cell "User Sub Territory" [ref=e220]
                    - cell "Partial PI" [ref=e221]:
                      - generic [ref=e222]: Partial PI
                    - cell "Create PI" [ref=e223]:
                      - button "Create PI" [ref=e225] [cursor=pointer]:
                        - generic [ref=e226]: 
              - generic [ref=e227]:
                - combobox [ref=e230] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e231]:
                  - list [ref=e232]:
                    - listitem [ref=e233]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e234]:
                      - button "<" [disabled]
                    - listitem [ref=e235]:
                      - button "1" [disabled] [ref=e236]
                    - listitem "You are on the last page" [ref=e237]:
                      - button ">" [disabled]
                    - listitem [ref=e238]:
                      - button ">>" [disabled]
```

# Test source

```ts
  1   | const { expect } = require("@playwright/test");
  2   | exports.PIPage = class PIPage {
  3   |   constructor(page) {
  4   |     this.page = page;
  5   | 
  6   |     this.selectDropdown = page.locator("span").nth(2);
  7   |     this.branchDropdown = page
  8   |       .locator("div")
  9   |       .filter({ hasText: /^Select Branch$/ })
  10  |       .nth(1);
  11  |     this.routeDropdown = page
  12  |       .locator("div")
  13  |       .filter({ hasText: /^Select Route$/ })
  14  |       .nth(1);
  15  |     this.retailerDropdown = page
  16  |       .locator("div")
  17  |       .filter({ hasText: /^Select Retailer$/ })
  18  |       .nth(1);
  19  |     this.submitButton = page.getByRole("button", { name: "Submit" });
  20  |     this.filterButton = page.getByRole("button", {
  21  |       name: "Filter",
  22  |       exact: true,
  23  |     });
  24  | 
  25  |     this.processSelectedOrderBtn = page.getByRole("button", {
  26  |       name: "Process Selected Orders",
  27  |     });
  28  |   }
  29  | 
  30  |   async clickSelectDropdown() {
  31  |     await this.selectDropdown.click();
  32  |   }
  33  | 
  34  |   async selectBranch(branchName) {
> 35  |     await this.branchDropdown.click();
      |                               ^ Error: locator.click: Test timeout of 60000ms exceeded.
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
  92  | async selectOrderByOrderFrom(expectedOrderFrom) {
  93  |   const rows = this.page.locator("table tbody tr");
  94  |   const rowCount = await rows.count();
  95  |   let found = false;
  96  | 
  97  |   for (let i = 0; i < rowCount; i++) {
  98  |     const row = rows.nth(i);
  99  |     const cellText = await row.textContent();
  100 | 
  101 |     if (cellText.includes(expectedOrderFrom)) {
  102 |       await row.locator("input[type='checkbox']").check();
  103 |       found = true;
  104 |       break;
  105 |     }
  106 |   }
  107 | 
  108 |   return found; //just return, no expect here
  109 | }
  110 |   
  111 | };
  112 | 
```