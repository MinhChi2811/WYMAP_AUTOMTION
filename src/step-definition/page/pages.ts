import { Page, Locator } from '@playwright/test';
import { url } from 'inspector';
 
export class loginPage {
 
  //login
  readonly page: Page;
  readonly eleEmail: Locator;
  readonly elePassword: Locator;
  readonly eleLoginBtn: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    //login
    this.eleEmail = page.locator('//*[@id="email"]');
    this.elePassword = page.locator('//*[@id="password"]');
    this.eleLoginBtn = page.locator("//span[normalize-space(text())='Login']");
  }
 
  public async gotoPage(url: string): Promise<void> {
    await this.page.goto(url, { timeout: 60000 });
  }
 
  public async enterEmail(email: string): Promise<void> {
    await this.eleEmail.fill(email);
  }
 
  public async enterPassword(password: string): Promise<void> {
    await this.elePassword.fill(password);
  }
 
  public async clickLogin(): Promise<void> {
    await this.eleLoginBtn.click();
  }
  public async login(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
 