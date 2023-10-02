const Page = require("./Page");

class LoginPage extends Page {
  // initialization
  constructor(driver) {
    super(driver);
  }

  // element locators
  get username() {
    return this.driver.$("~Username input field");
  }
  get password() {
    return this.driver.$("~Password input field");
  }
  get login() {
    return this.driver.$("~Login button");
  }
  // page actions
  async fillLogin(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
  }
  async btnLogin() {
    await this.login.click();
  }
}

module.exports = LoginPage;
