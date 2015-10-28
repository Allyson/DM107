var express = require('express');
var router = express.Router();
var db = require('./DataBase');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////                           CLIENTE
///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/client',function(req,res){
	console.log("get clientes");
	db.init_database();
	db.get_all_clientes(function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});
router.get('/client/:id',function(req,res){
	console.log("get cliente");
	db.init_database();
	db.get_cliente(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});
router.get('/client/email/:email',function(req,res){
	console.log("get cliente by email");
	db.init_database();
	db.get_cliente_by_email(req.params.email,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});

router.post('/client',function(req,res){
	try{
		console.log("post cliente");
		console.log("req = " + JSON.stringify(req.body));

		db.init_database();
		db.post_cliente(req.body,function(data){
			if (data!=null){
				res.writeHead(200, {'Content-Type' : 'x-application/json'});
        			res.end(data);
			}else{
				console.log("Erro");
				res.status(400).send('Bad Request!');
			}
		});
	}catch(err){
		console.log(err);
		res.status(401).send('Error: Try again!');
	}
});
router.put('/client/:id',function(req,res){
	console.log("put cliente");
	db.init_database();

	db.put_cliente(req.params.id,req.body,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(404).send('Not found!');
		}
	});
});
router.delete('/client/:id',function(req,res){
	console.log("delete cliente");
	db.init_database();
	db.delete_cliente(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(404).send('Not found!');
		}
	});
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////                           PRODUTO
///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/product',function(req,res){
	db.init_database();
	db.get_all_produtos(function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});
router.get('/product/:id',function(req,res){
	db.init_database();
	db.get_produto(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});
router.post('/product',function(req,res){
	db.init_database();
	db.post_produto(req.body,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(400).send('Bad Request!');
		}
	});
});
router.put('/product/:id',function(req,res){
	db.init_database();

	db.put_produto(req.params.id,req.body,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(404).send('Not found!');
		}
	});
});
router.delete('/product/:id',function(req,res){
	db.init_database();
	db.delete_produto(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(404).send('Not found!');
		}
	});
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////                           PEDIDO
///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/order', function(req, res) {
	db.init_database();
	db.get_all_pedidos(function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});

router.get('/order/:id', function(req, res) {
	db.init_database();
	db.get_pedido(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			res.status(404).send('Not found!');
		}
	});
});

router.post('/order', function(req, res) {
	db.init_database();
	db.post_pedido(req.body,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(400).send('Bad Request!');
		}
	});
});

router.put('/order/:id', function(req, res) {
	db.init_database();

	db.put_pedido(req.params.id,req.body,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(404).send('Not found!');
		}
	});
});

router.delete('/order:id', function(req, res) {
	db.init_database();
	db.delete_pedido(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(data);
		}else{
			console.log("Erro");
			res.status(404).send('Not found!');
		}
	});
});


module.exports = router;
