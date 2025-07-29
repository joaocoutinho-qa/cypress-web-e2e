class userLoginPage {
   fillUserLoginWith(user) {
    cy.get('#email').type(user.email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(user.password)
  }
  
  validateLoginButton() {
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span')
      .click()
  }

  validateSuccessfulLogin(email) {
    cy.get(':nth-child(2) > .greet > .logged-in')
      .should('have.text','Welcome, João Silva 356!')
    //cy.url().should('include', '')
  }

  validateInvalidEmailError() {
    cy.get('#email-error')
      .should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  }

  validateInvalidPswError(email) {
    cy.get('.message-error', {timeout: 15000})
      .should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  }
}

export default new userLoginPage();