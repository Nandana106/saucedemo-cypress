const { defineConfig } = require("cypress");
const path = require('node:path');
const fs = require('node:fs');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SauceDemo Cypress Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  video:true,
  retries: {
    runMode: 2,
    openMode: 0
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mochawesome(on);
      on('after:run', () => {
        if (fs.existsSync(path.join(config.downloadsFolder, 'cypress', 'downloads'))) {
          fs.rmSync(path.join(config.downloadsFolder, 'cypress', 'downloads'), { recursive: true, force: true });
        }
      });
      return config;
    }
  },
});
