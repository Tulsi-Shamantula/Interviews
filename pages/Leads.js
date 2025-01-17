import { expect } from "@playwright/test";

class LeadsPage {
  constructor(page) {
    this.page = page;
    this.createleads = page.locator("//button[@aria-label='Create Lead']");

    this.Companyname = page.locator("//input[@data-tabindex='group1-2']");
    this.Lastname = page.locator("//*[@id='Crm_Leads_LASTNAME_LInput']");
    this.emailinput = page.locator("//*[@id='Crm_Leads_EMAIL_LInput']");
    this.fax = page.locator("//*[@id='Crm_Leads_FAX_LInput']");
    this.save = page.locator("//*[@id='crm_create_savebutn']");
    this.Editbutton = page.locator("//*[@id='btn_edit']");

    this.Moreoptions = page.locator("//*[@id='dv_moreBtn']/button");
    this.Delete = page.locator("lyteMenuSelection");
    this.Deleteconfirmation = page.locator(
      "//button[contains(@class,'lyte-button PupHome_button_deletebtn')]//lyte-yield"
    );
    this.filterleads = page.locator(
      "//span[@class='lyteCheckBoxDefault']//span"
    );
    this.checkbox = page.locator("//input[@type='checkbox'] ");
    this.leadnamecheckbox = page.locator(
      "//span[@class='lyteCheckBoxDefault']"
    );
    this.leadnamedropdown = page.locator(
      "//div[@aria-activedescendant='Lyte_Drop_Item_186']//span[1]"
    );
    this.leadnamecontains = page.locator(
      "(//lyte-drop-body[@id='Lyte_Drop_Body_35']//lyte-drop-item)[3]"
    );
    this.leadnametextbox = page.locator(
      "(//div[contains(@class,'lyteField ltIconShow')]//input)[1]"
    );
    this.applyfilter = page.locator(
      "//lyte-yield[normalize-space(text())='Apply Filter']"
    );
    this.leadnameverification = page.locator(
      "//lyte-text[@class='wfrepTextMaxWidth accessibility-route-elem']"
    );
    this.moreOptions = page.locator(
      "//button[contains(@class,'lyte-button dv_moreBtn')]"
    );
    this.deleteleads = page.locator("//lyte-menu-item[@data-zcqa='delete']");
    this.deleteconfirmation = page.locator(
      "//button[contains(@class,'lyte-button PupHome_button_deletebtn')]"
    );
    this.sidebar = page.locator('//div[@id="moduleId_Leads"]');
    this.emailInput = page.locator("//lyte-input[@id='id_Email']//div//input")
    this.applyfilter = page.locator("//button[@type='submit']")
    this.emailRecords = page.locator("//lyte-exptable-td[contains(@class,'sort lv_data_email cellWrap')]")
    this.leadnames = page.locator("//lyte-exptable-td[@aria-label='Lead Name All']")
  }

  async validatecreateleads() {
    await this.page.waitForTimeout(3000);
    await this.createleads.click();
  }

  async enterlastname(lastname) {
    await this.Lastname.fill(lastname);
  }

  async entercompanyname(companyname) {
    await this.Companyname.fill(companyname);
  }

  async enteremail(email) {
    await this.emailinput.fill(email);
  }

  async saveleads() {
    await this.save.click();
  }

  async editleads() {
    await this.Editbutton.click();
  }

  async editcompanyname(updatedCompany) {
    await this.Companyname.fill(updatedCompany);
    await this.saveleads();
  }
  async moreOptionsMethod() {
    await this.moreOptions.click();
  }
  async deleteleadsMethod() {
    //await this.page.waitForTimeout(3000)
    await this.deleteleads.click();
  }
  async deleteconfirmationMethod() {
    //await this.page.waitForTimeout(3000)
    await this.deleteconfirmation.click();
  }
  async filterleadsMethod(leadname, email) {
    await this.page.waitForTimeout(3000)
    await this.sidebar.click();
    await this.page.waitForTimeout(6000)
    const filterText = await this.filterleads.all();
    const checkboxAll = await this.checkbox.all();
    for (let i = 0; i < filterText.length; i++) {
      const text = await filterText[i].textContent();
      if (text.trim() === leadname.trim()) {
        console.log(`Match found ${text}`);

        await filterText[i].click();
        console.log("filtertext clicked");

        break;
      }
    }
    await this.emailInput.fill(email);
    await this.applyfilter.click();
  }

  async selectLeadByEmail(email) {
    const emailList = await this.emailRecords.all(); 
    const leadNameList = await this.leadnames.all();
  
    for (let i = 0; i < emailList.length; i++) {
      const emailText = await emailList[i].textContent(); 
      if (emailText.trim() === email.trim()) {
        console.log(`Match found for email: ${emailText}`);
        const leadName = await this.leadnames.nth(i);
        if (leadName) {
          await leadName.click();
          console.log("Lead name clicked");
        } else {
          console.error(`No matching lead name for email: ${emailText}`);
        }
        break;
      } else {
        console.log(`No match found for email: ${emailText}`);
      }
    }
  }
  
}

export default LeadsPage;
