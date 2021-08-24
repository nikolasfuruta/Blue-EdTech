"""#01 - Crie um programa onde o usuário possa digitar vários valores numéricos e
cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será
adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem
crescente."""

valores = []
while True:
    num = int(input('Digite um número: '))
    if num in valores:
        valores.pop(num)
    else:
        valores.append(num)
    if num == -1:
        break
print(sorted(valores))