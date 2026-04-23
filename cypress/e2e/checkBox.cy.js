describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
  })
  
  it('check whith click', () => {
    cy.get('input[type="checkbox"]').click({ multiple: true })
  })

  it.only('click only in first checkbox', () => {
    cy.get('input[type="checkbox"]').eq(0).click()
  })

  it('click only in second checkbox', () => {
    cy.get('input[type="checkbox"]').eq(1).click()
  })

  it('check all checkbox', () => {
    cy.get('input[type="checkbox"]').check()
  })

  it('uncheck all checkbox', () => {
    cy.get('input[type="checkbox"]').uncheck()
  })
})