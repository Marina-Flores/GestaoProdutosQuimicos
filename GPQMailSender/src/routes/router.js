const router = require('express').Router()
const emailRouter = require('./email');

router.use('/enviarEmails', emailRouter);

module.exports = router;