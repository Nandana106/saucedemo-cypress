import LoginPage from '../../pages/LoginPage';
import users from '../../fixtures/users.json'

describe('Invalid Login', () => {
  // it('should show error for invalid credentials',() => {
  users.invalidUsers.forEach((user)=>{
    it('should show error for invalid credentials',()=>{
      const loginPage = new LoginPage();

      // cy.fixture('users').then((users) => {
        // loginPage.login(users.invalidUser.username,users.invalidUser.password);
        cy.login(user.username,user.password);
        loginPage.verifyErrorMessage('Username and password do not match');
      // });
    });
  });   

  it('should show error for empty password',()=>{
    const loginPage = new LoginPage();
    const username = Cypress.env('username');
    cy.login(username,'');
    loginPage.verifyEmptyCredentialError('Epic sadface: Password is required');
  });

  it('should show error for empty username',()=>{
    const loginPage = new LoginPage();
    const password = Cypress.env('password');
    cy.login('' , password);
    loginPage.verifyEmptyCredentialError('Epic sadface: Username is required');
  });
});
