const Page = require("./Page");

class Checkout2 extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get fullname() {
    return this.driver.$("~Full Name* input field");
  }
  get cardNumber() {
    return this.driver.$("~Card Number* input field");
  }
  get expDate() {
    return this.driver.$("~Expiration Date* input field");
  }
  get securityCode() {
    return this.driver.$("~Security Code* input field");
  }
  get clickOrder() {
    return this.driver.$("~Review Order button");
  }
  get co3title() {
    return this.driver.$("~product label");
  }
  get clickCo3Order() {
    return this.driver.$("~Place Order button");
  }

  // page actions
  async fillFullname(name) {
    await this.fullname.setValue(name);
  }
  async fillCardNumber(card) {
    await this.cardNumber.setValue(card);
  }
  async fillExpDate(exp) {
    await this.expDate.setValue(exp);
  }
  async fillSecurityCode(code) {
    await this.securityCode.setValue(code);
  }
  async btnOrder() {
    await this.clickOrder.click();
  }
  async dragScreen() {
    await this.driver.touchPerform([
      { action: "press", options: { x: 329, y: 869 } },
      { action: "wait", options: { ms: 500 } },
      { action: "moveTo", options: { x: 344, y: 204 } },
      { action: "release" },
    ]);
  }

  async getCo3Title() {
    return await this.co3title.getText();
  }
  async btnCo3Order() {
    await this.clickCo3Order.click();
  }
}

module.exports = Checkout2;
