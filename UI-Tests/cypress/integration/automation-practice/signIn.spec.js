import {
  cypressClickElement,
  cypressTypeAndCheck,
  HomePage,
  SignInPage,
  AccountCreationPage,
} from "../../helpers";

import faker from "faker";

export const testEmail = faker.internet.email();
export const firstName = faker.name.firstName();
export const lastName = faker.name.lastName();
export const password = faker.internet.password();

describe("Visit Main Page Suite", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    Cypress.Cookies.debug(true);
    Cypress.Cookies.preserveOnce("PrestaShop-a30a9934ef476d11b6cc3c983616e364");
    Cypress.Cookies.defaults({
      whitelist: "PrestaShop-a30a9934ef476d11b6cc3c983616e364",
    });
  });

  it("Should visit automation practice page", () => {
    cy.visit("", { followRedirect: false });
  });

  it("Should locate sign in button and click it", () => {
    cypressClickElement(HomePage.signInButton);
  });

  it("Should locate email input field - > Input and input validation", () => {
    cypressTypeAndCheck(SignInPage.emailInputField, testEmail);
  });

  it("Should submit email ", () => {
    cypressClickElement(SignInPage.createEmailButton);
  });

  it("Should enter all account creation data ", () => {
    cypressClickElement(AccountCreationPage.genderRadioButtonMale);
    cypressClickElement(AccountCreationPage.genderRadioButtonFemale);
    cypressTypeAndCheck(AccountCreationPage.customerFirstName, firstName);
    cypressTypeAndCheck(AccountCreationPage.customerLastName, lastName);
    cypressTypeAndCheck(AccountCreationPage.customerPassword, password);
  });

  it("Writes test data used to testData.txt file", () => {
    cy.writeFile("testData.txt", `Email used for testing: ${testEmail}\r\n`);
    cy.writeFile("testData.txt", `Selected GENDER: MALE \r\n`, { flag: "a+" });
    cy.writeFile("testData.txt", `Selected GENDER: FEMALE \r\n`, {
      flag: "a+",
    });
    cy.writeFile(
      "testData.txt",
      `Customer first name used for testing: ${firstName}\r\n`,
      { flag: "a+" }
    );
    cy.writeFile(
      "testData.txt",
      `Customer last name used for testing: ${lastName}\r\n`,
      { flag: "a+" }
    );
    cy.writeFile(
      "testData.txt",
      `Customer password used for testing: ${password}\r\n`,
      { flag: "a+" }
    );
  });
});
