const LogProduto = require('../models/LogProduto');

const logProdutoController = {
    getAll: async (req, res) => {
        try{
            const logProdutos = await LogProduto.find();
            res.status(200).json(logProdutos);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    getOnly: async (req, res) => {
        try{
            const id = req.params.id;
            const logProduto = await LogProduto.findOne({_id: id});
            res.status(200).json(logProduto);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;
            const logProduto = await LogProduto.deleteOne({_id: id});
            res.status(200).json(logProduto);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = logProdutoController;