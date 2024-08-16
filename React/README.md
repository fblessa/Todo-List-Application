# Task List Application

Esta é uma aplicação simples de lista de tarefas desenvolvida com React.

## Como Rodar a Aplicação

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
  git clone git@github.com:fblessa/challenge.git
  cd challenge
  cd React
  docker build -t task-list-app .
  docker run -p 5173:5173 task-list-app
  Abra o navegador e vá para http://localhost:5173