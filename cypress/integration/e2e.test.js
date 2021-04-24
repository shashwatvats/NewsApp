describe("News App Test cases", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should check for Wrong Login Credentials", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password1");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get(".MuiAlert-message").should(
      "have.text",
      "Incorrect Username Or Password!"
    );
  });
  it("should check for Correct Login Credentials", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#filterButton").contains("Filter");
  });
  it("Header component must have admin text", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#heading").contains("ADMIN");
  });
  it("On Adding to read later it should check the Snackbar", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#readLater").click();
    cy.wait(1000);
    cy.get(".MuiAlert-message").contains("Added To Read Later!");
  });
  it("Register page should have heading Register", () => {
    cy.visit("/register");
    cy.contains("Register");
  });
  it("On clicking Logout it should return to login Page", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#logOut").click();
    cy.wait(1000);
    cy.contains("Login");
  });
  it("On clicking Readnow it should be redirected to readnow", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#readNow").click();
    cy.wait(1000);
    cy.url("http://localhost/readnow");
  });
  it("Footer should Have Copyright Shashwat Vats", () => {
    cy.contains("Shashwat Vats");
  });
  it("On clicking Readnow it should be redirected to readnow", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#filterButton").click();
    cy.get("#exampleModal").contains("Select From Below Categories");
  });
  it("On clicking Readnow it should be redirected to readnow", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#btnLogin").click();
    cy.wait(1000);
    cy.get("#filterButton").click();
    cy.wait(1000);
    cy.get('[type="radio"]').check("us");
    cy.get("#search").click();
    cy.wait(2000);
    cy.get("#filterButton").contains("Filter");
  });
});
