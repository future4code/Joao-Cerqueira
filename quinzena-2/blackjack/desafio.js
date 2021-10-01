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
    
    
       confirm("Suas cartas são: " + soma1 + ". A carta revelada do computador é: " + carta3.texto)

    
    if(confirm("Deseja comprar mais uma carta?")){
      const carta5 = comprarCarta()

      const soma3 = (carta1.texto + carta2.texto + carta5.texto)

      confirm("Suas cartas são: " + soma3 + ". A carta revelada do computador é: " + carta3.texto)
      
    if (confirm("Deseja comprar mais uma carta?")){

    
      const carta6 = comprarCarta()

      const soma4 = (carta1.texto + carta2.texto + carta5.texto + carta6.texto)
      const soma5 = (carta3.texto + carta4.texto)
      const somaValor3 = carta1.valor + carta2.valor + carta5.valor + carta6.valor
      const somaValor4 = carta4.valor + carta3.valor 

      console.log("Suas cartas são: " + soma4 + ". Sua pontuação é: " + somaValor3)
      console.log("As cartas do computador são: " + soma5 + ". Sua pontuação é: " + somaValor4)

      if(somaValor3 > 21, somaValor4 < 21){
         console.log("Você perdeu")
      if(somaValor3 < 21, soma4 > 21)  {
         console.log("Você ganhou")
      }
    }
    }
    }else{
       console.log("O jogo acabou")
    }
   }