from datetime import datetime

def voto(ano):
    if 2021-ano < 16:
        return f'VOTO NEGADO'
    elif 16 <= 2021-ano < 18 or 2021-ano > 70:
        return f'VOTO OPCIONAL'
    elif 2021-ano >= 18:
        return f'VOTO OBRIGATÓRIO'



def positivo_negativo(x):
    if x > 0: return 'P'
    elif x < 0: return 'N'
    else: return 'Zero'


#função terciária
def soma(a,b,c):
    return (a+b+c)

#função secundária
def med(a,b,c):
    s = soma(a,b,c)
    print(f"Soma dos argumentos: {s}")
    return round((s/3),2)

#função principal
def mat_geral(a,b,c):
    m = med(a, b, c)
    print(f"Média dos argumentos: {m}")

if __name__ == "__main__":
    print(voto(2019))
    #print(positivo_negativo(-2))
    #mat_geral(5,15,25)
