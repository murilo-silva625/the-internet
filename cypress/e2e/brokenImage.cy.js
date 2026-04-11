describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/broken_images')
  })
  it.only('Number of images', () => {
    cy.get('img').should(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })
})