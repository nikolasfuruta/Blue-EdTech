from datetime import datetime


def intro():
    print('------------------------------------------')
    print('BEM VINDO AO SISTEMA DE VOTAÇÃO ELETRÔNICA')
    print('------------------------------------------')


def autoriza_voto():
    #importa datetime para obter o ano em que o usuário se encontra.
    #pede o ano de nascimento do usuário.
    #define a variável idade.
    #a idade é testada nos condicionais retornando o se o usuário está apto a votar.
    hj = datetime.now()
    nasc = int(input("Por favor digite o ano de seu nascimento: "))
    idade = hj.year - nasc
    if 18 <= idade <= 70:
       return 'OBRIGATÓRIO'
    elif 16 <= idade < 18 or idade > 70:
       return 'OPCIONAL'
    else:
       return 'NEGADO'


def candidatos():
    #apresenta a tabela dos candidatos com os respectivos números.
    #pede para o usuário digitar o número do candidato escolhido.
    #retorna a escolha do usuário.
    print('''
       TABELA DE CANDIDATOS
===================================
    CANDIDATO     ||     NÚMERO
-----------------------------------
CLÓVIS DE BARROS  ||       1   
LEANDRO KARNAL    ||       2   
MÁRIO CORTELLA    ||       3   
VOTO NULO         ||       4   
VOTO EM BRANCO    ||       5   
-----------------------------------
''')
    seu_voto = int(input("Digite o número do seu voto: "))
    return seu_voto


def votacao(autorizacao,seu_voto,lista_candidatos,lista_votos):
    #avalia se o usuário não pode votar. Se for o caso, retorna uma mensagem de aviso.
    #caso o usuário tenha permissão, procura na lista_candidatos o candidato escolhido.
    #quando o índice da lista for igual ao número escolhido pelo usuário,
    #acrescenta um voto na lista_voto, no mesmo índice da lista_candidatos.
    if autorizacao == 'NEGADO':
        return 'VOCÊ NÃO PODE VOTAR.'
    else:
        for candidatos in lista_candidatos:
            if (lista_candidatos.index(candidatos)+1) == seu_voto: #soma 1 porque o índice começa no zero.
                lista_votos[lista_candidatos.index(candidatos)] += 1


#primeira função do programa.
def votar(lista_candidatos,lista_votos):
    # inicia chamando a introdução do programa.
    # verifica se o usuário pode votar.
    # retorna o voto do usuário
    # acrescenta o voto do usuário no candidato correspondente.
    intro()
    autorizacao = autoriza_voto()
    seu_voto = candidatos()
    votacao(autorizacao,seu_voto,lista_candidatos,lista_votos)



def apuracao(lista_candidatos,lista_votos):
    #exibe a tabela de resultados.
    #utilizando a função zip, cria uma tupla com os valores de lista_candidatos e lista_votos.
    #utilizando um loop 'for', printa o resultado final (candidato - total de votos).
    print(f'''
       TABELA DE RESULTADOS
======================================
  CANDIDATO: TOTAL DE VOTOS
--------------------------------------''')
    for res in zip(lista_candidatos, lista_votos):
        print(f"""
{res[0]}: {res[1]}""")
    print()


def vencedor(lista_candidatos,lista_votos):
    #atribui para a variável resultado o maior valor da lista lista_votos.
    #utilizando um loop 'for' e a função zip, cria uma lista somente com os cadidatos que tiverem o maior número de votos.
    #se essa lista conter mais de um candidato, houve empate.
    #caso contrário mostra o vencedor da eleição.
    resultado = max(lista_votos)
    vitoria = [vence[0] for vence in zip(lista_candidatos,lista_votos) if vence[1] == resultado]
    if len(vitoria) > 1:
        print("HOUVE EMPATE ENTRE OS CANDIDATOS: ")
        for v in vitoria:
            print(f"{v}")
    else:
        print(f"O candidato vencedor foi: {vitoria[0]}")



#função principal do programa.
def eleicao():
    #define variáveis a,b,c,d,e que contabilizarão os votos.
    #cria as listas dos candidatos e dos votos acumulados.
    #utilizando o while, cria o loop para possibilitar mais de um voto.
    #ao entrar no loop, o programa chama a função votar(), passando as listas como argumento.
    #pergunta se o usuário quer continuar votando ou não e atribui a resposta à variável cont.
    #com o loop while, força o usuário a responder sim ou não.
    #caso 'cont' receba não, as funções do escopo else são chamadas.
    #a função apuracao() para mostrar o resultado final da votação.
    #e a função vencedor para exibir, caso haja, o vencedor.
    a=b=c=d=e=0
    lista_candidatos = ['CLÓVIS DE BARROS', 'LEANDRO KARNAL', 'MÁRIO CORTELLA', 'VOTO NULO', 'VOTO EM BRANCO']
    lista_votos = [a,b,c,d,e]
    cont = 's'
    while cont == 's':
        votar(lista_candidatos,lista_votos)
        cont = input("Deseja continuar coma votação? [s/n]: ").lower().strip()[0]
        #while para forçar o usuário a responder sim ou não.
        while cont not in 'sn':
            cont = input("Deseja continuar coma votação? [s/n]: ").lower().strip()[0]
        print()
    else:
        #funções chamadas ao sair do loop 'while' principal.
        apuracao(lista_candidatos,lista_votos)
        vencedor(lista_candidatos,lista_votos)

if __name__ == "__main__":
    eleicao()