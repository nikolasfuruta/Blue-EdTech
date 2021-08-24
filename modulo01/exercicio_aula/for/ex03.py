#EXERCÍCIO 3

from datetime import datetime

maior = 0
menor= 0
for n in range(1,8):
    ano = int(input("Digite o ano de seu nascimento: "))
    if 2021 - ano >= 18:
        maior += 1
    else:
        menor += 1
print(f""Pessoas Maiores de Idade: {maior}\nPessoas Menor de Idade: {menor}
"")
