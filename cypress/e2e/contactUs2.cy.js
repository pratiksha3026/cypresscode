describe('verify contactus form', function () {
    let info;
    before(function () {
        cy.fixture('contactUs2').then((value) => {
            info = value
        })
    })
    beforeEach(()=>{
        cy.visit('/Contact-Us/contactus.html')
    })
    it('verify the contactus form', function () {
        
        cy.addElement(info.firstname, 'pratiksha')
        cy.addElement(info.lastname, 'bhosale')
        cy.addElement(info.email, 'prati@gmail.com')
        cy.addElement(info.comment, 'sample fixture')

    })
})