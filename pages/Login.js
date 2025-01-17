
import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginpage = page.locator(
      "//input[@id='login_id']"
    );
    this.password = page.locator("//input[@id='password']");
    this.nextBtn = page.locator("//button[@id='nextbtn']")
    this.homeSigin = page.locator("//div[@id='header']//div[@class='zgh-accounts']//a[@class='zgh-login']")
    this.signin = page.locator("//button[@id='nextbtn']");
    this.skipbutton = page.locator("//form[@name='confirm_form1']//div//button");

  }

  async login(username, pass) {
    await this.homeSigin.click();
    await this.loginpage.fill(username);
    await this.nextBtn.click();
    await this.password.fill(pass);
    await this.signin.click();
    await this.skipbutton.click();
  }

}
  

export default LoginPage;
