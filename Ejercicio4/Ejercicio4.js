$(document).ready(function() {
    $('#boton').click(function() {
        $.ajax({
            url: 'ajax.php',
            type: 'GET',
            data: {
                nombre: 'Juanma',
                apellido: 'González'
            },
            success: function(response) {
                $('body').append(response);
            },
            error: function() {
                alert('Error al cargar el archivo PHP');
            }
        });
    });
});