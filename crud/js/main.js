$(document).ready(function(){
    load_tabla()
})

$(document).on('click', '#btn_save', function(e){
    e.preventDefault()

    $.ajax({
        url: 'server/newChamp.php',
        type:'POST',
        data: $('#form').serialize(),
        dataType:'JSON',
        error: function (error) {
            console.log(error)
        },
        success: function(data){

            if(data == 1)
                alert("Seguardó correctamente")
            else
                alert('Error')

            load_tabla()
        }
    }); //fin ajax

})


$(document).on('click', '#btn_edit', function(e){
    e.preventDefault()

    $.ajax({
        url: 'server/editChamp.php',
        type:'POST',
        data: $('#form').serialize(),
        dataType:'JSON',
        error: function (error) {
            console.log(error)
        },
        success: function(data){

            if(data == 1)
                alert("Se editó correctamente")
            else
                alert('Error')

            load_tabla()
        }
    }); //fin ajax

})

function edit(id){

    $.ajax({
        url: 'server/getChampToEdit.php',
        type:'POST',
        data: {id: id},
        dataType:'JSON',
        error: function (error) {
            console.log(error)
        },
        success: function(data){

            $('#Nombre').val(data[0].Ch_Nombre)
            $('#Alineacion').val(data[0].Ch_Alineacion)
            $('#Historia').val(data[0].Ch_Historia)
            $('#Alias').val(data[0].Ch_Alias)

            $('.btn_action').attr('id', 'btn_edit')
            $('#id').val(id)


            load_tabla()
        }
    }); //fin ajax

}


function del(id){

    if(confirm("¿Estas seguro?")){
        $.ajax({
            url: 'server/delChamp.php',
            type:'POST',
            data: {id: id},
            dataType:'JSON',
            error: function (error) {
                console.log(error)
            },
            success: function(data){

                if(data == 1)
                    alert("Se eliminó correctamente")
                else
                    alert('Error')

                load_tabla()
            }
        }); //fin ajax
    }

}

function load_tabla(){

    $.ajax({
        url: 'server/getChamps.php',
        type:'POST',
        dataType:'JSON',
        error: function (error) {
            console.log(error)
        },
        success: function(data){
            $('#thead').empty()
            $('#tbody').empty()

            if(data != ""){

                $('thead').append('<tr>'+
                                        '<th>Nombre</th>'+
                                        '<th>Alias</th>'+
                                        '<th>Alineación</th>'+
                                        '<th>Opciones</th>'+
                                    '</tr>')

                for(var i = 0; i < data.length; i++){

                    $('#tbody').append('<tr>'+
                                        '<td>'+data[i].Ch_Nombre+'</td>'+
                                        '<td>'+data[i].Ch_Alias+'</td>'+
                                        '<td>'+data[i].Ch_Alineacion+'</td>'+
                                        '<td><a href="#" onclick="edit('+data[i].Ch_Id+')">Editar</a> | '+
                                        '<a href="#" onclick="del('+data[i].Ch_Id+')">Eliminar</a></td>'+
                                    '</tr>')

                }

            }


        }

                
    }); //fin ajax

}


