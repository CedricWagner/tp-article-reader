describe('empty spec', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/posts').as('postPost')
    cy.visit('http://localhost:3000/')
  })
  
  it('should display 100 articles', () => {
    cy.get('.post-card').should('have.length', 100)
  })
  it('should navigate to post details', () => {
    cy.get('.post-card .btn-primary').first().click()
  })
  it('should send post data', () => {
    
    cy.visit('http://localhost:3000/add-post')
    cy.get('input[name=title]').type("Mon titre")
    cy.get('textarea[name=body]').type("Mon contenu")

    cy.get('button.btn-primary').first().click()

    cy.wait('@postPost').then(({response, request}) => {
      expect(response.statusCode).to.eq(201)
      expect(request.body.title).to.eq("Mon titre")
      expect(request.body.body).to.eq("Mon contenu")
    })

  })
})