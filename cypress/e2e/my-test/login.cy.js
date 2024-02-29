describe("login Successfully", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  });

  // עבור משתמש ראשון
  it("should First login Connect Successfully", () => {
    cy.findByPlaceholderText("Username").type("standard_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });

  // עבור משתמש שני שלא מתחבר
  it("should Second name  throw an error when login ", () => {
    cy.findByPlaceholderText("Username").type("locked_out_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.get("[data-test=error]").should(
      "contain.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  // עבור משתשמ שלישי
  it("should Third login Connect Successfully", () => {
    cy.findByPlaceholderText("Username").type("problem_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });

  // עבור משתמש רביעי
  it("should Fourth login Connect Successfully", () => {
    cy.findByPlaceholderText("Username").type("performance_glitch_user");
    cy.findByPlaceholderText("Password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });
});
