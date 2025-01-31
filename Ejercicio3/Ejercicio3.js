document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton').addEventListener('click', function() {
        var xhr = new XMLHttpRequest();
        var url = 'ajax.php?nombre=Juanma&apellido=González';
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.body.innerHTML += xhr.responseText;
            }
        };
        xhr.send();
    });
});
