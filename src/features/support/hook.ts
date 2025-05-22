// src/features/support/hook.ts
import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './custom-world'; 
import { setDefaultTimeout } from '@cucumber/cucumber';
import { Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

setDefaultTimeout(60 * 1000); // 60s

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });
});

Before(async function (this: CustomWorld) {
  this.browser = browser;
  this.context = await this.browser.newContext({
    viewport: null
  });

  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page?.screenshot({ path: `report/screenshots/${scenario.pickle.name}.png`, fullPage: true });
    this.attach(screenshot, 'image/png');
  }

  await this.context?.close();
});

// After(async function (this: CustomWorld, scenario) {
//   if (scenario.result?.status === 'FAILED') {
//     const screenshot = await this.page?.screenshot({ path: `screenshots/${scenario.pickle.name}.png`, fullPage: true });
//     console.log(`\n🚨 Scenario failed: ${scenario.pickle.name}`);
//     console.log(`🖼 Screenshot saved: screenshots/${scenario.pickle.name}.png`);
//   }
//   await this.context?.close();
// });

AfterAll(async () => {
  await browser?.close();
});
