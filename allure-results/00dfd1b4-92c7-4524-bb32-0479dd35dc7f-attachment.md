# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_016_SND_PI_CollectionSummery_CreateTest.spec.js >> SND_PI_CollectionSummery_CreateTest
- Location: tests\TC_016_SND_PI_CollectionSummery_CreateTest.spec.js:9:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//a[normalize-space()=\'Create\']') resolved to 2 elements:
    1) <a data-discover="true" href="/snd/pi/available-orders" class="_thirdLevelLink_93eex_859  ">…</a> aka getByRole('link', { name: 'Create' }).first()
    2) <a data-discover="true" class="_fourthLevelLink_93eex_961 " href="/snd/pi/collection-summary-create">…</a> aka getByRole('link', { name: 'Create' }).nth(1)

Call log:
  - waiting for locator('//a[normalize-space()=\'Create\']')

```

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//a[normalize-space()=\'Create\']').nth(2)

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
      - button "Close sidebar":
        - generic [ref=e29]: 󰅁
      - generic [ref=e30]:
        - link "󰄫 Dashboard" [ref=e32]:
          - /url: /
          - generic [ref=e33]: 󰄫
          - generic [ref=e34]: Dashboard
        - generic [ref=e36]:
          - generic [ref=e37]: 
          - generic [ref=e38]: Administration
          - generic [ref=e39]: 󰅂
        - generic [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - generic [ref=e43]: SND
            - generic [ref=e44]: 󰅀
          - generic [ref=e45]:
            - generic [ref=e47]:
              - generic [ref=e48]: Order
              - generic [ref=e49]: 󰅂
            - generic [ref=e50]:
              - generic [ref=e51]:
                - generic [ref=e52]: PI
                - generic [ref=e53]: 󰅀
              - generic [ref=e54]:
                - link "Create" [ref=e56]:
                  - /url: /snd/pi/available-orders
                  - generic [ref=e57]: Create
                - link "List" [ref=e59]:
                  - /url: /snd/pi/list
                  - generic [ref=e60]: List
                - generic [ref=e62]:
                  - generic [ref=e63]: Picking
                  - generic [ref=e64]: 󰅂
                - generic [ref=e65]:
                  - generic [ref=e66]:
                    - generic [ref=e67]: Collection Summary
                    - generic [ref=e68]: 󰅀
                  - generic [ref=e69]:
                    - link "Create" [ref=e71]:
                      - /url: /snd/pi/collection-summary-create
                      - generic [ref=e72]: Create
                    - link "List" [ref=e74]:
                      - /url: /snd/pi/collection-summary-list
                      - generic [ref=e75]: List
            - generic [ref=e77]:
              - generic [ref=e78]: Delivery
              - generic [ref=e79]: 󰅂
        - generic [ref=e81]:
          - generic [ref=e82]: 
          - generic [ref=e83]: Inventory
          - generic [ref=e84]: 󰅂
        - generic [ref=e86]:
          - generic [ref=e87]: 
          - generic [ref=e88]: SFA
          - generic [ref=e89]: 󰅂
        - generic [ref=e91]:
          - generic [ref=e92]: 
          - generic [ref=e93]: mFlow
          - generic [ref=e94]: 󰅂
        - generic [ref=e96]:
          - generic [ref=e97]: 
          - generic [ref=e98]: HRM
          - generic [ref=e99]: 󰅂
        - generic [ref=e101]:
          - generic [ref=e102]: 
          - generic [ref=e103]: Master Data
          - generic [ref=e104]: 󰅂
        - generic [ref=e106]:
          - generic [ref=e107]: 
          - generic [ref=e108]: Market Structure
          - generic [ref=e109]: 󰅂
        - generic [ref=e111]:
          - generic [ref=e112]: 
          - generic [ref=e113]: Others
          - generic [ref=e114]: 󰅂
    - main [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - generic [ref=e118]:
            - heading "Dashboard" [level=1]
          - button "Edit Dashboard" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: 
            - text: Edit Dashboard
        - generic [ref=e125]:
          - generic [ref=e127]:
            - generic [ref=e129]:
              - heading "Company Wise Target Order Primary Secondary Sales-v3" [level=5] [ref=e133]
              - button "󰈶" [ref=e135] [cursor=pointer]:
                - generic [ref=e136]: 󰈶
            - generic [ref=e137]:
              - generic [ref=e141]:
                - generic [ref=e142]:
                  - generic [ref=e143]: Business Unit
                  - combobox [ref=e144] [cursor=pointer]:
                    - option "Select Business Unit" [selected]
                    - option "CBU of Consumer Healthcare"
                    - option "Chief Business Officer-Pediatrics"
                    - option "Head of Business"
                - generic [ref=e145]:
                  - generic [ref=e146]: Date
                  - textbox "dd-mm-yyyy" [ref=e150] [cursor=pointer]: 14-05-2026
                - button "Search" [ref=e153] [cursor=pointer]:
                  - generic [ref=e154]: 
              - table [ref=e157]:
                - rowgroup [ref=e158]:
                  - row "Company Name Target Value Order Value Order (%) Primary Sales Primary Sales (%) Secondary Sales Secondary Sales (%)" [ref=e159]:
                    - columnheader "Company Name" [ref=e160]:
                      - generic [ref=e161]: Company Name
                    - columnheader "Target Value" [ref=e162]:
                      - generic [ref=e163]: Target Value
                    - columnheader "Order Value" [ref=e164]:
                      - generic [ref=e165]: Order Value
                    - columnheader "Order (%)" [ref=e166]:
                      - generic [ref=e167]: Order (%)
                    - columnheader "Primary Sales" [ref=e168]:
                      - generic [ref=e169]: Primary Sales
                    - columnheader "Primary Sales (%)" [ref=e170]:
                      - generic [ref=e171]: Primary Sales (%)
                    - columnheader "Secondary Sales" [ref=e172]:
                      - generic [ref=e173]: Secondary Sales
                    - columnheader "Secondary Sales (%)" [ref=e174]:
                      - generic [ref=e175]: Secondary Sales (%)
                - rowgroup [ref=e176]:
                  - row "Banglastrong Ltd - - - - - - -" [ref=e177]:
                    - cell "Banglastrong Ltd" [ref=e178]
                    - cell "-" [ref=e179]
                    - cell "-" [ref=e180]
                    - cell "-" [ref=e181]
                    - cell "-" [ref=e182]
                    - cell "-" [ref=e183]
                    - cell "-" [ref=e184]
                    - cell "-" [ref=e185]
                  - row "Total 0 0 - 0 - 0 -" [ref=e186]:
                    - cell "Total" [ref=e187]
                    - cell "0" [ref=e188]
                    - cell "0" [ref=e189]
                    - cell "-" [ref=e190]
                    - cell "0" [ref=e191]
                    - cell "-" [ref=e192]
                    - cell "0" [ref=e193]
                    - cell "-" [ref=e194]
          - generic [ref=e196]:
            - generic [ref=e198]:
              - heading "Total Summary-v3" [level=5] [ref=e202]
              - button "󰈶" [ref=e204] [cursor=pointer]:
                - generic [ref=e205]: 󰈶
            - generic [ref=e207]:
              - generic [ref=e211]:
                - paragraph [ref=e212]: Scheduled Outlet
                - paragraph [ref=e213]: "0"
              - generic [ref=e217]:
                - paragraph [ref=e218]: Visited Outlet
                - paragraph [ref=e219]: "0"
              - generic [ref=e223]:
                - paragraph [ref=e224]: Ordered Outlet
                - paragraph [ref=e225]: "0"
              - generic [ref=e229]:
                - paragraph [ref=e230]: Only Visit (No Order)
                - paragraph [ref=e231]: "0"
              - generic [ref=e235]:
                - paragraph [ref=e236]: Not Visited Outlet
                - paragraph [ref=e237]: "0"
              - generic [ref=e241]:
                - paragraph [ref=e242]: Target Amount
                - paragraph [ref=e243]: "0"
              - generic [ref=e247]:
                - paragraph [ref=e248]: Primary Sales
                - paragraph [ref=e249]: "0"
              - generic [ref=e253]:
                - paragraph [ref=e254]: Secondary Sales
                - paragraph [ref=e255]: "0"
              - generic [ref=e259]:
                - paragraph [ref=e260]: Line Per Call (LPC)
                - paragraph [ref=e261]: "0.00"
              - generic [ref=e265]:
                - paragraph [ref=e266]: Avg. Memo Value
                - paragraph [ref=e267]: "0"
          - generic [ref=e269]:
            - heading "Total Summary-v2" [level=5] [ref=e271]
            - generic [ref=e273]:
              - generic [ref=e277]:
                - paragraph [ref=e278]: Today Scheduled Outlet
                - paragraph [ref=e279]: "0"
              - generic [ref=e283]:
                - paragraph [ref=e284]: Today Ordered Outlet
                - paragraph [ref=e285]: "0"
              - generic [ref=e289]:
                - paragraph [ref=e290]: Order Taken (%)
                - paragraph [ref=e291]: "0"
              - generic [ref=e295]:
                - paragraph [ref=e296]: Only Visit (No Order)
                - paragraph [ref=e297]: "0"
              - generic [ref=e301]:
                - paragraph [ref=e302]: Outlet Not Visited
                - paragraph [ref=e303]: "0"
              - generic [ref=e307]:
                - paragraph [ref=e308]: Total Primary Sales
                - paragraph [ref=e309]: "0"
              - generic [ref=e313]:
                - paragraph [ref=e314]: Total Target
                - paragraph [ref=e315]: "0"
              - generic [ref=e319]:
                - paragraph [ref=e320]: Total Secondary Sales
                - paragraph [ref=e321]: "0"
          - generic [ref=e323]:
            - heading "Summary-v4" [level=5] [ref=e329]
            - generic [ref=e331]:
              - generic [ref=e335]:
                - paragraph [ref=e336]: Total Retailer
                - paragraph [ref=e337]: "0"
              - generic [ref=e341]:
                - paragraph [ref=e342]: Visited Shops
                - paragraph [ref=e343]: "0"
              - generic [ref=e347]:
                - paragraph [ref=e348]: Total Return Quantity
                - paragraph [ref=e349]: "0"
              - generic [ref=e353]:
                - paragraph [ref=e354]: Total Invoice Amount
                - paragraph [ref=e355]: "0"
              - generic [ref=e359]:
                - paragraph [ref=e360]: Total Delivery Amount
                - paragraph [ref=e361]: "0"
              - generic [ref=e365]:
                - paragraph [ref=e366]: Total Collection Amount
                - paragraph [ref=e367]: "0"
              - generic [ref=e371]:
                - paragraph [ref=e372]: Outstanding Credit (Count)
                - paragraph [ref=e373]: "0"
              - generic [ref=e377]:
                - paragraph [ref=e378]: Outstanding Credit (Amount)
                - paragraph [ref=e379]: "0"
          - generic [ref=e381]:
            - heading "Hourly Order (Current Month)-v1" [level=5] [ref=e383]
            - generic [ref=e386]:
              - img [ref=e387]:
                - generic [ref=e396]:
                  - generic "06 AM" [ref=e397]
                  - generic "07 AM" [ref=e398]
                  - generic "08 AM" [ref=e399]
                  - generic "09 AM" [ref=e400]
                  - generic "10 AM" [ref=e401]
                  - generic "11 AM" [ref=e402]
                  - generic "12 PM" [ref=e403]
                  - generic "01 PM" [ref=e404]
                  - generic "02 PM" [ref=e405]
                  - generic "03 PM" [ref=e406]
                  - generic "04 PM" [ref=e407]
                  - generic "05 PM" [ref=e408]
                  - generic "06 PM" [ref=e409]
                  - generic "07 PM" [ref=e410]
                  - generic "08 PM" [ref=e411]
                  - generic "09 PM" [ref=e412]
                  - generic "10 PM" [ref=e413]
                  - generic "11 PM" [ref=e414]
              - generic: ●
              - generic [ref=e415]:
                - generic "Zoom In" [ref=e416] [cursor=pointer]:
                  - img
                - generic "Zoom Out" [ref=e417] [cursor=pointer]:
                  - img
                - generic "Selection Zoom" [ref=e418] [cursor=pointer]:
                  - img
                - generic "Panning" [ref=e419] [cursor=pointer]:
                  - img
                - generic "Reset Zoom" [ref=e420] [cursor=pointer]:
                  - img
                - generic "Menu" [ref=e421] [cursor=pointer]:
                  - img
                - generic:
                  - generic "Download SVG"
                  - generic "Download PNG"
                  - generic "Download CSV"
          - generic [ref=e423]:
            - heading "Collection vs Credit Outstanding - v4" [level=5] [ref=e425]
            - generic [ref=e426]:
              - generic [ref=e427]:
                - generic [ref=e428] [cursor=pointer]:
                  - generic [ref=e429]: DSR
                  - generic [ref=e430]:
                    - log [ref=e432]
                    - generic [ref=e433]:
                      - generic [ref=e434]:
                        - generic [ref=e435]: Select DSR
                        - combobox [ref=e437]
                      - img [ref=e441]
                  - textbox "DSR"
                - generic [ref=e443]:
                  - generic [ref=e444]: Month
                  - textbox [ref=e447] [cursor=pointer]
              - generic [ref=e449]:
                - img [ref=e450]:
                  - generic [ref=e460]:
                    - generic "01 May 2026" [ref=e461]
                    - generic "02 May 2026" [ref=e462]
                    - generic "03 May 2026" [ref=e463]
                    - generic "04 May 2026" [ref=e464]
                    - generic "05 May 2026" [ref=e465]
                    - generic "06 May 2026" [ref=e466]
                    - generic "07 May 2026" [ref=e467]
                    - generic "08 May 2026" [ref=e468]
                    - generic "09 May 2026" [ref=e469]
                    - generic "10 May 2026" [ref=e470]
                    - generic "11 May 2026" [ref=e471]
                    - generic "12 May 2026" [ref=e472]
                    - generic "13 May 2026" [ref=e473]
                    - generic "14 May 2026" [ref=e474]
                    - generic "15 May 2026" [ref=e475]
                    - generic "16 May 2026" [ref=e476]
                    - generic "17 May 2026" [ref=e477]
                    - generic "18 May 2026" [ref=e478]
                    - generic "19 May 2026" [ref=e479]
                    - generic "20 May 2026" [ref=e480]
                    - generic "21 May 2026" [ref=e481]
                    - generic "22 May 2026" [ref=e482]
                    - generic "23 May 2026" [ref=e483]
                    - generic "24 May 2026" [ref=e484]
                    - generic "25 May 2026" [ref=e485]
                    - generic "26 May 2026" [ref=e486]
                    - generic "27 May 2026" [ref=e487]
                    - generic "28 May 2026" [ref=e488]
                    - generic "29 May 2026" [ref=e489]
                    - generic "30 May 2026" [ref=e490]
                    - generic "31 May 2026" [ref=e491]
                - generic [ref=e492]:
                  - generic [ref=e493] [cursor=pointer]:
                    - generic [ref=e494]:
                      - img
                    - generic [ref=e495]: Collection
                  - generic [ref=e496] [cursor=pointer]:
                    - generic [ref=e497]:
                      - img
                    - generic [ref=e498]: Credit Outstanding
                - generic: ● ●
          - generic [ref=e500]:
            - generic [ref=e501]:
              - heading "Manpower Management (Details)-v2" [level=5] [ref=e502]
              - paragraph [ref=e503]: "* Last update 14 May 2026"
            - generic [ref=e504]:
              - generic [ref=e508]:
                - generic [ref=e509]:
                  - generic [ref=e510]: Business Unit
                  - combobox [ref=e511] [cursor=pointer]:
                    - option "Select Business Unit" [selected]
                    - option "CBU of Consumer Healthcare"
                    - option "Chief Business Officer-Pediatrics"
                    - option "Head of Business"
                - button "Search" [ref=e514] [cursor=pointer]:
                  - generic [ref=e515]: 
              - table [ref=e518]:
                - rowgroup [ref=e519]:
                  - row "Position Total Employee Present (In Time) Late In Absent Leave Working Today" [ref=e520]:
                    - columnheader "Position" [ref=e521]
                    - columnheader "Total Employee" [ref=e522]
                    - columnheader "Present (In Time)" [ref=e523]
                    - columnheader "Late In" [ref=e524]
                    - columnheader "Absent" [ref=e525]
                    - columnheader "Leave" [ref=e526]
                    - columnheader "Working Today" [ref=e527]
                - rowgroup [ref=e528]:
                  - row "Business Unit 3 - - 3 - -" [ref=e529]:
                    - cell "Business Unit" [ref=e530]
                    - cell "3" [ref=e531]
                    - cell "-" [ref=e532]
                    - cell "-" [ref=e533]
                    - cell "3" [ref=e534]
                    - cell "-" [ref=e535]
                    - cell "-" [ref=e536]
                  - row "Sales Line 3 - - 3 - -" [ref=e537]:
                    - cell "Sales Line" [ref=e538]
                    - cell "3" [ref=e539]
                    - cell "-" [ref=e540]
                    - cell "-" [ref=e541]
                    - cell "3" [ref=e542]
                    - cell "-" [ref=e543]
                    - cell "-" [ref=e544]
                  - row "Zone 4 - - 4 - -" [ref=e545]:
                    - cell "Zone" [ref=e546]
                    - cell "4" [ref=e547]
                    - cell "-" [ref=e548]
                    - cell "-" [ref=e549]
                    - cell "4" [ref=e550]
                    - cell "-" [ref=e551]
                    - cell "-" [ref=e552]
                  - row "Region 4 - - 4 - -" [ref=e553]:
                    - cell "Region" [ref=e554]
                    - cell "4" [ref=e555]
                    - cell "-" [ref=e556]
                    - cell "-" [ref=e557]
                    - cell "4" [ref=e558]
                    - cell "-" [ref=e559]
                    - cell "-" [ref=e560]
                  - row "Area 4 - - 4 - -" [ref=e561]:
                    - cell "Area" [ref=e562]
                    - cell "4" [ref=e563]
                    - cell "-" [ref=e564]
                    - cell "-" [ref=e565]
                    - cell "4" [ref=e566]
                    - cell "-" [ref=e567]
                    - cell "-" [ref=e568]
                  - row "Territory 4 - - 4 - -" [ref=e569]:
                    - cell "Territory" [ref=e570]
                    - cell "4" [ref=e571]
                    - cell "-" [ref=e572]
                    - cell "-" [ref=e573]
                    - cell "4" [ref=e574]
                    - cell "-" [ref=e575]
                    - cell "-" [ref=e576]
                  - row "Sub-Territory 9 - - 9 - -" [ref=e577]:
                    - cell "Sub-Territory" [ref=e578]
                    - cell "9" [ref=e579]
                    - cell "-" [ref=e580]
                    - cell "-" [ref=e581]
                    - cell "9" [ref=e582]
                    - cell "-" [ref=e583]
                    - cell "-" [ref=e584]
                  - row "Depo User 1 - - 1 - -" [ref=e585]:
                    - cell "Depo User" [ref=e586]
                    - cell "1" [ref=e587]
                    - cell "-" [ref=e588]
                    - cell "-" [ref=e589]
                    - cell "1" [ref=e590]
                    - cell "-" [ref=e591]
                    - cell "-" [ref=e592]
                  - row "Total 32 - - 32 - -" [ref=e593]:
                    - cell "Total" [ref=e594]
                    - cell "32" [ref=e595]
                    - cell "-" [ref=e596]
                    - cell "-" [ref=e597]
                    - cell "32" [ref=e598]
                    - cell "-" [ref=e599]
                    - cell "-" [ref=e600]
          - generic [ref=e602]:
            - generic [ref=e603]:
              - heading "National Distribution Coverage-v2" [level=5] [ref=e604]
              - paragraph [ref=e605]: "* Last update 14 May 2026"
            - generic [ref=e607]:
              - generic [ref=e611]:
                - paragraph [ref=e612]: Total Business Unit
                - paragraph [ref=e613]: "3"
              - generic [ref=e617]:
                - paragraph [ref=e618]: Total Sales Line
                - paragraph [ref=e619]: "3"
              - generic [ref=e623]:
                - paragraph [ref=e624]: Total Zone
                - paragraph [ref=e625]: "4"
              - generic [ref=e629]:
                - paragraph [ref=e630]: Total Region
                - paragraph [ref=e631]: "4"
              - generic [ref=e635]:
                - paragraph [ref=e636]: Total Area
                - paragraph [ref=e637]: "4"
              - generic [ref=e641]:
                - paragraph [ref=e642]: Total Territory
                - paragraph [ref=e643]: "4"
              - generic [ref=e647]:
                - paragraph [ref=e648]: Total Sub-Territory
                - paragraph [ref=e649]: "9"
              - generic [ref=e653]:
                - paragraph [ref=e654]: Total Depo User
                - paragraph [ref=e655]: "1"
              - generic [ref=e659]:
                - paragraph [ref=e660]: Total Outlet
                - paragraph [ref=e661]: "7"
              - generic [ref=e665]:
                - paragraph [ref=e666]: Total Division Covered
                - paragraph [ref=e667]: "0"
              - generic [ref=e671]:
                - paragraph [ref=e672]: Total District Covered
                - paragraph [ref=e673]: "0"
              - generic [ref=e677]:
                - paragraph [ref=e678]: Total Upazilla Covered
                - paragraph [ref=e679]: "0"
          - generic [ref=e681]:
            - generic [ref=e684]:
              - heading "Manpower Management-v2" [level=5] [ref=e685]
              - paragraph [ref=e686]: "* Last update 14 May 2026"
            - generic [ref=e688]:
              - generic [ref=e692]:
                - paragraph [ref=e693]: Depo User
                - paragraph [ref=e694]: "1"
              - generic [ref=e698]:
                - paragraph [ref=e699]: Sub-Territory
                - paragraph [ref=e700]: "9"
              - generic [ref=e704]:
                - paragraph [ref=e705]: Territory
                - paragraph [ref=e706]: "4"
              - generic [ref=e710]:
                - paragraph [ref=e711]: Area
                - paragraph [ref=e712]: "4"
              - generic [ref=e716]:
                - paragraph [ref=e717]: Region
                - paragraph [ref=e718]: "4"
              - generic [ref=e722]:
                - paragraph [ref=e723]: Zone
                - paragraph [ref=e724]: "4"
              - generic [ref=e728]:
                - paragraph [ref=e729]: Sales Line
                - paragraph [ref=e730]: "3"
              - generic [ref=e734]:
                - paragraph [ref=e735]: Business Unit
                - paragraph [ref=e736]: "3"
          - generic [ref=e738]:
            - generic [ref=e740]:
              - generic [ref=e743]:
                - heading "Performance Management-v2" [level=5] [ref=e744]
                - paragraph [ref=e745]: Between 2026-05-14 to 2026-05-14
              - generic [ref=e746] [cursor=pointer]:
                - generic [ref=e747]:
                  - generic [ref=e748]:
                    - radio "Most Order"
                    - text: Most Order
                  - generic [ref=e749]:
                    - radio "Less Order"
                    - text: Less Order
                - button "󰈶" [ref=e751]:
                  - generic [ref=e752]: 󰈶
            - generic [ref=e755]:
              - img [ref=e756]:
                - generic [ref=e759]:
                  - generic "2" [ref=e760]
                  - generic "1.5" [ref=e761]
                  - generic "1" [ref=e762]
                  - generic "0.5" [ref=e763]
                  - generic "0" [ref=e764]
                - generic [ref=e791]:
                  - generic "SR" [ref=e792]
                  - generic "Depo User" [ref=e793]
                  - generic "Sub-Territory" [ref=e794]
                  - generic "Territory" [ref=e795]
                  - generic "Area" [ref=e796]
                  - generic "Region" [ref=e797]
                  - generic "Zone" [ref=e798]
                  - generic "Sales Line" [ref=e799]
                  - generic "Business Unit" [ref=e800]
              - generic [ref=e801]:
                - generic [ref=e802] [cursor=pointer]:
                  - generic [ref=e803]:
                    - img
                  - generic [ref=e804]: Target Value
                - generic [ref=e805] [cursor=pointer]:
                  - generic [ref=e806]:
                    - img
                  - generic [ref=e807]: Sales Value
              - generic: ● ●
```

