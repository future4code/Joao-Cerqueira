let minhaString: string = "Valor"
// minhaString = número não pode ser atribuído a uma variável do tipo string

// b) 
let meuNumero: number | string = 8
meuNumero = "fabio" 
// usar o tipo any

// c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris,
}

enum ArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1: pessoa = {
    nome: "João",
    idade: 28,
    corFavorita: ArcoIris.ANIL,
}

const pessoa2: pessoa = {
    nome: "Lucas",
    idade: 33,
    corFavorita: ArcoIris.LARANJA,
}

const pessoa3: pessoa = {
    nome: "Pedro",
    idade: 33,
    corFavorita: ArcoIris.AZUL,
}

console.log(pessoa1, pessoa2, pessoa3)
