"""
# 1.Crie um programa que leia nome, ano de nascimento e carteira
de trabalho e cadastre-os (com idade) em um dicionário.
Se por acaso a CTPS for diferente de 0, o dicionário receberá também
o ano de contratação e o salário. Calcule e acrescente , além da idade,
com quantos anos a pessoa vai se aposentar. Considere que o trabalhador
deve contribuir por 35 anos para se aposentar.
"""

info_usuario = {}


info_usuario['nome'] = input("Digite seu nome: ")
ano_nasc = int(input("Digite o ano de nascimento: "))
info_usuario['idade'] = 2021 - ano_nasc
CTPS = int(input("Digite o número da carteira de trabalho: "))
if  CTPS != 0:
    info_usuario['CTPS'] = CTPS
    info_usuario['ano_contratacao'] = int(input("Digite o ano de contratação: "))
    info_usuario['salario'] = int(input("Digite o valor do salário: "))

tempo_trabalho = 2021 - info_usuario['ano_contratacao']
if tempo_trabalho < 35:
    tempo_contribuicao = 35 - tempo_trabalho
    info_usuario['idade_aposentar'] = info_usuario['idade'] + tempo_contribuicao

print(f"""
Nome: {info_usuario['nome']}
Idade: {info_usuario['idade']}
PIS: {info_usuario['CTPS']}
Salário: {info_usuario['salario']}
Ano Contratação: {info_usuario['ano_contratacao']}
Idade de Aposentar: {info_usuario['idade_aposentar']}
""")


