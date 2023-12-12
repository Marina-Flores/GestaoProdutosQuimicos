const express = require('express');
const app = express();
const PORT = 3001;
const routes = require('./src/routes/router');
const db = require('./src/config/db');

app.use(express.json());
app.use('/service', routes);

app.listen(PORT, () => { console.log('\x1b[32m%s\x1b[0m', `\nServer running on port ${PORT}`)});