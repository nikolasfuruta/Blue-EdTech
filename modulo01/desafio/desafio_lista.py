"""
Desafio da noite:
Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita",
entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
Caso contrário, ele será classificado como "Inocente".
"""


print("""
Bem vindo, estamos realizando uma investigação criminal e precisamos
de sua colaboração!
Faremos cinco perguntas e você precisa responder sinceramente com 'sim' ou
'não', simples não é mesmo?
Dito isso, vamos às perguntas!
""")
print("Por favor me responda.")
print('------------------------------------------')

perguntas = ['Você telefonou para a vítima?','Você esteve no local do crime?',
'Você mora perto da vítima?','Você devia para a vítima?',
'Você já trabalhou com a vítima?']

julg = ['Você foi considerado INOCENTE, viu como não tinha o que temer?',
'Você foi considerado SUSPEITO, manteremos contato!',
'Você foi considerado CÚMPLICE,é bom você não sair da cidade nos próximos dias!',
'Você foi considerado ASSASSINO, nem se incomode em sair daqui. Você está preso!'
]
sim = nao = 0
for i in range(len(perguntas)):
  resp = input(f'{perguntas[i]}: ').lower().strip()[0]
  if resp == 's':
    sim += 1
  else:
    nao += 1

print("Seus resultados foram:")
print(f"SIM: {sim}")
print(f"NAO: {nao}")
print(julg[sim-1])
