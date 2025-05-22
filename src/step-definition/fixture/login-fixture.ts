import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../features/support/custom-world';
import { loginPage } from '../page/pages';

let Loginpage: loginPage;

Given('I go to the admin portal URL', async function (this: CustomWorld) {
  Loginpage = new loginPage(this.page); 
  await Loginpage.gotoPage('https://admin.staging.wymap.com.au/login');
});

When('I enter the valid email', async function () {
  await Loginpage.enterEmail('ptmchi@tma.com.vn'); 
});

// Step: Enter valid password
Then('I enter the valid password', async function () {
  await Loginpage.enterPassword('123456789'); 
});

When('I click the login button', async function () {
  await Loginpage.clickLogin();
});

Then('I login successfully', async function (this: CustomWorld) {
  await this.page!.waitForLoadState('networkidle'); 
  const url = this.page!.url();
  expect(url).toContain('/dashboard'); 
});
