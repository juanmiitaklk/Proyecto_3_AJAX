$(document).ready(function() {
    $('#boton').click(function() {
        $.ajax({
            url: 'ajax.xml',
            type: 'GET',
            dataType: 'xml',
            success: function(xml) {
                var result1 = '';
                var result2 = '';
                $(xml).find('item').each(function() {
                    var nombre = $(this).attr('nombre');
                    var apellido = $(this).attr('apellido');
                    result1 += 'Nombre: ' + nombre + '<br>';
                    result2 += 'Apellido: ' + apellido + '<br>';
                });
                $('#contenedor1').html(result1);
                $('#contenedor2').html(result2);
            },
            error: function() {
                alert('Error al cargar el archivo XML');
            }
        });
    });
});