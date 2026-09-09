export default class LoginPage {
    usernameInput='[data-test="username"]';
    passwordInput='[data-test="password"]';
    loginButton='[data-test="login-button"]';
    errorMessage='[data-test="error"]';

    enterUsername(username){
        cy.get(this.usernameInput).type(username);
    }

    enterPassword(password){
        cy.get(this.password).type(password);
    }

    clickLogin(){
        cy.get(this.loginButton).click();
    }

    login(username,password){
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
    }

    getErrorMessage(){
        return cy.get(this.errorMessage);
    }
}