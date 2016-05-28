function loadDOM(){
	document.getElementById('display').value = "", operador = ""
}


var bandera = true, val = 0


function concat(btn) {
	if(bandera){
		document.getElementById('display').value = btn.value
		bandera = false
	}
	else
		document.getElementById('display').value += btn.value
}

function Operador(btn){
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
			val = document.getElementById('display').value
			break;
	}

	document.getElementById('display').value = val
}

function MemoryRead(){
	document.getElementById('display').value
}