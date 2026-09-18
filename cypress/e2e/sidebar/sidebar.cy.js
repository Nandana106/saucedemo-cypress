import Sidebar from '../../pages/Sidebar';
describe('Sidebar', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    const sidebar = new Sidebar();
    
    beforeEach(() => {
        cy.fixture('products').as('products');
        cy.login(username, password);
        sidebar.clickOpenButton();
    });
    it('should open the sidebar and view menu items', () => {
        sidebar.getSidebarContainer().should('be.visible');
        sidebar.getAllItemsMenuItem().should('be.visible').and('have.text', 'All Items');
        sidebar.getDynamicCatalogMenuItem().should('be.visible').and('have.text', 'Dynamic Catalog');
        sidebar.getAboutMenuItem().should('be.visible').and('have.text', 'About');
        sidebar.getLogoutMenuItem().should('be.visible').and('have.text', 'Logout');
        sidebar.getResetMenuItem().should('be.visible').and('have.text', 'Reset App State');
    });

    it('should close the sidebar', () => {
        sidebar.clickCloseButton();
        sidebar.getSidebarContainer().should('not.be.visible');
    });

    it('should handle clicking on dynamic catalog menu items', () => {
        sidebar.clickDynamicCatalogMenuItem();
        sidebar.getLazyLoadingMenuItem().should('be.visible').and('have.text', 'Lazy Load');
        sidebar.getSpinnerMenuItem().should('be.visible').and('have.text', 'Spinner');
        sidebar.getSliderMenuItem().should('be.visible').and('have.text', 'Slider');
    });

    it('should handle clicking on all menu items', () => {
        sidebar.clickAllItemsMenuItem();
        cy.url().should('include', '/inventory.html');
    });

    it('should handle clicking on the logout menu item', () => {
        sidebar.clickLogoutMenuItem();
        cy.url().should('include', 'saucedemo.com');
    });

    it('should handle lazy loading menu item', () => {
        sidebar.clickDynamicCatalogMenuItem();
        sidebar.getLazyLoadingMenuItem().should('be.visible').and('have.text', 'Lazy Load');
        sidebar.clickLazyLoadingMenuItem();
        sidebar.getTitle().should('be.visible').and('have.text', 'Dynamic Catalog - Lazy Load');
        sidebar.verifyDynamicCatalogContainer();
        sidebar.getDynamicCatalogItemCount().then((initialCount) => {
            sidebar.scrollToBottom();
            cy.wait(1000);
            sidebar.getDynamicCatalogItemCount().then((newCount) => {
                expect(newCount).to.be.greaterThan(initialCount);
            });
        });
    });

    it('should handle spinner menu item', () => {
        sidebar.clickDynamicCatalogMenuItem();
        sidebar.getSpinnerMenuItem().should('be.visible').and('have.text', 'Spinner');
        sidebar.clickSpinnerMenuItem();
        sidebar.getTitle().should('be.visible').and('have.text', 'Dynamic Catalog - Spinner');
        sidebar.verifySpinner();
        cy.wait(1000);
        sidebar.verifySpinnerCardItems();
    });

    it('should handle slider menu item', () => {
        sidebar.clickDynamicCatalogMenuItem();
        sidebar.getSliderMenuItem().should('be.visible').and('have.text', 'Slider');
        sidebar.clickSliderMenuItem();
        sidebar.getTitle().should('be.visible').and('have.text', 'Dynamic Catalog - Slider');
        cy.get('@products').then((products) => {
            products.forEach((product) => {
                cy.get(`button[aria-label="Show ${product.name}"]`).click();
                sidebar.getSliderProductName().should('be.visible').and('have.text', product.name);
            });
        }); 
        // Capture the initially active slide
        sidebar.getSliderActiveDot().invoke('attr', 'aria-label').then((initialSlide) => {
            cy.wait(2000);
            // Verify active slide changed
            sidebar.getSliderActiveDot().invoke('attr', 'aria-label').then((currentSlide) => {
                expect(currentSlide).not.to.equal(initialSlide);
            });
        });
    });
});