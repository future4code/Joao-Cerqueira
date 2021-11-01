
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
}

// c-)Faça uma função chamada "verificaSeEMaior"

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    const nomeDoUsuario = prompt("Informe seu nome!")
    const anoDeNascimento = Number(prompt("Informe seu ano de nascimento!"))
    const senhaDoUsuario = prompt("Informe sua senha!")
    const nacionalidade = prompt("Qual sua nacionalidade?")

    if((2021 - anoDeNascimento) >= 18 && senhaDoUsuario.length >= 6 && nacionalidade.toLowerCase === "brasileira" ){
       return usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) 
    }else{
       console.log("Você não cumpre os requisitos")
    }

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    const login2 = prompt("informe sua senha!")
    
    if(login2 === login ){
        console.log("Usuário logado")
      }else{
        console.log("Senha inválida")
      }
  
}
console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    const nomeUsuario = prompt("Informe seu nome!")
    const vacina = prompt("Informe sua vacina!")
    let tempo = ""
    let data = "01/08/2021"
    
    if(vacina === "Coronavac"){
        tempo = 28
        return `Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${"29/08/2021"}.`
    }else if (vacina === "Astrazenica"){
        tempo = 90
        return `Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${"30/10/2021"}.`
    }else if (vacina === "Pfizer"){
        tempo = 90
        return `Olá ${nomeUsuario}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${"30/10/2021"}.`
    } else {
        return `Vacina Inválida.`
    }

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    function novoArrayFunction(usuarios) {
        return usuarios.nome === "Barbara"
    }

    function novoArrayFunction2(usuarios) {
        return usuarios.imunizacao = "completo"
    }

    const vacinado = usuarios.filter(novoArrayFunction).map(novoArrayFunction2)
        return usuarios
    
}
console.log(segundaDose("Barbara"));


// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    function novoArrayFunction(usuarios) {
        return usuarios.imunizacao === "incompleta" 
    }
    
    function novoArrayFunction2(usuarios) {
        return `Olá ${usuarios.nome}! Sua imunização está ${usuarios.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    }
    
    const vacinado = usuarios.filter(novoArrayFunction).map(novoArrayFunction2)
        return vacinado
   

}
console.log(avisoAosAtrasados());



// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());