import ProductsPage from '../../pages/ProductsPage';

describe('Logout', () => {
    beforeEach(()=>{
        cy.visit('/');
        cy.fixture('users').as('users');
    });
    it('should logout successfully',function () {
        const productsPage = new ProductsPage();

        cy.login(this.users.validUser.username,this.users.validUser.password);
        productsPage.verifyProductsPage();
        productsPage.logout();
        cy.get('[data-test="login-button"]').should('be.visible');
    });
});
