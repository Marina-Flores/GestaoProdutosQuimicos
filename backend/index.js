const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const db = require('./src/config/db');
const apiRoutes = require('./src/routes/router');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/config/swagger');
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(PORT, () => { console.log('\x1b[32m%s\x1b[0m', `\nServer running on port ${PORT}`)});