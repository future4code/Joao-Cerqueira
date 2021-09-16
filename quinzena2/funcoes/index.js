//Interpretação de codigo

//1
//a. será impresso no console 10 e 50
//b. sem o console.log não aparece nada no console

//2
//a. função retorna true ou false dependendo do prompt informado tem inlcuso cenouras
//b. true, true, true

//---------------------------

//Exercicios de escrita de código
 
//1

//a.

//function imprimirFrase(){
//    console.log("Eu sou João, tenho 21 anos, moro em Curitiba e sou estudante.")
//}
//imprimirFrase()

//------------------------------

//b.

//const nome = prompt("Qual seu nome?")
//const idade = Number(prompt("Qual sua idade?"))
//const cidade = prompt("Qual sua cidade?")
//const profissao = prompt("Qual sua profissão")

//function imprimirFrase() {
//    console.log("Eu sou", nome, "tenho", idade,", moro em", cidade,"e sou", profissao)
//}
//imprimirFrase()

//-------------------------------

//2

//a

//function calculoNumero(numero1, numero2){
//    const calculo = numero1 + numero2
//    console.log(calculo)
//}
//
//calculoNumero(5,5)

//--------------------------------

//b

//function calculo(){
//    console.log(10 > 5)
//}
//
//calculo(10 > 5)

//---------------------------------

//c

//NÃO CONSEGUI :C

//----------------------------------

//d

//const frase = prompt("Digite uma frase")

//function frase1() {
//console.log(frase.length)
//console.log(frase.toUpperCase())
//}

//frase1()

//----------------------------------

//3

const numero1 = Number(prompt("Informe um numero"))
const numero2 = Number(prompt("Informe outro numero"))

function soma(numero1, numero2){
    const calculo = numero1 + numero2
    console.log(calculo)
}

soma("Soma:",numero1, numero2)

function subtracao(numero1, numero2){
    const calculo = numero1 - numero2
    console.log(calculo)
   
}

subtracao("Diferença:",numero1, numero2)

function multiplicacao(){
    const calculo = numero1 * numero2
    console.log(calculo)
    
}

multiplicacao("Multiplicação:", numero1, numero2)

function divisao(numero1, numero2){
    const calculo = numero1 / numero2
    console.log(calculo)
    
}

divisao("Divisão:",numero1, numero2)