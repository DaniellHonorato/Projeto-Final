var animeModel = require("../models/animeModel");

function listar(req, res) {
    animeModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os animes: ", erro.sqlMessage);
            res.status(500).json({ mensagem: "Erro interno ao buscar animes." });
        });
}

module.exports = {
    listar
};
