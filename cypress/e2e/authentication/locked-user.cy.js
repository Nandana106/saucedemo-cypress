import LoginPage from '../../pages/LoginPage';

describe('Locked User', () => {
    it('should not allow locked user to login', ()=>{
        cy.fixture('users').then((users) => {
            const loginPage = new LoginPage();
            loginPage.login(users.lockedUser.username,users.lockedUser.password);
            loginPage.verifyErrorMessage('locked');
        });
    });
});
