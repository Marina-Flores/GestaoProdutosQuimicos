const express = require('express');
const router = express.Router();
const emailController = require('../controllers/envioController');

router.route('/').get((req, res) => emailController.enviarEmails(req, res));

module.exports = router;