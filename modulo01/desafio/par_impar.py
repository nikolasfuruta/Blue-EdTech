# 2 Jogo par ou impar
from random import randint

vit = 0
res = True
while res:
    total = 0
    sua_escolha = input("\nDigite Par ou Impar [p/i]: ").strip().lower()[0]
    seu_num = int(input("digite um número de 1 ao 5: "))
    cpu_num = randint(1, 6)

    while sua_escolha not in 'pi': # obriga o usuário a escolher exatamente o que quero
        sua_escolha = input("Digite Par ou Impar [p/i]: ").strip().lower()[0]

    total = seu_num + cpu_num
    if (sua_escolha == 'p') and (total % 2 == 0):
        print("Você venceu!\n")
        vit += 1

    elif (sua_escolha == 'p') and (total % 2 != 0):
        print("Você perdeu!\n")

    elif (sua_escolha == 'i') and (total % 2 != 0):
        print("Você venceu!")
        vit += 1

    elif (sua_escolha == 'i') and (total % 2 == 0):
        print("Você perdeu!")

    pergunta = input("Jogar novamente: [s/n] ").strip().lower()[0]
    if pergunta == 'n':
        break

print(f"\nSeu número de vitórias foi: {vit}")

