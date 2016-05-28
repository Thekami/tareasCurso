// var DivObj;

// function AgregarElemento(){
// 	DivObj=document.createElement("div");
// 	DivObj.setAttribute("class","shape");
// 	DivObj.setAttribute("onclick","removeBorder(); "+
// 								  "DivObj = this; "+
// 								  "DivObj.className = 'shape focus';");
// 	document.getElementById("SecContainer").appendChild(DivObj);
// }

// function removeBorder(){
// 	var clases = document.getElementsByClassName('shape')
// 	for(var i = 0; i < clases.length; i++)
// 		clases[i].className = 'shape'
// }

var DivObj;
var ancho;
var alto;
var borde;

function AgregarElemento(){
	DivObj=document.createElement("div");
	DivObj.setAttribute("class","shape");
	ancho = document.getElementById('IdAncho')
	alto = document.getElementById('IdAlto')
	borde = document.getElementById('IdBorde')
	DivObj.style.width = "100px"
	DivObj.style.height = "100px"
	DivObj.setAttribute("onclick","removeBorder(); "+
								  "DivObj = this; "+
								  "DivObj.style.border = 'dashed 3px';"+
								  "ancho.value = DivObj.style.width.split('px')[0];"+
								  "alto.value = DivObj.style.height.split('px')[0];"+
								  "borde.value = DivObj.style.borderWidth.split('px')[0];");
	document.getElementById("SecContainer").appendChild(DivObj);
}

function removeBorder(){
	var clases = document.getElementsByClassName('shape')
	for(var i = 0; i < clases.length; i++)
		clases[i].style.border = ''
}