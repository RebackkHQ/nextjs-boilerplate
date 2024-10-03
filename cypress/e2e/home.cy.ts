describe('Home Page Test', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should display the Home page', () => {
		cy.get('h1').should('contain.text', 'Home');
	});
});
