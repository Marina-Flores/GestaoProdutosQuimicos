const router = require('express').Router()

const usersRouter = require('./users');
const produtosRouter = require('./produtos');
const loginRouter = require('./auth');
const verifyToken = require('../middlewares/authMiddleware');

router.use('/users', verifyToken, usersRouter);
router.use('/produtos', verifyToken, produtosRouter);
router.use('/login', loginRouter);

module.exports = router;