"""
4. Faça um programa que calcule o salário de um colaborador na empresa XYZ. O salário
é pago conforme a quantidade de horas trabalhadas. Quando um funcionário trabalha
mais de 40 horas ele recebe um adicional de 1.5 nas horas extras trabalhadas.
"""

def salario():
    custo = float(input("Digite quanto é o preço hora do funcionário: "))
    h = float(input("Digite as horas trabalhadas: "))
    base = custo * h
    if h > 40:
        extra = 1.5 * (h - 40)
        return base + extra
    else:
        return base

print(salario())