/// <reference types="cypress" />

describe('cust commands', ()=>{
    it('should load login page',()=>{
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.login('username','password')

        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.payment()
        
    });
});

===== Command.js =====
Cypress.Commands.add('login',(username,password)=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
});

Cypress.Commands.add('payment',() => {
    cy.get('select[id="sp_payee"]').select('sprint').should('have.value', 'sprint')
    cy.get('select[id="sp_account"]').select('1').should('have.value', '1')
    cy.get('input[name="amount"]').type(1000)
    cy.get('#sp_date').type('02-08-2023')
    cy.get('input[name="description"]')
    cy.get('#pay_saved_payees').click()
});