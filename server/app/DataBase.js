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

	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 1\",1000,150.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 2\",1000,200.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 3\",1000,400.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 4\",1000,550.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 5\",1000,550.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 6\",1000,10.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 7\",1000,1000.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 8\",1000,1100.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	make_query("INSERT INTO produtos (descricao,quantidade,valor,imagem) VALUES (\"Produto 9\",1000,2000.00,\"http://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0CAMQjRxqFQoTCMO56bnx2cgCFcoekAodTYoGEQ&url=http%3A%2F%2Fwiikipedia.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AFQjCNHLe-AbyLSkRqeqtYTaO_yjL4Pkyw&ust=1445734126869531\")");
	console.log("Creating fake data into \"produtos\"...\n");

	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('1',NOW())");
	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('2',NOW())");
	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('3',NOW())");
	make_query("INSERT INTO pedidos (id_cliente,data) VALUES ('4',NOW())");
	console.log("Creating fake data into \"pedidos\"...\n");

	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('1','1','1','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('2','2','2','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('3','3','3','10')");
	make_query("INSERT INTO itens (id_pedido,id_cliente,id_produto,quantidade) VALUES ('4','4','4','10')");
	console.log("Creating fake data into \"itens\"...\n");
}

function create_database(err){
	console.log("Creating Database \"Loja\"...\n");
	connection.query("CREATE DATABASE IF NOT EXISTS loja",query_error());//Creating database
	connection.query("USE loja",query_error());//using database
	connection.query("CREATE TABLE logistica" +  
			"(id INT NOT NULL AUTO_INCREMENT," +
			"id_pedido INT NOT NULL," +
			"id_cliente INT NOT NULL," + 
			"nome_recebedor VARCHAR(50)," +
			"cpf_recebedor VARCHAR(15)," +
			"recebedor_e_comprador TINYINT(1), " +
			"data_hora_entrega DATE ," +
			"gps VARCHAR(200)," +
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
			"id_cliente INT NOT NULL,"+
			"data DATE," +
			"PRIMARY KEY (id))",query_error());  //Creating pedidos table
	console.log("Created table \"pedidos\"...\n");
	connection.query("CREATE TABLE itens" +
			"(id INT NOT NULL AUTO_INCREMENT,"+
			"id_pedido INT NOT NULL,"+
			"id_cliente INT NOT NULL,"+
			"id_produto INT NOT NULL,"+
			"quantidade INT NOT NULL,"+
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

module.exports = {init_database:init_database,
                  get_all_clientes:get_all_clientes,
		  get_cliente:get_cliente,
		  post_cliente:post_cliente,
		  put_cliente:put_cliente,
		  delete_cliente:delete_cliente,
		  get_all_produtos:get_all_produtos,
		  get_produto:get_produto,
		  post_produto:post_produto,
		  put_produto:put_produto,
		  delete_produto:delete_produto};
