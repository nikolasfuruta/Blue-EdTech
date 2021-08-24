#EXERCÍCIO 1

n1 = int(input("Digite o primeiro valor: "))
n2 = int(input("Digite o segundo valor: "))

print(f"""
#[ 1 ] somar
#[ 2 ] multiplicar
#[ 3 ] maior
#[ 4 ] novos números
#[ 5 ] sair do programa
""")
i = int(input("Escolha a opção: "))
while i != 5:
    if i == 1:
        print(f"{n1}+{n2}={n1+n2}")

    elif i == 2:
        print(f"{n1}X{n2}={n1 * n2}")

    elif i == 3:
        if n1 > n2:
            print(f"{n1}>{n2}")
        else:
            print(f"{n2}>{n1}")

    elif i == 4:
        n1 = int(input("Digite o primeiro valor: "))
        n2 = int(input("Digite o segundo valor: "))

    i = int(input("Escolha a opção: "))
print("PROGRAMA ENCERRADO")
