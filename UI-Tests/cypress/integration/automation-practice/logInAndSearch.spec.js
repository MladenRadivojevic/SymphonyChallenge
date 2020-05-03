import {HomePage, SignInPage, LoggedInHomePage} from '../../helpers';

import faker from 'faker';

export const testEmail = faker.internet.email();
export const firstName = faker.name.firstName();
export const lastName = faker.name.lastName();
export const password = faker.internet.password();

describe("Searh term suite", () => {

    beforeEach(() => {
       cy.viewport(1280, 720)
      });


    it("Should maximize window and visit page Automation Practice", () => {
        cy.visit('');
        cy.get(HomePage.signInButton).click({force: true});
        cy.get(SignInPage.existingEmail).type('mladcepes@gmail.com');
        cy.get(SignInPage.existingPassword).type('12345678');
        cy.get(SignInPage.subbmitLoginButton).click();

    });

    it("Should verify login and locate sign out button", () => {
        cy.get(LoggedInHomePage.signOutButton);
    });

    it("Should search for term", () => {
        cy.get(LoggedInHomePage.searchInput).type('Printed dresses {enter}');
    });

    it("Should collect search results names", () => {
       
        cy.get('ul.product_list.grid.row >li > div> div> h5> a[title]').each(($el, index, $list) => {
              cy.writeFile('test.txt',`${$el[0].title}\r\n`,{flag:'a'});
            });
    });

});