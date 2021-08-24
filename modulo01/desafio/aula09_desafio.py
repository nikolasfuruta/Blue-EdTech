"""
Desafio: Faça um programa que ajude um jogador da MEGA SENA a criar
palpites.O programa vai perguntar quantos jogos serão gerados e vai sortear 6
números entre 1 e 60 para cada jogo, cadastrando tudo em uma lista composta.
"""

from random import randint

jogar = int(input("Você vai jogar quantos jogos?: "))

lista01 = []
lista02 = []
for j in range(jogar):
    lista02 = []
    n = 0
    while n < 6:
        num = (randint(1,60))
        if num not in lista02:
            lista02.append(num)
            n += 1
        else: continue
    lista01.append(lista02)

for i in range(jogar):
    print(f"JOGO:{i} - {lista01[i]}")
    
