Cypress.Commands.add('login', (usuario, senha) => {
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha, { log: false })
  cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add(
  'faturamento',
  (
    nome,
    sobrenome,
    empresa,
    pais,
    endereco,
    numero,
    cidade,
    estado,
    CEP,
    telefone,
    email,
    infoadd
  ) => {
    cy.get('#billing_first_name').click().clear().type(nome)
    cy.get('#billing_last_name').click().clear().type(sobrenome)
    cy.get('#billing_company').click().clear().type(empresa)

    cy.get('#select2-billing_country-container')
      .click()
      .type(pais)
      .get('[aria-selected="true"]')
      .click()

    cy.get('#billing_address_1').click().clear().type(endereco)
    cy.get('#billing_address_2').click().clear().type(numero)
    cy.get('#billing_city').click().clear().type(cidade)
    cy.get('#select2-billing_state-container')
      .click()
      .type(estado)
      .get('[aria-selected="true"]')
      .click()
    cy.get('#billing_postcode').click().clear().type(CEP)
    cy.get('#billing_phone').click().clear().type(telefone)
    cy.get('#billing_email').click().clear().type(email)
    cy.get('#order_comments').click().clear().type(infoadd)

    cy.get('#payment_method_cheque').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
  }
)

Cypress.Commands.add(
  'adicionarProduto',
  (produto, tamanho, cor, quantidade) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(' .page-numbers').contains('16').click()
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should(
      'contain',
      '“' + produto + '” foi adicionado no seu carrinho.'
    )
  }
)

Cypress.Commands.add('addcarrinho', () => {
  cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
  cy.get(
    '#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout'
  ).click()
})
