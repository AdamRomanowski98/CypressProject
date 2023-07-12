const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { 
      allureWriter(on, config);
      return config;
    },
    
    specPattern: 'cypress/e2e/**.js',
    baseUrl: 'https://huntd.tech/',
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});