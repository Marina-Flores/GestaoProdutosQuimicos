const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Autenticar usuário
 *     description: Autentica um usuário com base nas credenciais fornecidas (email e senha)
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: E-mail do usuário
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *     responses:
 *       '200':
 *         description: Autenticação bem-sucedida
 *       '401':
 *         description: Credenciais inválidas
 */
router.post('/', authController.login);


module.exports = router;