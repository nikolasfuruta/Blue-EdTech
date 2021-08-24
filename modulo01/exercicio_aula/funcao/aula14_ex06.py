"""
6. Escreva uma função que, dado um número nota representando a nota de um estudante,
converte o valor de nota para um conceito (A, B, C, D, E e F).
    Nota Conceito
    >=9.0  A
    >=8.0  B
    >=7.0  C
    >=6.0  D
    <=4.0  F
"""

def conversor_nota(n):
    if n <= 4.0: return 'F'
    elif 4.0 < n < 6.0: return 'E'
    elif 6.0 <= n < 7.0: return 'D'
    elif 7.0 <= n < 8.0: return 'C'
    elif 8.0 <= n < 9.0: return 'B'
    elif n >= 9.0: return 'A'

print(conversor_nota(6.8))
