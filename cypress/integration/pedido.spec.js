/// <reference types="cypress" />

describe('Adicionar item', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  })

  it('Deve selecionar produtos para adicionar no carrinho', () => {
    var quantidade = 1

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(9) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
      .contains('Vulcan Weightlifting Tank')
      .click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type(quantidade)

    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should(
      'contain',
      quantidade +
        ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.'
    )
  })
})
