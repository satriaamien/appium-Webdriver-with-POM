const Page = require("./Page");

class MyCart extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get itemName() {
    return this.driver.$("~product label");
  }
  get checkout() {
    return this.driver.$("~Proceed To Checkout button");
  }

  // page actions
  async getItemName() {
    return await this.itemName.getText();
  }
  async btnCheckout() {
    await this.checkout.click();
  }
}

module.exports = MyCart;
