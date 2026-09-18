

import FooterPage from '../../pages/FooterPage';
import ProductsPage from '../../pages/ProductsPage';
describe('Footer', () => {
    const footerPage = new FooterPage();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    const productsPage = new ProductsPage();

    beforeEach(() => {
        cy.login(username,password);
        productsPage.getProductsPage();
    });

    it('should display the footer correctly', () => {
        footerPage.verifyFooter();
    });
});