// global-setup.ts
import { chromium } from 'playwright';
import fs from 'fs';

async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const context= await browser.newContext ();
  await page.goto('https://admin.staging.wymap.com.au/login');

  await page.fill('input[type="email"]', 'ptmchi@tma.com.vn');
  await page.fill('input[type="password"]', '123456789');
  await page.click('button:has-text("Login")');

  await page.waitForSelector('text=Dashboard', { timeout: 15000 });

  await page.context().storageState({ path: 'auth.json' });
  await context.storageState({ path: 'auth/session.json' });

  await browser.close();
}

export default globalSetup;
 