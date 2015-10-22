var express = require('express');
var router = express.Router();
var db = require('./DataBase');

router.get('/order', function(req, res) {
	res.send("Retornar todos os pedidos");
});

router.get('/order/:id', function(req, res) {
	res.send("Retornar o pedido ID:" + req.params.id);
});

router.post('/order', function(req, res) {
	res.send("Cria um novo pedido a ser entregue:");
});

router.put('/order/:id', function(req, res) {
	res.send("Edita o pedido: " + req.params.id);
});

router.delete('/order:id', function(req, res) {
	res.send("Apaga o pedido: "+ req.params.id);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////                           CLIENTE
///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/client',function(req,res){
	db.init_database();
	db.get_all_clientes(function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
		}
	});
});
router.get('/client/:id',function(req,res){
	db.init_database();
	db.get_cliente(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
		}
	});
});

module.exports = router;
