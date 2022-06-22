describe('Validar o pedido', () => {
  it('Deve validar para ver se o pedido foi realizado com sucesso', () => {
    cy.get('h1[class="page-title"]').should('contain', 'PEDIDO RECEBIDO')
    cy.screenshot()
  })
})
