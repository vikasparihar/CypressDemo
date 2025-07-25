1. Validate configuration file if its a typescript file
npx tsc --noEmit cypress.config.ts

if not then run  a test
npx cypress run --spec "cypress/e2e/basic.cy.ts"

2. chose which browser to launch
npx cypress run --browser chrome
# or
npx cypress run --browser firefox

Default browser preference:

In cypress open (interactive mode): Shows browser selection UI
In cypress run (headless mode): Uses Electron by default