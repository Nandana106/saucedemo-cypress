export default class LoginPage {
    elements = {
        usernameInput:'[data-test="username"]',
        passwordInput:'[data-test="password"]',
        loginButton:'[data-test="login-button"]',
        errorMessage:'[data-test="error"]'
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

    login(username,password){
      this.visitPage();
      this.getUsernameInput().type(username);
      this.getPasswordInput().type(password);
      this.clickLogin();
    }

    verifyErrorMessage(message) {
        this.getErrorMessage().should('be.visible').and('contain', message);
    }
}