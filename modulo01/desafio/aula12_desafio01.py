"""
5. DESAFIO: Crie um programa que leia nome, sexo biologico e idade de várias pessoas, guardando os dados de cada
pessoa em um dicionário e todos os dicionários em uma lista. No final, mostre:
A) Quantas pessoas estão cadastradas.
B) A média da idade.
C) Uma lista com as mulheres.
D) Uma lista com as idades que estão acima da média.
OBS: O programa deve garantir que o sexo digitado seja válido, e que quando perguntar ao usuário se deseja continuar
a resposta seja somente sim ou não.
"""

lista = []
dic = {}
while True:
    dic['nome'] = input('Digite o nome: ').lower().strip()
    dic['sexo'] = input('Digite o sexo biológico [m/f]: ').lower().strip()[0]
    while dic['sexo'] not in 'mf':
        dic['sexo'] = input('Digite o sexo biológico [m/f]: ').lower().strip()[0]
    dic['idade'] = int(input('Digite a idade: '))
    lista.append(dic.copy())

    cont = input("Deseja continuar? [s/n]: ").lower().strip()[0]
    while cont not in 'sn':
        cont = input("Deseja continuar? [s/n]: ").lower().strip()[0]
    if cont == 'n':
        break

media = [n['idade'] for n in lista]
print(f"""
QTD DE CADASTRO: {len(lista)}
MÉDIA DE IDADE: {round((sum(media))/len(lista))}
LISTA MULHERES: {[n['nome'] for n in lista if n['sexo'] == 'f']}
LISTA IDADE ACIMA DA MÉDIA: {[n['idade'] for n in lista if n['idade'] > round((sum(media))/len(lista))]}
""")
print()
print(lista)