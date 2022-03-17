let listaDeImagens = [];
let listaDeTitulos = [];

function adicionarFilme() {
    let filme = document.getElementById("filme").value;
    if(filme.endsWith(".jpg") || filme.endsWith(".png")) {
        listarFilmes(filme);
    }
    else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
    let elementoFilme = "<img src="+ filme +">";
    let elementolistaFilmes = document.getElementById("imagemsDeFilmes");
    listaDeImagens.push(elementoFilme);
    elementolistaFilmes.innerHTML += listaDeImagens[listaDeImagens.length - 1];
}

function removerFilme() {
    listaDeImagens.pop();
    elementolistaFilmes.innerHTML = "";
    for(let x in listaDeImagens) {
        elementolistaFilmes.innerHTML += listaDeImagens[x];
    }
}
