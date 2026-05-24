var express = require("express");
var router = express.Router();

var animeController = require("../controllers/animeController");

router.get("/listar", function (req, res) {
    animeController.listar(req, res);
});

module.exports = router;
