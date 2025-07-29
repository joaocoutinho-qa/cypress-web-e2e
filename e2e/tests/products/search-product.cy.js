describe('Search products', () => {
    beforeEach(() => {
        cy.openWebPage()
    });
    
    it.only('Search for a valid product', () => {
        cy.get('#search')                                        
            .should('be.visible')
            .clear()
            .type('t-shirt')

        cy.get('.actions > .action')
            .should('be.visible')
            .click()

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=t-shirt')

        cy.get('#search')
            .should('be.visible')
            .and('have.value','t-shirt')

        cy.get('.base')
            .should('be.visible')
            .and('have.text',"Search results for: 't-shirt'")

        cy.get(':nth-child(1) > #toolbar-amount')
            .should('be.visible')
            .and('contain','Items 1-12 of 181')

        cy.get('.search > .block',{Timeout: 6000})
            .should('be.visible')
            .should('contain','-shirt')

        cy.verifyIfProductsAreListed()
    })

    it('Search for a no existent product', () => {
        cy.get('#search')                                        
            .should('be.visible')
            .clear()
            .type('noExistentProduct')

        cy.get('.actions > .action')
            .should('be.visible')
            .click()

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=noExistentProduct')

        cy.get('#search')
            .should('be.visible')
            .and('have.value','noExistentProduct')

        cy.get('.column > .message')
            .should('be.visible')
            .and('contain','Your search returned no results.')

        cy.get('.base')
            .should('be.visible')
            .and('have.text',"Search results for: 'noExistentProduct'")
    })

})