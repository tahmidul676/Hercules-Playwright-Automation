// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  //globalSetup: "./global-setup.cjs",
//globalTeardown: "./global-teardown.cjs",
// Skip hooks when called from run-all-tests.js
  //globalSetup:    process.env.SKIP_GLOBAL_HOOKS ? undefined : "./global-setup.cjs",
  //globalTeardown: process.env.SKIP_GLOBAL_HOOKS ? undefined : "./global-teardown.cjs",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 1,
  retries: 3,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60000, // whole test
  expect: { timeout: 15000 }, //  applies to ALL expect() automatically
  //Allure Reporter Configuration
  reporter: [
    ["line"],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        
        // environmentInfo: {           
        //   Project: "Hercules",
        //   Environment: "Testing",
        //   Browser: "Chromium",
        //   "Base URL": "https://dmsweb.sslwireless.com/",
        // },
      },
    ],
  ],


  use: {
    //viewport: { width: 1920, height: 1080 }, // Screen size
    permissions: ["geolocation", "notifications", "camera", "microphone"],
    headless: false,
    actionTimeout: 30000, //  applies to ALL actions (click, fill etc.)
    navigationTimeout: 30000,
    slowMo: 1000,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "only-on-failure",
    //video: "retain-on-failure",
    //trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        //viewport: { width: 1920, height: 1080 },
      },
    },
    /*
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
*/
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
