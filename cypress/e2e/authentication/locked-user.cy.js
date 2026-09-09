import LoginPage from '../../pages/LoginPage';

describe('Locked User', () => {
    beforeEach(()=>{
        cy.visit('/');
        cy.fixture('users').as('users');
    });
    it('should not allow locked user to login', function(){
        const loginPage = new LoginPage();

        loginPage.login(this.users.lockedUser.username,this.users.lockedUser.password);
        loginPage.getErrorMessage().should('be.visible').and('contain', 'locked');
    });
});
