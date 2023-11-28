const Produto = require('../models/Produto');
const LogProduto = require('../models/LogProduto');

const produtoController = {
    create: async (req, res) => {
        try{
            const newProduto = await Produto.create(req.body);
            const userId = req.user._id;
            const logProduto = new LogProduto({
                produto_id: newProduto._id,
                user_id: userId,
                qtd_utilizada: req.body.qtd_utilizada,
                descricao: `Produto '${req.body.nome}' adicionado pelo Usuário '${userId}'`,
            })
            await logProduto.save();
            res.status(201).json(newProduto);
        } catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    getAll: async (req, res) => {
        try{
            const produtos = await Produto.find();
            res.status(200).json(produtos);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    getOnly: async (req, res) => {
        try{
            const id = req.params.id;
            const produto = await Produto.findOne({_id: id});
            res.status(200).json(produto);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    update: async (req, res) => {
        try{
            const id = req.params.id;
            const userId = req.user._id;
            const logProduto = new LogProduto({
                produto_id: id,
                user_id: userId,
                qtd_utilizada: req.body.qtd_utilizada,
                descricao: `Produto '${req.body.nome}' alterado pelo Usuário '${userId}'`,
            })
            await logProduto.save();
            const produto = await Produto.updateOne({_id: id}, {$set: req.body});
            res.status(200).json(produto);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;
            const produto = await Produto.deleteOne({_id: id});
            res.status(200).json(produto);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = produtoController;