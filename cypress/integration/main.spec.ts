const search = 'header input'
const cartButton = 'header button'
const productAddButton = 'main > div:nth-child(5) button'
const productRemoveButton = 'main > div:nth-child(5) button:first-child()'
const productAddMoreButton = 'main > div:nth-child(5) button:last-child()'
const cartContent = 'div[data-popper-interactive="false"]'
const productPrice = '13,83'

describe('Main', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'))

  it('should display all products on main page', () => {
    cy.get('main').children('div').should('have.length', 25)
    cy.get(cartButton).click()
    cy.get(cartContent).contains('prázdný')
  })

  it('should add product to cart', () => {
    cy.get(productAddButton).contains('Přidat do košíku').click()
    cy.get(productAddButton).should('have.length', 2)
    cy.get(cartButton).contains(productPrice).click()
    cy.get(cartContent).contains('Celková cena')
    cy.get(cartContent).contains('Pomeranč')
  })

  it('should remove 1 piece of product from cart', () => {
    cy.get(productAddButton).click()
    cy.get(productAddMoreButton).click()
    cy.get(productAddButton).should('have.length', 2)
    cy.get(cartButton).click()
    cy.get(cartContent).contains('27,66')
    cy.get(cartContent).contains('2x')
    cy.get(productRemoveButton).click()
    cy.get(cartButton).click()
    cy.get(cartContent).contains(productPrice)
    cy.get(cartContent).contains('1x')
  })

  it('should empty cart', () => {
    cy.get(productAddButton).click()
    cy.get(cartButton).click()
    cy.get(cartContent).contains('Pomeranč')
    cy.get(cartContent + '>button').click()
    cy.get(cartContent).contains('prázdný')
  })

  it('should filter items', () => {
    cy.get(search).type('bAna')
    cy.get('main').children('div').should('have.length', 3)
    cy.get(search).clear()
    cy.get('main').children('div').should('have.length', 25)

  });
})
