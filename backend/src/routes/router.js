const router = require('express').Router()

const usersRouter = require('./users');
const produtosRouter = require('./produtos');
const loginRouter = require('./auth');
const logProdutosRouter = require('./logprodutos');

router.use('/users', usersRouter);
router.use('/produtos', produtosRouter);
router.use('/login', loginRouter);
router.use('/log/produto', logProdutosRouter);

module.exports = router;