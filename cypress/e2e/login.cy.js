describe('Login-SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Login exitoso con usuario válido', () => {
        cy.fixture('users.json').then((users) => {
            cy.get('[data-test="username"]').clear().type(users.validUser.username)
            cy.get('[data-test ="password"]').clear().type(users.validUser.password)
            cy.get('[data-test ="login-button"]').click()
            cy.url().should('include', '/inventory.html')
            cy.contains('Products').should('be.visible')
        })
    })

    it('Login con usuario bloqueado', () => {
        cy.fixture('users.json').then((users) => {
            cy.get('[data-test="username"]').clear().type(users.lockedUser.username)
            cy.get('[data-test ="password"]').clear().type(users.lockedUser.password)
            cy.get('[data-test ="login-button"]').click()
            cy.get('[data-test="error"]').should('be.visible').and('contain', 'Sorry, this user has been locked out.')
        })
    })

    it('Login usuario con credenciales incorrectas', () => {
        cy.fixture('users.json').then((users) => {
            cy.get('[data-test="username"]').clear().type(users.invalidUser.username)
            cy.get('[data-test ="password"]').clear().type(users.invalidUser.password)
            cy.get('[data-test ="login-button"]').click()
            cy.get('[data-test="error"]').should('be.visible').and('contain', 'Username and password do not match any user in this service')
        })
            
    })

    it('No permite Loguin con campos vacios', () => {
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')
    })

    it('No permite acceder a inventory sin login', () => {
        cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
        cy.url().should('not.include', '/inventory.html')     
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'You can only access').and('contain', '/inventory.html')
    })
})