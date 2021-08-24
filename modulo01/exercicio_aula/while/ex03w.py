#EXERCÍCIO 3

gasto_total = 0
caro = 0
barato = 10000
prod_barato = ''
while True:
    nome = input("Digite o nome do produto:  ")
    preco = float(input("Digite o preço do produto:  "))

    #condiçoes
    gasto_total += preco
    if preco > 1000:
        caro += 1
    if preco < barato:
        barato = preco
        prod_barato = nome

    pergunta = input("Deseja continuar? [s/n]: ").lower().strip()[0]
    if pergunta == 'n':
        break

print(f"Total gasto na compra: {gasto_total}")
print(f"Produtos que custam acima de R$1000: {caro}")
print(f"Produto mais barato: {prod_barato}")
