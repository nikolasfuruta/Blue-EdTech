#EXERCÍCIO 1

maior = 0
menor = 100
for n in range(0,5):
    peso = float(input("Digite o seu peso: "))
    if peso > maior:
        maior = peso
    if peso < menor:
        menor = peso
print(f"O maior peso foi de {maior}")
print(f"O menor peso foi de {menor}")
