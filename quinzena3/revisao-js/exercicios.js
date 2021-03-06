// EXERCÍCIO 01
function inverteArray(array) {
  const novoArrayInvertido = array.map((item, indice, array) => array[array.length - indice - 1]);
  return novoArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const pares = array.filter(item => item % 2 == 0).map(item => item * item)
  return pares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const pares2 = array.filter(item => item % 2 == 0)
  return pares2
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const maiorNumero = Math.max(...array)
  return maiorNumero // essa aqui um colega me ajudou
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const array1 = array.length
  return array1
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const respostas = [booleano1 && booleano2 && !booleano4,
  (booleano1 && booleano2) || !booleano3,
  (booleano2 || booleano3) && (booleano4 || booleano1),
  !(booleano2 && booleano3) || !(booleano1 && booleano3),
  !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const pares = []
   let par = 0
   let i = 0
   while(i < n){
      i++
      pares.push(par)
      par += 2
   }
   return pares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  let classificacao;
  a == b && b == c ? classificacao = 'Equilátero' : a == b || a == c || c == b ? classificacao = 'Isósceles' : classificacao = 'Escaleno'
  return classificacao
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }

  //BOIEIIII nesse 09, :CCC
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            let teste = array[j];
            array[j] = array[j + 1];
            array[j + 1] = teste;
          }
        }
    }
 return [array[array.length - 2], array[1]]
}



// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < (array.length - i - 1); j++) { 
             if(array[j] > array[j+1]) {
                     let tmp = array[j]; 
          array[j] = array[j+1]; 
          array[j+1] = tmp; 
      }
  }        
}
return array
}


// EXERCÍCIO 12
function filmeFavorito() {
  const filme=new Object();
  filme.nome='O Diabo Veste Prada'
  filme.ano=2006
  filme.diretor='David Frankel'
  filme.atores=['Meryl Streep','Anne Hathaway','Emily Blunt','Stanley Tucci']
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme=new Object();
  filme.nome='O Diabo Veste Prada'
  filme.ano=2006
  filme.diretor='David Frankel'
  filme.atores=['Meryl Streep',' Anne Hathaway',' Emily Blunt',' Stanley Tucci']
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const objetao=new Object()
objetao.largura=lado1;
objetao.altura=lado2
objetao.perimetro=2 * (lado1+lado2)
objetao.area=lado1*lado2

return objetao
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const deMaior=arrayDePessoas.filter(item=>item.idade>=18)
  return deMaior
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const deMenor=arrayDePessoas.filter(item=>item.idade<18)
  return deMenor

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplica=array.map(item=>item*2)
  return multiplica
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
