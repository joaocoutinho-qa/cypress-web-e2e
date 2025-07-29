const { invalidEmail, invalidPsw } = require('../../../fixtures/users');
const userLoginPage = require('../../../support/pageObjects/userLoginPage');

describe('User Login', () => {
    beforeEach(() => {
        cy.openWebPage()
        cy.fixture('generatedUser').as('user');
        cy.accessLoginPage()
    });
    
    it('Login with valid credentials', function () {
        userLoginPage.fillUserLoginWith(this.user)
        userLoginPage.validateLoginButton()
        userLoginPage.validateSuccessfulLogin()
    })

    it('Login with invalid email', function (){
        userLoginPage.fillUserLoginWith(invalidEmail)
        userLoginPage.validateLoginButton()
        userLoginPage.validateInvalidEmailError()
        })

    it('Login with invalid password', function () {
        userLoginPage.fillUserLoginWith(invalidPsw)
        userLoginPage.validateLoginButton()
        userLoginPage.validateInvalidPswError()
    })
})