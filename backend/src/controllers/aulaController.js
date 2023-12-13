const Aula = require('../models/Aula');
const User = require('../models/User');

const aulaController = {
    create: async (req, res) => {
        try {
            const aulaDados = req.body;
            const aulaExiste = await Aula.find({ laboratorio: aulaDados.laboratorio, data: aulaDados.data, turno: aulaDados.turno });

            if (aulaExiste.length == 0) {
                await Aula.create(aulaDados);
                res.status(201).json({ message: "Aula criada com sucesso" });
            } else {
                res.status(200).json({ message: "Laboratório já foi reservado para este dia e turno." });
            }
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar aula", error: error });
        }
    }
}

module.exports = aulaController;