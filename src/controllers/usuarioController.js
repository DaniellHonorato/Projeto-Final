var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultado) {
                console.log(`Resultados encontrados: ${resultado.length}`);

                if (resultado.length == 1) {
                    res.status(200).json({
                        id:         resultado[0].id,
                        nome:       resultado[0].nome,
                        email:      resultado[0].email,
                        jaViuAnime: resultado[0].jaViuAnime
                    });
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log("\nErro ao realizar login:", erro.sqlMessage);
                res.status(500).json({ mensagem: "Erro interno no servidor ao tentar realizar login. Tente novamente mais tarde." });
            });
    }
}

function cadastrar(req, res) {
    var nome       = req.body.nomeServer;
    var email      = req.body.emailServer;
    var senha      = req.body.senhaServer;
    var jaViuAnime = req.body.jaViuAnimeServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (jaViuAnime == undefined) {
        res.status(400).send("O campo 'já viu anime' está undefined!");
    } else {
        usuarioModel.buscarPorNomeOuEmail(nome, email)
            .then(function (resultadoBusca) {
                if (resultadoBusca.length > 0) {
                    res.status(409).json("Este email ou nome de usuário já está cadastrado!");
                } else {
                    usuarioModel.cadastrar(nome, email, senha, parseInt(jaViuAnime))
                        .then(function (resultado) {
                            res.status(200).json(resultado);
                        })
                        .catch(function (erro) {
                            console.log("\nErro ao realizar cadastro:", erro.sqlMessage);
                            res.status(500).json({ mensagem: "Erro interno ao cadastrar usuário. Tente novamente." });
                        });
                }
            })
            .catch(function (erro) {
                console.log("\nErro ao verificar email:", erro.sqlMessage);
                res.status(500).json({ mensagem: "Erro interno ao validar dados. Tente novamente." });
            });
    }
}

function kpiAnimes(req, res) {
    usuarioModel.kpiAnimes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os kpis: ", erro.sqlMessage);
            res.status(500).json({ mensagem: "Erro interno ao buscar KPIs." });
        });
}

function kpiSemAnime(req, res) {
    usuarioModel.kpiSemAnime()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os kpis sem anime: ", erro.sqlMessage);
            res.status(500).json({ mensagem: "Erro interno ao buscar dados de dashboard." });
        });
}

function kpiTotal(req, res) {
    usuarioModel.kpiTotal()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o total: ", erro.sqlMessage);
            res.status(500).json({ mensagem: "Erro interno ao buscar dados totais." });
        });
}

module.exports = {
    autenticar,
    cadastrar,
    kpiAnimes,
    kpiSemAnime,
    kpiTotal
};