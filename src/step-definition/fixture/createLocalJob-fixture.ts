// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';
// import { CustomWorld } from '../../features/support/custom-world';
// import { cargoTypes, jobTypes, pickupAddresses, dropoffAddresses } from '../../testdata/randomJobData';
// import { getSelector } from '../../mapping/element-utils';
// import { AdminPortal } from './../page/pages';
 
// let jobData: {
//   city: string;
//   type: string;
//   requester: string;
//   customer: string;
//   cargoType: string;
//   driver: string;
//   cto: string;
//  // pickup: string;
//   dropoff: string;
//   description: string;
// };
 
// // Given ('I select the Jobs dropdown', async function (this: CustomWorld){
// //     const admin = new AdminPortal(this.page);
// //   await admin.eleJobPageDropdown.click();
// // })
// // // )
// // When('I go to the Jobs list page', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   await admin.eleJobsPage.selectOption("Job");
// // });
 
// // When('I click the Create Job big button', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   await admin.eleCreateJobBigBtn.click();
// // });
 
// // Then('I select the city', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   jobData = {
// //     city: 'Sydney',
// //     type: 'Import',
// //     requester: 'Automation Tester',
// //     customer: '',
// //     cargoType: '',
// //     driver: '',
// //     cto: '',
// //    // pickup: 'null',
// //     dropoff: '',
// //     description: 'Local job created by automation',
// //   };
// //   await admin.eleCityDropdown.click();
// //   await this.page.getByText(jobData.city, { exact: true }).click();
// // });
 
// // When('I select the type', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   jobData.type = jobTypes[Math.floor(Math.random() * jobTypes.length)];
// //   await admin.eleJobTypeDropdown.click();
// //   await this.page.getByText(jobData.type, { exact: true }).click();
// // });
 
// // Then('I enter the Requester Name', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   await admin.eleRequesterName.fill(jobData.requester);
// // });
 
// // When('I select the customer', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   const customers = require('../../test-data/randomJobData').default[jobData.city].customer;
// //   jobData.customer = customers[Math.floor(Math.random() * customers.length)];
// //   await admin.eleCustomerDropdown.click();
// //   await this.page.getByText(jobData.customer, { exact: true }).click();
// // });
 
// // Then('I select the cargo type', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   jobData.cargoType = cargoTypes[Math.floor(Math.random() * cargoTypes.length)];
// //   await admin.eleCargoTypeDropdown.click();
// //   await this.page.getByText(jobData.cargoType, { exact: true }).click();
// // });
 
// // When('I select the driver name', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   const drivers = require('../../test-data/randomJobData').default[jobData.city].driver;
// //   jobData.driver = drivers[Math.floor(Math.random() * drivers.length)];
// //   await admin.eleDriverDropdown.click();
// //   await this.page.getByText(jobData.driver, { exact: true }).click();
// // });
 
// // Then('I select the CTO', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   const ctos = require('../../test-data/randomJobData').default[jobData.city].cto;
// //   jobData.cto = ctos[Math.floor(Math.random() * ctos.length)];
// //   await admin.eleCTODropdown.click();
// //   await this.page.getByText(jobData.cto, { exact: true }).click();
// // });
 
// // // When('I select the pick up location', async function (this: CustomWorld) {
// // //   const admin = new AdminPortal(this.page);
// // //   jobData.pickup = pickupAddresses[Math.floor(Math.random() * pickupAddresses.length)];
// // //   await admin.elePickupDropdown.click();
// // //   await this.page.getByText(jobData.pickup, { exact: true }).click();
// // // });
 
// // Then('I select the drop off location', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   jobData.dropoff = dropoffAddresses[Math.floor(Math.random() * dropoffAddresses.length)];
// //   await admin.eleDropoffDropdown.click();
// //   await this.page.getByText(jobData.dropoff, { exact: true }).click();
// // });
 
// // When('I click the pre-load charge checkbox', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   await admin.elePreloadChargeCheckbox.check();
// // });
 
// // Then('I fill the job description', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   await admin.eleJobDescription.fill(jobData.description);
// // });
 
// // When('I click the Create Job small button', async function (this: CustomWorld) {
// //   const admin = new AdminPortal(this.page);
// //   await admin.eleCreateJobSmallBtn.click();
// // });
 
// // Then('I can see a new job has created successfully', async function (this: CustomWorld) {
// //   const successToast = this.page.getByText('Job created successfully', { exact: false });
// //   await expect(successToast).toBeVisible();
// // });