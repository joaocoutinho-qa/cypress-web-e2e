Cypress.Commands.add('openWebPage', () => {
    cy.visit('https://magento.softwaretestingboard.com/')                                         // entrar no site
    cy.title()
        .should('exist')
        .should('contain', 'Home Page')                                                     // validação 
});

Cypress.Commands.add('accessCreateAccountTab', () => {
    cy.get('.panel > .header > .authorization-link > a').click()                                   //clica em sign in
    cy.get('.block-content > .actions-toolbar > div.primary > .action > span').first().click()     //clica em
});

Cypress.Commands.add('fillCreateAccountFields', (user) => {
    cy.get('#firstname').type(user.firstName)
    cy.get('#lastname').type(user.lastName)
    cy.get('#email_address').type(user.email)
    cy.get('#password').type(user.password)
    cy.get('.confirmation').type(user.confirmation)
});

Cypress.Commands.add('accessLoginPage', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
});

Cypress.Commands.add('fillLoginFields', (user) => {
    cy.get('#email').type(user.email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(user.password)
});