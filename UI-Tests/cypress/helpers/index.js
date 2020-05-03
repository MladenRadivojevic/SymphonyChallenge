export * from './pages'

export  function cypressClickElement(element) {
     cy.get(element).click({ force: true });
  }
  
export  function cypressTypeAndCheck(element, inputValue) {

    cypressClickElement(element);
     cy.get(element)
      .type(`${inputValue}`, {force: true})
      .should("have.value", `${inputValue}`);
  }

