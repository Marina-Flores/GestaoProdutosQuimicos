const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados aos usuários
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Criar um novo usuário
 *     description: Cria um novo usuário com base nos dados fornecidos
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 format: email
 *                 description: E-mail do usuário
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *               matricula:
 *                 type: string
 *                 unique: true
 *                 description: Matrícula do usuário
 *               cargo:
 *                 type: string
 *                 enum:
 *                   - Professor
 *                   - Analista
 *                 description: Cargo do usuário (deve ser "Professor" ou "Analista")
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/').post((req, res) => userController.create(req, res));

/**
 * @swagger
 * /api/users/all:
 *   get:
 *     summary: Obter todos os usuários
 *     description: Obtém a lista de todos os usuários cadastrados
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/all').get((req, res) => userController.getAll(req, res));

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obter um usuário pelo ID
 *     description: Obtém informações detalhadas de um usuário com base no ID fornecido
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário a ser obtido
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/:id').get((req, res) => userController.getOnly(req, res));

/**
 * @swagger
 * /api/users/{id}:
 *   post:
 *     summary: Atualizar um usuário pelo ID
 *     description: Atualiza informações de um usuário com base no ID fornecido
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário a ser atualizado
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do usuário
 *               email:
 *                 type: string
 *                 format: email
 *                 description: E-mail do usuário
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Nova senha do usuário (opcional)
 *               matricula:
 *                 type: string
 *                 unique: true
 *                 description: Matrícula do usuário
 *               cargo:
 *                 type: string
 *                 enum:
 *                   - Professor
 *                   - Analista
 *                 description: Cargo do usuário (deve ser "Professor" ou "Analista")
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/:id').post((req, res) => userController.update(req, res));

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Excluir um usuário pelo ID
 *     description: Exclui um usuário com base no ID fornecido
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do usuário a ser excluído
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/:id').delete((req, res) => userController.delete(req, res));

module.exports = router;
