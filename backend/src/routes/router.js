const router = require('express').Router()

const usersRouter = require('./users');
const produtosRouter = require('./produtos');
const loginRouter = require('./auth');
const logProdutosRouter = require('./logprodutos');
const logUsersRouter = require('./logusers');
const verifyToken = require('../middlewares/authMiddleware');

router.use('/users', verifyToken, usersRouter);
router.use('/produtos', verifyToken, produtosRouter);
router.use('/login', loginRouter);
router.use('/log/produtos', verifyToken, logProdutosRouter);
router.use('/log/users', verifyToken, logUsersRouter);
router.use('/log/produtos', logProdutosRouter);

module.exports = router;