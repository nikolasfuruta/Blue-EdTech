"""
Faça um programa que leia nome e média de um aluno,
guardando também a situação em um dicionário. No final,
mostre o conteúdo da estrutura na tela. A média para aprovação é 7.
Se o aluno tirar entre 5 e 6.9 está de recuperação, caso contrário é
reprovado.
"""

info_aluno = {}
info_aluno['nome'] = input("Digite o nome: ")
info_aluno['media'] = float(input("Digite a média: "))
if info_aluno['media'] >= 7:
    info_aluno['situacao'] = 'APROVADO'
else: info_aluno['situacao'] = 'REPROVADO'

print(info_aluno)