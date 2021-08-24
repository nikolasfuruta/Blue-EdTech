"""
#03 - Faça um programa que leia nome e peso de várias pessoas, guardando tudo em uma lista, depois do dado inserido,
pergunte ao usuário se ele quer continuar, se ele não quiser pare o programa. No final mostre:
   # Quantas pessoas foram cadastradas
   # Mostre o maior peso
   # Mostre o menor peso
"""

lista0 = []
while True:
    lista1 = []
    lista1.append(input("Digite o nome: "))
    lista1.append(int(input("Digite o peso: ")))
    lista0.append(lista1)
    resp = input("Deseja continuar? [s/n]:").lower().strip()[0]
    if resp == 'n': break

peso = [l[1] for l in lista0]

print(f"\nPessoas cadastradas: {len(lista0)}")
print(f"Maior peso: {max(peso)} do/a {lista0[peso.index(max(peso))][0].capitalize()}")
print(f"Menor peso: {min(peso)} do/a {lista0[peso.index(min(peso))][0].capitalize()}")
print(f"Lista dos cadastrados: {lista0}")