# Test source

```ts
  1  | exports.DashboardPage = class DashboardPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.chevronRight = page.locator("i.mdi.mdi-chevron-right");
  6  |     this.sndMenu = page.locator("div").filter({ hasText: /^SND$/ }).nth(1);
  7  |     this.orderMenu = page
  8  |       .locator("div")
  9  |       .filter({ hasText: /^Order$/ })
  10 |       .nth(1);
  11 |     this.approvalPendingOrder = page.getByRole("link", {
  12 |       name: "Approval Pending Order",
  13 |     });
  14 |     // PI
  15 |     this.piMenu = page.locator("div").filter({ hasText: /^PI$/ }).nth(1);
  16 | 
  17 |     // Picking
  18 |     this.pickingMenu = page
  19 |       .locator("div")
  20 |       .filter({ hasText: /^Picking$/ })
  21 |       .nth(1);
  22 | 
  23 |     this.createLinkPicking = page.getByRole("link", { name: "Create" }).first();
  24 | 
  25 |     // Collection Summary
  26 |     this.createLinkCollectionSummary = page.locator(
  27 |       "//a[@href='/snd/pi/collection-summary-create']//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
  28 |     );
  29 | 
  30 |     this.collectionSummaryMenu = page
  31 |       .locator("div")
  32 |       .filter({ hasText: /^Collection Summary$/ })
  33 |       .nth(1);
  34 | 
  35 |     this.createLinkSummery = page.locator("//a[normalize-space()='Create']");
  36 | 
  37 |     // Usage
> 38 |     this.createLinkSummery.nth(2).click();
     |                                   ^ Error: locator.click: Test ended.
  39 |   }
  40 | 
  41 |   async clickChevronRight() {
  42 |     await this.chevronRight.click();
  43 |   }
  44 | 
  45 |   async clickSND() {
  46 |     await this.sndMenu.click();
  47 |   }
  48 | 
  49 |   async clickOrder() {
  50 |     await this.orderMenu.click();
  51 |   }
  52 | 
  53 |   async clickApprovalPendingOrder() {
  54 |     await this.approvalPendingOrder.click();
  55 |   }
  56 | 
  57 |   async clickPIMenu() {
  58 |     await this.piMenu.click();
  59 |   }
  60 | 
  61 |   async clickCreatePI() {
  62 |     await this.createLinkPI.click();
  63 |   }
  64 | 
  65 |   async clickPickingMenu() {
  66 |     await this.pickingMenu.click();
  67 |   }
  68 | 
  69 |   // Picking
  70 |   async clickCreatePicking() {
  71 |     await this.createLinkPicking.waitFor({ state: "visible" });
  72 |     await this.createLinkPicking.click();
  73 |   }
  74 | 
  75 |   // Collection Summary
  76 |   async clickCollectionSummaryMenu() {
  77 |     await this.collectionSummaryMenu.click();
  78 |   }
  79 | 
  80 |   async clickCreateCollectionSummary() {
  81 |     //await this.createLinkCollectionSummary.waitFor({ state: "visible" });
  82 |     await this.createLinkSummery.click();
  83 |   }
  84 | };
  85 | 
```