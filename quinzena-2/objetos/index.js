// interpretação de codigo
//1-
//a- vai ser impresso matheus nachtergaele, virginia cavendish e o objeto canal globo 14h.

//2-
//a vai ser impresso 3 objetos, primeiro do juca (cachorro), depois juba (gato) e por ultimo jubo (tartaruga)

//b- os três pontos chama o objeto informado, no caso ...cachorro esta chamando o objeto cachorro

//3-

//a- vai ser impresso o valor false e undefined

//b- valor false porque o backender é = false e a altura é undefined porque não foi informado nenhuma variavel e valor para altura


//escrita de codigo

//1- 
//const pessoa = {
//    nome: "João Lucas",
//    apelidos: ["Jão", "Joãozinho", "Feijão"]
//}

//function imprimeMensagem() {
//    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},
//     ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
//}
//imprimeMensagem()

//------------------------------------

//2- 
//const pessoa1 = {
//    nome: "João",
//    idade: "21",
//    profissão: "agente administrativo"
//}

//const pessoa2 = {
//    nome: "Paola",
//    idade: "25",
//    profissão: "arquiteta"
//}

//function imprimeValores() {
//    const array = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissão, pessoa1.profissão.length]
//    const array2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissão, pessoa2.profissão.length]
//    console.log(array, array2)
//}
//imprimeValores()

//----------------------------------------------------------------

//const carrinho = []

//const objeto1 = {
//    nome: "Uva",
//    disponibilidade: true
//}

//const objeto2 = {
//    nome: "Banana",
//    disponibilidade: true
//}

//const objeto3 = {
//    nome: "Laranja",
//    disponibilidade: true
//}

//function recebeObjeto(objeto1, objeto2, objeto3) {
//    carrinho.push(objeto1, objeto2, objeto3)
//    return carrinho
//}
//console.log(carrinho)

const carrinho = [];

const primeiraFruta = {
    nome: ("banana"),
    disponibilidade: true
}

const segundaFruta = {
    nome: ("abacate"),
    disponibilidade: true
}

const terceiraFruta = {
    nome: ("maçã"),
    disponibilidade: true
}

const recebeFrutas = (primeiraFruta, segundaFruta, terceiraFruta) => {
    carrinho.push (primeiraFruta, segundaFruta, terceiraFruta);
    console.log (carrinho);
}

recebeFrutas(primeiraFruta, segundaFruta, terceiraFruta);