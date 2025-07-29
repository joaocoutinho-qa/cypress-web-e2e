Cypress.Commands.add('searchForTshirt', () => {
    cy.get('#search')                                        
        .should('be.visible')
        .clear()
        .type('t-shirt')

    cy.get('.actions > .action')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('searchForNoExistingtProduct',() => {
    cy.get('#search')                                        
        .should('be.visible')
        .clear()
        .type('noExistingProduct')

    cy.get('.actions > .action')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('checkIfSearchIsCorrect', () =>{ 
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
})

Cypress.Commands.add('checkIfSearchForNoExistingProductIsCorrect', () =>{ 
    cy.url().should('eq', 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=noExistingProduct')
    cy.get('#search')
        .should('be.visible')
        .and('have.value','noExistingProduct')

    cy.get('.column > .message')
        .should('be.visible')
        .and('contain','Your search returned no results.')

    cy.get('.base')
        .should('be.visible')
        .and('have.text',"Search results for: 'noExistingProduct'")
})