describe('Validación básica de página web', () => {
    it('Debe validar el título y un texto visible en la página', () => {
        cy.visit('https://www.mercadolibre.cl/')
        cy.url().should('include', 'mercadolibre.cl')
        cy.title().should('include', 'Mercado Libre')
        cy.contains('Categorías').should('be.visible')
    })
})

