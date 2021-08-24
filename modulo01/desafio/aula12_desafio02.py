"""
6. Desafio: Continuando o exercício 3 crie agora um boletim escolar, seu programa deve
receber 5 notas de 15 alunos, assim como o nome desses alunos, o programa tem que
calcular a média desse aluno e mostrar a situação dele, seguindo os mesmos critérios
apresentados no exercício 3. No final apresente todos nomes, as 5 notas, as médias e as
situações dos 15 alunos de uma vez só.
"""
from random import choice,randrange

nomes = ['Ana','Nikolas','Sabrina','Mateus','Thiago','Julia','Diego','Samara','Milena','Luana',
         'Claudia','Marieli','Sandro','Edwin','Mariel']
boletim = []
info_aluno = {}
for n in range(1,16):
    info_aluno['nome'] = choice(nomes)
    nota = 1
    soma = 0
    med = 0
    while nota < 6:
        info_aluno[f'nota_{nota}'] = randrange(0,10)
        soma += info_aluno[f'nota_{nota}']
        nota += 1
    med = round(soma/5)
    info_aluno['media'] = med
    if med >= 7:
        info_aluno['situacao'] = 'APROVADO'
    else: info_aluno['situacao'] = 'REPROVADO'
    boletim.append(info_aluno.copy())

for n in boletim:
    print(f"""
    {n['nome']} - {n['nota_1']}| {n['nota_2']} | {n['nota_3']} | {n['nota_4']} | {n['nota_5']} - {n['media']} || {n['situacao']}
    """,end='')