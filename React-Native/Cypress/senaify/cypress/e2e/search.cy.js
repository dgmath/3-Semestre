describe('template spec', () => {
    before(() => {
        cy.visit('/')
    })

    it('ir para a tela de busca', () => {
        cy.get("[href='/Search']").click()

        //cy.scrollTo("top")
    })

    it("Procurar por uma música", () => {
        cy.get("[data-testid='buscar']").type("Casca de Bala")
        cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    })

    it("Verificar se realmente tem uma música", () => {
        cy.get("[aria-label='music-item']").filter(":contains('Casca de Bala')").click();

    });

    it("clicou no botao curtir", async() => {
        cy.wait(1500)
      
        cy.get("[aria-label='music-item']").first().then((item) =>{
          cy.get(item).click()
          cy.wrap(item).find("[data-testid='icon-button']").click()
        })
       })

})