const Estoque = require('../models/Estoque');
const LogEstoque = require('../models/LogEstoque');
const mongoose = require('mongoose');

const estoqueController = {
  create: async (req, res) => {
    try {
      const newEstoque = await Estoque.create(req.body);
      if (req.user) {
        await LogEstoque.create({
          user_id: newEstoque.id,
          estoque_id_impactado: newEstoque.id,
          action: `Item de estoque associado ao produto '${newEstoque.IDProduto} [${newEstoque.id}]' criado pelo usuário [${newEstoque.id}]`
        });
      }
      res.status(201).json({ message: 'Item de estoque criado com sucesso', estoque: newEstoque });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar item de estoque', error: error.message });
    }
  },
  addProduto: async (req, res) => {
    try {
      const { IDdoProduto, Quantidade, Sala } = req.body;
      const estoqueItem = await Estoque.findOne({ 'produtos.produto_id': IDdoProduto });
  
      if (!estoqueItem) {
        return res.status(404).json({ message: 'Item de estoque não encontrado para adição de produto' });
      }
  
      if (Quantidade < 0 && estoqueItem.produtos[0].quantidade + Quantidade < 0) {
        return res.status(400).json({ message: 'A quantidade não pode resultar em um valor negativo.' });
      }
  
      const produtoIndex = estoqueItem.produtos.findIndex((produto) => produto.produto_id === IDdoProduto);
  
      if (produtoIndex !== -1) {
        estoqueItem.produtos[produtoIndex].quantidade += Quantidade;
        await estoqueItem.save();
  
        if (req.user) {
          await LogEstoque.create({
            user_id: estoqueItem.id,
            estoque_id_impactado: estoqueItem.id,
            action: `Adição de ${Quantidade} unidades do produto '${IDdoProduto}' ao estoque na sala '${Sala}' pelo usuário [${estoqueItem.id}]`
          });
        }
  
        return res.status(200).json({ message: 'Produto adicionado ao estoque com sucesso', estoque: estoqueItem });
      } else {
        return res.status(404).json({ message: 'Produto não encontrado no estoque' });
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
        await LogEstoque.create({
          user_id: updatedEstoqueItem.id,
          estoque_id_impactado: updatedEstoqueItem.id,
          action: `Item de estoque associado ao produto '${updatedEstoqueItem.IDProduto} [${updatedEstoqueItem.id}]' atualizado pelo usuário [${updatedEstoqueItem.id}]`
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
        await LogEstoque.create({
          user_id: deletedEstoqueItem.id,
          estoque_id_impactado: deletedEstoqueItem.id,
          action: `Item de estoque associado ao produto '${deletedEstoqueItem.IDProduto} [${deletedEstoqueItem.id}]' removido pelo usuário [${deletedEstoqueItem.id}]`
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
