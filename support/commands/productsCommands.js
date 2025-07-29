Cypress.Commands.add('verifyIfProductsAreListed',() => {
    cy.get('li.product-item', { timeout: 10000 }).each(($el) => {
    cy.get('.price', {timeout: 10000}).should('be.visible')
    cy.get('.product-image-photo', {timeout: 10000})
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', '.jpg')
    })
})

Cypress.Commands.add('verifyIfProductsAreNotListed',() => {
    cy.get('li.product-item', { timeout: 10000 }).should('not.exist');
    cy.get('.price', { timeout: 10000 }).should('not.exist');
    cy.get('.product-image-photo', { timeout: 10000 }).should('not.exist');
})


Cypress.Commands.add('verifyDescendent',(sortOption) => {
    cy.get('#sorter')
                .should('be.visible')
                .select(sortOption)
                .should('have.value', sortOption)

            cy.get('a[data-role="direction-switcher"]',{timeout:10000})
                .should('have.class', 'sort-desc')       // the current state must be descendent
                
            cy.get('.toolbar-sorter > .action',{timeout: 10000})
                .first()
                .should('be.visible')
                .click()
})

Cypress.Commands.add('verifyDescendent',(sortOption) => {
    cy.get('#sorter')
            .should('be.visible')
            .select(sortOption)
            .should('have.value', sortOption)

        cy.get('a[data-role="direction-switcher"]',{timeout:10000})
            .should('have.class', 'sort-desc')       // the current state must be descendent
})

Cypress.Commands.add('verifyIfListedProductsAscendentByName',() => {
    cy.get('.product-item-link', {timeout: 10000}).then(($items) => {
            const names = [...$items].map(el => el.innerText.trim())
            const sorted = [...names].sort((a, b) => a.localeCompare(b))
            cy.log('Array correta: ' + JSON.stringify(sorted))
            cy.log('Array real: ' + JSON.stringify(names))
            expect(names, 'Os produtos não estão ordenada corretamente').to.deep.equal(sorted)
        })
})

Cypress.Commands.add('verifyIfListedProductsDescendentByName',() => {
    cy.get('.product-item-link', {timeout: 10000}).then(($items) => {
            const names = [...$items].map(el => el.innerText.trim())
            const sorted = [...names].sort((a, b) => b.localeCompare(a))
            cy.log('Array correta: ' + JSON.stringify(sorted))
            cy.log('Array real: ' + JSON.stringify(names))
            expect(names, 'Os produtos não estão ordenada corretamente').to.deep.equal(sorted)
        })
})

Cypress.Commands.add('verifyIfListedProductsAscendentByPrice', () => {
    cy.get('.price', { timeout: 10000 }).then(($prices) => {
        const prices = [...$prices].map(el => {
            const text = el.innerText.replace(/[^\d.,]/g, '').replace(',', '.')
            return parseFloat(text)
        })
        const sorted = [...prices].sort((a, b) => a - b)

        cy.log('Array correta: ' + JSON.stringify(sorted))
        cy.log('Array real: ' + JSON.stringify(prices))

        expect(prices, 'Os preços não estão ordenados corretamente').to.deep.equal(sorted);
    })
})

Cypress.Commands.add('verifyIfListedProductsDescendentByPrice', () => {
    cy.get('.price', { timeout: 10000 }).then(($prices) => {
        const prices = [...$prices].map(el => {
            const text = el.innerText.replace(/[^\d.,]/g, '').replace(',', '.')
            return parseFloat(text)
        })
        const sorted = [...prices].sort((a, b) => b - a)

        cy.log('Array correta: ' + JSON.stringify(sorted))
        cy.log('Array real: ' + JSON.stringify(prices))

        expect(prices, 'Os preços não estão ordenados corretamente').to.deep.equal(sorted);
    })
})

Cypress.Commands.add('changeToAscendent',() => {
    cy.get('.toolbar-sorter > .action',{timeout: 10000})
                .first()
                .should('be.visible')
                .click()

        cy.get('a[data-role="direction-switcher"]',{timeout:10000})
            .should('have.class', 'sort-asc')       // the current state changed to ascendent
})