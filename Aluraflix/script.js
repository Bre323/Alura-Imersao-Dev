let listaDeFilmes = [];

function adicionarFilme() {
    let filme = document.getElementById("filme").value
    let titulo = document.getElementById("nomeFilme").value

    if(filme == "" || titulo == "") {
        alert("Preencha os campos para inserir um filme");
    }
    else {
        if(filme.endsWith(".jpg")) {
            listarFilmes(filme, titulo);
        }
        else {
            alert("Endereço de filme inválido");
        }
    }

    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}


function listarFilmes(filme, titulo) {
    let elementoFilmesAdicionados = document.getElementById("filmesAdicionados");
    let elementoFilme = "<img src="+ filme +">";
    let elementoTitulo = "<h2>"+ titulo +"</h2>";

    listaDeFilmes.push({Imagem: elementoFilme, Titulo: titulo});
    elementoFilmesAdicionados.innerHTML += "<div class='divFilme'>"+ elementoFilme + elementoTitulo +"</div>";

    console.log(listaDeFilmes);
}
