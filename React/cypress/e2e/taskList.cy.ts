/// <reference types="cypress" />

describe('TaskList Component', () => {
  beforeEach(() => {
    // Visita a página principal
    cy.visit('/');
  });

  it('should add a new task', () => {
    const taskName = 'New Task';
    
    // Digita o nome da tarefa e clica para adicionar
    cy.get('[data-testid="task-input"]').type(taskName);
    cy.get('.addTask').click();
    
    // Verifica se a tarefa foi adicionada à lista
    cy.get('.taskItem').should('have.length', 1);
    cy.get('.taskItem span').should('contain', taskName);
  });

  it('should toggle task completion', () => {
    const taskName = 'New Task';

    // Adiciona uma nova tarefa
    cy.get('[data-testid="task-input"]').type(taskName);
    cy.get('.addTask').click();

    // Alterna a conclusão da tarefa
    cy.get('.complete').click();

    // Verifica se a tarefa foi marcada como concluída
    cy.get('.taskItem span').should('have.css', 'text-decoration', 'line-through solid rgb(33, 53, 71)');

    // Desmarca a tarefa
    cy.get('.undo').click();
    cy.get('.taskItem span').should('not.have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
  });

  it('should filter completed tasks', () => {
    // Adiciona duas tarefas
    cy.get('[data-testid="task-input"]').type('Task 1');
    cy.get('.addTask').click();
    cy.get('[data-testid="task-input"]').type('Task 2');
    cy.get('.addTask').click();

    // Marca a primeira tarefa como concluída
    cy.get('.taskItem .complete').first().click();

    // Aplica o filtro para mostrar apenas tarefas concluídas
    cy.get('.filter').contains('Show Completed').click();

    // Verifica se apenas a tarefa concluída aparece
    cy.get('.taskItem').should('have.length', 1);
    cy.get('.taskItem span').should('contain', 'Task 1');
  });
});
