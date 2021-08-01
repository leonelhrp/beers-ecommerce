import categories from '../../src/consts/categories';
import { SITE_TITLE } from '../../src/consts/globals';

describe('Presence Of Elements on Header', function () {
  before('Initial', function () {
    cy.visit('http://localhost:3000');
    cy.title().should('contain', SITE_TITLE);
  });
  it('Ecommerce title should be visible', function () {
    cy.get(`[data-cy=TimeJobs]`).should('exist');
  });
  it('All categories should be visible', function () {
    categories.forEach((category) => {
      cy.get(`[data-cy=${category.title}]`).should('exist');
    })
  });
});
