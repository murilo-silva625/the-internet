describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/context_menu')
  })
  
  it('check whith click', () => {
    cy.get('#hot-spot').rightclick()
    cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('You selected a context menu')
    })
  })
})