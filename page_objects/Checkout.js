class Checkout {
  // initialization
  constructor(driver) {
    this.driver = driver;
  }

  // element locators
  get fullname() {
    return this.driver.$("~Full Name* input field");
  }
  get address1() {
    return this.driver.$("~Address Line 1* input field");
  }
  get address2() {
    return this.driver.$("~Address Line 2 input field");
  }
  get city() {
    return this.driver.$("~City* input field");
  }
  get state() {
    return this.driver.$("~State/Region input field");
  }
  get zipCode() {
    return this.driver.$("~Zip Code* input field");
  }
  get country() {
    return this.driver.$("~Country* input field");
  }
  get clickPayment() {
    return this.driver.$("~To Payment button");
  }

  async fillFullname(name) {
    await this.fullname.setValue(name);
  }
  async fillAddress1(address) {
    await this.address1.setValue(address);
  }
  async fillAddress2(address) {
    await this.address2.setValue(address);
  }
  async fillCity(city) {
    await this.city.setValue(city);
  }
  async fillState(state) {
    await this.state.setValue(state);
  }
  async fillZipCode(zip) {
    await this.zipCode.setValue(zip);
  }
  async fillCountry(country) {
    await this.country.setValue(country);
  }
  async btnPayment() {
    await this.clickPayment.click();
  }
  async dragScreen() {
    await this.driver.touchPerform([
      { action: "press", options: { x: 329, y: 869 } },
      { action: "wait", options: { ms: 500 } },
      { action: "moveTo", options: { x: 344, y: 204 } },
      { action: "release" },
    ]);
  }
}

module.exports = Checkout;
