const User = require('../models/User');

const userController = {
    create: async (req, res) => {
        try{
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch(error) {
            res.status(500).json({error: error.message });
        }
    },
    getAll: async (req, res) => {
        try{
            const users = await User.find();
            res.json(users);
        } catch(error) {
            res.status(500).json({error: error.message });
        }
    },
};

module.exports = userController;