// # TUGAS
// - buat automation test menggunakan appium mocha dan chai pada aplikasi e-commerce mobile dari saucelabs
// - wajib pakai page object model
// - kerjakan pada project tugas sebelumnya dan upload ke github
// - max dikumpulin lusa sebelum pertemuan selanjutnya
// - fitur yg wajib ditest
// + sort produk
// + lihat detail produk dan semua fitur yang ada di detail produk
// + tombol cart dan halaman cart
// ++ buat e2e untuk proses pembelian produk

const setupDriver = require("../utils/setupDriver");
const Sorting = require("../page_objects/Sorting");
const { expect } = require("chai");
const DetailProduk = require("../page_objects/DetailProduk");
const MyCart = require("../page_objects/MyCart");
const LoginPage = require("../page_objects/LoginPage");
const Checkout = require("../page_objects/Checkout");
const Checkout2 = require("../page_objects/Checkout2");

describe("positive", () => {
  /**@type {WebdriverIO.Browser} */ let driver;
  /**@type {DetailProduk} */ let detailProduk;
  /**@type {Sorting} */ let sorting;
  /**@type {MyCart} */ let myCart;
  /**@type {LoginPage} */ let loginPage;
  /**@type {Checkout} */ let checkout;
  /**@type {Checkout2} */ let checkout2;

  before(async () => {
    driver = await setupDriver();
    sorting = new Sorting(driver);
    detailProduk = new DetailProduk(driver);
    myCart = new MyCart(driver);
    loginPage = new LoginPage(driver);
    checkout = new Checkout(driver);
    checkout2 = new Checkout2(driver);
  });

  after(async () => {
    await driver.deleteSession();
  });

  afterEach(async () => {
    await driver.pause(3000);
  });
  describe("Dashboard Page", () => {
    it.only("sort by price ascending", async () => {
      await sorting.clickSorting();
      await sorting.clickAscending();
      // const price1 = await sorting.getTextPrice1();
      // const price2 = await sorting.getTextPrice2();
      // expect(price1).to.satisfy((num) => num < price2);
      driver.pause(1000);
      const text = await driver
        .$('(//android.widget.TextView[@content-desc="store item price"])[1]')
        .getText();

      console.log(text);
      // console.log("text", text);
      // for (i in text) {
      //   console.log("text", i.text);
      // }
    });
    // const textArray = browser.$$(".myElements").map((elem) => elem.getText());

    it("sort by name descending", async function () {
      await sorting.clickSorting();
      await sorting.clickDescending();
      const name1 = await sorting.getText1();
      const name2 = await sorting.getText2();

      expect(name1).to.satisfy((x) => x > name2);
    });
  });
  describe("inventory detail product page", () => {
    it("check detail produk ", async () => {
      await detailProduk.clickFirstItem();
      await driver.pause(2000);
      const text = await detailProduk.getTittlePage();
      expect(text).include("T-Shirt");
    });

    it("review 5 star", async () => {
      await detailProduk.btn5star();
      const text = await detailProduk.getPopup5Star();
      expect(text).include("Close Modal");
      await detailProduk.btnPopup();
    });

    it("valid add button and minus button", async () => {
      await detailProduk.dragScreen();
      await detailProduk.btnPlusCart();
      const text1 = await detailProduk.getNumberPlusMinus();
      expect(text1).equal("2");
      await detailProduk.btnMinCart();
      const text2 = await detailProduk.getNumberPlusMinus();
      expect(text2).equal("1");
    });

    it("check cart button 0 can't add to cart 0 item", async () => {
      await detailProduk.btnMinCart();
      const text = await detailProduk.getTextCartNull();
      expect(text).include("");
    });

    it("check cart button +1 can add to cart 1 item", async () => {
      await detailProduk.btnPlusCart();
      await detailProduk.btnAddCart();
      const text = await detailProduk.getTextCart();
      expect(text).include(1);
      await detailProduk.btnCartLogo();
    });
  });
  describe("checkout Page", () => {
    it("check item", async () => {
      const text = await myCart.getItemName();
      expect(text).include("T-Shirt");
      await myCart.btnCheckout();
    });
    it("fill login", async () => {
      await loginPage.fillLogin("bob@example.com", "10203040");
      await loginPage.btnLogin();
    });
    it("fill valid checkout", async () => {
      await checkout.fillFullname("dede inoen");
      await checkout.fillAddress1("Banjar Asri");
      await checkout.fillAddress2("Nglorog");
      await checkout.dragScreen();
      await checkout.fillCity("Sragen");
      await checkout.fillState("Jawa Tengah");
      await checkout.fillZipCode("14045");
      await checkout.fillCountry("Indonesia");
      await checkout.btnPayment();
    });
    it("fill valid checkout", async () => {
      await checkout2.fillFullname("dede inoen");
      await checkout2.fillCardNumber("123412341234123");
      await checkout2.dragScreen();
      await checkout2.fillExpDate("1234");
      await checkout2.fillSecurityCode("123");
      await checkout2.btnOrder();
    });
    it("checkout validation final", async () => {
      const text = await checkout2.getCo3Title();
      expect(text).include("T-Shirt");
      await checkout2.btnCo3Order();
    });
  });
});
