
function sayHellow(name){
	console.log("Hi " + name);
}


function executor(callback,name){
	callback(name || "no name");
}

sayHellow("Teste");
executor(sayHellow,"Allyson");

