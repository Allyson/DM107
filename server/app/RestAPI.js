var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	res.send("Retornar todos os pedidos");
});

router.get('/:id', function(req, res) {
	res.send("Retornar o pedido ID:" + req.params.id);
});

router.post('/', function(req, res) {
	res.send("Cria um novo pedido a ser entregue:");
});

router.put('/:id', function(req, res) {
	res.send("Edita o pedido: " + req.params.id);
});

router.delete('/:id', function(req, res) {
	res.send("Apaga o pedido: "+ req.params.id);
});

module.exports = router;
