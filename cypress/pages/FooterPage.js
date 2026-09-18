export default class FooterPage {
    elements = {
        footerContainer: '[data-test="footer"]',
        twitterLink:'[data-test="social-x"]',
        facebookLink:'[data-test="social-facebook"]',
        linkedinLink:'[data-test="social-linkedin"]',
        footerText:'[data-test="footer-copy"]'
    }

    getFooterContainer() {
        return cy.get(this.elements.footerContainer);
    }

    getTwitterLink() {
        return cy.get(this.elements.twitterLink);
    }

    getFacebookLink() {
        return cy.get(this.elements.facebookLink);
    }

    getLinkedinLink() {
        return cy.get(this.elements.linkedinLink);
    }

    getFooterText() {
        return cy.get(this.elements.footerText);
    }

    verifyFooter() {
        this.getFooterContainer().should('be.visible');
        this.getTwitterLink().should('have.attr', 'href').and('include', 'x.com');
        this.getFacebookLink().should('have.attr', 'href').and('include', 'facebook.com');
        this.getLinkedinLink().should('have.attr', 'href').and('include', 'linkedin.com');
        this.getFooterText().should('be.visible').and('contain.text', '© 2026 Sauce Labs. All Rights Reserved.');
    }
}