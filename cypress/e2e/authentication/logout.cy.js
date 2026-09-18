import LoginPage from "../../pages/LoginPage";
import ProductsPage from '../../pages/ProductsPage';
import Sidebar from '../../pages/Sidebar';

describe('Logout', () => {
    it('should logout successfully',() => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();
        const sidebar = new Sidebar();
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        cy.login(username,password);
        productsPage.getProductsPage().should('be.visible');
        sidebar.clickOpenButton();
        sidebar.clickLogoutMenuItem();
        loginPage.getLoginButton().should('be.visible');
    });
});
