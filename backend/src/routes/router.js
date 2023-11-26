const router = require('express').Router()

const usersRouter = require('./users');
const produtosRouter = require('./produtos');
const loginRouter = require('./auth');

router.use('/users', usersRouter);
router.use('/produtos', produtosRouter);
router.use('/login', loginRouter);

module.exports = router;