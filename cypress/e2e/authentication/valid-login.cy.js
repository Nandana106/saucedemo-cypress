import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage"

describe('Login Test',()=>{
    it('should login successfully',function () {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        loginPage.login(username,password);
        productsPage.getProductsPage().should('have.length', 6);
    });
})