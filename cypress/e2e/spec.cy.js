import '../support/commands';
//import 'cypress-iframe';

describe('facebook', () => {
Cypress.on('uncaught:exception', (err, runnable) => { return false });

beforeEach(() => {
cy.fixture('example').as('credentials');
});

before(() => {
// Set up the data using the custom command
cy.setupData();
});

it('sign in with credentials', function () {
cy.visit('https://uat.cloud.trinka.ai/signin', { failOnStatusCode: false });
cy.get('@credentials').then((credentials) => {
cy.get("#signUpNow").click();
cy.get("#userEmail").type(credentials.email);
cy.get("#userSignUpPassword").type(credentials.password);
cy.get("#userFirstName").type(credentials.firstName);
cy.get("#userLastName").type(credentials.lastName);
cy.get("#signUpRegister").click()
cy.wait(10000)

cy.get("h2 span")
.should('be.visible', { timeout: 10000 })
.should("have.text", credentials.firstName);
cy.get("#Marketer").parent().click()
// cy.get(".purple-btn").should('be.visible').click()
cy.get('button.purple-btn.btn-submit').scrollIntoView().click({ force: true });

cy.get(".upgradeButtons.ng-star-inserted").should('be.visible')
cy.modifyWindowOpen();
cy.get('button.upgradeButtons').click();
cy.wait(10000)

cy.get('.upgradePremiumButton:first').click();
cy.wait(10000)
cy.get(".payWithUPIbutton.ng-star-inserted").click()
cy.wait(10000)
cy.get('.aut-iframe').then(function ($iframe) {
let body = $iframe.contents().find('body')
cy.wrap(body).as('bdy1')
cy.get('@bdy1').find('.razorpay-checkout-frame').then(function ($iframe2) {
let body1 = $iframe2.contents().find('body')
cy.wrap(body1).as('bdy')

cy.get('@bdy').find("#contact").type(credentials.phoneNumber);
cy.get('@bdy').find("#redesign-v15-cta").click()
cy.get('@bdy').find("#vpa-upi").type(credentials.upiAddress)
cy.get('@bdy').find("#redesign-v15-cta").click()


})
})

cy.wait(15000)
cy.get("div h2").should('be.visible')
.should('include.text', 'Thank you for subscribing to Trinka');
cy.get(".your_subscription_msg").should('be.visible')

});

// Add assertions or other actions as needed
});
})