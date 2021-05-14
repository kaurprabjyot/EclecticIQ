// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

require('cypress-xpath')
import './commands'
module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, args) => {
      console.log(config, browser, args);
      if (browser.name === 'chrome') {
        args.push(
          '--disable-features=CrossSiteDocumentBlockingIfIsolating,' +
            'CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process',
        );
        args.push(
          '--load-extension=cypress/extensions/Ignore-X-Frame-headers_v1.1',
        );
      }
      return args;
    });
  };

  cy.on('window:before:load', win => {
    // Cypress cannot intercept calls made with window.fetch,
    // so we force fallback to polyfill.
    // see https://github.com/cypress-io/cypress/issues/95

    /* eslint-disable no-param-reassign */
    delete win.fetch;
    /* eslint-enable */
  });