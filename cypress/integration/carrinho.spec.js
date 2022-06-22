/// <reference types="cypress" />

describe('carrinho', () => {
  it('Deve ir para o carrinho', () => {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get(
      '#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout'
    ).click()
  })
})
