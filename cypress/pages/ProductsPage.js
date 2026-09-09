export default class ProductPage {
    inventoryContainer = '[data-test="inventory-container"]';
    menuButton = '#react-burger-menu-btn';
    logoutLink = '[data-test="logout-sidebar-link"]';

    verifyProductsPage(){
       cy.get(this.inventoryContainer).should('be.visible');
    }

    openMenu() {
        cy.get(this.menuButton).click();
    }

    clickLogout() {
        cy.get(this.logoutLink).click();
    }

    logout(){
        this.openMenu();
        this.clickLogout();
    }
}