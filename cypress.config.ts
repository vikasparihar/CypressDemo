import { defineConfig } from "cypress";
// You'll need to install this package first: npm install cypress-sql-server
import sqlServer from 'cypress-sql-server';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      // Initialize SQL Server plugin
      sqlServer.loadDBCommands(on);
      
      return config;
    },
    // Custom test file location (this is actually the default location)
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // Exclude files from being detected as specs
    excludeSpecPattern: ['*.hot-update.js', '*.ignored.js'],
    
    // Base URL for your application
    baseUrl: 'http://google.com/'

  },
  
 
  
  // SQL Server plugin configuration
  env: {
    sqlServer: {
      host: 'localhost',
      port: 1433,
      user: 'sa',
      password: 'YourPassword',
      database: 'YourDatabase',
      // Optional: Enable encrypted connections
      options: {
        encrypt: true
      }
    }
  },
  
  // Default browser to launch
  defaultCommandTimeout: 6000,
  viewportWidth: 1280,
  viewportHeight: 720,
});
