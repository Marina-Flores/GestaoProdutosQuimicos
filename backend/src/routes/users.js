const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/').post((req, res) => userController.create(req, res));
router.route('/all').get((req, res) => userController.getAll(req, res));
router.route('/:id').get((req, res) => userController.getOnly(req, res));
router.route('/:id').post((req, res) => userController.update(req, res));
router.route('/:id').delete((req, res) => userController.delete(req, res));

module.exports = router;