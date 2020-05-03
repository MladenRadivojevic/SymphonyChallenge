import { cypressClickElement, cypressTypeAndCheck, HomePage, SignInPage, AccountCreationPage } from '../../helpers';

import faker from 'faker';

export const testEmail = faker.internet.email();
export const firstName = faker.name.firstName();
export const lastName = faker.name.lastName();
export const password = faker.internet.password();

describe("Visit Main Page Suite", () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
      })
    it("Should maximize window and visit page Automation Practice", () => {
        cy.visit('');
    });

});