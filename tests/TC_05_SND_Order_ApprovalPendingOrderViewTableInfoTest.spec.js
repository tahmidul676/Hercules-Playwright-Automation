import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrderPage } from "../pages/OrderPage";
import loginData from "../testData/loginData.json";
import approvalPendingOrder from "../testData/approvalPendingOrder.json";
import { DashboardPage } from "../pages/DashboardPage";

test("TC_05_SND_Order_ApprovalPendingOrderTest", async ({ page }) => {
  // Login Page
  const loginPage = new LoginPage(page);
  const data = loginData[0];
  await loginPage.gotoLoginPage(data.url);
  await loginPage.login(data.userMobileNumberInput, data.password);
  await expect(page.locator(".Toastify__toast-body")).toHaveText(
    "successfully logged in",
  );

  // Dashboard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickChevronRight();
  await dashboardPage.clickSND();
  await dashboardPage.clickOrder();
  await dashboardPage.clickApprovalPendingOrder();
  await expect(page).toHaveURL(/\/snd\/orders\/approval-pending/);

  // Order Page
  const orderPage = new OrderPage(page);
  const appPendingData = approvalPendingOrder[0];

  await orderPage.selectBranch(appPendingData.branch);
  await orderPage.selectRoute(appPendingData.route);
  await orderPage.selectRetailer(appPendingData.retailer);
  await orderPage.clickSubmit();
  await orderPage.clickFilter();
  //await orderPage.selectCheckboxByOrderId(appPendingData.orderId);
  await orderPage.selectCheckboxByOrderIdViewClick(appPendingData.orderId);
  await expect(page).toHaveURL(/\/snd\/orders\/details/);
  /*
const tableData = await orderPage.getFullProductTableData();

  console.log("Products:", tableData.products);
  console.log("Summary:", tableData.summary);

  // Assertions
  expect(tableData.products).toHaveLength(3);
  expect(tableData.summary.netPayable).toBe(1380);
  expect(tableData.summary.netPayableInWords).toContain("One Thousand Three Hundred Eighty");

  // Optional: Validate individual items
  const firstItem = tableData.products[0];
  expect(firstItem.code).toBe("SKC01");
  expect(firstItem.code).toBe("SKU00013");
  expect(firstItem.quantity).toBe(2);

  */
 const tableData = await orderPage.getFullProductTableData();

// ── Row count ─────────────────────────────────────────────────────────────
expect(tableData.products).toHaveLength(3);

// ── Summary (values from actual HTML) ────────────────────────────────────
expect(tableData.summary.grossTotal).toBe(2490);
expect(tableData.summary.netPayable).toBe(2540);        // 2490 + 50 adjustment
expect(tableData.summary.netPayableInWords).toContain("Two Thousand Five Hundred Forty");

// ── Products ──────────────────────────────────────────────────────────────
const [first, second, third] = tableData.products;

expect(first.code).toBe("SKC01");
expect(first.description).toBe("Electrolyte Sports Drinks Orange");
expect(first.quantity).toBe(3);
expect(first.totalTP).toBe(900);
expect(first.netValue).toBe(900);

expect(second.code).toBe("SKU00013");
expect(second.description).toBe("Esonaaf 20 mg Capsule");
expect(second.quantity).toBe(3);
expect(second.totalTP).toBe(300);

expect(third.code).toBe("SKU00017");
expect(third.description).toBe("Mancer 75 WP");
expect(third.quantity).toBe(3);
expect(third.totalTP).toBe(1290);
expect(third.netValue).toBe(1290);
});
