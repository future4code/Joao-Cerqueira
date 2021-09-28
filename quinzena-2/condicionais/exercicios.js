// Interpretação de código

// 1:

// a: o código solicita um número, se o restante da divisão for 0 ele passa no teste

// b: 4%2=0, 8%2=0

// c: 5%2=1, 7%2=1


//---------------------

// 2:

// a: ele questiona ao usuario a fruta que deseja comprar e informa o preço

// b: 2.25

// c: o codigo iria buscar o preco debaixo

//----------------------

// 3:

// a: solicitando um numero para o usuario

// b: se digitar 10 passa no teste porque foi o numero é maior que 0, e se digitar -10 não ira aparecer nada

// c: na minha visão, faltou colocar o else e inserir o console log após

//----------------------

// Escrita de código

// 1:

// let idade = Number(prompt("Qual sua idade?"))

// if(idade >= 18 ) {
//     console.log("Pode dirigir!")
// }else{
//     console.log("Não pode dirigir!")
// }

//-------------------------

// 2:

// let turno = prompt("Qual seu turno?  M (matutino) ou V (Vespertino) ou N (Noturno) ")    

// if (turno === "M") {
//     console.log("Bom Dia!")
// }else if ( turno === "V") {
//     console.log("Boa Tarde!")
// }else if ( turno === "N") {
//     console.log("Boa Noite!")
// }

//-------------------------

// 3:

// let turno2 = prompt("Qual seu turno?  M (matutino) ou V (Vespertino) ou N (Noturno) ")

// switch(turno2){
//     case "M":
//         console.log("Bom Dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break              
// }

//------------------------

// 4:

// let filme = prompt("Qual o gênero do filme?")
// let preço = prompt("Qual preço do ingresso?")

// if(filme === "fantasia", preço < 15){   
//     console.log("FILME APROVADO")
// }else{
//     console.log("FILME NEGADO")
// } 

//------------------------

// DESAFIOS

// 1:

// let filme = prompt("Qual o gênero do filme?")
// let preço = prompt("Qual preço do ingresso?")
// let comida = prompt("Oque você deseja comer?")

// if(filme === "fantasia", preço < 15){   
//     console.log("FILME APROVADO,", "aproveite o seu", comida )
// }else{
//     console.log("FILME NEGADO")
// } 

//------------------------

// 2:

let nome = prompt("Informe seu nome!")
let tipoDeJogo = prompt("Tipo de jogo? IN para internacional e DO para doméstico")
let etapaDoJogo = prompt("Etapa de jogo?  SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
let categoria = Number(prompt("Qual categoria?"))
let ingresso = Number(prompt("Quantos ingressos?"))
let nacionalOuInternacional = "nacional"

const tabelaDePreços =
 [1320, 880, 550, 220,
  660, 440, 330, 170,
  1980, 1320, 880, 330]


if(etapaDoJogo === "SF" && categoria === 1){
    valorDoIngresso = tabelaDePreços[0]
}else if (etapaDoJogo === "SF" && categoria === 2){
    valorDoIngresso = tabelaDePreços[1]
}else if (etapaDoJogo === "SF" && categoria === 3){
    valorDoIngresso = tabelaDePreços[2]
}else if (etapaDoJogo === "SF" && categoria === 4){
    valorDoIngresso = tabelaDePreços[3]
}else if (etapaDoJogo === "SF" && categoria === 1){
    valorDoIngresso = tabelaDePreços[4]
}else if (etapaDoJogo === "SF" && categoria === 2){
    valorDoIngresso = tabelaDePreços[5]
}else if (etapaDoJogo === "SF" && categoria === 3){
    valorDoIngresso = tabelaDePreços[6]
}else if (etapaDoJogo === "SF" && categoria === 4){
    valorDoIngresso = tabelaDePreços[7]
}else if (etapaDoJogo === "SF" && categoria === 1){
    valorDoIngresso = tabelaDePreços[8]
}else if (etapaDoJogo === "SF" && categoria === 2){
    valorDoIngresso = tabelaDePreços[9]
}else if (etapaDoJogo === "SF" && categoria === 3){
    valorDoIngresso = tabelaDePreços[10]
}else if (etapaDoJogo === "SF" && categoria === 4){
    valorDoIngresso = tabelaDePreços[11]
}

switch (tipoDeJogo){
    case "IN":
    valorDoIngresso = valorDoIngresso*0.2439
    nacionalOuInternacional = "internacional"
    break
}

valorTotal = ingresso * valorDoIngresso

    ingresso2 = [
        `Nome: ${nome}
        Tipo de jogo: ${tipoDeJogo}
        Etapa do jogo: ${etapaDoJogo}`]
imprimirIngresso (nome, tipoDeJogo, etapaDoJogo,categoria, ingresso, valorDoIngresso, valorTotal)

