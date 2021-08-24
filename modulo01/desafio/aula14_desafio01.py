"""
DESAFIO - 'Data com mês por extenso'. Construa uma função que
receba uma data no formato DD/MM/AAAA e devolva uma string no
formato D de mesPorExtenso de AAAA. Opcionalmente, valide a data
e retorne NULL caso a data seja inválida. Considere que Fevereiro
tem 28 dias e que a cada 4 anos temos ano bisexto, sendo que nesses
casos Fevereiro terá 29 dias.
"""
from datetime import datetime
import re

def limpeza_separacao(datas):
    d,m,aa = map(int, datas.split('/'))
    return d,m,aa

def data_valida(dia,mes,ano):

    # mês ou ano inválido (só considera do ano 1 em diante), retorna False
    if mes < 1 or mes > 12 or ano <= 0:
        return False

    # verifica qual o último dia do mês
    if mes in (1, 3, 5, 7, 8, 10, 12):
        ultimo_dia = 31
    elif mes == 2:
        # verifica se é ano bissexto
        if (ano % 4 == 0) and (ano % 100 != 0 or ano % 400 == 0):
            ultimo_dia = 29
        else:
            ultimo_dia = 28
    else:
        ultimo_dia = 30

    # verifica se o dia é válido
    if dia < 1 or dia > ultimo_dia:
        return False

    return True



def mes_extenso(m):
    meses = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO',
             'JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']
    for mes in meses:
        if meses.index(mes) == (int(m)-1):
            return mes


def data_menu(datas):
    d, m, aa = limpeza_separacao(datas)
    if data_valida(d,m,aa):
        mes = mes_extenso(m)
        return f"{d} de {mes} de {aa}"
    return 'NULL'
