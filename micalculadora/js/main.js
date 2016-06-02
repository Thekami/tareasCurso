function loadDOM(){
	document.getElementById('display').value = ""
}

var operador = ""
var memoria = 0
var val = 0

var bandera = true, val = 0

function negativos() {
    document.getElementById("display").value *= -1
}

function concat(btn) {
	if(bandera){
		document.getElementById('display').value = btn.value
		bandera = false
	}
	else
		document.getElementById('display').value += btn.value
}

function op(btn){
	console.log(operador)
	calcular()

	operador = btn.value
	bandera = true
}

function calcular(){
	switch(operador){
		case "*":
			val *= document.getElementById('display').value
			break;
		case "/":
			val /= document.getElementById('display').value
			break;
		case "-":
			val -= document.getElementById('display').value
			break;
		case "+":
			val += parseFloat(document.getElementById('display').value)
			break;
		default:
			val = parseFloat(document.getElementById("display").value)
			break;
	}

	document.getElementById('display').value = val
}

function ClaearAll(){
    document.getElementById("display").value ="";
    val = 0;
    operador = "";
    bandera = true;
}

function MemorySave(){
    memoria = parseFloat(document.getElementById("display").value);
}

function MemoryRead(){
    memoria+= document.getElementById("display").value = memoria;
}

function Clear() {
    document.getElementById("display").value ="";
}

function MemoryPlus(){
    memoria += parseFloat(document.getElementById("display").value);
}

function MemoryClear() {
    memoria=0;
}

function Dot(btn) {
    if (document.getElementById("display").value.indexOf(".") < 0) {
         concat(btn);
    }
}