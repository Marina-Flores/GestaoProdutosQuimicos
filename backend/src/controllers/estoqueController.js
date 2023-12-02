const Estoque = require('../models/Estoque');
const LogEstoque = require('../models/LogEstoque');
const mongoose = require('mongoose');

const estoqueController = {
  create: async (req, res) => {
    try {
      const newEstoque = await Estoque.create(req.body);
      const userId = req.user._id;
      const logEstoque = await LogEstoque.create({
        user_id: userId,
        estoque_id_impactado: newEstoque.id,
        action: `Item de estoque associado ao produto '${newEstoque.IDProduto} [${newEstoque.id}]' criado pelo usuário [${userId}]`
      });
      res.status(201).json({ message: 'Item de estoque criado com sucesso', estoque: newEstoque });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar item de estoque', error: error.message });
    }
  },
  addProduto: async (req, res) => {
    try {
      const { IDProduto, Quantidade, Sala } = req.body;
      const estoqueItem = await Estoque.findOne({ IDProduto, Sala });

      if (estoqueItem) {
        estoqueItem.Quantidade += Quantidade;
        await estoqueItem.save();

        const userId = req.user._id;
        const logEstoque = await LogEstoque.create({
          user_id: userId,
          estoque_id_impactado: estoqueItem.id,
          action: `Adição de ${Quantidade} unidades do produto '${IDProduto}' ao estoque na sala '${Sala}' pelo usuário [${userId}]`
        });

        res.status(200).json({ message: 'Produto adicionado ao estoque com sucesso', estoque: estoqueItem });
      } else {
        res.status(404).json({ message: 'Item de estoque não encontrado para adição de produto' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao adicionar produto ao estoque', error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const estoqueItens = await Estoque.find();
      res.status(200).json({ message: 'Lista de itens de estoque recuperada com sucesso', estoqueItens });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar lista de itens de estoque', message: error.message });
    }
  },
  getOnly: async (req, res) => {
    try {
      const id = req.params.id;
      const estoqueItem = await Estoque.findOne({ _id: id });

      if (estoqueItem)
        res.status(200).json({ message: 'Item de estoque encontrado', estoqueItem });
      else
        res.status(404).json({ message: 'Item de estoque não encontrado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar item de estoque', message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedEstoqueItem = await Estoque.findByIdAndUpdate(id, req.body, { new: true });

      if (updatedEstoqueItem) {
        const userId = req.user._id;
        const logEstoque = await LogEstoque.create({
          user_id: userId,
          estoque_id_impactado: updatedEstoqueItem.id,
          action: `Item de estoque associado ao produto '${updatedEstoqueItem.IDProduto} [${updatedEstoqueItem.id}]' atualizado pelo usuário [${userId}]`
        });
        res.status(200).json({ message: 'Item de estoque atualizado com sucesso', estoque: updatedEstoqueItem });
      } else {
        res.status(404).json({ message: 'Item de estoque não encontrado para atualização' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar item de estoque', message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const estoqueItemToDelete = await Estoque.findById(id);
      const deletedEstoqueItem = await Estoque.findByIdAndDelete(id);

      if (deletedEstoqueItem) {
        const userId = req.user._id;
        const logEstoque = await LogEstoque.create({
          user_id: userId,
          estoque_id_impactado: deletedEstoqueItem.id,
          action: `Item de estoque associado ao produto '${deletedEstoqueItem.IDProduto} [${deletedEstoqueItem.id}]' removido pelo usuário [${userId}]`
        });
        res.status(200).json({ message: 'Item de estoque deletado com sucesso', estoque: deletedEstoqueItem });
      } else {
        res.status(404).json({ message: 'Item de estoque não encontrado para exclusão' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar item de estoque', message: error.message });
    }
  }
};

module.exports = estoqueController;
