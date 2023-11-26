const router = require('express').Router()

const usersRouter = require('./users')
const produtosRouter = require('./produtos');

router.use('/users', usersRouter);
router.use('/produtos', produtosRouter);

module.exports = router;