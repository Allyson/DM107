
function sayHellow(name){
	console.log("Hi " + name);
}

function sayGoodBye(name){
	console.log("Good bye " + name);
}


function executor(callback,name){
	callback(name || "no name");
}

sayHellow("Teste");
executor(sayHellow,"Allyson");
executor(sayHellow);
executor(sayGoodBye,"Allyson");
executor(sayGoodBye);

