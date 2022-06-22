/// <reference types="cypress" />
const dados = require('../fixtures/faturamento.json')

describe('Realizar faturamento de compra', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/checkout/')
  })

  it('Deve realizar faturamento', () => {
    cy.get('#billing_first_name').click().clear().type(dados.nome)
    cy.get('#billing_last_name').click().clear().type(dados.sobrenome)
    cy.get('#billing_company').click().clear().type(dados.empresa)

    cy.get('#select2-billing_country-container')
      .click()
      .type(dados.pais)
      .get('[aria-selected="true"]')
      .click()

    cy.get('#billing_address_1').click().clear().type(dados.endereco)
    cy.get('#billing_address_2').click().clear().type(dados.numero)
    cy.get('#billing_city').click().clear().type(dados.cidade)
    cy.get('#select2-billing_state-container')
      .click()
      .type(dados.estado)
      .get('[aria-selected="true"]')
      .click()
    cy.get('#billing_postcode').click().clear().type(dados.CEP)
    cy.get('#billing_phone').click().clear().type(dados.telefone)
    cy.get('#billing_email').click().clear().type(dados.email)
    cy.get('#order_comments').click().clear().type(dados.infoadd)

    cy.get('#payment_method_cheque').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
  })
})
