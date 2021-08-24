"""Crie uma lista composta que recebe 5 nomes e 5 idades
de clientes, utilizando o for e o if, verifique quais
clientes são maiores de idade e quais são menores de idade e
mostre na tela a seguinte frase para cada um deles: 'Fulano é
maior de idade' ou 'Fulana é menor de idade' e  também quantos são
maiores e quantos são menores de idade."""

pessoas = [[input('Digite um nome: '), int(input("Digite uma idade: "))] for i in range(5)]
maior = [p for p in pessoas if p[1] >= 18]
menor = [p for p in pessoas if p[1] < 18]
for p in pessoas:
    if p in maior: print(f"{p[0].capitalize()} é maior de idade")
    elif p in menor: print(f"{p[0].capitalize()} é menor de idade")
print(f"Total:\nMaior: {len(maior)}\nMenor: {len(menor)}")
