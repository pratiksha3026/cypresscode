// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { generateUniqueEmail } from './setup-data';

// Define a custom command to set up data
Cypress.Commands.add('setupData', () => {
// Generate a unique email address
const uniqueEmail = generateUniqueEmail();
const data = {
email: uniqueEmail,
password: "Bhosale@123",
firstName: "Pratiksha",
lastName: "Bhosale",
upiAddress: "Success@razorpay",
phoneNumber: 8888888888
};

// Write data to the fixture file
cy.writeFile('cypress/fixtures/example.json', JSON.stringify(data));
});


Cypress.Commands.add('modifyWindowOpen', () => {
cy.window().then((win) => {
// Override the window.open function
win.open = (url) => {
win.location.href = url;
return win;
};
});
});



