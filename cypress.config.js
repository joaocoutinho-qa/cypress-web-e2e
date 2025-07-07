// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "jt3axt",

  e2e: {
    fixturesFolder: 'fixtures',                             // Caminho para fixtures
    supportFile: 'support/e2e.js',                          // Caminho para o arquivo de suporte global
    baseUrl: 'https://magento.softwaretestingboard.com/',   // URL base do site que você está testando
    specPattern: 'e2e/tests/**/*.cy.js',                    // Padrão dos arquivos de teste
     watchForFileChanges: false,                            // desliga a execução automática a cada atualização
  },
});
