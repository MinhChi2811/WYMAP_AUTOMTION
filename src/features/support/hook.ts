// // src/features/support/hook.ts
// import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
// import { chromium, Browser, Page } from '@playwright/test';
// import { CustomWorld } from './custom-world';
// import { setDefaultTimeout, Status } from '@cucumber/cucumber';
// import fs from 'fs';
// import path from 'path';
// import mapping from '../../mapping/mapping.json';
 
// setDefaultTimeout(60 * 1000); // 60s
 
// let browser: Browser;
// const sessionPath = path.resolve('auth/session.json');
 
// BeforeAll(async () => {
//   browser = await chromium.launch({
//     headless: false,
//     args: ['--start-maximized'],
//   });
 
//   // Only login if session doesn't exist
//   if (!fs.existsSync(sessionPath)) {
//     const context = await browser.newContext({ viewport: null });
//     const page: Page = await context.newPage();
 
//     console.log('🔑 Logging in once to create session...');
 
//     await page.goto('https://admin.staging.wymap.com.au/login');
//     await page.locator(mapping.login.email).fill('ptmchi@tma.com.vn')
//     await page.locator(mapping.login.password).fill('123456789');      
//     await page.locator(mapping.login.loginButton).click();
//     await page.waitForSelector('text=Dashboard', { timeout: 15000 });
 
//     await context.storageState({ path: sessionPath });
//     await context.close();
 
//     console.log('✅ Session stored for reuse.');
//   }
// });
 
// Before(async function (this: CustomWorld) {
//   const context = await browser.newContext({
//      viewport: null,
//      storageState: sessionPath,
//   });
//   const page = await context.newPage();
 
//   this.context = context;
//   this.page = page;
// });
 
// // Before(async function (this: CustomWorld) {
// //   this.browser = browser;
// //   console.log('🔁 Reusing login session');
 
// //   this.context = await browser.newContext({
// //     viewport: null,
// //     storageState: sessionPath,
// //   });
 
// //   this.page = await this.context.newPage();
// // });
 
// After(async function (this: CustomWorld, scenario) {
//   if (scenario.result?.status === Status.FAILED) {
//     const screenshot = await this.page?.screenshot({
//       path: `report/screenshots/${scenario.pickle.name}.png`,
//       fullPage: true,
//     });
//     this.attach(screenshot, 'image/png');
//   }
 
//   await this.context?.close();
// });
 
// AfterAll(async () => {
//   await browser?.close();
// });
 
import { BeforeAll, AfterAll, Before, After, IWorld } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './custom-world';
import { setDefaultTimeout, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
 
setDefaultTimeout(60 * 1000); // 60s
 
let browser: Browser;
 
BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized'],
  });
});
 
Before(async function (this: CustomWorld) {
  this.browser = browser;
  console.log('✅ Reusing login session');
 
  // Reuse session if storage state exists
  const sessionPath = path.resolve('auth/session.json');
  // if (fs.existsSync(sessionPath)) {
  //   fs.unlinkSync(sessionPath);
  // }
  this.context = await this.browser.newContext({
    viewport: null,
    storageState: fs.existsSync(sessionPath) ? sessionPath : undefined,
  });
 
  this.page = await this.context.newPage();
});
 
After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page?.screenshot({
      path: `report/screenshots/${scenario.pickle.name}.png`,
      fullPage: true,
    });
    this.attach(screenshot, 'image/png');
  }
 
  await this.context?.close();
});
 
AfterAll(async () => {
  await browser?.close();
});
