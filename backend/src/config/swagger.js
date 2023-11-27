const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GPQ API',
      version: '1.0.0',
      description: '',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },  
  apis: [path.resolve(__dirname, '../routes/*.js')], // Caminho para os arquivos de rotas
};

const specs = swaggerJsdoc(options);

module.exports = specs;