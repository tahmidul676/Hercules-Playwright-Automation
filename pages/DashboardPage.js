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
    //this.createLink = page.getByRole("link", { name: "Create" });

    // Picking
    this.pickingMenu = page
      .locator("div")
      .filter({ hasText: /^Picking$/ })
      .nth(1);

      this.createLinkPI = page.locator(
      "//span[contains(@class,'_thirdLevelText_m0gtk_861')][normalize-space()='Create']",
    );
    
    this.createLinkPicking = page.locator(
      "//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
    );

    // Collection Summary
    this.createLinkCollectionSummary = page.locator(
      "//a[@href='/snd/pi/collection-summary-create']//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']",
    );
//span[@class='_fourthLevelText_m0gtk_961'][normalize-space()='Create']
    this.collectionSummaryMenu = page
      .locator("div")
      .filter({ hasText: /^Collection Summary$/ })
      .nth(1);
  }

  async clickChevronRight() {
    await this.chevronRight.click();
  }

  async clickSND() {
    await this.sndMenu.click();
  }

  async clickOrder() {
    await this.orderMenu.click();
  }

  async clickApprovalPendingOrder() {
    await this.approvalPendingOrder.click();
  }

  async clickPIMenu() {
    await this.piMenu.click();
  }

  async clickCreatePI() {
    await this.createLinkPI.click();
  }

  async clickPickingMenu() {
    await this.pickingMenu.click();
  }

  // same create as Picking
  async clickCreatePicking() {
await this.createLinkPicking.waitFor({ state: "visible", timeout: 9000 });
  await this.createLinkPicking.click();
}

  async clickCollectionSummaryMenu() {
    await this.collectionSummaryMenu.click();
  }

  async clickCreateCollectionSummary() {
    await this.createLinkCollectionSummary.click();
  }
};
