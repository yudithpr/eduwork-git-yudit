it.only('Update user', () => {
    cy.request('https://pokeapi.co/api/v2/ability/7/').then((response) => {
        expect(response.body.name).to.eq('limber')
    })
})
