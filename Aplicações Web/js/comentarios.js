function adicionarComentario() {
    var nome = prompt("Digite seu nome:");
    var comentario = prompt("Digite seu comentário:");

    if (nome && comentario) {
        var comentarioCompleto = nome + ": " + comentario;
        var comentariosAntigos = localStorage.getItem("comentarios");

        if (comentariosAntigos) {
            comentariosAntigos = JSON.parse(comentariosAntigos);
        } else {
            comentariosAntigos = [];
        }

        comentariosAntigos.push(comentarioCompleto);
        localStorage.setItem("comentarios", JSON.stringify(comentariosAntigos));

        mostrarComentarios();
    }
}

function mostrarComentarios() {
    var comentariosDiv = document.getElementById("comentarios");
    comentariosDiv.innerHTML = "";

    var comentariosAntigos = localStorage.getItem("comentarios");

    if (comentariosAntigos) {
        comentariosAntigos = JSON.parse(comentariosAntigos);

        comentariosAntigos.forEach(function(comentario) {
            var comentarioElemento = document.createElement("p");
            comentarioElemento.textContent = comentario;
            comentariosDiv.appendChild(comentarioElemento);
        });
    }
}

mostrarComentarios();