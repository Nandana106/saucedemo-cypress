import LoginPage from "../../pages/LoginPage";
import ProductsPage from '../../pages/ProductsPage';

describe('Logout', () => {
    it('should logout successfully',() => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        loginPage.login(username,password);
        productsPage.getProductsPage().should('be.visible');
        productsPage.clickLogout();
        loginPage.getLoginButton().should('be.visible');
    });
});
