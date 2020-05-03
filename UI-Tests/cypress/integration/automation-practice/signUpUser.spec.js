import { cypressClickElement, cypressTypeAndCheck, HomePage, SignInPage, AccountCreationPage } from '../../helpers';

import faker from 'faker';

export const testEmail = faker.internet.email();
export const firstName = faker.name.firstName();
export const lastName = faker.name.lastName();
export const password = faker.internet.password();

describe("Sign up User Page Suite", () => {

    before("Visits main page ", () => { 
        cy.viewport(1280, 720);
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364');
    });
    beforeEach('Preserves cookies', () => {
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364');
    });

    it("Should locate sign in button and click it",  () => { 
        cy.get(HomePage.signInButton).click({force: true});
        cy.get(SignInPage.emailInputField).type(testEmail);
        cy.get(SignInPage.createEmailButton).click({ force: true });
        cy.get(AccountCreationPage.genderRadioButtonMale).click({ force: true });
        cy.get(AccountCreationPage.genderRadioButtonFemale).click({ force: true });
        cy.get(AccountCreationPage.customerFirstName).type(firstName);
        cy.get(AccountCreationPage.customerLastName).type(lastName);
        cypressTypeAndCheck(AccountCreationPage.customerPassword, password);

    });

    it("Writes test data used to testData.txt file", () => {

        cy.writeFile('testData.txt', `Email used for testing: ${testEmail}\r\n`);
        cy.writeFile('testData.txt', `Selected GENDER: MALE \r\n`, {flag: 'a+'});
        cy.writeFile('testData.txt', `Selected GENDER: FEMALE \r\n`, {flag: 'a+'});
        cy.writeFile('testData.txt', `Customer first name used for testing: ${firstName}\r\n`, {flag: 'a+'});
        cy.writeFile('testData.txt', `Customer last name used for testing: ${lastName}\r\n`,  {flag: 'a+'});
        cy.writeFile('testData.txt', `Customer password used for testing: ${password}\r\n`,  {flag: 'a+'});
    });

}); 
