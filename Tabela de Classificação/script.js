let listaJogadores = [];


//DADOS, PONTOS E ORDEM DOS JOGADORES
function exibirDadosJogadores(listaJogadores) {
    let tabelaJogadores = document.getElementById("tabelaJogadores");
    let jogadores = "";

    for(let i in listaJogadores) {
        jogadores += `<tr>
        <td>${listaJogadores[i].nome}</td>
        <td>${listaJogadores[i].vitorias}</td>
        <td>${listaJogadores[i].empates}</td>
        <td>${listaJogadores[i].derrotas}</td>
        <td>${listaJogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`;
    }

    tabelaJogadores.innerHTML = jogadores;
}

function calcularPontos(jogador) {
    let totalPontos = (jogador.vitorias * 3) + jogador.empates;
    jogador.pontos = totalPontos;
}

function ordemClassificacao() {
    listaJogadores.sort(function (a, b) {
      if (a.pontos < b.pontos) {
        return 1;
      } else if (a.pontos == b.pontos) {
        return 0;
      } else {
        return -1;
      }
    });
    exibirDadosJogadores(listaJogadores);
  }


//BOTÕES FORA DA TABELA
function novoJogador() {
    let jogadorObj = {nome: "", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
    jogadorObj.nome = prompt("Digite o nome do jogador: ");    
    listaJogadores.push(jogadorObj);

    console.log(listaJogadores);
    exibirDadosJogadores(listaJogadores);
}

function zerarPontos() {
    for(let i in listaJogadores) {
        listaJogadores[i].vitorias = 0;
        listaJogadores[i].empates = 0;
        listaJogadores[i].derrotas = 0;
        calcularPontos(listaJogadores[i]);
    }

    exibirDadosJogadores(listaJogadores);
}


//BOTÕES DENTRO DA TABELA
function adicionarVitoria(i) {
    let jogador = listaJogadores[i];
    jogador.vitorias++;

    calcularPontos(listaJogadores[i]);
    ordemClassificacao();
}

function adicionarEmpate(i) {
    let jogador = listaJogadores[i];
    jogador.empates++;

    calcularPontos(listaJogadores[i]);
    ordemClassificacao();
}

function adicionarDerrota(i) {
    let jogador = listaJogadores[i];
    jogador.derrotas++;

    calcularPontos(listaJogadores[i]);
    ordemClassificacao();
}
