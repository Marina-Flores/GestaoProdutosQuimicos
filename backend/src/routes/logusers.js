const express = require('express');
const router = express.Router();
const logUserController = require('../controllers/logUserController');

router.route('/').get((req, res) => logUserController.getAll(req, res));
router.route('/:id').get((req, res) => logUserController.getOnly(req, res));
router.route('/:id').delete((req, res) => logUserController.delete(req, res));

module.exports = router;