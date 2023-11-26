const Produto = require('../models/Produto');

const produtoController = {
    create: async (req, res) => {
        try{
            const newProduto = await Produto.create(req.body);
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