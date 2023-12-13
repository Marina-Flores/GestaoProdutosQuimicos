const express = require('express');
const router = express.Router();
const aulaController = require('../controllers/aulaController');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados às aulas
 */

/**
 * @swagger
 * /api/aula:
 *   post:
 *     summary: Criar nova aula
 *     description: Cria nova aula com base nos dados fornecidos
 *     tags:
 *      - Aulas
 *     requestBody:
 *      required: true
 *      content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               laboratorio:
 *                 type: string
 *                 enum:
 *                   - Lab 1
 *                   - Lab 2
 *                 description: Número do laboratório
 *               data:
 *                 type: string
 *                 format: date
 *                 description: Data reservada
 *               turno:
 *                 type: string
 *                 enum:
 *                   - Manhã
 *                   - Tarde
 *                   - Noite
 *                 description: Turno de uso do laboratório reservado
 *               produtos:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Produtos que serão utilizados na aula
 *               reservadoPor:
 *                 type: number
 *                 description: Id do usuário que reservou a sala
 *     responses:
 *       201:
 *         description: Sucesso
 *       200:
 *         description: Recurso já existente
 *       500:
 *         description: Erro
 */

router.route('/').post((req, res) => aulaController.create(req, res));

module.exports = router;