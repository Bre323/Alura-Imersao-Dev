let calcular = document.querySelector(".bt")
let resultadoAluno = document.querySelector(".resultado-aluno")
let resultadoMedia = document.querySelector(".resultado-media")
let nota1 = document.querySelector(".nota1")
let nota2 = document.querySelector(".nota2")
let nota3 = document.querySelector(".nota3")
let nota4 = document.querySelector(".nota4")

calcular.addEventListener("click", calcularMedia)


function calcularMedia() {
  let nome = prompt("Digite o seu nome")
  let notaPrimeiroBimestre = parseFloat(prompt("Digite a nota do 1° bimestre"))
  let notaSegundoBimestre = parseFloat(prompt("Digite a nota do 2° bimestre"))
  let notaTerceiroBimestre = parseFloat(prompt("Digite a nota do 3° bimestre"))
  let notaQuartoBimestre = parseFloat(prompt("Digite a nota do 4° bimestre"))
  let media = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4
  let notaFinal = media.toFixed(2)
  
  if(notaFinal >= 7 && notaFinal <= 10) {
   resultadoAluno.innerHTML = "Parabéns "+ nome + ", voce PASSOU"
   resultadoMedia.innerHTML = "Média: " + notaFinal
    nota1.innerHTML = "Nota 1° bimestre: " + notaPrimeiroBimestre
    nota2.innerHTML = "Nota 2° bimestre: " + notaSegundoBimestre
    nota3.innerHTML = "Nota 3° bimestre: " + notaTerceiroBimestre
    nota4.innerHTML = "Nota 4° bimestre: " + notaQuartoBimestre
  }
  else if (notaFinal < 7 && notaFinal >= 0) {
    resultadoAluno.innerHTML = nome + ", voce REPROVOU"
    resultadoMedia.innerHTML = "Média: " + notaFinal
    nota1.innerHTML = "Nota 1° bimestre: " + notaPrimeiroBimestre
    nota2.innerHTML = "Nota 2° bimestre: " + notaSegundoBimestre
    nota3.innerHTML = "Nota 3° bimestre: " + notaTerceiroBimestre
    nota4.innerHTML = "Nota 4° bimestre: " + notaQuartoBimestre
  }
  else {  
    resultadoAluno.innerHTML = "ERRO! IMPOSSÍVEL TER ESSA NOTA FINAL!"
    resultadoMedia.innerHTML = "Média: " + media
    nota1.innerHTML = "Nota 1° bimestre: " + notaPrimeiroBimestre
    nota2.innerHTML = "Nota 2° bimestre: " + notaSegundoBimestre
    nota3.innerHTML = "Nota 3° bimestre: " + notaTerceiroBimestre
    nota4.innerHTML = "Nota 4° bimestre: " + notaQuartoBimestre
  }
}
