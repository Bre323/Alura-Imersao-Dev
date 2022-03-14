function exibirDistancia() {
    let planetaEscolhido = document.getElementById("valor").value;
    let imagemDoPlaneta = document.getElementById("imagemPlaneta");
    let distanciaAnosLuz = document.getElementById("distanciaAnosLuz");
    let distanciaKM = document.getElementById("distanciaKM");


    if(planetaEscolhido == "Mercúrio") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2021/09/12/16/02/mercury-6618698_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Mercúrio');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,0000061";
        distanciaKM.innerHTML = "Distancia em Kilometros: 57.910.000";
    }
    else if(planetaEscolhido == "Vênus") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/09/14/19/04/venus-5571818_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Vênus');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,0000114";
        distanciaKM.innerHTML = "Distancia em Kilometros: 108.160.000";
    }
    else if(planetaEscolhido == "Terra") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Terra');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,0000158";
        distanciaKM.innerHTML = "Distancia em Kilometros: 149.600.000";
    }
    else if(planetaEscolhido == "Marte") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/08/17/11/50/mars-2651003_1280.png');
        imagemDoPlaneta.setAttribute('alt', 'Marte');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,0000241";
        distanciaKM.innerHTML = "Distancia em Kilometros: 228.000.000";
    }
    else if(planetaEscolhido == "Júpiter") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/02/22/08/15/space-4869815_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Júpiter');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,0000823";
        distanciaKM.innerHTML = "Distancia em Kilometros: 778.400.000";
    }
    else if(planetaEscolhido == "Saturno") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2012/11/28/10/54/saturn-67671_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Saturno');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,000151";
        distanciaKM.innerHTML = "Distancia em Kilometros: 1.427.000.000";
    }
    else if(planetaEscolhido == "Urano") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2021/03/02/17/58/uranus-6063396_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Urano');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,000303";
        distanciaKM.innerHTML = "Distancia em Kilometros: 2.869.600.000";
    }
    else if(planetaEscolhido == "Netuno") {
        imagemDoPlaneta.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/09/13/19/23/neptune-5569170_1280.jpg');
        imagemDoPlaneta.setAttribute('alt', 'Netuno');
        distanciaAnosLuz.innerHTML = "Distancia em Anos-Luz: 0,000475";
        distanciaKM.innerHTML = "Distancia em Kilometros: 4.496.600.000";
    }
}
