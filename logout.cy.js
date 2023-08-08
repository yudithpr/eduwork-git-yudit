/// <reference types ="cypress"/>

describe('login', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
    });

    it('should login and valid data',()=>{
        cy.fixture('user').then(user=> {
            const username = user.username
            const password = user.password
            
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
            
        });

        cy.get('ul.nav-tabs').should('be.visible')

        cy.contains('username').click()
        cy.contains('Logout').click()
        cy.get('#signin_button').should('be.visible')
        
    });
});