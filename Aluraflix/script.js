let listaDeImagens = [];
let listaDeTitulos = [];

function adicionarFilme() {
    let filme = document.getElementById("filme").value;
    if(filme.endsWith(".jpg")) {
        listarFilmes(filme);
    }
    else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
    let elementoFilme = "<img src="+ filme +">";
    let elementoImagemDeFilmes = document.getElementById("imagemsDeFilmes");
    listaDeImagens.push(elementoFilme);
    elementoImagemDeFilmes.innerHTML += listaDeImagens[listaDeImagens.length - 1];
    console.log(listaDeImagens);
}

function removerFilme() {
    listaDeImagens.pop();
    elementolistaFilmes.innerHTML = "";
    for(let x in listaDeImagens) {
        elementolistaFilmes.innerHTML += listaDeImagens[x];
    }
}
