$(document).ready(function() {
    $('#boton').click(function() {
        $.ajax({
            url: 'ajax.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#autor').text(data.nombre + ' ' + data.apellido);
                $('#titulo1').text(data.libros[0].titulo);
                $('#subtitulo1').text(data.libros[0].subTitulo);
                $('#titulo2').text(data.libros[1].titulo);
                $('#subtitulo2').text(data.libros[1].subTitulo);
            },
            error: function() {
                alert('Error al cargar el archivo JSON');
            }
        });
    });
});
