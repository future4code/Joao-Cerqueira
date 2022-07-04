import { Transaction } from "./types";
import { UserAccount } from "./types";
// Exercício 1
//a) O constructor serve para executar ações ao criar instancias da classe, chamamos com a sintaxe constructor(parâmetros)
//b) O console.log apareceu apenas uma vez.
//c) Através de Getters e Setters

class Bank{
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    public getAccounts(){
        return this.accounts 
    }

    public setAccounts(newAccounts: UserAccount[]){
        this.accounts = newAccounts
    }
}

  const user1 = new UserAccount("09677098900", "João Lucas", 21)

  user1.setName("João")
  console.log(user1) 