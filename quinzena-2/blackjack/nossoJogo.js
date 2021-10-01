
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")


if(confirm("Quer iniciar uma nova rodada?")){
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta3 = comprarCarta()
   const carta4 = comprarCarta()

   const soma1 = (carta1.texto + carta2.texto)
   const soma2 = (carta3.texto + carta4.texto)

   const somaValor1 = carta1.valor + carta2.valor
   const somaValor2 = carta3.valor + carta4.valor


   console.log("Usúario - cartas: " + soma1 + " pontuação:" + somaValor1)
   console.log("Computador - cartas: " + soma2 + " pontuação:" + somaValor2)  

if (somaValor1 > somaValor2){
   console.log("Você ganhou!")
}else if(somaValor2 > somaValor1){
   console.log("Você perdeu!")
}else if (somaValor1 === somaValor2){
   console.log("Empatou")
}
}else{
   console.log("O jogo acabou")
}



