var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

// ── Toggle Favorito ────────────────────────────────────────────────
router.post("/toggle", function (req, res) {
    favoritoController.toggleFavorito(req, res);
});

// ── Verificar ──────────────────────────────────────────────────────
router.get("/verificar/:idUsuario/:idAnime", function (req, res) {
    favoritoController.verificar(req, res);
});

// ── Mais Favoritado ────────────────────────────────────────────────
router.get("/mais-favoritado", function (req, res) {
    favoritoController.obterMaisFavoritado(req, res);
});

// ── Listar Favoritos do Usuário ────────────────────────────────────
router.get("/listar/:idUsuario", function (req, res) {
    favoritoController.listarFavoritos(req, res);
});

module.exports = router;
