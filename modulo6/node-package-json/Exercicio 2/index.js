const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
switch (operacao) {
    case 'add':
        const resultSoma = num1 + num2
        console.log(`Resposta: ${resultSoma}`);
        break;
    case 'sub':
        const resultSubtracao = num1 - num2
        console.log(`Resposta: ${resultSubtracao}`);
        break;
    case 'mult':
        const resultMultiplicacao = num1 * num2
        console.log(`Resposta: ${resultMultiplicacao}`);
        break;
    case 'div':
        const resultDivisao = num1 / num2
        console.log(`Resposta: ${resultDivisao}`);
        break
    default:
        break;
} 