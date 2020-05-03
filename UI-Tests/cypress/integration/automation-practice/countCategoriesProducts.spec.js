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
        if(cy.get('ul[id="homefeatured"] > li').length == 7);
        console.log('Products count pass');
    });

    it("Should verify best products", () => {
        cy.get('#home-page-tabs > li.active > a.blockbestsellers').click();
        cy.get('ul[id="homefeatured"] > li');
        if(cy.get('ul[id="homefeatured"] > li').length == 7);
        console.log('Products count pass');
    });

});