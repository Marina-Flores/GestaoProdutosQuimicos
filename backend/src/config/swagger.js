const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nome da sua API',
      version: '1.0.0',
      description: 'Descrição da sua API',
    },
  },
  apis: [path.resolve(__dirname, '../routes/*.js')], // Caminho para os arquivos de rotas
};

const specs = swaggerJsdoc(options);

module.exports = specs;