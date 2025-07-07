
describe ('create account',() => {                       
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('users').as('user')
        cy.accessCreateAccountTab()  //acessar a página para criar uma conta
    });

    it('create an account with valid credentials', function () { 
        cy.fillCreateAccountFields(this.user.validUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('.message-success > div').should('contain','Thank you for registering with Main Website Store.')
        cy.get('.box-content > p')
          .should('contain', this.user.validUser.firstName)
          .should('contain', this.user.validUser.lastName)
    })

    it('create an account that already exists', function () { 
        cy.fillCreateAccountFields(this.user.validUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('.message-error > div').should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })

    it.todo('create an account with invalid credentials', function () { 
        cy.fillCreateAccountFields(this.user.invalidUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
       
    //TODO criar teste para senha errada, nome invalido
    //tr
    })
})
