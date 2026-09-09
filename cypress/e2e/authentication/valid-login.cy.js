import LoginPage from "../../pages/LoginPage";
import productsPage from "../../pages/ProductsPage"

describe('Login Test',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.fixture('users').as('users');
    });
    it('should login successfully',function () {
        const loginPage = new LoginPage();
        const productsPage = new ProductPage();

        loginPage.login(this.user.validUser.username,this.user.validUser.password);
        // cy.url().should('include','/inventory.html');
        productsPage.verifyProductsPage();
    });
})