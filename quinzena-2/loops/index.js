//let estomago = 0
//let contaCoxinhas = 0

//while(estomago <= 100) {
//   console.log("comendo coxinha")
//   contaCoxinhas++
//    console.log("já comi " +contaCoxinhas+ " coxinhas")
//    estomago += 10
//}
//console.log("acabou")

//----------------------

//let numeroUsuario = 1 
//let soma = 0

//while(numeroUsuario !== 0){
//    numeroUsuario = Number(prompt("Por favor, digite um número."))
//    soma += numeroUsuario
//}
//console.log(soma)

// Interpretação de codigo

// 1 - sera impresso valor 10 no console, o codigo esta criando uma condição que o codigo ira rodar quando o valor for menor que 5 e com o i++ ele adiciona 1 a cada vez

// 2.a - será impresso todos numeros da array que forem maior que 18

// 2.b - para acessar indice de cada elemento teria que usar o []

// 3 - teria 4 asteriscos

//--------------------------

// Escrita de código

let pets=[]
const qtdPet=Number(prompt("Quantos pets você tem?"))
if(qtdPet==0) console.log("Que pena! Você pode adotar um pet!")
else{for (i=0;i<qtdPet;i++) {
	const nomes=prompt("Digite o nome do seu "+(i+1)+"º pet")
	pets.push(nomes)
}
}

console.log(pets)



