var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/toggle", function (req, res) {
    favoritoController.toggleFavorito(req, res);
});

router.get("/verificar/:idUsuario/:idAnime", function (req, res) {
    favoritoController.verificar(req, res);
});

router.get("/mais-favoritado", function (req, res) {
    favoritoController.obterMaisFavoritado(req, res);
});

module.exports = router;
