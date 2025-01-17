import { test, expect } from "@playwright/test";
import { baseUrl } from "../config";
import HomePage from "../pages/HomePage";
import LeadsPage from "../pages/Leads";
import LoginPage from "../pages/Login";

const credentials = {
  username: "maddyvenky21@gmail.com",
  password: "Crm@1421",
};

test('Complete Lead Management Workflow', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const leadsPage = new LeadsPage(page);

  await homePage.goto(baseUrl);
  await loginPage.login(credentials.username, credentials.password);

  // Create lead
  await leadsPage.validatecreateleads();
  await leadsPage.entercompanyname("KDSI");
  await leadsPage.enterlastname("Shamantula");
  await leadsPage.enteremail("randomname123@xyz.com");
  await leadsPage.saveleads();

  // Edit lead
  await leadsPage.editleads();
  await leadsPage.editcompanyname("KDSI Digital");

  // Filter and select lead
  await leadsPage.filterleadsMethod("Email", "randomname123@xyz.com");
  await leadsPage.selectLeadByEmail("randomname123@xyz.com");

  // Delete lead
  await leadsPage.moreOptionsMethod();
  await leadsPage.deleteleadsMethod();
  await leadsPage.deleteconfirmationMethod();

  console.log("Complete workflow executed successfully");
});
