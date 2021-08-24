"""02 - Desenvolva um programa que leia quatro valores pelo teclado e guarde-os em uma tupla. No final, mostre:
A) Quantas vezes apareceu o valor 9.
B) Em que posição foi digitado o primeiro valor 3."""

n = 0
num = ()
while n < 4:
    num += (int(input("Digite um valor: ")),)
    n += 1

if 3 in num:
    indice_3 = num.index(3)
else:
    indice_3 = 'Não existe número 3 na tupla'

qtd_9 = num.count(9)
print(f"Qtd de 9: {qtd_9}\nPosição do primeiro 3: {indice_3}")
