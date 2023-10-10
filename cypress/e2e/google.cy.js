describe('verify the search on google',function(){
    it('search the cypress',function(){
       cy.visit('/')
       cy.search1('[name="q"]','javascript',true)
       cy.search1('[type="submit"]')
      
        
    })

})

