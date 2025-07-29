Cypress.Commands.add('openWebPage', () => {
    cy.visit('https://magento.softwaretestingboard.com/')                                    // entrar no site
    cy.title()
        .should('exist')
        .should('contain', 'Home Page')                                                     // validação 
});

Cypress.Commands.add('accessCreateAccountTab', () => {
    cy.get('.panel > .header > .authorization-link > a',{timeout: 3000}).click()                                   //clica em sign in
    cy.get('.block-content > .actions-toolbar > div.primary > .action > span').first().click()     //clica em create account
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

Cypress.Commands.add('clickCreateAccountButton', () => {
  cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
})

Cypress.Commands.add('validateCreateAccountSucess', (user) => {
    cy.get('.message-success > div',{timeout: 10000})
        .should('contain','Thank you for registering with Main Website Store.')

    cy.get('.box-content > p',{timeout: 10000})
        .should('contain', user.firstName)
        .should('contain', user.lastName)
        .should('contain', user.email)
})

Cypress.Commands.add('checkMessageAccountThatAlreadyexists', () => {
    cy.get('.message-error > div').should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
})

Cypress.Commands.add('checkMessageInvalidCrendentials', () => {
   cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
})
