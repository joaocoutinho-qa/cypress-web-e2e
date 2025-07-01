
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
        cy.fillCreateAccountFields(this.user.validEmailUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()

        //criar validacoes
    })

    it('create an account with invalid credentials', function () { 
        cy.fillCreateAccountFields(this.user.invalidEmailUser)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').first().click()
        cy.get('#email_address-error').should('contain','Please enter a valid email address (Ex: johndoe@domain.com).')
    })

})
