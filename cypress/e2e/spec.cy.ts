import * as cypress from "cypress";


describe('todo-app-test', () => {
  it('user can add tasks', () => {
    //add tasks
    cy.visit('http://localhost:3000/');
    // cy.findByRole('textbox').type('hello');
      cy.get(`[data-testid=todoInput]`).type('test');
     cy.findByRole('button', {  name: /add/i}).click();
    // cy.findByRole('button', {  name: /delete/i}).click();
    // cy.findByRole('button', {  name: /delete/i}).click();

  })
})