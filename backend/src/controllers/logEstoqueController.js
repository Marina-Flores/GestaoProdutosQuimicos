const LogEstoque = require('../models/LogEstoque');

const logEstoqueController = {
  getAll: async (req, res) => {
    try {
      const logEstoqueEntries = await LogEstoque.find().populate('user_id estoque_id_impactado');
      res.status(200).json({ message: 'Registros de log de estoque recuperados com sucesso', logEstoqueEntries });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar registros de log de estoque', message: error.message });
    }
  },
  getOnly: async (req, res) => {
    try {
      const id = req.params.id;
      const logEstoqueEntry = await LogEstoque.findOne({ _id: id }).populate('user_id estoque_id_impactado');

      if (logEstoqueEntry)
        res.status(200).json({ message: 'Registro de log de estoque encontrado', logEstoqueEntry });
      else
        res.status(404).json({ message: 'Registro de log de estoque não encontrado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao recuperar registro de log de estoque', message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedLogEstoqueEntry = await LogEstoque.findByIdAndDelete(id);

      if (deletedLogEstoqueEntry) {
        res.status(200).json({ message: 'Registro de log de estoque deletado com sucesso', logEstoqueEntry: deletedLogEstoqueEntry });
      } else {
        res.status(404).json({ message: 'Registro de log de estoque não encontrado para exclusão' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar registro de log de estoque', message: error.message });
    }
  },
};

module.exports = logEstoqueController;
