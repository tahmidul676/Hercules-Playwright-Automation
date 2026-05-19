# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_014_SND_PI_Picking_CreateTest.spec.js >> SND_PI_Picking_CreateTest
- Location: tests\TC_014_SND_PI_Picking_CreateTest.spec.js:8:5

# Error details

```
Error: No checkboxes were checked. Order IDs not found: ORD-260510-236502-00013
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - link "application logo" [ref=e8] [cursor=pointer]:
      - /url: /
      - img "application logo" [ref=e9]
    - searchbox "Search menu items" [ref=e12]
    - generic [ref=e13]:
      - link "" [ref=e14] [cursor=pointer]:
        - /url: /bulk-upload-list
        - generic "Upload Manager" [ref=e15]: 
      - link "" [ref=e16] [cursor=pointer]:
        - /url: /download-manager
        - generic "Download Manager" [ref=e17]: 
      - generic "View In Full Screen" [ref=e18] [cursor=pointer]: 
      - generic "Notifications" [ref=e19] [cursor=pointer]:
        - generic [ref=e20]:
          - text: 
          - generic "9 unread messages" [ref=e21]: "9"
      - img "Profile" [ref=e24] [cursor=pointer]
  - generic [ref=e25]:
    - generic [ref=e27] [cursor=pointer]:
      - button "Open sidebar":
        - generic [ref=e29]: 󰅂
      - generic [ref=e30]:
        - link "󰄫 Dashboard" [ref=e32]:
          - /url: /
          - generic [ref=e33]: 󰄫
          - generic: Dashboard
        - generic [ref=e36]: 
        - generic [ref=e39]: 
        - generic [ref=e42]: 
        - generic [ref=e45]: 
        - generic [ref=e48]: 
        - generic [ref=e51]: 
        - generic [ref=e54]: 
        - generic [ref=e57]: 
        - generic [ref=e60]: 
    - main [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - generic [ref=e64]:
            - heading "Picking" [level=1]
            - list [ref=e65]:
              - listitem [ref=e66]:
                - link "Dashboard" [ref=e67] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e68]: /
              - listitem: Picking
          - generic [ref=e69]:
            - link "List" [ref=e70] [cursor=pointer]:
              - /url: /snd/pi/picking/list
              - button "List" [ref=e72]:
                - generic [ref=e73]: 
                - text: List
            - button "Filter" [ref=e76] [cursor=pointer]:
              - generic [ref=e77]: 
              - text: Filter
        - option "Select Business Unit" [selected]
        - option "CBU of Consumer Healthcare"
        - option "Chief Business Officer-Pediatrics"
        - option "Head of Business"
        - combobox [ref=e80]
        - combobox [ref=e82]
        - combobox [ref=e84]
        - combobox [ref=e86]
        - combobox [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e91]:
            - heading "Processed PI List" [level=5] [ref=e92]
            - paragraph
          - generic [ref=e94]:
            - table [ref=e96]:
              - rowgroup [ref=e97]:
                - row "SL Branch Route Market Retailer Code Retailer Name Mobile Number Order Number Order Date Order Time Proforma Number Proforma Date Proforma Time TP Amount VAT Amount Discount Amount Net TP Amount Net Amount Created By Status" [ref=e98]:
                  - columnheader "SL" [ref=e99]
                  - columnheader "Branch" [ref=e100]
                  - columnheader "Route" [ref=e101]
                  - columnheader "Market" [ref=e102]
                  - columnheader "Retailer Code" [ref=e103]
                  - columnheader "Retailer Name" [ref=e104]
                  - columnheader "Mobile Number" [ref=e105]
                  - columnheader "Order Number" [ref=e106]
                  - columnheader "Order Date" [ref=e107]
                  - columnheader "Order Time" [ref=e108]
                  - columnheader "Proforma Number" [ref=e109]
                  - columnheader "Proforma Date" [ref=e110]
                  - columnheader "Proforma Time" [ref=e111]
                  - columnheader "TP Amount" [ref=e112]
                  - columnheader "VAT Amount" [ref=e113]
                  - columnheader "Discount Amount" [ref=e114]
                  - columnheader "Net TP Amount" [ref=e115]
                  - columnheader "Net Amount" [ref=e116]
                  - columnheader "Created By" [ref=e117]
                  - columnheader "Status" [ref=e118]
              - rowgroup [ref=e119]:
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00013 2026-04-26 05:07 PM PI002-ORD-260426-236502-00013 2026-05-07 14:56 PM 14,310 337.50 - 14,310 14,647.50 NAAFCO User Pending" [ref=e120]:
                  - cell [ref=e121]:
                    - checkbox [ref=e122]
                  - cell "Rampura Branch" [ref=e123]
                  - cell "Rampura Route 1" [ref=e124]
                  - cell "Rampura Market 1" [ref=e125]
                  - cell "R00236507" [ref=e126]
                  - cell "City Store 3" [ref=e127]
                  - cell "8801670000725" [ref=e128]
                  - cell "ORD-260426-236502-00013" [ref=e129]
                  - cell "2026-04-26" [ref=e130]
                  - cell "05:07 PM" [ref=e131]
                  - cell "PI002-ORD-260426-236502-00013" [ref=e132]
                  - cell "2026-05-07" [ref=e133]
                  - cell "14:56 PM" [ref=e134]
                  - cell "14,310" [ref=e135]
                  - cell "337.50" [ref=e136]
                  - cell "-" [ref=e137]
                  - cell "14,310" [ref=e138]
                  - cell "14,647.50" [ref=e139]
                  - cell "NAAFCO User" [ref=e140]
                  - cell "Pending" [ref=e141]:
                    - generic [ref=e142]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00015 2026-04-26 05:10 PM PI002-ORD-260426-236502-00015 2026-05-07 09:38 AM 3,500 45 - 3,500 3,545 NAAFCO User Pending" [ref=e143]:
                  - cell [ref=e144]:
                    - checkbox [ref=e145]
                  - cell "Rampura Branch" [ref=e146]
                  - cell "Rampura Route 1" [ref=e147]
                  - cell "Rampura Market 1" [ref=e148]
                  - cell "R00236507" [ref=e149]
                  - cell "City Store 3" [ref=e150]
                  - cell "8801670000725" [ref=e151]
                  - cell "ORD-260426-236502-00015" [ref=e152]
                  - cell "2026-04-26" [ref=e153]
                  - cell "05:10 PM" [ref=e154]
                  - cell "PI002-ORD-260426-236502-00015" [ref=e155]
                  - cell "2026-05-07" [ref=e156]
                  - cell "09:38 AM" [ref=e157]
                  - cell "3,500" [ref=e158]
                  - cell "45" [ref=e159]
                  - cell "-" [ref=e160]
                  - cell "3,500" [ref=e161]
                  - cell "3,545" [ref=e162]
                  - cell "NAAFCO User" [ref=e163]
                  - cell "Pending" [ref=e164]:
                    - generic [ref=e165]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00016 2026-04-26 05:14 PM PI002-ORD-260426-236502-00016 2026-05-07 09:38 AM 5,490 135 - 5,490 5,625 NAAFCO User Pending" [ref=e166]:
                  - cell [ref=e167]:
                    - checkbox [ref=e168]
                  - cell "Rampura Branch" [ref=e169]
                  - cell "Rampura Route 1" [ref=e170]
                  - cell "Rampura Market 1" [ref=e171]
                  - cell "R00236507" [ref=e172]
                  - cell "City Store 3" [ref=e173]
                  - cell "8801670000725" [ref=e174]
                  - cell "ORD-260426-236502-00016" [ref=e175]
                  - cell "2026-04-26" [ref=e176]
                  - cell "05:14 PM" [ref=e177]
                  - cell "PI002-ORD-260426-236502-00016" [ref=e178]
                  - cell "2026-05-07" [ref=e179]
                  - cell "09:38 AM" [ref=e180]
                  - cell "5,490" [ref=e181]
                  - cell "135" [ref=e182]
                  - cell "-" [ref=e183]
                  - cell "5,490" [ref=e184]
                  - cell "5,625" [ref=e185]
                  - cell "NAAFCO User" [ref=e186]
                  - cell "Pending" [ref=e187]:
                    - generic [ref=e188]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260421-236502-00002 2026-04-21 09:10 AM PI001-ORD-260421-236502-00002 2026-04-30 11:31 AM 2,400 120 - 2,400 2,520 NAAFCO User Pending" [ref=e189]:
                  - cell [ref=e190]:
                    - checkbox [ref=e191]
                  - cell "Rampura Branch" [ref=e192]
                  - cell "Rampura Route 1" [ref=e193]
                  - cell "Rampura Market 1" [ref=e194]
                  - cell "R00236507" [ref=e195]
                  - cell "City Store 3" [ref=e196]
                  - cell "8801670000725" [ref=e197]
                  - cell "ORD-260421-236502-00002" [ref=e198]
                  - cell "2026-04-21" [ref=e199]
                  - cell "09:10 AM" [ref=e200]
                  - cell "PI001-ORD-260421-236502-00002" [ref=e201]
                  - cell "2026-04-30" [ref=e202]
                  - cell "11:31 AM" [ref=e203]
                  - cell "2,400" [ref=e204]
                  - cell "120" [ref=e205]
                  - cell "-" [ref=e206]
                  - cell "2,400" [ref=e207]
                  - cell "2,520" [ref=e208]
                  - cell "NAAFCO User" [ref=e209]
                  - cell "Pending" [ref=e210]:
                    - generic [ref=e211]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260421-236502-00978 2026-04-21 09:09 AM PI001-ORD-260421-236502-00978 2026-04-30 11:31 AM 2,100 105 - 2,100 2,205 NAAFCO User Pending" [ref=e212]:
                  - cell [ref=e213]:
                    - checkbox [ref=e214]
                  - cell "Rampura Branch" [ref=e215]
                  - cell "Rampura Route 1" [ref=e216]
                  - cell "Rampura Market 1" [ref=e217]
                  - cell "R00236507" [ref=e218]
                  - cell "City Store 3" [ref=e219]
                  - cell "8801670000725" [ref=e220]
                  - cell "ORD-260421-236502-00978" [ref=e221]
                  - cell "2026-04-21" [ref=e222]
                  - cell "09:09 AM" [ref=e223]
                  - cell "PI001-ORD-260421-236502-00978" [ref=e224]
                  - cell "2026-04-30" [ref=e225]
                  - cell "11:31 AM" [ref=e226]
                  - cell "2,100" [ref=e227]
                  - cell "105" [ref=e228]
                  - cell "-" [ref=e229]
                  - cell "2,100" [ref=e230]
                  - cell "2,205" [ref=e231]
                  - cell "NAAFCO User" [ref=e232]
                  - cell "Pending" [ref=e233]:
                    - generic [ref=e234]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260420-236502-00013 2026-04-20 05:42 PM PI001-ORD-260420-236502-00013 2026-04-30 11:31 AM 600 30 - 600 630 NAAFCO User Pending" [ref=e235]:
                  - cell [ref=e236]:
                    - checkbox [ref=e237]
                  - cell "Rampura Branch" [ref=e238]
                  - cell "Rampura Route 1" [ref=e239]
                  - cell "Rampura Market 1" [ref=e240]
                  - cell "R00236507" [ref=e241]
                  - cell "City Store 3" [ref=e242]
                  - cell "8801670000725" [ref=e243]
                  - cell "ORD-260420-236502-00013" [ref=e244]
                  - cell "2026-04-20" [ref=e245]
                  - cell "05:42 PM" [ref=e246]
                  - cell "PI001-ORD-260420-236502-00013" [ref=e247]
                  - cell "2026-04-30" [ref=e248]
                  - cell "11:31 AM" [ref=e249]
                  - cell "600" [ref=e250]
                  - cell "30" [ref=e251]
                  - cell "-" [ref=e252]
                  - cell "600" [ref=e253]
                  - cell "630" [ref=e254]
                  - cell "NAAFCO User" [ref=e255]
                  - cell "Pending" [ref=e256]:
                    - generic [ref=e257]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260420-236502-00012 2026-04-20 05:05 PM PI001-ORD-260420-236502-00012 2026-04-30 11:31 AM 300 15 - 300 315 NAAFCO User Pending" [ref=e258]:
                  - cell [ref=e259]:
                    - checkbox [ref=e260]
                  - cell "Rampura Branch" [ref=e261]
                  - cell "Rampura Route 1" [ref=e262]
                  - cell "Rampura Market 1" [ref=e263]
                  - cell "R00236507" [ref=e264]
                  - cell "City Store 3" [ref=e265]
                  - cell "8801670000725" [ref=e266]
                  - cell "ORD-260420-236502-00012" [ref=e267]
                  - cell "2026-04-20" [ref=e268]
                  - cell "05:05 PM" [ref=e269]
                  - cell "PI001-ORD-260420-236502-00012" [ref=e270]
                  - cell "2026-04-30" [ref=e271]
                  - cell "11:31 AM" [ref=e272]
                  - cell "300" [ref=e273]
                  - cell "15" [ref=e274]
                  - cell "-" [ref=e275]
                  - cell "300" [ref=e276]
                  - cell "315" [ref=e277]
                  - cell "NAAFCO User" [ref=e278]
                  - cell "Pending" [ref=e279]:
                    - generic [ref=e280]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260420-236502-00010 2026-04-20 04:31 PM PI001-ORD-260420-236502-00010 2026-04-30 11:31 AM 1,20,000 6,000 - 1,20,000 1,26,000 NAAFCO User Pending" [ref=e281]:
                  - cell [ref=e282]:
                    - checkbox [ref=e283]
                  - cell "Rampura Branch" [ref=e284]
                  - cell "Rampura Route 1" [ref=e285]
                  - cell "Rampura Market 1" [ref=e286]
                  - cell "R00236507" [ref=e287]
                  - cell "City Store 3" [ref=e288]
                  - cell "8801670000725" [ref=e289]
                  - cell "ORD-260420-236502-00010" [ref=e290]
                  - cell "2026-04-20" [ref=e291]
                  - cell "04:31 PM" [ref=e292]
                  - cell "PI001-ORD-260420-236502-00010" [ref=e293]
                  - cell "2026-04-30" [ref=e294]
                  - cell "11:31 AM" [ref=e295]
                  - cell "1,20,000" [ref=e296]
                  - cell "6,000" [ref=e297]
                  - cell "-" [ref=e298]
                  - cell "1,20,000" [ref=e299]
                  - cell "1,26,000" [ref=e300]
                  - cell "NAAFCO User" [ref=e301]
                  - cell "Pending" [ref=e302]:
                    - generic [ref=e303]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00010 2026-04-26 05:02 PM PI001-ORD-260426-236502-00010 2026-04-26 17:21 PM 11,275 150 - 11,275 11,425 NAAFCO User Pending" [ref=e304]:
                  - cell [ref=e305]:
                    - checkbox [ref=e306]
                  - cell "Rampura Branch" [ref=e307]
                  - cell "Rampura Route 1" [ref=e308]
                  - cell "Rampura Market 1" [ref=e309]
                  - cell "R00236507" [ref=e310]
                  - cell "City Store 3" [ref=e311]
                  - cell "8801670000725" [ref=e312]
                  - cell "ORD-260426-236502-00010" [ref=e313]
                  - cell "2026-04-26" [ref=e314]
                  - cell "05:02 PM" [ref=e315]
                  - cell "PI001-ORD-260426-236502-00010" [ref=e316]
                  - cell "2026-04-26" [ref=e317]
                  - cell "17:21 PM" [ref=e318]
                  - cell "11,275" [ref=e319]
                  - cell "150" [ref=e320]
                  - cell "-" [ref=e321]
                  - cell "11,275" [ref=e322]
                  - cell "11,425" [ref=e323]
                  - cell "NAAFCO User" [ref=e324]
                  - cell "Pending" [ref=e325]:
                    - generic [ref=e326]: Pending
                - row "Rampura Branch Rampura Route 1 Rampura Market 1 R00236507 City Store 3 8801670000725 ORD-260426-236502-00011 2026-04-26 05:04 PM PI001-ORD-260426-236502-00011 2026-04-26 17:21 PM 21,160 246.75 - 21,160 21,406.75 NAAFCO User Pending" [ref=e327]:
                  - cell [ref=e328]:
                    - checkbox [ref=e329]
                  - cell "Rampura Branch" [ref=e330]
                  - cell "Rampura Route 1" [ref=e331]
                  - cell "Rampura Market 1" [ref=e332]
                  - cell "R00236507" [ref=e333]
                  - cell "City Store 3" [ref=e334]
                  - cell "8801670000725" [ref=e335]
                  - cell "ORD-260426-236502-00011" [ref=e336]
                  - cell "2026-04-26" [ref=e337]
                  - cell "05:04 PM" [ref=e338]
                  - cell "PI001-ORD-260426-236502-00011" [ref=e339]
                  - cell "2026-04-26" [ref=e340]
                  - cell "17:21 PM" [ref=e341]
                  - cell "21,160" [ref=e342]
                  - cell "246.75" [ref=e343]
                  - cell "-" [ref=e344]
                  - cell "21,160" [ref=e345]
                  - cell "21,406.75" [ref=e346]
                  - cell "NAAFCO User" [ref=e347]
                  - cell "Pending" [ref=e348]:
                    - generic [ref=e349]: Pending
            - generic [ref=e350]:
              - combobox [ref=e353] [cursor=pointer]:
                - option "10 / page" [selected]
                - option "20 / page"
                - option "50 / page"
                - option "100 / page"
              - navigation "Page navigation example" [ref=e354]:
                - list [ref=e355]:
                  - listitem [ref=e356]:
                    - button "<<"
                  - listitem "You are on the first page" [ref=e357]:
                    - button "<" [disabled]
                  - listitem [ref=e358]:
                    - button "1" [ref=e359] [cursor=pointer]
                  - listitem [ref=e360]:
                    - button "2" [ref=e361] [cursor=pointer]
                  - listitem [ref=e362] [cursor=pointer]:
                    - button ">" [ref=e363]
                  - listitem [ref=e364]:
                    - button ">>" [disabled] [ref=e365]
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
      |             ^ Error: No checkboxes were checked. Order IDs not found: ORD-260510-236502-00013
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
  170 |   // ---------Apply filter to get data----------------
  171 | 
  172 |   async selectOrderByOrderFrom(expectedOrderFrom) {
  173 |     // Wait until at least one td has real visible text (not empty/ZWNJ)
  174 |     await this.page.waitForFunction(
  175 |       () => {
  176 |         const cells = document.querySelectorAll("table tbody tr td");
  177 |         return [...cells].some(
  178 |           (td) => td.innerText.trim().replace(/\u200C/g, "").length > 0,
  179 |         );
  180 |       },
  181 |       { timeout: 15000 },
  182 |     );
  183 | 
  184 |     const rows = this.page.locator("table tbody tr");
  185 |     const rowCount = await rows.count();
  186 |     let found = false;
  187 | 
  188 |     console.log(`Total rows: ${rowCount}`);
  189 | 
  190 |     for (let i = 0; i < rowCount; i++) {
  191 |       const row = rows.nth(i);
  192 |       const cells = row.locator("td");
  193 |       const totalCells = await cells.count();
  194 | 
  195 |       if (totalCells === 0) continue;
  196 | 
  197 |       // Read ALL cells text and clean ZWNJ characters
  198 |       let rowText = "";
  199 |       for (let c = 0; c < totalCells; c++) {
  200 |         const raw = await cells
  201 |           .nth(c)
  202 |           .evaluate((el) => el.innerText.trim().replace(/\u200C/g, ""));
  203 |         console.log(`  Row[${i}] Col[${c}]: "${raw}"`);
  204 |         rowText += raw + " ";
  205 |       }
  206 | 
  207 |       if (rowText.includes(expectedOrderFrom.trim())) {
  208 |         await this.page.evaluate((index) => {
  209 |           const rows = document.querySelectorAll("table tbody tr");
  210 |           const checkbox = rows[index]?.querySelector("input[type='checkbox']");
  211 |           if (checkbox) checkbox.click();
  212 |         }, i);
  213 | 
  214 |         found = true;
  215 |         break;
  216 |       }
  217 |     }
  218 | 
  219 |     return found;
  220 |   }
  221 |   //---------------
  222 | };
  223 | 
```