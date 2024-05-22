describe('template spec', () => {
    before(() => {
        cy.visit('/')
    })

    it('ir para a tela de busca', () => {
        cy.get("[href='/Favorites']").click()
    })

    it('Clicar na musica favorita', () => {
        cy.get("[aria-label='favorite-music']").should("have.length.greaterThan", 0)
        cy.get("[aria-label='favorite-music']").eq(0).click()
    }) 

})