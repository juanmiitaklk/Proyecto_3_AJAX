document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton').addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'ajax.json', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                document.getElementById('autor').innerText = data.nombre + ' ' + data.apellido;
                document.getElementById('titulo').innerText = data.libros[0].titulo;
                document.getElementById('subtitulo').innerText = data.libros[0].subTitulo;
            }
        };
        xhr.send();
    });
});
