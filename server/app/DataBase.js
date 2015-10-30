var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'qwerty'
});

function query_error(err,rows){
	if(err)	{
  		throw err;
  	}
}
function make_query(sql){
	connection.query(sql,query_error());
}
function create_fake_data(){
	//Create fake data
	make_query("INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
	make_query("INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"Mané\",\"Rua y\",\"353471-9681\",\"mane@inatel.br\")");
	make_query("INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"André\",\"Rua z\",\"353471-9709\",\"andre@inatel.br\")");
	make_query("INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"Carlos\",\"Rua h\",\"353471-9714\",\"carlos@inatel.br\")");
	make_query("INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"Luiz\",\"Rua w\",\"353471-9656\",\"luiz@inatel.br\")");
	console.log("Creating fake data into \"clientes\"...\n");
http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 1\",1000,150.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 2\",1000,200.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 3\",1000,400.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 4\",1000,550.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 5\",1000,550.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 6\",1000,10.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 7\",1000,1000.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 8\",1000,1100.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 9\",1000,2000.00,\" http://vignette3.wikia.nocookie.net/wiisportsresortwalkthrough/images/6/60/No_Image_Available.png/revision/latest?cb=20140118173446\")");
	console.log("Creating fake data into \"produtos\"...\n");

	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('1','10/10/2015')");
	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('2',NOW())");
	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('3',NOW())");
	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('4',NOW())");
	console.log("Creating fake data into \"pedidos\"...\n");

	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('1','1','1','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('1','1','2','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('1','1','3','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('2','2','2','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('2','2','1','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('2','2','4','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('3','3','3','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('3','3','2','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('4','4','4','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('4','4','1','10')");
	console.log("Creating fake data into \"itens\"...\n");

	make_query("INSERT INTO logistica (id_pedido,id_cliente,nome_recebedor,cpf_recebedor,recebedor_e_comprador,data_hora_entrega,gps,status) VALUES ('1','1','Recebedor 1','000111222-33','0','','','pendente')");
	make_query("INSERT INTO logistica (id_pedido,id_cliente,nome_recebedor,cpf_recebedor,recebedor_e_comprador,data_hora_entrega,gps,status) VALUES ('2','2','Recebedor 2','000111222-33','0','','','pendente')");
	make_query("INSERT INTO logistica (id_pedido,id_cliente,nome_recebedor,cpf_recebedor,recebedor_e_comprador,data_hora_entrega,gps,status) VALUES ('3','3','Recebedor 3','000111222-33','0','','','pendente')");
	make_query("INSERT INTO logistica (id_pedido,id_cliente,nome_recebedor,cpf_recebedor,recebedor_e_comprador,data_hora_entrega,gps,status) VALUES ('4','4','Recebedor 4','000111222-33','0','','','pendente')");
	console.log("Creating fake data into \"logistica\"...\n");	

}

function create_database(err){
	console.log("Creating Database \"Loja\"...\n");
	connection.query("CREATE DATABASE IF NOT EXISTS loja",query_error());//Creating database
	connection.query("USE loja",query_error());//using database
	connection.query("CREATE TABLE logistica" +  
			"(id INT NOT NULL AUTO_INCREMENT," +
			"id_pedido INT ," +
			"id_cliente INT ," + 
			"nome_recebedor VARCHAR(50)," +
			"cpf_recebedor VARCHAR(15)," +
			"recebedor_e_comprador VARCHAR(10), " +
			"data_hora_entrega VARCHAR(30) ," +
			"gps VARCHAR(200)," +
			"status VARCHAR(20),"+
			"PRIMARY KEY(id))",query_error()); // Creating logistica table
	console.log("Created table \"logistica\"...\n");
	connection.query("CREATE TABLE clientes" +
			"(id INT NOT NULL AUTO_INCREMENT,"+
			"nome VARCHAR (100) NOT NULL,"+
			"endereco VARCHAR (200),"+
			"telefone VARCHAR(20)," +
			"email VARCHAR(50)," +
			"PRIMARY KEY (id))",query_error()); //Creating clientes table	
	console.log("Created table \"clientes\"...\n");
	connection.query("CREATE TABLE pedidos" +
			"(id INT NOT NULL AUTO_INCREMENT,"+
			"id_cliente INT,"+
			"data VARCHAR(30)," +
			"PRIMARY KEY (id))",query_error());  //Creating pedidos table
	console.log("Created table \"pedidos\"...\n");
	connection.query("CREATE TABLE itens" +
			"(id INT NOT NULL AUTO_INCREMENT,"+
			"id_pedido INT ,"+
			"id_cliente INT,"+
			"id_produto INT ,"+
			"quantidade INT ,"+
			"PRIMARY KEY (id))",query_error()); //Creating itens table
	console.log("Created table \"itens\"...\n");
	connection.query("CREATE TABLE produtos"+
			"(id INT NOT NULL AUTO_INCREMENT,"+
			"descricao VARCHAR (100),"+
			"quantidade INT NOT NULL,"+
			"imagem VARCHAR(1000)," +
			"valor DECIMAL(10,2) NOT NULL,"+
			"PRIMARY KEY(id))",query_error()); //Creating produtos table
	console.log("Created table \"produtos\"...\n");

}


function connect_mysql_error(err){
	if (err){
		console.log("Não foi possivel connectar ao gerenciador de base de dados MySQL\n");
		//process.exit(1);	
	}else{
		console.log("MySQL connectado...");	
	}
	return;
}

function connect_db_error(err,rows){
	console.log("Procurando banco de dados \"Loja\"...");
	if (err){//Query "USE LOJA" falhou 		
		console.log("Banco de dados não encontrado..");
		create_database();
		create_fake_data();	
	}else{
		console.log("Banco de dados encontrado...");	
	}
	return;
}


function init_database(){
	connection.connect(connect_mysql_error);
	connection.query("USE loja",connect_db_error);
}
///////////////////////////////////////////////////CLIENTES ////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function get_all_clientes(callback){
	try{
		connection.query("SELECT * from clientes",function (err,result){
		if (!err){
			callback(JSON.stringify(result));
		}else{
			callback(null);
		}
	});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_cliente(id,callback){
	try{
		connection.query("SELECT * from clientes WHERE id=?",[id],function (err,result){
			if (!err){
				callback(JSON.stringify(result[0]));
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_cliente_by_email(email,callback){
	try{
		connection.query("SELECT * from clientes WHERE email=?",[email],function (err,result){
			if (!err){
				callback(JSON.stringify(result[0]));
			}else{
				callback(null);
			}
		});
	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_last_cliente(callback){
	try{
		connection.query("SELECT * from clientes WHERE id=LAST_INSERT_ID()",function (err,result){
			if (!err){
				callback(JSON.stringify(result[0]));
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}

}
function post_cliente(json,callback){
	if (json.nome == null){
		callback(null);
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("INSERT INTO clientes (nome,endereco,telefone,email) VALUES (?,?,?,?)",
				[json.nome,json.endereco,json.telefone,json.email],
				function(err,result){
					if (!err){
						get_last_cliente(function(data){
							if (data != null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function put_cliente(id,json,callback){
	console.log("id " + id);
	console.log("json " + json);
	if (json.nome == null){
		callback(null);
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("UPDATE clientes SET nome=?,endereco=?,telefone=?,email=? WHERE id=?",
				[json.nome,json.endereco,json.telefone,json.email,id],
				function(err,result){
					if (!err){
						get_cliente(id,function(data){
							if (data!=null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function delete_cliente(id,callback){
	try{
		var deleted='';
		get_cliente(id,function(data){
			if (data!=null){
				deleted=data;
			}else{
				callback(null);
			}
		});

		connection.query("DELETE from clientes WHERE id=?",[id],function (err,result){
			if (!err){
				callback(deleted);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
///////////////////////////////////////////// PRODUTO////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function get_all_produtos(callback){
	try{
		connection.query("SELECT * from produtos",function (err,result){
		if (!err){
			callback(JSON.stringify(result));
		}else{
			callback(null);
		}
	});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_produto(id,callback){
	try{
		connection.query("SELECT * from produtos WHERE id=?",[id],function (err,result){
			if (!err){
				callback(JSON.stringify(result[0]));
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_last_produto(callback){
	try{
		connection.query("SELECT * from produtos WHERE id=LAST_INSERT_ID()",function (err,result){
			if (!err){
				callback(JSON.stringify(result[0]));
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}

}
function post_produto(json,callback){
	if ((json.descricao == null)||(json.quantidade==null)||(json.valor==null)) {
		callback(null);
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("INSERT INTO produtos (descricao,quantidade,imagem,valor) VALUES (?,?,?,?)",
				[json.descricao,json.quantidade,json.imagem,json.valor],
				function(err,result){
					if (!err){
						get_last_produto(function(data){
							if (data != null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function put_produto(id,json,callback){
	if ((json.descricao == null)||(json.quantidade==null)||(json.valor==null)) {
		callback(null);
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("UPDATE produtos SET descricao=?,quantidade=?,imagem=?,valor=? WHERE id=?",
				[json.descricao,json.quantidade,json.imagem,json.valor,id],
				function(err,result){
					if (!err){
						get_produto(id,function(data){
							if (data!=null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function delete_produto(id,callback){
	try{
		var deleted='';
		get_produto(id,function(data){
			if (data!=null){
				deleted=data;
			}else{
				callback(null);
			}
		});

		connection.query("DELETE from produtos WHERE id=?",[id],function (err,result){
			if (!err){
				callback(deleted);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}

////////////////////////////////////////////// PEDIDO /////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function get_all_pedidos(callback){
	try{
		console.log("GET_ALL_PEDIDOS()");
		//connection.query("select * from pedidos",function (err,result_p){
		connection.query("SELECT *,itens.id AS iten_id FROM itens INNER JOIN pedidos ON itens.id_pedido=pedidos.id",function (err,result_p){
		if (!err){
			var resp=[];
			var i;
			var last_id;
			var position=0;
			for (i=0;i<result_p.length;i++){
				if (last_id != result_p[i].id){
					resp.push({"id":result_p[i].id,
						"id_cliente":result_p[i].id_cliente,
						"data":result_p[i].data,
						"itens":[{
									"id":result_p[i].iten_id,
									 "id_pedido":result_p[i].id_pedido,
									 "id_cliente":result_p[i].id_cliente,
									 "id_produto": result_p[i].id_produto,
									"quantidade": result_p[i].quantidade}
									]});
					last_id = result_p[i].id;
					position++;
				}else{
					resp[position-1].itens.push({"id":result_p[i].iten_id,
												 "id_pedido":result_p[i].id_pedido,
												 "id_cliente":result_p[i].id_cliente,
												 "id_produto": result_p[i].id_produto,
												 "quantidade": result_p[i].quantidade});
				}
				
			}
			//callback(result_p);
			callback(resp);
		}else{
			callback(null);
		}
	});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_pedido(id,callback){
	try{
		//select * from pedidos 
		connection.query("SELECT *,itens.id AS iten_id FROM itens INNER JOIN pedidos ON itens.id_pedido=pedidos.id WHERE pedidos.id=?",[id],function (err,result){
		//connection.query("SELECT * FROM pedidos WHERE id=?",[id],function (err,result){
			if (!err){
				//callback(result);
				var resp=[];
				var i;
				var last_id;
				var position=0;
				for (i=0;i<result.length;i++){
					if (last_id != result[i].id){
						resp.push({"id":result[i].id,
							"id_cliente":result[i].id_cliente,
							"data":result[i].data,
							"itens":[{"id":result[i].iten_id,
													 "id_pedido":result[i].id_pedido,
													 "id_cliente":result[i].id_cliente,
													 "id_produto": result[i].id_produto,
													 "quantidade": result[i].quantidade}
													 ]});
						last_id = result[i].id;
						position++;
					}else{
						resp[position-1].itens.push({"id":result[i].iten_id,
													 "id_pedido":result[i].id_pedido,
													 "id_cliente":result[i].id_cliente,
													 "id_produto": result[i].id_produto,
													 "quantidade": result[i].quantidade});
					}
				}
				callback(resp);
			}else{
				console.log("get_pedido ERRO");
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_last_pedido(callback){
	console.log("DB>GET_LAST_PEDIDO()");
	try{
		//
		//connection.query("SELECT *,itens.id AS iten_id FROM pedidos ORDER BY pedidos.id DESC INNER JOIN itens ON itens.id_pedido=pedidos.id",function (err,result){
		connection.query("SELECT * FROM pedidos ORDER BY id DESC LIMIT 1",function (err,result){
			if (!err){
				callback(result[0]);
				// var resp=[];
				// var i;
				// var last_id;
				// var position=0;
				// for (i=0;i<result.length;i++){
				// 	if (last_id != result[i].id){
				// 		resp.push({"id":result[i].id,
				// 			"id_cliente":result[i].id_cliente,
				// 			"data":result[i].data,
				// 			"itens":[]});
				// 		last_id = result[i].id;
				// 		position++;
				// 	}else{
				// 		resp[position-1].itens.push({"id":result[i].iten_id,
				// 									 "id_pedido":result[i].id_pedido,
				// 									 "id_cliente":result[i].id_cliente,
				// 									 "id_produto": result[i].id_produto,
				// 									 "quantidade": result[i].quantidade});
				// 	}
				// }
				//callback(JSON.stringify(resp));
			}else{
				console.log("DB>GET_LAST_PEDIDO return error");
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}

}
function post_pedido(json,callback){
	console.log("DB>POST_PEDIDO()");
	if ((json.id_cliente == null)||(json.data==null)) {
		console.log("DB>POST_PEDIDO:Existem variaveis igual a null");
		callback(null);
		return;
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		var pedido_id;
		connection.query("INSERT INTO pedidos (id_cliente,data) VALUES (?,?)",
				[json.id_cliente,json.data],
				function(err,result){
					if (!err){
						get_last_pedido(function(data){
							console.log("DB>POST_PEDIDO: LAST_PEDIDO:");
							console.log(data);
							callback(data); // at´e aqui OK
						});
					}else{
						console.log("DB>POST_PEDIDO: return error");
						callback(null);
					}
				// 	console.log("Pedido gravado");
				// 	if (!err){
				// 		var i;
				// 		get_last_pedido(function(pedido){
				// 			pedido_id = pedido.id;
				// 			console.log("Pedido id = " + pedido.id);
				// 			console.log("ID Cliente = "+ json.id_cliente);
				// 			console.log("Iten[0].id_produto = "+json.itens[0].id_produto);
				// 			console.log("Iten[0].quantidade = "+json.itens[0].quantidade);
				// 			console.log("JSON = "+ json.itens.length);

				// 			for (i=0;i<json.itens.length;i++){
				// 				console.log("Loop = "+i);
				// 				connection.query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade ) VALUES (?,?,?,?)",
				// 					[pedido.id,json.id_cliente,json.itens[i].id_produto,json.itens[i].quantidade],
				// 					function(err,result){
				// 						console.log("Gravando itens");
				// 						if (err){
				// 							callback(null);
				// 						}
				// 					});
				// 				}
				// 		});
				// 		get_pedido(pedido_id,function(data){
				// 			console.log("Pedido ID resp =" + pedido_id);
				// 			if (data != null){
				// 				console.log(data);
				// 		 		callback(data); //Ja esta em formato JSON
				// 		 	}
				// 		});
				// 	}else{
				// 		callback(null);
				// 	}
			    });
	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function put_pedido(id,json,callback){
	if ((json.id_cliente == null)||(json.data==null)) {
		callback(null);
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("UPDATE pedidos SET id_cliente=?,data=? WHERE id=?",
				[json.id_cliente,json.data,id],
				function(err,result){
					if (!err){
						get_pedido(id,function(data){
							if (data!=null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function delete_pedido(id,callback){
	try{
		var deleted='';
		get_pedido(id,function(data){
			if (data!=null){
				deleted=data;
			}else{
				callback(null);
			}
		});

		connection.query("DELETE from pedidos WHERE id=?",[id],function (err,result){
			if (!err){
				callback(deleted);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}

////////////////////////////////////////////// ITENS /////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function get_all_itens(callback){
	try{
		connection.query("select * from itens",function (err,result){
		if (!err){
			callback(result);
		}else{
			callback(null);
		}
	});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_item(id,callback){
	try{
		//select * from pedidos 
		connection.query("SELECT * from itens WHERE id=?",[id],function (err,result){
			if (!err){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_item_from_pedido(id){
	try{
		console.log("GET_ITEM_FROM_PEDIDO() "+id);
		connection.query("SELECT * from itens WHERE id_pedido=?",[id],function (err,result){
			if (!err){
				console.log("GET_ITEM_FROM_PEDIDO return data valid");
				return (result);
			}else{
				console.log("GET_ITEM_FROM_PEDIDO return null");
				return null;
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_last_item(callback){
	try{
		connection.query("SELECT * FROM itens ORDER BY id DESC LIMIT 1",function (err,result){
			if (!err){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}

}
var i;
function post_item(json,callback){ //id_pedido | id_cliente | id_produto | quantidade
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		console.log("POST_ITEM()");
		connection.query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES (?,?,?,?)",
				[json.id_pedido,json.id_cliente,json.id_produto,json.quantidade],
				function(err,result){
					console.log("POST_ITEM->query");
					if (!err){
						get_last_item(function(data){
							console.log("POST_ITEM() -> GET_LAST_ITEM()");
							console.log(data);
							if (data != null){
								callback(data);
							}else{
								console.log("POST_ITEM() return null");
								callback(null);
							}
						});
					}else{
						console.log("Erro DB post_item()");
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function put_item(id,json,callback){
	if ((json.id_pedido == null)||(json.id_produto==null)||(json.id_cliente==null)||(json.quantidade==null)) {
		callback(null);
	}
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("UPDATE itens SET id_cliente=?,id_produto=?,id_pedido=?,quantidade=? WHERE id=?",
				[json.id_cliente, json.id_produto, json.id_pedido, json.quantidade, id],
				function(err,result){
					if (!err){
						get_item(id,function(data){
							if (data!=null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function delete_item(id,callback){
	try{
		var deleted='';
		get_item(id,function(data){
			if (data!=null){
				deleted=data;
			}else{
				callback(null);
			}
		});

		connection.query("DELETE from itens WHERE id=?",[id],function (err,result){
			if (!err){
				callback(deleted);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
////////////////////////////////////////////// LOGISTICA /////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function get_all_entregas(callback){
	try{
		connection.query("SELECT * from logistica",function (err,result){
		if (!err){
			callback(result);
		}else{
			callback(null);
		}
	});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_entrega(id,callback){
	console.log("GET_ENTREGA()");
	try{
		connection.query("SELECT * from logistica WHERE id=?",[id],function (err,result){
			if (!err){
				console.log("OK EM GET_ENTREGA()");
				callback(result[0]);
			}else{
				console.log("ERRO em GET_ENTREGA()");
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_entregas_by_id_cliente(id,callback){
	try{
		connection.query("SELECT * from logistica WHERE id_cliente=?",[id],function (err,result){
			if (!err){
				callback(result);
			}else{
				callback(null);
			}
		});
	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function get_entrega_by_id_pedido(id,callback){
	try{
		connection.query("SELECT * from logistica WHERE id_pedido=?",[id],function (err,result){
			if (!err){
				callback(result);
			}else{
				callback(null);
			}
		});
	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}

function get_last_entrega(callback){
	try{
		connection.query("SELECT * from logistica ORDER BY id DESC LIMIT 1",function (err,result){
			if (!err){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}

}

/*
"id_pedido INT ," +
			"id_cliente INT ," + 
			"nome_recebedor VARCHAR(50)," +
			"cpf_recebedor VARCHAR(15)," +
			"recebedor_e_comprador TINYINT(1), " +
			"data_hora_entrega VARCHAR(30) ," +
			"gps VARCHAR(200)," +
			"status VARCHAR (20),"
*/
function post_entrega(json,callback){
	console.log("POST_ENTREGA()");
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("INSERT INTO logistica (id_pedido,id_cliente,nome_recebedor,cpf_recebedor,recebedor_e_comprador,data_hora_entrega,gps,status) VALUES (?,?,?,?,?,?,?,?)",
				[json.id_pedido,json.id_cliente,json.nome_recebedor,json.cpf_recebedor,json.recebedor_e_comprador,json.data_hora_entrega,json.gps,json.status],
				function(err,result){
					if (!err){
						get_last_entrega(function(data){
							if (data != null){
								callback(data);
							}
						});
					}else{
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function put_entrega(id,json,callback){
	console.log("PUT_ENTREGA()");
	console.log(json);
	try{               //    "INSERT INTO clientes (nome,endereco,telefone,email) VALUES (\"José\",\"Rua x\",\"353471-9666\",\"jose@inatel.br\")");
		connection.query("UPDATE logistica SET id_pedido=?, id_cliente=?,nome_recebedor=?,cpf_recebedor=?,recebedor_e_comprador=?,data_hora_entrega=?,gps=?,status=? WHERE id=?",
				[json.id_pedido,json.id_cliente,json.nome_recebedor,json.cpf_recebedor,json.recebedor_e_comprador,json.data_hora_entrega,json.gps,json.status,id],
				function(err,result){
					if (!err){
						get_entrega(id,function(data){
							if (data!=null){
								console.log("PUT_ENTREGA OK");
								callback(data);
							}else{
								console.log("Falha");
								callback(null);
							}
						});
					}else{
						console.log ("Erro no PUT ENTREGA()");
						callback(null);
					}
				});

	}catch(ex){
		console.log("DB_EXCEPTION : " + ex);
	}
}
function delete_entrega(id,callback){
	try{
		var deleted='';
		get_entrega(id,function(data){
			if (data!=null){
				deleted=data;
			}else{
				callback(null);
			}
		});

		connection.query("DELETE from logistica WHERE id=?",[id],function (err,result){
			if (!err){
				callback(deleted);
			}else{
				callback(null);
			}
		});
	}catch(ex){
    		console.log("DB_EXCEPTION : " + ex);
	}
}

module.exports = {init_database:init_database,
                  get_all_clientes:get_all_clientes,
		  get_cliente:get_cliente,
		  get_cliente_by_email:get_cliente_by_email,
		  post_cliente:post_cliente,
		  put_cliente:put_cliente,
		  delete_cliente:delete_cliente,
		  get_all_produtos:get_all_produtos,
		  get_produto:get_produto,
		  post_produto:post_produto,
		  put_produto:put_produto,
		  delete_produto:delete_produto,
		  get_all_pedidos:get_all_pedidos,
		  get_pedido:get_pedido,
		  post_pedido:post_pedido,
		  put_pedido:put_pedido,
		  delete_pedido:delete_pedido,
		  get_item_from_pedido:get_item_from_pedido,
		  post_item:post_item,
		  get_all_entregas:get_all_entregas,
		  post_entrega:post_entrega,
		  get_entrega_by_id_pedido:get_entrega_by_id_pedido,
		  put_entrega:put_entrega,
		  get_entrega:get_entrega};
