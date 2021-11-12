const alimentos = [
    "ALIMENTOS",
    {
        nome: "Banana",
        volume: "3,5",
        preço: "10,00",
        validade: "20/12/2021",
        quantidade: "155"
    },
    {
        nome: "Uva",
        volume: "1,5",
        preço: "19,00",
        validade: "12/12/2021",
        quantidade: "179"
    },
    {
        nome: "Frango",
        volume: "7,5",
        preço: "39,00",
        validade: "01/11/2021",
        quantidade: "1589"
    },
    {
        nome: "Linguiça",
        volume: "4,5",
        preço: "29,00",
        validade: "08/12/2021",
        quantidade: "174"
    },

]

const brinquedos = [
    "BRINQUEDOS",
    {
        nome: "Skate",
        preço: "399,00",
        classificação: "+16",
        quantidade: "157"
    },
    {
        nome: "Xadrez",
        preço: "170,00",
        classificação: "+10",
        quantidade: "87"
    },
    {
        nome: "Max Steel",
        preço: "140,00",
        classificação: "+12",
        quantidade: "145"
    },
    {
        nome: "Barbie",
        preço: "499,00",
        classificação: "+8",
        quantidade: "1575"
    },

]



const usuario = confirm("Deseja prosseguir para nossa loja?")

if (usuario === true) {
    console.log("Bem Vindo a Lojinha")

    const usuario2 = prompt("Qual tipo de produto você deseja ver?")

    if (usuario2 === "brinquedos") {
        console.log(brinquedos)
        let pergunta = true
        let pergunta2

        while (pergunta === true) {
            pergunta = confirm("Deseja realizar outra visualização de produtos?")
            
            pergunta2 = prompt("Qual produto deseja visualizar?")
            if (pergunta === "brinquedos") {
                console.log(brinquedos)
            } else if (pergunta2 === "alimentos") {
                console.log(alimentos)

            } else if(pergunta2 === "brinquedos") {
                console.log(brinquedos)
            }else{
                console.log("Volte Sempre!")

            }
        }


    }


    else if (pergunta === true) {
        let pergunta2 = prompt("Qual produto deseja visualizar?")
    } else {
        console.log("Volte Sempre!")
    }

}
else {
    console.log("Volte sempre")
}


