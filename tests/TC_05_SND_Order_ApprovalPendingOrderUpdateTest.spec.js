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
  await orderPage.selectCheckboxByOrderIdUpdateClick(appPendingData.orderId);
  await expect(page).toHaveURL(/\/snd\/orders\/update/);
  

  // ==================== UPDATE ORDER ====================
  console.log(`📋 Processing Order: ${appPendingData.orderId[0]}`);

  // Capture verified quantities from the update method directly
  const verifiedProducts = await orderPage.updateOrderWithJson(appPendingData);

  // ==================== ASSERT WRITTEN VALUES ====================
  // Values were verified in DOM before clicking save — assert them here
  console.log("🔎 Asserting pre-save DOM verified quantities...");
  for (const product of appPendingData.products) {
    const verified = verifiedProducts.find((p) => p.code === product.code);
    if (verified) {
      expect(verified.writtenValue).toBe(String(product.quantity));
      console.log(`✅ Confirmed ${product.code}: ${verified.writtenValue}`);
    } else {
      console.warn(`⚠️ ${product.code} was not found/updated in the table`);
    }
  }

  // ==================== ASSERT FINAL URL ====================
  await expect(page).toHaveURL(/\/snd\/orders\/approval-pending/, { timeout: 15000 });
  console.log("✅ Returned to Approval Pending list");

  console.log("🎉 Test Completed Successfully!");
});
