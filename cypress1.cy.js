// <reference types="cypress" />

describe('my first test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')

        cy.get('.actions-email').type('fake@email').should('have.value', 'fake@email.com')

    });
});