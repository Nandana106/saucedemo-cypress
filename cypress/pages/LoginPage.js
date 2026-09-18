export default class LoginPage {
    elements = {
        usernameInput:'[data-test="username"]',
        passwordInput:'[data-test="password"]',
        loginButton:'[data-test="login-button"]',
        errorMessage:'[data-test="error"]',
        emptyCredentialError:'.error-message-container'
    }

    visitPage(){
        cy.visit('/');
    }

    getUsernameInput(){
        return cy.get(this.elements.usernameInput);
    }

    getPasswordInput(){
        return cy.get(this.elements.passwordInput);
    }

    getLoginButton(){
        return cy.get(this.elements.loginButton);
    }

    clickLogin(){
        this.getLoginButton().click();
    }

    getErrorMessage(){
        return cy.get(this.elements.errorMessage);
    }

    getEmptyCredentialError(){
        return cy.get(this.elements.emptyCredentialError);
    }

    login(username,password){
      this.visitPage();
      this.getUsernameInput().clear();
      this.getPasswordInput().clear();
      if(username) {
        cy.get(this.elements.usernameInput).type(username);
      }
      if(password) {
        cy.get(this.elements.passwordInput).type(password);
      }
      this.clickLogin();
    }

    verifyErrorMessage(message) {
        this.getErrorMessage().should('be.visible').and('contain', message);
    }

    verifyEmptyCredentialError(message) {
        this.getEmptyCredentialError().should('be.visible').and('contain', message);
    }
}