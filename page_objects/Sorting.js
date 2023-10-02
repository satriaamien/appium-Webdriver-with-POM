const Page = require("./Page");

class Sorting extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get clickLogoSorting() {
    return this.driver.$("~sort button");
  }
  get ascendingButton() {
    return this.driver.$('//android.view.ViewGroup[@content-desc="priceAsc"]');
  }
  get descendingButton() {
    return this.driver.$('//android.view.ViewGroup[@content-desc="nameDesc"]');
  }
  get textPrice1() {
    return this.driver.$(
      '(//android.widget.TextView[@content-desc="store item price"])[1]'
    );
  }
  get textPrice2() {
    return this.driver.$(
      '(//android.widget.TextView[@content-desc="store item price"])[2]'
    );
  }
  get text1() {
    return this.driver.$(
      '(//android.widget.TextView[@content-desc="store item text"])[1]'
    );
  }
  get text2() {
    return this.driver.$(
      '(//android.widget.TextView[@content-desc="store item text"])[2]'
    );
  }

  // page actions
  async clickSorting() {
    await this.clickLogoSorting.click();
  }
  async clickAscending() {
    await this.ascendingButton.click();
  }
  async clickDescending() {
    await this.descendingButton.click();
  }
  async getTextPrice1() {
    return await this.textPrice1.getText();
  }
  async getTextPrice2() {
    return await this.textPrice2.getText();
  }
  async getText1() {
    return await this.text1.getText();
  }
  async getText2() {
    return await this.text2.getText();
  }
}

module.exports = Sorting;
