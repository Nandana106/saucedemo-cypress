import ProductsPage from "../../pages/ProductsPage"

describe('Login Test',()=>{
    it('should login successfully',function () {
        const productsPage = new ProductsPage();
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        cy.login(username,password);
        productsPage.getProductsPage().should('have.length', 6);
    });
})