const User = require('../models/User');

const userController = {
    create: async (req, res) => {
        try{
            const newUser = await User.create(req.body);
            res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser});
        } catch(error) {
            res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
        }
    },
    getAll: async (req, res) => {
        try{
            const users = await User.find();
            res.status(200).json({ message: 'Lista de usuários recuperada com sucesso', users });
        } catch(error) {
            res.status(500).json({ error: 'Erro ao recuperar lista de usuários', message: error.message });
        }
    },
    getOnly: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findOne({ _id: id });
            if (user) 
                res.status(200).json({ message: 'Usuário encontrado', user });
            else 
                res.status(404).json({ message: 'Usuário não encontrado' });            
        } catch (error) {
            res.status(500).json({ error: 'Erro ao recuperar usuário', message: error.message });
        }
    }, 
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findByIdAndUpdate(id, req.body, { new: true });
            if (user) 
                res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
            else
                res.status(404).json({ message: 'Usuário não encontrado para atualização' });        
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar usuário', message: error.message });
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const deletedUser = await User.findByIdAndDelete(id);
            if (deletedUser)
                res.status(200).json({ message: 'Usuário deletado com sucesso', user: deletedUser });
            else 
                res.status(404).json({ message: 'Usuário não encontrado para exclusão' });            
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar usuário', message: error.message });
        }
    }
};

module.exports = userController;