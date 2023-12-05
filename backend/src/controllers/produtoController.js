const Produto = require('../models/Produto');
const LogProduto = require('../models/LogProduto');

const produtoController = {
    create: async (req, res) => {
        try {
            const newProduto = await Produto.create(req.body);
            const userId = req.user._id;
            const logProduto = await LogProduto.create({
                produto_id: newProduto._id,
                user_id: userId,
                descricao: `Produto '${req.body.nome}' adicionado pelo Usuário '${userId}'`,
            });
            res.status(201).json(newProduto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const produtos = await Produto.find();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getOnly: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = await Produto.findOne({ _id: id });
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = await Produto.findOne({ _id: id });
            const userId = req.user._id;
            const logProduto = await LogProduto.create({
                produto_id: id,
                user_id: userId,
                qtd_utilizada: produto.quantidade - req.body.quantidade,
                descricao: `Produto '${req.body.nome}' alterado pelo Usuário '${userId}'`,
            });
            const atualizar = await Produto.updateOne({ _id: id }, { $set: req.body });
            res.status(200).json(atualizar);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const userId = req.user._id;
            const produto = await Produto.findOne({ _id: id });
            const logProduto = await LogProduto.create({
                produto_id: id,
                user_id: userId,
                descricao: `Produto '${produto.nome}' excluído pelo Usuário '${userId}'`,
            });
            const excluir = await Produto.deleteOne({ _id: id });
            res.status(200).json(excluir);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = produtoController;
