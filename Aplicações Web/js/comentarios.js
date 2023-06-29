function adicionarComentarioAdmin() {
    var nome = prompt("Digite seu nome:");
    var comentario = prompt("Digite seu comentário:");

    if (nome && comentario) {
      var comentarioCompleto = nome + ": " + comentario;
      var comentariosAntigos = localStorage.getItem("comentarios-admin");

      if (comentariosAntigos) {
        comentariosAntigos = JSON.parse(comentariosAntigos);
      } else {
        comentariosAntigos = [];
      }

      comentariosAntigos.push(comentarioCompleto);
      localStorage.setItem("comentarios-admin", JSON.stringify(comentariosAntigos));

      mostrarComentariosAdmin();
    }
  }

  function mostrarComentariosAdmin() {
    var comentariosDiv = document.getElementById("comentarios-admin");
    comentariosDiv.innerHTML = "";

    var comentariosAntigos = localStorage.getItem("comentarios-admin");

    if (comentariosAntigos) {
      comentariosAntigos = JSON.parse(comentariosAntigos);

      comentariosAntigos.forEach(function (comentario) {
        var comentarioElemento = document.createElement("p");
        comentarioElemento.textContent = comentario;
        comentariosDiv.appendChild(comentarioElemento);
      });
    }
  }

  mostrarComentariosAdmin();