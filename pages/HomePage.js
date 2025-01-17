import { expect } from "@playwright/test";

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

}

export default HomePage;
