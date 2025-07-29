describe('Search products', () => {
    beforeEach(() => {
        cy.openWebPage()
    });
    
    it('Search for a valid product', () => {
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

        cy.get('.search > .block')
            .should('be.visible')
            .and('contain','t-shirt')
            .or('contain', 'T-shirt')
            .and('contain','Related search terms')

        cy.get('.product-items', {timeout: 10000}).each(($el) => {
            cy.wrap($el).find('.product-item').should('be.visible')
            cy.wrap($el).find('.price').should('be.visible')
            cy.wrap($el).find('img').should('have.attr', 'src').and('include', '.jpg')
        }); 
    })

    it('Search for a no existent product', () => {
        cy.get('#search')                                        
            .should('be.visible')
            .clear()
            .type('noExistentProduct')

        cy.get('.actions > .action')
            .should('be.visible')
            .click()

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=invalidProduct')

        cy.get('#search')
            .should('be.visible')
            .and('have.value','invalidProduct')

        cy.get('.column > .message')
            .should('be.visible')
            .and('contain','Your search returned no results.')

        cy.get('.base')
            .should('be.visible')
            .and('have.text',"Search results for: 'invalidProduct'")
    })

})