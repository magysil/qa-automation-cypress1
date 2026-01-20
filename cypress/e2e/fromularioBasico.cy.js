describe('Formulario-Acciones básicas',() => {
    it('Debe completar un formulario correctamente',() => {
        cy.visit('https://example.cypress.io/commands/actions') //Visitar la página de ejemplo de Cypress

        cy.get('#email1').type('msbQA@gmail.com').should('have.value', 'msbQA@gmail.com')  //input de texto    

        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked') //checkbox existen, habilitados, se pueden marcar

        cy.get('.action-radios [type="radio"]').not('[disabled]').check('radio1').should('be.checked')//radio existen, habilitados, se pueden seleccionar
        
        cy.get('.action-select').select('bananas').should('have.value','fr-bananas') //select existen, se puede seleccionar una opción
    })
})