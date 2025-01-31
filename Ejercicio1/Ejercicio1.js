document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton').addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'ajax.xml', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var xmlDoc = xhr.responseXML;
                var items = xmlDoc.getElementsByTagName('item');
                var result = '';
                for (var i = 0; i < items.length; i++) {
                    var nombre = items[i].getAttribute('nombre');
                    var apellido = items[i].getAttribute('apellido');
                    result += 'Nombre: ' + nombre + ', Apellido: ' + apellido + '<br>';
                }
                document.body.innerHTML += result;
            }
        };
        xhr.send();
    });
});