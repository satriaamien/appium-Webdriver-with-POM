const { remote } = require("webdriverio");
const Page = require("./Page");

class DetailProduk extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get clickFirstProduct() {
    return this.driver.$(
      '(//android.view.ViewGroup[@content-desc="store item"])[1]'
    );
  }
  get tittlePage() {
    return this.driver.$(".android.widget.TextView");
  }
  get numberPlusMinus() {
    return this.driver.$(
      '//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView'
    );
  }
  get addCart() {
    return this.driver.$("~Add To Cart button");
  }
  get plusCart() {
    return this.driver.$("~counter plus button");
  }
  get minCart() {
    return this.driver.$(
      '//android.view.ViewGroup[@content-desc="counter minus button"]/android.widget.ImageView'
    );
  }
  get review5star() {
    return this.driver.$("~review star 5");
  }
  get popup5Star() {
    return this.driver.$(
      '//android.view.ViewGroup[@content-desc="Close Modal button"]/android.widget.TextView'
    );
  }
  get clickPopup() {
    return this.driver.$("~Close Modal button");
  }
  get cartLogoText() {
    return this.driver.$(
      '//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView'
    );
  }

  get cartLogoTextNull() {
    return this.driver.$("~cart badge");
  }

  // page actions
  async clickFirstItem() {
    await this.clickFirstProduct.click();
  }
  async getTittlePage() {
    const text = await this.tittlePage;
    await text.waitForExist({ timeout: 10000 });
    return await text.getText();
  }
  async btn5star() {
    await this.review5star.click();
  }
  async getPopup5Star() {
    return await this.popup5Star.getText();
  }
  async btnPopup() {
    return await this.clickPopup.click();
  }
  async dragScreen() {
    await this.driver.touchPerform([
      { action: "press", options: { x: 329, y: 869 } },
      { action: "wait", options: { ms: 500 } },
      { action: "moveTo", options: { x: 344, y: 204 } },
      { action: "release" },
    ]);
  }
  async getNumberPlusMinus() {
    return await this.numberPlusMinus.getText();
  }
  async btnAddCart() {
    await this.addCart.click();
  }
  async btnMinCart() {
    await this.minCart.click();
  }
  async btnPlusCart() {
    await this.plusCart.click();
  }
  async getTextCartNull() {
    return await this.cartLogoTextNull.getText();
  }
  async getTextCart() {
    return await this.cartLogoText.getText();
  }
  async btnCartLogo() {
    return await this.cartLogoText.click();
  }
}

module.exports = DetailProduk;
