$(document).ready(function(){

})

var cont1 = 10
var bandera = true
var parpadeando = ""
var idSetInterval = 0

$(document).on('click', '.champ-icon', function(){

	// id = id.split('_')[1]

	// $('.contenedores').attr('hidden', true)
	// $('#'+id).attr('hidden', false)


	var id = $(this).attr('id')

	if(id != parpadeando){
		clearInterval(idSetInterval)
		$('#chi1').attr('style', '')
		$('#chi2').attr('style', '')
		$('#chi3').attr('style', '')
		$('#chi4').attr('style', '')
		$('#chi5').attr('style', '')
		cont1 = 10
		bandera = true
	}

	idSetInterval = setInterval(function(){
		if(cont1 == 0)
			bandera = false
		if(cont1 == 9)
			bandera = true

	   	cont1 = parpadeo(id, cont1, bandera)
	},100);


	$('.contenedores').attr('hidden', true)

	if(id == 'chi1')
		$('#tristana').attr('hidden', false)

	if(id == 'chi2')
		$('#janna').attr('hidden', false)

	if(id == 'chi3')
		$('#shivana').attr('hidden', false)
	
	if(id == 'chi4')
		$('#galio').attr('hidden', false)

	if(id == 'chi5') 
		$('#trynda').attr('hidden', false)



})

$(document).on('click', '#li', function(){
	var img = $(this).attr('src')

	var clase = $(this).attr('class')
	clase = clase.split(' ')[1]
	
	$('#mi_'+clase).slideUp('slow',function(){
		$('#mi_'+clase).attr('src', img)
		$('#mi_'+clase).slideDown()
	})
	// alert(img)

})

$(document).on('click', '#ci', function(){
	var img = $(this).attr('src')

	var clase = $(this).attr('class')
	clase = clase.split(' ')[1]
	
	$('#mi_'+clase).slideUp('slow',function(){
		$('#mi_'+clase).attr('src', img)
		$('#mi_'+clase).slideDown()
	})
	// alert(img)

})

$(document).on('click', '#ri', function(){
	var img = $(this).attr('src')

	var clase = $(this).attr('class')
	clase = clase.split(' ')[1]
	
	$('#mi_'+clase).slideUp('slow',function(){
		$('#mi_'+clase).attr('src', img)
		$('#mi_'+clase).slideDown()
	})
	// alert(img)

})

var contandoAndo = 0

function AddComment(){

	contandoAndo++

	if(contandoAndo % 2)
		$('#Comments').append('<p class="com-par">'+$('#Comment').val()+'</p>')
	else
		$('#Comments').append('<p class="com-non">'+$('#Comment').val()+'</p>')
}


function parpadeo(id, cont1, bandera){

	if(bandera){

		cont1-=1

		if(cont1 != 10 && cont1 != 0)
			var fin = '0.'+cont1
		else if(cont1 == 0)
			fin = cont1
		else if(cont1 == 10)
			fin = 1

		$('#'+id).attr('style', 'opacity: '+fin+';')

		if(cont1 != 0)
			fin = parseInt(fin.split('.')[1])

	}
	else{
		cont1+=1

		if(cont1 != 10 && cont1 != 0)
			var fin = '0.'+cont1
		else if(cont1 == 0)
			fin = cont1
		else if(cont1 == 10)
			fin = 1

		$('#'+id).attr('style', 'opacity: '+fin+';')

		if(cont1 != 10)
			fin = parseInt(fin.split('.')[1])

	}
	
	return parseInt(fin)

}
