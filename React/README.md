# Task List Application

Esta é uma aplicação simples de lista de tarefas desenvolvida com React.

## Como Rodar a Aplicação

### Dentro do diretório REACT:

### Sem Docker

1. ### Clone o repositório:
   ```bash
   git clone git@github.com:fblessa/challenge.git
   cd challenge
   cd React
   npm install
   npm run dev

## Com Docker

1. ### Clone o repositório:
   ```bash
   git clone git@github.com:fblessa/challenge.git
   cd challenge
   cd React
   docker build -t task-list-app .
   docker run -p 5173:5173 task-list-app
   Abra o navegador e vá para http://localhost:5173


## Como Rodar Os Testes:

   ### Dentro do diretório REACT

1. ### Rode a aplicação com "npm run dev"
2. ### Execute o script "npm run test"