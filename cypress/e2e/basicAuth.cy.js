describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com')
  })
  
  it('should authenticate with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
    auth: {
      username: 'admin',
      password: 'admin'
    }
  })
  cy.url().should('eq', 'https://the-internet.herokuapp.com/basic_auth')
  })

  it('should return 200 with valid credentials', () => {
    cy.request({
    url: 'https://the-internet.herokuapp.com/basic_auth',
    auth: {
      username: 'admin',
      password: 'admin'
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
  })
  })

  it('should fail authentication with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
    auth: {
      username: 'admin12',
      password: 'admin'
    },
    failOnStatusCode: false
  })
  })

  it('should return 401 with invalid credential', () => {
    cy.request({
    url: 'https://the-internet.herokuapp.com/basic_auth',
    auth: {
      username: 'admin12',
      password: 'admin'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.equal(401)
  })
  })

  it('should fail authentication without credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
    auth: {
      username: '',
      password: ''
    },
    failOnStatusCode: false
  })
  })

  it('should return 401 without credential', () => {
    cy.request({
    url: 'https://the-internet.herokuapp.com/basic_auth',
    auth: {
      username: 'admin12',
      password: 'admin'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.equal(401)
  })
  })
})