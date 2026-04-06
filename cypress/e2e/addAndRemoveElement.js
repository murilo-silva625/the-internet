describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
  })
  it('add element', () => {
    cy.contains('Add Element').click()

    cy.contains('Delete').should('be.visible')
  })

  it('delete element', () =>{
    cy.contains('Add Element').click()
    cy.contains('Delete').click()

    cy.contains('Delete').should('not.exist')
  })

  it('add more than one element', () => {
    for(let i = 0; i < 5; i++){
      cy.contains('Add Element').click()
    }
    cy.get('button.added-manually').should('have.length', 5)
  })

  it('delete all element', () => {
  for(let i = 0; i < 5; i++){
    cy.contains('Add Element').click()
  }
  cy.get('button.added-manually').should('have.length', 5)
  cy.get('button.added-manually').each(($btn) => {
    cy.wrap($btn).click()
  })
  cy.get('button.added-manually').should('have.length', 0)
  })

  it.only('delete one element and keep others', () => {
  for(let i = 0; i < 5; i++){
    cy.contains('Add Element').click()
  }
  cy.get('button.added-manually').should('have.length', 5)
  cy.get('button.added-manually').eq(3).click()
  cy.get('button.added-manually').should('have.length', 4)
  })
})