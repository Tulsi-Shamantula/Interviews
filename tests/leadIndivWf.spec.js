import { test, expect } from "@playwright/test";
import { baseUrl } from "../config";
import HomePage from "../pages/HomePage";
import LeadsPage from "../pages/Leads";
import LoginPage from "../pages/Login";

const credentials = {
  username: "maddyvenky21@gmail.com",
  password: "Crm@1421",
};
test.describe.serial('Lead Management Suite', () => {
  let leadsPage;
  let homePage;
  let loginPage;

  test.beforeAll(async ({ browser }) => {
    // Create a single browser context shared across all tests
    const context = await browser.newContext();
    const page = await context.newPage();

    // Initialize page objects
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    leadsPage = new LeadsPage(page);

    // Login once and preserve session
    await homePage.goto(baseUrl);
    await loginPage.login(credentials.username, credentials.password);

    console.log('User logged in successfully');
  });

  test('Create Leads', async () => {
    await leadsPage.validatecreateleads();
    await leadsPage.entercompanyname("KDSI");
    await leadsPage.enterlastname("Shamantula");
    await leadsPage.enteremail("randomname123@xyz.com");
    await leadsPage.saveleads();

    console.log("Lead successfully created");
  });

  test('Edit Leads', async () => {
    await leadsPage.editleads();
    await leadsPage.editcompanyname("KDSI Digital");

    console.log("Lead successfully edited");
  });

  test('Filter and Select Leads', async () => {
    await leadsPage.filterleadsMethod("Email", "randomname123@xyz.com");
    await leadsPage.selectLeadByEmail("randomname123@xyz.com");

    console.log("Lead successfully filtered and selected");
  });

  test('Delete Leads', async () => {
    await leadsPage.moreOptionsMethod();
    await leadsPage.deleteleadsMethod();
    await leadsPage.deleteconfirmationMethod();

    console.log("Lead successfully deleted");
  });

  test.afterAll(async () => {
    console.log("All tests completed successfully");
  });

  

});
