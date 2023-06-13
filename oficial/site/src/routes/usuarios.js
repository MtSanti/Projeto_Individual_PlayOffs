var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/enviarpontos", function (req, res) {
    usuarioController.enviarpontos(req, res);
})
router.post("/enviarpontosJogador", function (req, res) {
    usuarioController.enviarpontosJogador(req, res);
})
router.post("/respostas_quiz_geral/:idUsuario", function (req, res) {
    usuarioController.respostas_quiz_geral(req, res);
})

router.get("/atualizar_rankingGeral", function (req, res) {
    usuarioController.atualizar_rankingGeral(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/dadosGrafico", function (req, res) {
    usuarioController.dadosGrafico(req, res);
});

module.exports = router;