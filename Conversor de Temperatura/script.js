function converter() {

    let valorTemperatura = parseInt(document.getElementById("valor").value);
    let medidaValor = document.getElementById("converter-de").value;
    let medidaConversao = document.getElementById("converter-para").value;
    let valorConvertido = document.getElementById("valorConvertido");
    let conversao;
    let resultado;


    if(medidaValor == "Celsius") {
        if(medidaConversao == "Fahrenheit") {
            conversao = (valorTemperatura * (9/5)) + 32;
            resultado = valorTemperatura +" °C = "+ conversao +" °F";
            valorConvertido.innerHTML = resultado;
        }
        else if(medidaConversao == "Kelvin") {
            conversao = valorTemperatura + 273;
            resultado = valorTemperatura +" °C = "+ conversao +" K";
            valorConvertido.innerHTML = resultado;
        }
    }

    if(medidaValor == "Fahrenheit") {
        if(medidaConversao == "Celsius") {
            conversao = (valorTemperatura - 32) * (5/9);
            resultado = valorTemperatura +" °F = "+ conversao +" °C";
            valorConvertido.innerHTML = resultado;
        }
        else if(medidaConversao == "Kelvin") {
            conversao = ((valorTemperatura - 32) * (5/9)) + 273;
            resultado = valorTemperatura +" °F = "+ conversao +" K";
            valorConvertido.innerHTML = resultado;
        }
    }

    if(medidaValor == "Kelvin") {
        if(medidaConversao == "Celsius") {
            conversao = valorTemperatura - 273;
            resultado = valorTemperatura +" K = "+ conversao +" °C";
            valorConvertido.innerHTML = resultado;
        }
        else if(medidaConversao == "Fahrenheit") {
            conversao = ((valorTemperatura - 273) * (9/5)) + 32;
            resultado = valorTemperatura +" K = "+ conversao +" °F";
            valorConvertido.innerHTML = resultado;
        }
    }
}
