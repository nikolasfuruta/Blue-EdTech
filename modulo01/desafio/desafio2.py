#DESAFIO 5
jose = joao = aug = paulo = vn = vb = total = 0
while True:
    print(f"""COD - CANDIDATOS
    1 - JOSÉ
    2 - JOÃO
    3 - AUGUSTO
    4 - PAULO
    5 - VOTO NULO
    6 - VOTO EM BRANCO 
    """)
    voto = int(input("Digite o código do seu voto: "))
    total += 1
    if voto == 1:
        jose += 1
    elif voto == 2:
        joao += 1
    elif voto == 3:
        aug += 1
    elif voto == 4:
        paulo += 1
    elif voto == 5:
        vn += 1
    elif voto == 6:
        vb += 1

    votacao = input("Encerrar votação? [s/n]: ").lower().strip()[0]
    if votacao == 's':
        break

per_nulo = vn/total
per_branco = vb/total
print()
print(f"TOTAL DE VOTOS")
print(f"JOSÉ: {jose}")
print(f"JOÃO: {joao}")
print(f"AUGUSTO: {aug}")
print(f"PAULO: {paulo}")
print(f"VOTO NULO: {vn}")
print(f"VOTO EM BRANCO : {vb}")
print(f"PERCENTAGEM VOTOS NULOS : {per_nulo:.2f}")
print(f"PERCENTAGEM VOTOS BRANCOS : {per_branco:.2f}")
