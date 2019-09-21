describe("Django REST framework / React quickstart app", () => {
  const volunteer = {
    name: "Armin",
    email: "some-email@gmail.com",
    message: "I am looking for a React tutor"
  };
  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy.get('input[name="name"]')
      .type(volunteer.name)
      .should("have.value", volunteer.name);
    cy.get('input[name="email"]')
      .type(volunteer.email)
      .should("have.value", volunteer.email);
    cy.get('textarea[name="message"]')
      .type(volunteer.message)
      .should("have.value", volunteer.message);
    cy.get("form").submit();
  });
  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(
      `${volunteer.name}${volunteer.email}${volunteer.message}`
    );
  });
  // more tests here
});
