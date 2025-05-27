import { Page, Locator } from '@playwright/test';
import { getSelector } from '../../mapping/element-utils';

export class AdminPortal {
  readonly page: Page;

  readonly eleEmail: Locator;
  readonly elePassword: Locator;
  readonly eleLoginBtn: Locator;

  readonly eleJobPageDropdown: Locator;
  readonly eleJobsPage: Locator;
  readonly eleCreateJobBigBtn: Locator;
  readonly eleCityDropdown: Locator;
  readonly eleJobTypeDropdown: Locator;
  readonly eleRequesterName: Locator;
  readonly eleCustomerDropdown: Locator;
  readonly eleCargoTypeDropdown: Locator;
  readonly eleDriverDropdown: Locator;
  readonly eleCTODropdown: Locator;
  readonly elePickupDropdown: Locator;
  readonly eleDropoffDropdown: Locator;
  readonly elePreloadChargeCheckbox: Locator;
  readonly eleJobDescription: Locator;
  readonly eleCreateJobSmallBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.eleEmail = page.locator(getSelector('login', 'email'));
    this.elePassword = page.locator(getSelector('login', 'password'));
    this.eleLoginBtn = page.locator(getSelector('login', 'loginButton'));

    this.eleJobPageDropdown = page.locator(getSelector('createlocaljob', 'JobPageDropdown')); 
    this.eleJobsPage = page.locator(getSelector('createlocaljob', 'jobPage'));
    this.eleCreateJobBigBtn = page.locator(getSelector('createlocaljob', 'createJobBigBtn'));
    this.eleCityDropdown = page.locator(getSelector('createlocaljob', 'cityDropdown'));
    this.eleJobTypeDropdown = page.locator(getSelector('createlocaljob', 'jobtypeDropdown'));
    this.eleRequesterName = page.locator(getSelector('createlocaljob', 'requesterName'));
    this.eleCustomerDropdown = page.locator(getSelector('createlocaljob', 'customerName'));
    this.eleCargoTypeDropdown = page.locator(getSelector('createlocaljob', 'cargoType'));
    this.eleDriverDropdown = page.locator(getSelector('createlocaljob', 'driverName'));
    this.eleCTODropdown = page.locator(getSelector('createlocaljob', 'CTO'));
    this.elePickupDropdown = page.locator(getSelector('createlocaljob', 'pickup'));
    this.eleDropoffDropdown = page.locator(getSelector('createlocaljob', 'dropoff'));
    this.elePreloadChargeCheckbox = page.locator(getSelector('createlocaljob', 'pre-loadCharge1'));
    this.eleJobDescription = page.locator(getSelector('createlocaljob', 'jobdes1'));
    this.eleCreateJobSmallBtn = page.locator(getSelector('createlocaljob', 'createJobSmallBtn'));
  }

  async gotoPage(url: string) {
    await this.page.goto(url);
  }

  async login(email: string, password: string) {
    await this.eleEmail.fill(email);
    await this.elePassword.fill(password);
    await this.eleLoginBtn.click();
  }

  async selectCity(city: string) {
    await this.eleCityDropdown.click();
    await this.page.getByText(city, { exact: true }).click();
  }

  async selectJobType(type: string) {
    await this.eleJobTypeDropdown.click();
    await this.page.getByText(type, { exact: true }).click();
  }

  async fillRequesterName(name: string) {
    await this.eleRequesterName.fill(name);
  }

  async selectCustomer(customer: string) {
    await this.eleCustomerDropdown.click();
    await this.page.getByText(customer, { exact: true }).click();
  }

  async selectCargoType(cargo: string) {
    await this.eleCargoTypeDropdown.click();
    await this.page.getByText(cargo, { exact: true }).click();
  }

  async selectDriver(driver: string) {
    await this.eleDriverDropdown.click();
    await this.page.getByText(driver, { exact: true }).click();
  }

  async selectCTO(cto: string) {
    await this.eleCTODropdown.click();
    await this.page.getByText(cto, { exact: true }).click();
  }

  async selectPickup(pickup: string) {
    await this.elePickupDropdown.click();
    await this.page.getByText(pickup, { exact: true }).click();
  }

  async selectDropoff(dropoff: string) {
    await this.eleDropoffDropdown.click();
    await this.page.getByText(dropoff, { exact: true }).click();
  }

  async checkPreloadCharge() {
    await this.elePreloadChargeCheckbox.check();
  }

  async fillJobDescription(desc: string) {
    await this.eleJobDescription.fill(desc);
  }

  async clickCreateJob() {
    await this.eleCreateJobSmallBtn.click();
  }
}
