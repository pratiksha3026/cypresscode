const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video:true,
    baseUrl:'http://www.webdriveruniversity.com/',
    baseUrl:'https://www.google.com/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
