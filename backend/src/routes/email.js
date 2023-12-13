const express = require('express');
const router = express.Router();
const EmailController = require('../controllers/emailController');

/**
 * @swagger
 * tags:
 *   name: RecuperarSenha
 *   description: Endpoints relacionados à recuperação de senha
 */

/**
 * @swagger
 * /api/recuperar-senha/enviar-email:
 *   post:
 *     summary: Envia um e-mail.
 *     description: Endpoint para enviar um e-mail.
 *     tags: [RecuperarSenha]
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
 *                 description: E-mail do destinatário.
 *     responses:
 *       '200':
 *         description: E-mail enviado com sucesso.
 *       '404':
 *         description: Usuário não encontrado.
 *       '500':
 *         description: Erro interno no servidor.
 */
router.route('/enviar-email').post(EmailController.enviarEmail);

/**
 * @swagger
 * /api/recuperar-senha/validar-token:
 *   get:
 *     summary: Valida o token de recuperação de senha.
 *     description: Valida o token enviado para recuperar a senha do usuário.
 *     tags: [RecuperarSenha]
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         description: Token de recuperação de senha a ser validado.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Token válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                 userId:
 *                   type: string
 *                   description: ID do usuário extraído do token.
 *       '400':
 *         description: Token não fornecido.
 *       '401':
 *         description: Token inválido ou expirado.
 *       '500':
 *         description: Erro interno no servidor.
 */
router.route('/validar-token').get(EmailController.validarToken);

/**
 * @swagger
 * /api/recuperar-senha/trocar-senha:
 *   post:
 *     summary: Atualiza a senha do usuário.
 *     description: Atualiza a senha do usuário com base no token fornecido.
 *     tags: [RecuperarSenha]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token de autenticação do usuário.
 *               novaSenha:
 *                 type: string
 *                 format: password
 *                 description: Nova senha do usuário.
 *     responses:
 *       '200':
 *         description: Senha atualizada com sucesso.
 *       '400':
 *         description: Requisição inválida (por exemplo, campos ausentes).
 *       '404':
 *         description: Usuário não encontrado.
 *       '500':
 *         description: Erro interno no servidor.
 */
router.route('/trocar-senha').post((req, res) => EmailController.trocarSenha(req, res));

module.exports = router;
