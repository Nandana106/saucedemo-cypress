import LoginPage from '../../pages/LoginPage';
import users from '../../fixtures/users.json'

describe('Invalid Login', () => {
  // it('should show error for invalid credentials',() => {
  users.invalidUsers.forEach((user)=>{
    it('should show error for invalid credentials',()=>{
      const loginPage = new LoginPage();

      // cy.fixture('users').then((users) => {
        // loginPage.login(users.invalidUser.username,users.invalidUser.password);
        loginPage.login(user.username,user.password);
        loginPage.verifyErrorMessage('Username and password do not match');
      // });
    });
  });   
});
