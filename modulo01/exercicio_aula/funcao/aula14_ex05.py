"""
5. Faça um programa que calcule através de uma função o IMC de uma pessoa que tenha
1,68 e pese 75kg.
"""
#É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros)

def imc():
    h = float(input("Digite sua altura: "))
    p = float(input("Digite seu peso: "))
    return f"IMC: {p/(h)**2:.2f}"

print(imc())