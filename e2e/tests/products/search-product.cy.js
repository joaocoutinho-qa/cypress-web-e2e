describe('Search products', () => {
    beforeEach(() => {
        cy.openWebPage()
    })
    
    it('Search for a valid product and validate', () => {
        cy.searchForTshirt()
        cy.checkIfSearchIsCorrect()
        cy.verifyIfProductsAreListed()
    })

    it('Search for no existing product and validate', () => {
        cy.searchForNoExistingtProduct()
        cy.checkIfSearchForNoExistingProductIsCorrect()
        cy.verifyIfProductsAreNotListed()
    })

})