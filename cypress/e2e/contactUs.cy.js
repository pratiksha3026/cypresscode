///<reference types = "cypress"/>
describe('verify the contactus form',function(){
    it('verify the contactus form',function(){
        cy.visit('/Contact-Us/contactus.html')
        cy.addElement('[name="first_name"]','prati');
        cy.addElement('[name="last_name"]','bhosale');
        cy.addElement('[name="email"]','prati@gmail.com')
        cy.addElement('[name="message"]','i am new in cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible').contains('Thank You')
        cy.addElement('[type="submit"]','submit')
        // cy.addElement('h1').should('be.visible')
        

    })

})