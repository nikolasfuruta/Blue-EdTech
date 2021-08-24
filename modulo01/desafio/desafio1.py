#DESAFIO 4

from random import randint

comp = randint(0,10)
chute = 0
while True:
    jogador = int(input("Digite o seu palpite: "))
    if jogador > comp:
        print("O seu valor está acima do valor do computador")
        chute += 1
    elif jogador < comp:
        print("O seu valor está abaixo do valor do computador")
        chute += 1
    else:
        print(f"Parabéns, você acertou! O número é o {comp}")
        break
print(f"Total de palpites: {chute}")
