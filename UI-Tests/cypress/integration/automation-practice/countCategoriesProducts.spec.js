import {HomePage, SignInPage, LoggedInHomePage} from '../../helpers';

import faker from 'faker';


describe("Searh term suite", () => {

    beforeEach(() => {
       cy.viewport(1280, 720)
      });


    it("Should maximize window and visit page Automation Practice", () => {
        cy.visit('');
    });


    it("Should verify popular products", () => {
        cy.get('ul[id="homefeatured"] > li');
        cy.get('ul[id="homefeatured"] > li').should('have.length',7);
       
    });

    it("Should verify best products", () => {
        cy.get('#home-page-tabs > li:nth-child(2) > a').click();
        cy.get('ul[id="homefeatured"] > li').should('have.length', 7);

    });
});