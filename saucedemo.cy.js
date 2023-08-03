/// <reference types="cypress" />

describe('saucedemo test', ()=>{
    beforeEach(() => {
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit('https://www.saucedemo.com/',{timeout:5000});
});

    it('should try to login', () => {
        cy.fixture("user").then(user=>{
            const username = user.username
            const password = user.password
            const first_name = user.first_name
            const last_name = user.last_name
            const postcode= user.postcode

            cy.get('input[name="user-name"]').click()
            cy.get('input[name="user-name"]').type(username)
            
            cy.get('input[name="password"]').click()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()
            
            cy.get('a').contains('Backpack').click()

            cy.get('[name="add-to-cart-sauce-labs-backpack"').click()

            cy.get('.shopping_cart_link').click()

            cy.get('[id="checkout"]').click()

            cy.get('input[name="firstName"]').click()
            cy.get('input[name="firstName"]').type(first_name)
            
            cy.get('input[name="lastName"]').click()
            cy.get('input[name="lastName"]').type(last_name)

            cy.get('input[name="postalCode"]').click()
            cy.get('input[name="postalCode"]').type(postcode)

            cy.get('[name="continue"]').click()

            cy.get('[name="finish"]').click()
        });
    })
});