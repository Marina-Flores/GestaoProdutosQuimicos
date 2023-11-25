const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./src/config/db');
const apiRoutes = require('./src/routes/router');

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => { console.log('\x1b[32m%s\x1b[0m', `\nServer running on port ${PORT}`)});