const express = require('express');
const router = express.Router();
const logEstoqueController = require('../controllers/logEstoqueController');

router.route('/').get((req, res) => logEstoqueController.getAll(req, res));
router.route('/:id').get((req, res) => logEstoqueController.getOnly(req, res));
router.route('/:id').delete((req, res) => logEstoqueController.delete(req, res));

module.exports = router;
