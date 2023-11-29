const express = require('express');
const router = express.Router();
const logProdutoController = require('../controllers/logProdutoController');

router.route('/').get((req, res) => logProdutoController.getAll(req, res));
router.route('/:id').get((req, res) => logProdutoController.getOnly(req, res));
router.route('/:id').delete((req, res) => logProdutoController.delete(req, res));

module.exports = router;