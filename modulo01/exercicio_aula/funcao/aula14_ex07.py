"""
7. Escreva uma função que recebe dois parâmetros e imprime o menor
dos dois. Se eles forem iguais, imprima que eles são iguais.
"""

def comparar(x,y):
    if x > y: return y
    elif x == y: return f"{x} e {y} são iguais."
    return x

print(comparar(1,3))