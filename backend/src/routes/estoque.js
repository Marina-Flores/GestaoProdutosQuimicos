const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

/**
 * @swagger
 * tags:
 *   name: Estoque
 *   description: Endpoints relacionados ao estoque
 */

/**
 * @swagger
 * /api/estoque:
 *   post:
 *     summary: Adicionar um item ao estoque
 *     description: Adiciona um novo item ao estoque com base nos dados fornecidos
 *     tags:
 *       - Estoque
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IDProduto:
 *                 type: string
 *                 description: ID do produto associado ao item de estoque
 *               Quantidade:
 *                 type: number
 *                 description: Quantidade do item em estoque
 *               Sala:
 *                 type: string
 *                 description: Nome da sala associada ao item de estoque
 *     responses:
 *       201:
 *         description: Sucesso
 */
router.route('/').post((req, res) => estoqueController.create(req, res));

/**
 * @swagger
 * /api/estoque/all:
 *   get:
 *     summary: Obter todos os itens em estoque
 *     description: Obtém a lista de todos os itens em estoque
 *     tags:
 *       - Estoque
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/all').get((req, res) => estoqueController.getAll(req, res));

/**
 * @swagger
 * /api/estoque/{id}:
 *   get:
 *     summary: Obter um item de estoque pelo ID
 *     description: Obtém informações detalhadas de um item de estoque com base no ID fornecido
 *     tags:
 *       - Estoque
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do item de estoque a ser obtido
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/:id').get((req, res) => estoqueController.getOnly(req, res));

/**
 * @swagger
 * /api/estoque/{id}:
 *   post:
 *     summary: Atualizar um item de estoque pelo ID
 *     description: Atualiza informações de um item de estoque com base no ID fornecido
 *     tags:
 *       - Estoque
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do item de estoque a ser atualizado
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IDProduto:
 *                 type: string
 *                 description: ID do produto associado ao item de estoque
 *               Quantidade:
 *                 type: number
 *                 description: Nova quantidade do item em estoque
 *               Sala:
 *                 type: string
 *                 description: Novo nome da sala associada ao item de estoque
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/:id').post((req, res) => estoqueController.update(req, res));

/**
 * @swagger
 * /api/estoque/{id}:
 *   delete:
 *     summary: Excluir um item de estoque pelo ID
 *     description: Exclui um item de estoque com base no ID fornecido
 *     tags:
 *       - Estoque
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do item de estoque a ser excluído
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.route('/:id').delete((req, res) => estoqueController.delete(req, res));

/**
 * @swagger
 * /api/estoque/add-produto:
 *   post:
 *     summary: Adicionar um produto ao estoque
 *     description: Adiciona um novo produto ao estoque com base nos dados fornecidos
 *     tags:
 *       - Estoque
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IDProduto:
 *                 type: string
 *                 description: ID do produto a ser adicionado ao estoque
 *               Quantidade:
 *                 type: number
 *                 description: Quantidade inicial do produto em estoque
 *               Sala:
 *                 type: string
 *                 description: Nome da sala associada ao produto no estoque
 *     responses:
 *       201:
 *         description: Sucesso
 */
router.route('/add-produto').post((req, res) => estoqueController.addProduto(req, res));

module.exports = router;
