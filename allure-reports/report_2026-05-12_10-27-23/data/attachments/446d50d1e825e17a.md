# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_05_SND_Order_ApprovalPendingOrderTest.spec.js >> TC_05_SND_Order_ApprovalPendingOrderTest
- Location: tests\TC_05_SND_Order_ApprovalPendingOrderTest.spec.js:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Confirm Order' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('button', { name: 'Confirm Order' })

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
              - heading "Approval Pending Order" [level=1]
              - list [ref=e60]:
                - listitem [ref=e61]:
                  - link "Dashboard" [ref=e62] [cursor=pointer]:
                    - /url: /
                - listitem [ref=e63]: /
                - listitem: Approval Pending Order
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
          - option "Select Source" [selected]
          - option "SR App"
          - option "Web"
          - option "Select Source" [selected]
          - option "SR App"
          - option "Web"
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]:
                - heading "Approval Pending Order List" [level=5] [ref=e83]
                - paragraph
              - group [ref=e85] [cursor=pointer]:
                - button "Download Sheet" [ref=e87]:
                  - generic [ref=e88]: 
            - generic [ref=e89]:
              - table [ref=e91]:
                - rowgroup [ref=e92]:
                  - row "SL Order Id Invoice Id Order Date Discount Amount Total Paid Amount Order From Order To Comment Status Action" [ref=e93]:
                    - columnheader "SL" [ref=e94]
                    - columnheader "Order Id" [ref=e95]
                    - columnheader "Invoice Id" [ref=e96]
                    - columnheader "Order Date" [ref=e97]
                    - columnheader "Discount Amount" [ref=e98]
                    - columnheader "Total" [ref=e99]
                    - columnheader "Paid Amount" [ref=e100]
                    - columnheader "Order From" [ref=e101]
                    - columnheader "Order To" [ref=e102]
                    - columnheader "Comment" [ref=e103]
                    - columnheader "Status" [ref=e104]
                    - columnheader "Action" [ref=e105]
                - rowgroup [ref=e106]:
                  - row "ORD-260510-236502-00014 1778404228853 2026-05-10 - 10,420 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e107]:
                    - cell [ref=e108]:
                      - checkbox [ref=e109]
                    - cell "ORD-260510-236502-00014" [ref=e110]
                    - cell "1778404228853" [ref=e111]
                    - cell "2026-05-10" [ref=e112]
                    - cell "-" [ref=e113]
                    - cell "10,420" [ref=e114]
                    - cell "0.00" [ref=e115]
                    - cell "City Store 3" [ref=e116]
                    - cell "MPO 06" [ref=e117]
                    - cell "-" [ref=e118]
                    - cell "Pending" [ref=e119]:
                      - generic [ref=e120]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e121]:
                      - button "View Incoming Order Details" [ref=e123] [cursor=pointer]:
                        - generic [ref=e124]: 
                      - button "Update Order" [ref=e126] [cursor=pointer]:
                        - generic [ref=e127]: 
                  - row "ORD-260510-236502-00013 1778403873905 2026-05-10 - 9,920 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e128]:
                    - cell [ref=e129]:
                      - checkbox [ref=e130]
                    - cell "ORD-260510-236502-00013" [ref=e131]
                    - cell "1778403873905" [ref=e132]
                    - cell "2026-05-10" [ref=e133]
                    - cell "-" [ref=e134]
                    - cell "9,920" [ref=e135]
                    - cell "0.00" [ref=e136]
                    - cell "City Store 3" [ref=e137]
                    - cell "MPO 06" [ref=e138]
                    - cell "-" [ref=e139]
                    - cell "Pending" [ref=e140]:
                      - generic [ref=e141]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e142]:
                      - button "View Incoming Order Details" [ref=e144] [cursor=pointer]:
                        - generic [ref=e145]: 
                      - button "Update Order" [ref=e147] [cursor=pointer]:
                        - generic [ref=e148]: 
                  - row "ORD-260510-236502-00012 1778403481105 2026-05-10 - 6,210 0.00 City Store 3 MPO 06 - Pending View Incoming Order Details Update Order" [ref=e149]:
                    - cell [ref=e150]:
                      - checkbox [ref=e151]
                    - cell "ORD-260510-236502-00012" [ref=e152]
                    - cell "1778403481105" [ref=e153]
                    - cell "2026-05-10" [ref=e154]
                    - cell "-" [ref=e155]
                    - cell "6,210" [ref=e156]
                    - cell "0.00" [ref=e157]
                    - cell "City Store 3" [ref=e158]
                    - cell "MPO 06" [ref=e159]
                    - cell "-" [ref=e160]
                    - cell "Pending" [ref=e161]:
                      - generic [ref=e162]: Pending
                    - cell "View Incoming Order Details Update Order" [ref=e163]:
                      - button "View Incoming Order Details" [ref=e165] [cursor=pointer]:
                        - generic [ref=e166]: 
                      - button "Update Order" [ref=e168] [cursor=pointer]:
                        - generic [ref=e169]: 
              - generic [ref=e170]:
                - combobox [ref=e173] [cursor=pointer]:
                  - option "10 / page" [selected]
                  - option "20 / page"
                  - option "50 / page"
                  - option "100 / page"
                - navigation "Page navigation example" [ref=e174]:
                  - list [ref=e175]:
                    - listitem [ref=e176]:
                      - button "<<"
                    - listitem "You are on the first page" [ref=e177]:
                      - button "<" [disabled]
                    - listitem [ref=e178]:
                      - button "1" [disabled] [ref=e179]
                    - listitem "You are on the last page" [ref=e180]:
                      - button ">" [disabled]
                    - listitem [ref=e181]:
                      - button ">>" [disabled]
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | exports.OrderPage = class OrderPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     this.selectBranchDropdown = page
  7  |       .locator("div")
  8  |       .filter({ hasText: /^Select Branch$/ })
  9  |       .nth(1);
  10 |     this.selectRouteDropdown = page
  11 |       .locator("div")
  12 |       .filter({ hasText: /^Select Route$/ })
  13 |       .nth(1);
  14 |     this.selectRetailerDropdown = page
  15 |       .locator("div")
  16 |       .filter({ hasText: /^Select Retailer$/ })
  17 |       .nth(1);
  18 |     this.submitButton = page.getByRole("button", { name: "Submit" });
  19 |     this.confirmOrderBtn = page.getByRole("button", { name: "Confirm Order" });
  20 |     this.filterBtn = page.getByText("Filter", { exact: true });
  21 | 
  22 |     this.statusDropdown = page.getByLabel("Status");
  23 | 
  24 |     this.submitButtonApprove = page.getByRole("button", {
  25 |       name: "Submit",
  26 |       exact: true,
  27 |     });
  28 |   }
  29 | 
  30 |   async selectBranch(branchName) {
  31 |     await this.selectBranchDropdown.click();
  32 |     await this.page.waitForSelector('[role="option"]', {
  33 |       state: "visible",
  34 |     });
  35 |     await this.page.getByRole("option", { name: branchName }).click();
  36 |   }
  37 | 
  38 |   async selectRoute(routeName) {
  39 |     await this.selectRouteDropdown.click();
  40 |     await this.page.waitForSelector('[role="option"]', {
  41 |       state: "visible",
  42 |     });
  43 |     await this.page.getByRole("option", { name: routeName }).click();
  44 |   }
  45 |   async selectRetailer(retailerName) {
  46 |     await this.selectRetailerDropdown.click();
  47 |     await this.page.waitForSelector('[role="option"]', {
  48 |       state: "visible",
  49 |     });
  50 |     await this.page.getByRole("option", { name: retailerName }).click();
  51 |   }
  52 | 
  53 |   async clickSubmit() {
  54 |     await this.submitButton.click();
  55 |   }
  56 | 
  57 |   async clickFilter() {
  58 |     await this.filterBtn.click();
  59 |   }
  60 | 
  61 |   async selectCheckboxByOrderId(orderId) {
  62 |     const rows = this.page.locator("tbody tr");
  63 | 
  64 |     for (let i = 0; i < (await rows.count()); i++) {
  65 |       const row = rows.nth(i);
  66 |       const text = await row.textContent();
  67 | 
  68 |       if (orderId.some((id) => text.includes(id))) {
  69 |         const checkbox = row.locator('input[type="checkbox"]');
  70 | 
  71 |         if (!(await checkbox.isChecked())) {
  72 |           await checkbox.check();
  73 |         }
  74 |       }
  75 |     }
  76 |   }
  77 | 
  78 |   async clickConfirmOrder() {
> 79 |     await expect(this.confirmOrderBtn).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  80 |     await this.confirmOrderBtn.click();
  81 |   }
  82 | 
  83 |   async selectStatus(statusValue) {
  84 |     await expect(this.statusDropdown).toBeVisible();
  85 |     await this.statusDropdown.selectOption(statusValue);
  86 |   }
  87 | 
  88 |   async clickSubmitApprove() {
  89 |     await expect(this.submitButtonApprove).toBeVisible();
  90 |     await this.submitButtonApprove.click();
  91 | 
  92 |   }
  93 | };
  94 | 
```