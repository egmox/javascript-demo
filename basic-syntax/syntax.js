var a = 10;

function fun1(){
	b = 20;
}

function fun2(){
	if(typeof a == "number"){
		console.log("fun2: a is type of: " + typeof a);
	}
	console.log("fun2: "+a);//10
	console.log("fun2: b"+b);//if error comes, it skips the whole document after that line
}

fun1();
fun2();


var c = 10;

function fun3(){
	d = 20;
}

function fun4(){
	if(typeof c == "number"){
		console.log("fun4: c is type of: " + typeof c);
	}
	console.log(c);//10
	console.log("fun4: b"+d);//variable defined without var or let is global. doesn't matter where it is defined
}
fun3();
fun4();


function fun5(){
	 a=10;
	console.log(a);
}
fun5();
console.log("fun5: a: "+a);