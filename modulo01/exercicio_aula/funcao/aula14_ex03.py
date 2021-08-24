"""
3. Faça um programa com uma função chamada somaImposto. A função possui dois
parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em
porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o
valor de custo para incluir o imposto sobre vendas.
"""
from decimal import Decimal

def somaImposto(custo,taxa):
    taxa = taxa/100
    return f"{Decimal(custo*(1+taxa)):.2f}"

print(somaImposto(100,10))