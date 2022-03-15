let valorAleatorio = parseInt(Math.random() * 11);
var numTentativas = 5;


function Chutar() {

    let valorEscolhido = document.getElementById("valor").value;
    let resultado = document.getElementById("resultado");
    let tentativas = document.getElementById("tentativas");


    if(valorEscolhido < 0 || valorEscolhido > 10) {
        resultado.innerHTML = "Você precisa digitar um número de 0 a 10";
        tentativas.innerHTML = "Tentativas restantes: "+ numTentativas;
    }
    else {
        if(numTentativas > 0) {
            if(valorEscolhido > valorAleatorio) {
                numTentativas -= 1;
                resultado.innerHTML = "ERROU! O número digitado é MENOR que a resposta";
                tentativas.innerHTML = "Tentativas restantes: "+ numTentativas;
            }
            else if(valorEscolhido < valorAleatorio) {
                numTentativas -= 1;
                resultado.innerHTML = "ERROU! O número digitado é MAIOR que a resposta";
                tentativas.innerHTML = "Tentativas restantes: "+ numTentativas;
            }
            else {
                resultado.innerHTML = "ACERTOU!";
            }
        }

        else {
            resultado.innerHTML = "AS TENTATIVAS ACABARAM";
        }
    }
}
