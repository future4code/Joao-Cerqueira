// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
 // const altura = Number(prompt('Digite a altura'))
 // const largura = Number(prompt('Digite a largura'))
    const calculo = altura * largura
    console.log(calculo)
}
calculaAreaRetangulo()

// Exercício 2
function imprimeIdade() {
 // const anoAtual = Number(prompt('Digite ano atual'))
 //  const ano = Number(prompt('Digite seu ano de nascimento'))
  const calculo2 = anoAtual - ano
  console.log(calculo2)
}
imprimeIdade()

// Exercício 3
function calculaIMC() {
 // const peso = Number(prompt('Digite seu peso'))
 // const altura = Number(prompt('Digite sua altura'))
  const imc = peso / (altura * altura)
  console.log(imc)
}
calculaIMC()

// Exercício 4
function imprimeInformacoesUsuario() {
 // const nome = prompt("Qual seu nome?")
 // const idade2 = Number(prompt("Qual sua idade?"))
 // const email = prompt("Qual seu email?")
  
console.log(`Meu nome é ${nome}, tenho ${idade2} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// Exercício 5
function imprimeTresCoresFavoritas() {  
 // const cor1 = prompt("informe uma cor?")
 // const cor2 = prompt("informe uma cor?")
 // const cor3 = prompt("informe uma cor?")
  
  console.log([cor1, cor2, cor3])
}
imprimeTresCoresFavoritas()

// Exercício 6
function retornaStringEmMaiuscula() {
//  const string1 = prompt("Informe uma palavra")
  console.log(string1.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
 // const espetaculo = Number(prompt("Qual preço do espetaculo?"))
 // const espetaculo2 = Number(prompt("Qual preço do ingresso?"))
 // const resultadoEspetaculo = espetaculo / espetaculo2

  console.log(resultadoEspetaculo)
}
calculaIngressosEspetaculo()

// Exercício 8
function checaStringsMesmoTamanho() {
 // const string2 = prompt("Digite uma palavra")
 // const string3 = prompt("Digite outra palavra")
 // const resultadoEntreString = string2.length === string3.length

  console.log(resultadoEntreString)
}
checaStringsMesmoTamanho()

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
 //  const string4 = prompt("Digite uma palavra")
//  const string5 = prompt("Digite outra palavra")
  
//  const resultadoEntreString2 = string4.length >= string5.length

 console.log(resultadoEntreString2)
}
checaIgualdadeDesconsiderandoCase()

// Exercício 10
function checaRenovacaoRG() {
 // let anoAtual =  prompt("qual ano atual")
//  let nascimento = prompt("sua data de nascimento")
//  let anoEmissao = prompt("ano da emissao da carteira")
 // let idade = anoAtual - nascimento
//  let anoRG = anoAtual - anoEmissao 
  console.log((idade <= 20 && anoRG >= 5 ) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
 }
checaRenovacaoRG()

// Exercício 11
function checaAnoBissexto() {
 // const ano5 = Number(prompt("informe o ano"))
 // const resultado5 = ano5 % 100 !== 0
 // to tentando ate hj

console.log(resultado5)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
//  const idadeUsuario = prompt("Você é maior de idade?")
//  const ensinoMedio = prompt("Possui ensino médio completo?")
//  const horarios = prompt("Qual a sua disponibilidade de horario?")

//  const calculo = "sim" === true 
//  const calculo2 = "nao" === false

  
 
  console.log( calculo, calculo2)
}