var favoritoModel = require("../models/favoritoModel");

// ── Verificar ──────────────────────────────────────────────────────
function verificar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idAnime = req.params.idAnime;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else if (idAnime == undefined) {
        res.status(400).send("idAnime está undefined!");
    } else {
        favoritoModel.verificar(idUsuario, idAnime)
            .then(function (resultado) {
                var favoritado = resultado.length > 0 && resultado[0].favoritado > 0;
                res.status(200).json({ favoritado: favoritado });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao verificar favorito: ", erro.sqlMessage);
                res.status(500).json({ mensagem: "Erro interno ao verificar favorito." });
            });
    }
}

// ── Toggle Favorito ────────────────────────────────────────────────
function toggleFavorito(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idAnime = req.body.idAnimeServer;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else if (idAnime == undefined) {
        res.status(400).send("idAnime está undefined!");
    } else {
        favoritoModel.verificar(idUsuario, idAnime)
            .then(function (resultado) {
                var jaFavoritado = resultado.length > 0 && resultado[0].favoritado > 0;
                if (jaFavoritado) {
                    favoritoModel.desfavoritar(idUsuario, idAnime)
                        .then(function () {
                            res.status(200).json({ favoritado: false, mensagem: "Removido dos favoritos!" });
                        })
                        .catch(function (erro) {
                            console.log(erro);
                            res.status(500).json({ mensagem: "Erro ao remover dos favoritos." });
                        });
                } else {
                    favoritoModel.favoritar(idUsuario, idAnime)
                        .then(function () {
                            res.status(200).json({ favoritado: true, mensagem: "Adicionado aos favoritos!" });
                        })
                        .catch(function (erro) {
                            console.log(erro);
                            res.status(500).json({ mensagem: "Erro ao adicionar aos favoritos." });
                        });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao alternar favorito: ", erro.sqlMessage);
                res.status(500).json({ mensagem: "Erro interno ao alternar favorito." });
            });
    }
}

// ── Mais Favoritado ────────────────────────────────────────────────
function obterMaisFavoritado(req, res) {
    favoritoModel.obterMaisFavoritado()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(200).json({ titulo: "Nenhum ainda", total: 0 });
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o anime mais favoritado: ", erro.sqlMessage);
            res.status(500).json({ mensagem: "Erro interno ao obter mais favoritado." });
        });
}

// ── Listar Favoritos do Usuário ────────────────────────────────────
function listarFavoritos(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        favoritoModel.listarFavoritosPorUsuario(idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao listar favoritos: ", erro.sqlMessage);
                res.status(500).json({ mensagem: "Erro interno ao listar favoritos." });
            });
    }
}

module.exports = {
    verificar,
    toggleFavorito,
    obterMaisFavoritado,
    listarFavoritos
};
