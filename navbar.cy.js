/// <reference types ="cypress"/>

describe('navbar', {testIsolation:false}, () => {
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('should display online banking content', () =>{
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('p').should('be.visible')
    });

    it('should display feedback content',()=>{
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3').should('be.visible')
    });

    it('should display homepage content',()=>{
        cy.get('.brand').click()
        cy.url().should('include','index.html')
        cy.get('#homeMenu').should('be.visible')
    });
});