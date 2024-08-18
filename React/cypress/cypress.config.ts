import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Substitua pela URL correta da sua aplicação
    setupNodeEvents(on, config) {
      // Configurações adicionais, se necessário
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
