beforeEach(() => {
        cy.openWebPage()
        cy.searchForTshirt()
        cy.checkIfSearchIsCorrect()
    })

describe('Sort products by product name', () => { 
    it('Sort from A-Z = ascendent', () => {
        cy.verifyDescendent('name')
        cy.changeToAscendent()
        cy.verifyIfProductsAreListed()  
        cy.verifyIfListedProductsAscendentByName()
    })

    it('Sort from Z-A = descendent', () => {
        cy.verifyDescendent('name')
        cy.verifyIfProductsAreListed()  
        cy.verifyIfListedProductsDescendentByName()
    })
})

describe('Sort products by price', () => {
    it('Sort from low-high', () => {
        cy.verifyDescendent('price') 
        cy.changeToAscendent()
        cy.verifyIfProductsAreListed()   
        cy.verifyIfListedProductsAscendentByPrice()
    })

    it('Sort from high-low', () => {
        cy.verifyDescendent('price')
        cy.verifyIfProductsAreListed()
        cy.verifyIfListedProductsDescendentByPrice()
    })
})

describe.skip('Sort products by relevance', () => {
    it('Sort from low-high', () => {
        // TODO: Implementar testes de produto por relevancia
    })
})