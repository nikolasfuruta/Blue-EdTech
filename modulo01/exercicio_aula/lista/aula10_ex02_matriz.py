"""
#02 - Aprimore o desafio anterior, mostrando no final:
   A) A soma de todos os valores pares digitados.
   B) A soma dos valores da terceira coluna.
   C) O maior valor da segunda linha.
"""

matriz = [[int(input("Digite um número: ")) for k in range(3)] for i in range(3)]
par = [i for m in matriz for i in m if i % 2 == 0]
terceira = [m[2] for m in matriz]

print(f"Soma dos pares: {sum(par)}")
print(f"Soma dos valores da terceira coluna: {sum(terceira)}")
print(f"Maior valor da segunda linha: {max(matriz[1])}")
