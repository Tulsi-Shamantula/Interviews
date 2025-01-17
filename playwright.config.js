// playwright.config.js
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  timeout: 60000, // 60 seconds
  retries: 0, // Retry on failure
  testDir: "./tests", // Directory containing test files
  fullyParallel: !true,
  reporter: "html",
  use: {
    headless: false, // Run tests in headless mode
    ignoreHTTPSErrors: true,
    video: "on-first-retry", // Record video only when retrying a test for the first time
  },
  projects: [
    // {
    //   name: "Google Chrome",
    //   use: {
    //     browserName: "chromium",
    //     channel: "chrome", // Use the Chrome browser
    //     viewport: { width: 1280, height: 720 },
    //   },
    // },
    // {
    //   name: "Mozilla Firefox",
    //   use: {
    //     browserName: "firefox",
    //     viewport: { width: 1280, height: 720 },
    //   },
    // },
    {
      name: "Microsoft Edge",
      use: {
        browserName: "chromium",
        channel: "msedge", // Use the Edge browser
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});
