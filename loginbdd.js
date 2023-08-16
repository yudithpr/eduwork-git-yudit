const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('user visit the website', () => {
   cy.visit('http://zero.webappsecurity.com/')
})

When('user type "free" on searchbox', () => {
   cy.get('#searchTerm').type('free{enter}') 
})


Then('user will see the result page', () => {
   cy.get('h2').should('be.visible')
})
