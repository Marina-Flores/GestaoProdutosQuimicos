const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/').post((req, res) => userController.create(req, res));
router.route('/').get((req, res) => userController.getAll(req, res));

module.exports = router;