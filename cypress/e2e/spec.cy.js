describe('My First Test', () => {
	it('Criar anotação', () => {
    cy.visit('http://localhost:3000/admin/anotacoes')

		cy.get('.btn-dark').click()

		cy.get('#titulo').type('Teste')

		cy.get('#conteudo').type('de Software')

		cy.get('.btn-dark').click()

		cy.get('.card-body')
	})

	it('Editar anotação', () => {
		cy.visit('http://localhost:3000/admin/anotacoes')

		cy.get('.bi-pencil-square').click()

		// Limpando campos
		cy.get('#titulo').clear()
		cy.get('#conteudo').clear()
		
		// Adicionando novo conteúdo
		cy.get('#titulo').type('Apresentação')

		cy.get('#conteudo').type('Testes de Software')

		cy.get('.btn-dark').click()

		cy.get('h3').contains('Apresentação')
	})

	it('Buscar anotação', () => {
		cy.visit('http://localhost:3000/admin/anotacoes')

		cy.get('input[type="text"]').type('Testes')

		cy.get('.btn-success').click()

		cy.get('h5').contains('Testes')
	})

	it('Campo de busca vazio', () => {
		cy.visit('http://localhost:3000/admin/anotacoes')

		cy.get('input[type="text"]').type('Falha')
		cy.get('.btn-success').click()

		cy.get('.card-body').should('not.exist')
	})


	it('Deletar anotação', () => {
		cy.visit('http://localhost:3000/admin/anotacoes')

		cy.get('.bi-file-earmark-x-fill').click()

		cy.get('.card-body').should('not.exist')
	})
})
