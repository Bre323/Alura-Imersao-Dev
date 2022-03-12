function converter() {
    let moeda = document.getElementById("converter-para");
    let valorConvertido = document.getElementById("valorConvertido");
    let valor = document.getElementById("valor");
    let valorReal = parseFloat(valor.value).toFixed(2);
    let realDolar = 0.2;
    let realEuro = 0.18;
    let realLibra = 0.15;
    let realBitcoin = 0.000005;
    let resultado = 0;
  
    if (moeda.value == "USD") {
        resultado = (valorReal * realDolar).toFixed(2);
        valorConvertido.innerHTML =
        valorReal + " Reais = " + resultado + " Dólares";
    } 
    else if (moeda.value == "EUR") {
        resultado = (valorReal * realEuro).toFixed(2);
        valorConvertido.innerHTML = valorReal + " Reais = " + resultado + " Euros";
    } 
    else if (moeda.value == "GBP") {
        resultado = (valorReal * realLibra).toFixed(2);
        valorConvertido.innerHTML = valorReal + " Reais = " + resultado + " Libras";
    } 
    else if (moeda.value == "BTC") {
        resultado = (valorReal * realBitcoin).toFixed(5);
        valorConvertido.innerHTML =
        valorReal + " Reais = " + resultado + " Bitcoins";
    }
  }
