#EXERCÍCIO 4

soma = 0
num_soma = 0
for i in range(0,6):
    num = int(input("Digite um número: "))
    if (num % 2 == 0):
        soma += num
        num_soma += 1
print(f"Soma dos números pares: {soma}"
      f"\nQuantidade de números pares: {num_soma}")
