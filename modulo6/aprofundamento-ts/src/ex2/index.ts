function obterEstatisticas(numeros: Array<number>) {
    const numerosOrdenados: Array<number> = numeros.sort(
        (a , b) => a- b
    )

    let soma: number = 0;
    let num: number = 0;

    for (num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

