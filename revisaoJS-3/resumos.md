Funções em JavaScript.
- Como o nome ja diz se trata de um codigo que tem uma função. Por exemplo criamos uma "function" que recebe um numero e divide por 2, em vez de sempre criar um novo codigo para dividir
o numero por 2, chamamos a função ultilizando o "()".


Objeto, oque é e como usar ?
- Eu vejo o obejto como se fosse uma variavel que pode ter varios valores, mas diferente da array ele pode agrupar informacoes e para isso usamos o "{}".
- Exemplo de um obejto: const novoObjeto = { nome: "João", idade: "21"}


Array, oque é e como usar ?
- Eu vejo o Array como se fosse uma lista ou uma variavel que pode ter varios valores, para isso usamos o "[]".
- Exemplo de um array com 4 elementos: const novoArray = [ "João", "Lucas", "Roque", "Cerqueira"]


Map, oque é e como usar ?
- O map() retorna um novo array com todos elementos da lista alterados, para isso usamos o "array.map() =>".
- Exemplo caso a gente precise de um programa que retorne apenas os nomes do array: const novoArray = array.map((item) => {
                              return item.nome  })


Filter, oque é e como usar ?
- O filter() retorna um novo array com elementos que foram filtrados, para isso usamos o "array.filter() =>".
- Exemplo caso a gente precise de um programa que retorne itens da lista que tenha "salada": const novoArray = array.filter((item) => {
        return item  ===  "salada" })


Diferença entre MAP e FILTER.
- O map tem como função aplicar uma mudança em todos itens do array, enquanto o filter ele tem a função de filtrar itens de um array.


Diferença entre os métodos push e pop e como usá-los.
-push = adiciona item ao array   EX: array.push("item")
-pop = deleta o ultimo item do array  EX array.pop()


Método slice do array  ⇒ Sintaxe, o que é e como usar.
-slice copia referencias de objeto em um novo array.
EX: array.slice(1,4)


Método splice do array  ⇒ Sintaxe, o que é e como usar.
-deleta item conforme indice (nesse caso deletaria "item2")
EX: lista.splice(1,1)