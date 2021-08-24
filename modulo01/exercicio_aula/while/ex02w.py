#EXERCÍCIO 2

resp = 's'
maior = 0
homem = 0
mulher_menor = 0
while resp != 'n':
    idade = int(input("Digite sua idade: "))
    sexo = input("Digite o seu sexo:[m/f] ").lower().strip()[0]

    if sexo == 'm':
        homem += 1
    elif idade < 20:
        mulher_menor += 1
    if 2021 - idade >= 18:
        maior += 1
    resp = input("Deseja continuar? [s/n]: ")

print(f"Pessoas maior de idade: {maior}")
print(f"Homens cadastrados: {homem}")
print(f"Mulheres com menos de 20 anos: {mulher_menor}")
