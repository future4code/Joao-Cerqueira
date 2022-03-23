import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retona true para 'Teste Joao'", () => {
    const ehPalindromo = checaPalindromo("testejoao");

    expect(ehPalindromo).toEqual(true)
  })
  // a função falhou porque identifica frases palíndromos

  it("retona true para 'carro'", () => {
    const ehPalindromo = checaPalindromo("carro");

    expect(ehPalindromo).toEqual(true)
  })

  it("retona true para 'pasta'", () => {
    const ehPalindromo = checaPalindromo("boneca");

    expect(ehPalindromo).toEqual(false)
  })

});