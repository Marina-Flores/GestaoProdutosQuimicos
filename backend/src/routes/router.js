const router = require('express').Router()

const usersRouter = require('./users');
const produtosRouter = require('./produtos');
const estoqueRouter = require('./estoque');
const logProdutosRouter = require('./logprodutos');
const logUsersRouter = require('./logusers');
const logEstoqueRouter = require('./logestoque');
const loginRouter = require('./auth');
const aulaRouter = require('./aula');
const verifyToken = require('../middlewares/authMiddleware');

router.use('/users', verifyToken, usersRouter);
router.use('/aula', verifyToken, aulaRouter);
router.use('/produtos', verifyToken, produtosRouter);
router.use('/estoque', verifyToken, estoqueRouter);
router.use('/log/produtos', verifyToken, logProdutosRouter);
router.use('/log/users', verifyToken, logUsersRouter);
router.use('/log/estoque', verifyToken, logEstoqueRouter);

module.exports = router;