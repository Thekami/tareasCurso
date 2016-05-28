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
var color;
var colorBorde;

function AgregarElemento(){
	DivObj=document.createElement("div");
	DivObj.setAttribute("class","shape");

	ancho = document.getElementById('IdAncho')
	alto = document.getElementById('IdAlto')
	borde = document.getElementById('IdBorde')
	color = document.getElementById('IdColorBack')
	colorBorde = document.getElementById('IdColorBorde')

	DivObj.style.width = "100px"
	DivObj.style.height = "100px"
	DivObj.style.borderWidth = "1px"
	DivObj.style.backgroundColor = "#FF0000"
	DivObj.style.borderColor = "#000";

	DivObj.setAttribute("onclick","DivObj = this; "+
								  "DivObj.style.borderStyle = 'dashed';"+
								  "ancho.value = DivObj.style.width.split('px')[0];"+
								  "alto.value = DivObj.style.height.split('px')[0];"+
								  "borde.value = DivObj.style.borderWidth.split('px')[0];"+
								  "color.value = rgbToHex(DivObj.style.backgroundColor);"+
								  "colorBorde.value = rgbToHex(DivObj.style.borderColor)");

	// DivObj.setAttribute("onclick","hola(this, document.getElementById('IdAncho'), document.getElementById('IdAlto'), document.getElementById('IdBorde'), document.getElementById('IdColorBack'))")
	document.getElementById("SecContainer").appendChild(DivObj);
}

function removeBorder(){
	var clases = document.getElementsByClassName('shape')
	for(var i = 0; i < clases.length; i++)
		// console.log(clases[i].style)
		clases[i].style.border = ''
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex
}


// function hola(DivObj, ancho, alto, borde, color){
// 	console.log(DivObj)
// 	removeBorder()
// 	DivObj.style.border = 'dashed 3px'
// 	ancho.value = DivObj.style.width.split('px')[0]
// 	alto.value = DivObj.style.height.split('px')[0]
// 	borde.value = DivObj.style.borderWidth.split('px')[0]
// 	color.value = rgbToHex(DivObj.style.backgroundColor)
// }


// rgb = 'rgb(255, 51, 0)'.split('(')[1].split(')')[0].split(',')
// rgb = rgb.split(')')[0]
// rgb = rgb.split(',')


function rgbToHex(rgb) {
	rgb = rgb.split('(')[1].split(')')[0].split(',')
    return "#" + componentToHex(parseInt(rgb[0])) + componentToHex(parseInt(rgb[1])) + componentToHex(parseInt(rgb[2]))
}

// 	rgbToHex(0, 51, 255)
// console.log(rgbToHex('rgb(255, 0, 0)'))
// console.log(rgb)
// console.log(rgbToHex(parseInt(rgb[2]), parseInt(rgb[1]), parseInt(rgb[0])))