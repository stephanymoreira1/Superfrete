describe('code of origin', () => {
    it('fill in without zip code of origin', () => {
          cy.viewport(1366, 768);
          cy.visit('https://web.superfrete.com/')
  
          cy.get('#originPostcode').type()
          
          cy.get('#object_format').click()
          cy.get('.Mui-selected').contains('Caixa / Pacote').click()
          cy.get('#object_format').should('contain', 'Caixa / Pacote');
  
          cy.get('[id="weight"]').select('Até 300g')
          cy.get('[id="packageHeight"]').type('2')
          cy.get('[id="packageWidth"]1').type('11')
          cy.get('[id="packageDepth"]').type('16')
          cy.get('[id="destinationPostcode"]').type('05407002')
          cy.get('[id="destinationPostcode"]').click()
  
          //vericar texto de erro ao não completar com cep origem
          cy.get('body').should('contain', 'CEP de origem é obrigatório')
          cy.get('p').should('have.text', 'CEP de origem é obrigatório')
        })
    })