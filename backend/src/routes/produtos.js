const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');


router.route('/').post((req, res) => produtoController.create(req, res));
router.route('/').get((req, res) => produtoController.getAll(req, res));
router.route('/:id').get((req, res) => produtoController.getOnly(req, res));
router.route('/:id').post((req, res) => produtoController.update(req, res));
router.route('/:id').delete((req, res) => produtoController.delete(req, res));

module.exports = router;