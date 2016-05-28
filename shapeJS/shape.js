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
var rgb;
var arr;

function AgregarElemento(){
	DivObj=document.createElement("div");
	DivObj.setAttribute("class","shape");
	ancho = document.getElementById('IdAncho')
	alto = document.getElementById('IdAlto')
	borde = document.getElementById('IdBorde')
	color = document.getElementById('IdColorBack')
	DivObj.style.width = "100px"
	DivObj.style.height = "100px"
	DivObj.style.borderWidth = "1px"
	DivObj.style.backgroundColor = "#FF0000"

	DivObj.setAttribute("onclick","removeBorder(); "+
								  "DivObj = this; "+
								  "DivObj.style.border = 'dashed 3px';"+
								  "ancho.value = DivObj.style.width.split('px')[0];"+
								  "alto.value = DivObj.style.height.split('px')[0];"+
								  "borde.value = DivObj.style.borderWidth.split('px')[0];"+
								  "rgb = DivObj.style.backgroundColor.split('(')[1].split(')')[0].split(',');"+
								  "color.value = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));"+
								  "console.log(DivObj.style.backgroundColor)");
	document.getElementById("SecContainer").appendChild(DivObj);
}

function removeBorder(){
	var clases = document.getElementsByClassName('shape')
	for(var i = 0; i < clases.length; i++)
		clases[i].style.border = ''
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

rgb = 'rgb(255, 51, 0)'.split('(')[1].split(')')[0].split(',')
// rgb = rgb.split(')')[0]
// rgb = rgb.split(',')


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// 	rgbToHex(0, 51, 255)
// console.log(rgbToHex(0, 51, 255))
// console.log(rgb)
// console.log(rgbToHex(parseInt(rgb[2]), parseInt(rgb[1]), parseInt(rgb[0])))