exports.DashboardPage = class DashboardPage {
  constructor(page) {
    this.page = page;

    this.chevronRight = page.locator("i.mdi.mdi-chevron-right");
    this.sndMenu = page.locator("div").filter({ hasText: /^SND$/ }).nth(1);
    this.orderMenu = page
      .locator("div")
      .filter({ hasText: /^Order$/ })
      .nth(1);
    this.approvalPendingOrder = page.getByRole("link", {
      name: "Approval Pending Order",
    });
    // PI
    this.piMenu = page.locator("div").filter({ hasText: /^PI$/ }).nth(1);

    this.createLinkPI = page.getByRole("link", { name: "Create" }).nth(0);

    // Picking
    this.pickingMenu = page
      .locator("div")
      .filter({ hasText: /^Picking$/ })
      .nth(1);

    this.createLinkPicking = page.getByRole("link", { name: "Create" }).nth(1);

    // Collection Summary
    this.createLinkCollectionSummary = page.locator(
      "//a[@href='/snd/pi/collection-summary-create']//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
    );

    this.collectionSummaryMenu = page
      .locator("div")
      .filter({ hasText: /^Collection Summary$/ })
      .nth(1);

    this.createLinkSummery = page.locator(
      "//a[@href='/snd/pi/collection-summary-create']",
    );
  }

  async clickChevronRight() {
    await this.chevronRight.click();
  }

  async clickSND() {
    await this.sndMenu.click();
  }
  // Order
  async clickOrder() {
    await this.orderMenu.click();
  }

  async clickApprovalPendingOrder() {
    await this.approvalPendingOrder.click();
  }
  // PI
  async clickPIMenu() {
    await this.piMenu.click();
  }

  async clickCreatePI() {
    await this.createLinkPI.waitFor({ state: "visible" });
    await this.createLinkPI.click();
  }
  // Picking
  async clickPickingMenu() {
    await this.pickingMenu.click();
  }

  async clickCreatePicking() {
    await this.createLinkPicking.waitFor({ state: "visible" });
    await this.createLinkPicking.click();
  }

  // Collection Summary
  async clickCollectionSummaryMenu() {
    await this.collectionSummaryMenu.click();
  }

  async clickCreateCollectionSummary() {
    await this.createLinkSummery.waitFor({ state: "visible" });
    await this.createLinkSummery.click();
  }
};
