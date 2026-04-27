var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/kpi-animes", function (req, res) {
    usuarioController.kpiAnimes(req, res);
});

router.get("/kpi-sem-anime", function (req, res) {
    usuarioController.kpiSemAnime(req, res);
});

router.get("/kpi-total", function (req, res) {
    usuarioController.kpiTotal(req, res);
});

module.exports = router;