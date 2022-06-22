/// <reference types="cypress" />

const dados = require('../fixtures/perfil.json')
const faturar = require('../fixtures/faturamento.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('/minha-conta/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.login(dados.usuario, dados.senha)
    cy.adicionarProduto('Vulcan Weightlifting Tank', 'L', 'Black', 1)
    cy.adicionarProduto(
      'Typhon Performance Fleece-lined Jacket',
      'L',
      'Black',
      1
    )
    cy.adicionarProduto('Zoltan Gym Tee', 'L', 'Blue', 1)
    cy.adicionarProduto('Zeppelin Yoga Pant', 36, 'Blue', 1)
    cy.addcarrinho()
    cy.faturamento(
      faturar[2].nome,
      faturar[2].sobrenome,
      faturar[2].empresa,
      faturar[2].pais,
      faturar[2].endereco,
      faturar[2].numero,
      faturar[2].cidade,
      faturar[2].estado,
      faturar[2].CEP,
      faturar[2].telefone,
      faturar[2].email,
      faturar[2].infoadd
    )
    cy.get('.woocommerce-notice').should(
      'contain',
      'Obrigado. Seu pedido foi recebido.'
    )
    cy.screenshot()
  })
})
