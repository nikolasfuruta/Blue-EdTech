"""
#Crie uma classe chamada Conta para simular as operações de
 uma conta corrente. Sua classe deverá ter os atributos Titular
 e Saldo, e os métodos Sacar e Depositar. Crie um objeto da classe
 Conta e teste os atributos e métodos implementados. Adicione
 uma regra no método Sacar, onde o usuário só poderá sacar se o
 Saldo for maior que zero, caso contrário mostre a mensagem na
 tela: "Você não tem saldo suficiente para essa operação."

"""

class Conta:

    def __init__(self,titular,saldo):
        self._titular = titular.upper()
        self._saldo = saldo

    def sacar(self,valor):
        if self._saldo > valor:
            self._saldo -= valor
        else: print("Você não tem saldo suficiente para essa operação.")

    def depositar(self,valor):
        self._saldo += valor

    def extrato(self):
        print(f"""
TITULAR: {self._titular}
SALDO: {self._saldo}
""")

if __name__ == "__main__":
    c1 = Conta('nikolas',100)
    c1.extrato()
    c1.sacar(50)
    c1.extrato()
    c1.depositar(200)
    c1.extrato()
    c1.sacar(350)



