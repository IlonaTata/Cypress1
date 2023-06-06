
describe('login page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('logins succesfully', () => { 
    cy.login( 'test@test.com', 'test');
    cy.contains('Добро пожаловать').should('be.visible')
    })

  it('logins error on empty login', () => { 
    cy.login(null, 'test');
    cy.get('#mail').then((el) => {
      expect(el[0].checkValidity()).to.be.false;
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
})
  })
  it('logins error on empty password', () => { 
    cy.login('test@test.com', null);
    cy.get('#pass').then((el) => {
      expect(el[0].checkValidity()).to.be.false;
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
})
  })
})
  describe('add book page', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(  'bropet@mail.ru', '123')
    })
  it('add books', () => { 
    cy.book('Руслан и Людмила','сказка','Александр Пушкин')
    cy.get('h4').click()
    cy.contains('Delete from favorite').should('be.visible')
  })
  it('delete book', () => { 
    cy.get('h4').click()
    cy.get('.card-footer > .btn').click()
    cy.contains('Please add').should('be.visible')
})
  it('download book', () => { 
    cy.book('Руслан и Людмила','сказка','Александр Пушкин')
    cy.get('h4').click()
    cy.get('.card-title').click()
    cy.get('.col-md-7 > .btn').click()
  })
  })


