var express = require('express');
var router = express.Router();
var db = require('./DataBase');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////                           CLIENTE
///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/client',function(req,res){
	console.log("get clientes");
	// db.init_database();
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
	// db.init_database();
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
	// db.init_database();
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

		// db.init_database();
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
	// db.init_database();

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
	// db.init_database();
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
	// db.init_database();
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
	// db.init_database();
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
	// db.init_database();
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
	// db.init_database();

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
	// db.init_database();
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
	
	db.get_all_pedidos(function(data){
		if (data!=null){
			// var pedidos =[]; 
			// var i;
			// for (i=0;i<data.length;i++){
			// 	pedidos.push({
			// 		"id":data[i].id,
			// 		"id_cliente":data[i].id_cliente,
			// 		"data":data[i].data,
			// 		"itens":[]
			// 	});
			// 	//db.get_item_from_pedido(pedidos[i].id,function(data1){
			// 	var data1 = db.get_item_from_pedido(pedidos[i].id);
			// 		if (data1!=null){
			// 			var j;
			// 			console.log("Size - " + data1.length);
			// 			for (j=0;j<data1.length;j++){
			// 				console.log("ID - "+data1[j].id);
			// 				console.log("I - "+ i);
							
			// 				pedidos[0].itens.push({
			// 				 	"id" : data1[j].id,
			// 				 	"id_pedido" : data1[j].id_pedido,
			// 				 	"id_cliente" : data1[j].id_cliente,
			// 				 	"id_produto" : data1[j].id_produto,
			// 				 	"quantidate" : data1[j].quantidate
			// 				 });
			// 			}
			// 		}else{
			// 			console.log("Pedido sem itens cadastrados");
			// 		}
			// 	//});
			// }
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        	
        	res.end(JSON.stringify(data));
		}else{
			res.status(404).send('Not found!');
		}
	});
});

router.get('/order/:id', function(req, res) {
	// db.init_database();
	db.get_pedido(req.params.id,function(data){
		if (data!=null){
			res.writeHead(200, {'Content-Type' : 'x-application/json'});
        		res.end(JSON.stringify(data));
		}else{
			res.status(404).send('Not found!');
		}
	});
});

router.post('/order', function(req, res) {
	// db.init_database();

	console.log("POST_ORDER()");
	var pedido={"id_cliente":req.body.id_cliente,
				"data":req.body.data
			};
	var i=0;
	var itens=[];
	// for (i=0;i<req.body.itens.length;i++){
	// 	itens.push({
	// 		"id":req.body.itens[i].id,
	// 		"id_clinete":req.body.itens[i].id_cliente,
	// 		"id_pedido":req.body.itens[i].id_pedido,
	// 		"id_produto":req.body.itens[i].id_produto,
	// 		"quantidade":req.body.itens[i].quantidade
	// 	});
	//}	
	var pedido_gravado;
	db.post_pedido(pedido,function(pedido){
		if (pedido!=null){
			pedido_gravado = pedido;		
		}else{
			console.log(pedido);
			console.log("Erro inserindo pedido");
			res.status(400).send('Bad Request!');
			res.end();
		}
	});
	// i=0;
	// var item = {
	// "id":req.body.itens[i].id,
	// "id_clinete":req.body.itens[i].id_cliente,
	// "id_pedido":data.id,
	// "id_produto":req.body.itens[i].id_produto,
	// "quantidade":req.body.itens[i].quantidade
	// };
	// console.log("item:");
	// console.log(item);
				
				
	// var callback = function(resp){
	// 	// if (resp==null){
	// 	// 	console.log("Erro itens");
	// 	// 	res.status(400).send('Bad Request!');						
	// 	// }else{
	// 	i++;
	// 	if (i<req.body.itens.length){
	// 		var item2 = {
	// 			"id":req.body.itens[i].id,
	// 			"id_clinete":req.body.itens[i].id_cliente,
	// 			"id_pedido":data.id,
	// 			"id_produto":req.body.itens[i].id_produto,
	// 			"quantidade":req.body.itens[i].quantidade
	// 			};
	// 			console.log("item2");
	// 			console.log(item2);
	// 		db.post_item(item2,callback);
	// 	}
	// 	//}
	// };//fim callback
		
	// db.post_item(item,callback);
		
	// res.writeHead(200, {'Content-Type' : 'x-application/json'});
 //   //      	db.get_pedido(data.id,function(resp1){
 //         		res.end("resp1");
 //   //      	});
		
});

router.put('/order/:id', function(req, res) {
	// db.init_database();

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
	// db.init_database();
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
