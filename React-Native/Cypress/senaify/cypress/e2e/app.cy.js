describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('verificando se o titulo esta visivel', () => {
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  })

  it('Verificar se tem uma lista com playlists exibidas', () => {
    //verificando se exite este recurso e se o mesmo e maior do que 0
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  })

  // it('Clicar em uma exibição de playlist e listar suas músicas', () => {
  //   //verificando se exibe as musicas na playlist clicada
  //   cy.wait(1000)
  //   cy.get("[aria-label='playlist-item']").first().click()

  //   cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  // })

  // it('Clicar em uma exibição de playlist e listar suas músicas', () => {
  //   //verificando se exibe as musicas na playlist clicada
  //   // cy.get("[aria-label='music-item']").eq(1).click()
  //   cy.get("[aria-label='music-item']").contains("Casca de Bala").click()
  //   cy.scrollTo("top")
  // })
})