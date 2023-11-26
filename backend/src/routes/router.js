const router = require('express').Router()

const usersRouter = require('./users');
router.use('/users', usersRouter);

const produtosRouter = require('./produtos');
router.use('/produtos', produtosRouter);

module.exports = router;