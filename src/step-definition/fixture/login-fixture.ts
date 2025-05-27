import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../features/support/custom-world';
import { getSelector } from '../../mapping/element-utils';

let Loginpage: any;

// Given('I go to the dashboard page', async function (this: CustomWorld) {
//   Loginpage = this.page;
//   await Loginpage.goto('https://admin.staging.wymap.com.au/dashboard');
// });

Given('I go to the login page', async function (this: CustomWorld) {
  Loginpage = this.page;
  await Loginpage.goto('https://admin.staging.wymap.com.au/login');
});

When('I enter the email {string}', async function (this: CustomWorld, email: string) {
  const emailSelector = getSelector('login', 'email');
  await Loginpage.fill(emailSelector, email, {timeout: 5000});
});

When('I enter the password {string}', async function (this: CustomWorld, password: string) {
  const passwordSelector = getSelector('login', 'password');
  await Loginpage.fill(passwordSelector, password, {timeout: 5000});
});

When('I click the login button', async function (this: CustomWorld) {
  const buttonSelector = getSelector('login', 'loginButton');
  await Loginpage.click(buttonSelector, {timeout: 5000});
});

Then('I login successfully', async function (this: CustomWorld) {
  const dashboardSelector = "(//a[normalize-space()='Dashboard'])[1]"; 
  await this.page.waitForSelector(dashboardSelector, { timeout: 30000 });
  const isVisible = await this.page.isVisible(dashboardSelector);
  expect(isVisible).toBe(true);
});



