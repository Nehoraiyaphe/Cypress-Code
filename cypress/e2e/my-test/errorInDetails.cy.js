describe("Error in credit details", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
  });
  it("Error in First Name", () => {
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".svg-inline--fa ").click();
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-one.html");
    cy.get("[data-test=lastName]").type("b");
    cy.get("[data-test=postalCode]").type("123");
    cy.get(".btn_primary").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Error: First Name is required"
    );
  });
  it("Error in Last Name", () => {
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".svg-inline--fa ").click();
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-one.html");
    cy.get("[data-test=firstName]").type("y");
    cy.get("[data-test=postalCode]").type("123");
    cy.get(".btn_primary").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Error: Last Name is required"
    );
  });

  it("Error in Zip Code", () => {
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".svg-inline--fa ").click();
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-one.html");
    cy.get("[data-test=firstName]").type("a");
    cy.get("[data-test=lastName]").type("b");
    cy.get(".btn_primary").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Error: Postal Code is required"
    );
  });
});
