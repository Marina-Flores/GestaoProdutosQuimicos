const LogUser = require('../models/LogUser');

const logUserController = {
    getAll: async (req, res) => {
        try{
            const logUsers = await LogUser.find();
            res.status(200).json(logUsers);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    getOnly: async (req, res) => {
        try{
            const id = req.params.id;
            const logUser = await LogUser.findOne({_id: id});
            res.status(200).json(logUser);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    },
    delete: async (req, res) => {
        try{
            const id = req.params.id;
            const logUser = await LogUser.deleteOne({_id: id});
            res.status(200).json(logUser);
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = logUserController;