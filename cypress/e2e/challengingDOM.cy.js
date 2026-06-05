describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom')
  })
  
  it('should change canvas content after clicking any action button', () => {
    let before
    
    cy.get('#canvas').then(($canvas) => {
      before = $canvas[0].toDataURL()
    })

    cy.get('.button').eq(0).click()
    // Alternative selectors:
    // Red button -> .alert
    // Green button -> .success

    cy.get('#canvas').then(($canvas) => {
      const after = $canvas[0].toDataURL()
      expect(before).to.not.equal(after)
    })
  })

  it('should update URL after clicking edit link', () => {
    cy.get('a[href="#edit"]').eq(2).click()
    cy.url().should('include', 'edit')
  })

  it('should update URL after clicking delete link', () => {
    cy.get('a[href="#delete"]').eq(3).click() 
    cy.url().should('include', 'delete')
  })
})