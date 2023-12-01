const router = require('express').Router()

const usersRouter = require('./users');
const produtosRouter = require('./produtos');
const estoqueRouter = require('./estoque');
const logProdutosRouter = require('./logprodutos');
const logUsersRouter = require('./logusers');
const logEstoqueRouter = require('./logEstoque'); // Adicionando a nova rota
const loginRouter = require('./auth');
const verifyToken = require('../middlewares/authMiddleware');

router.use('/users', verifyToken, usersRouter);
router.use('/produtos', verifyToken, produtosRouter);
router.use('/estoque', verifyToken, estoqueRouter);
router.use('/log/produtos', verifyToken, logProdutosRouter);
router.use('/log/users', verifyToken, logUsersRouter);
router.use('/log/estoque', verifyToken, logEstoqueRouter); // Adicionando a nova rota

module.exports = router;