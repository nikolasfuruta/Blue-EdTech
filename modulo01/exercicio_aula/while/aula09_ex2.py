"""
#02 - Crie um programa que vai ler vários números e colocar em uma lista. Depois
disso, crie duas listas extras que vão conter apenas os valores pares e os valores
ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas
geradas.
"""

valores = []
l01 = []
l02 = []
while True:
    num = int(input('Digite um valor: '))
    valores.append(num)
    if (num % 2 == 0):
        l01.append(num)
    else:
        l02.append(num)
    if num == (-1):
        break
print(f"Valores: {valores}\nl01: {l01}\nl02: {l02}")