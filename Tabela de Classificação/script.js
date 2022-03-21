let jogadorObj = {nome: "Breno", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

//BOTÕES FORA DA TABELA
function novoJogador() {
    let tabelaJogadores = document.getElementById("tabelaJogadores");
    let jogador = `<tr>
    <td>Breno</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button onClick="adicionarVitoria()">Vitória</button></td>
    <td><button onClick="adicionarEmpate()">Empate</button></td>
    <td><button onClick="adicionarDerrota()">Derrota</button></td>
</tr>`;
    
    tabelaJogadores.innerHTML += jogador;
    console.log(jogadorObj);
}


function zerarPontos() {
    jogadorObj.vitorias = 0;
    jogadorObj.empates = 0;
    jogadorObj.derrotas = 0;
    jogadorObj.pontos = 0;
    console.log(jogadorObj);
}


//BOTÕES DENTRO DA TABELA
function adicionarVitoria() {
    jogadorObj.vitorias += 1;
    console.log(jogadorObj.vitorias);

    calcularPontos();
}

function adicionarEmpate() {
    jogadorObj.empates += 1;
    console.log(jogadorObj.empates);

    calcularPontos();
}

function adicionarDerrota() {
    jogadorObj.derrotas += 1;
    console.log(jogadorObj.derrotas);

    calcularPontos();
}


//PONTOS E DADOS DO JOGADORES
function calcularPontos() {
    let totalPontos = (jogadorObj.vitorias * 3) + jogadorObj.empates;
    jogadorObj.pontos = totalPontos;
    console.log(totalPontos);
}

function exibirDadosJogadores() {
    calcularPontos();    
}
