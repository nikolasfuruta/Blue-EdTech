from random import randint
from collections import Counter

#método para retornar uma lista contendo dicionários com os resultados dos 4 jogadores.
def iniciar():
    rodadas = [] #lista principal para armazenar os dicionários.
    jogo = {} #dicionário para armazenar o par (jogador:resultado).

    #variável para definir o número de rodadas do jogo.
    rodada = int(input("Digite o número de rodadas: "))

    #primeiro loop representa as rodada.
    for r in range(1,rodada+1):
        #segundo loop representando cada jogada dos players.
        for jogador in range(1,5):
            num_dado = randint(1,6) #variável para guardar o resultado do dado.
            jogo[f'JOGADOR-{jogador}'] = num_dado #formação dos dicionários com as informações 'jogador:resultado'.
        rodadas.append(jogo.copy()) #o dicionário é inserido na posição 'r' da lista que começa no 1.
                                    #copy() é usado para não sobrescrever os resultados obtidos.
    return rodadas #retorna a lista contendo os dicionários.



#segundo método para ordenar os resultados do jogo.
def ordenar_nivel2(jogo):
    #print(jogo) utilize este print para verificação pessoal.
    valores_ordenados = list(sorted(jogo.values(),reverse = True)) #criação de lista com os valores do dicionário.
    chaves_ordenados = list(sorted(jogo.keys())) #criação de lista com as chaves do dicionário.
    novo_jogo = {}  #criação de novo dicionário para inserir chaves e valores ordenados.

    #através dos valores já ordenados do maior para o menor,
    #obter a chave correspondente ao valor
    #e criar o dicionário ordenado.
    for n in range(len(valores_ordenados)): #para cada posição da lista valores_ordenados.
        for k,v in jogo.items():# comparar com o dicionário 'jogo'.
            if v == valores_ordenados[n]: #se o valor do dicionário 'jogo' for igual ao elemento ocupado na posição n da lista.
                for m in chaves_ordenados: #iterar na lista de chaves_ordenados.
                    if m == k: #se o elemento da lista for igual à chave do dicionário 'jogo'.
                        novo_jogo[k] = v #criar o par (chave:valor).
                        chaves_ordenados.pop(chaves_ordenados.index(m)) #apagar a chave da lista, para não bugar em caso de valores repetidos.
                        del jogo[k] #apagar o par do dicionário para não bugar em caso de valores repetidos.
                        break #sair do loop das chaves.
                break #sair do loop do dicionário e repetir o processo para outro valor de n.
    # print(novo_jogo) utilize este print para verificação pessoal.
    return novo_jogo.copy() #utilizar copy() para não sabrescrever o resultado.


#primeiro método para ordenar os resultados do jogo.
def ordenar_nivel1(rodadas):
    # para cada posição da lista, o função 'ordenar_nivel2()' é chamada.
    return [ordenar_nivel2(jogo) for jogo in rodadas]



#método para verificar os vencedores de cada rodada e o campeão do jogo.
def vencedor(resultado_ordenado):
    vencedores = [] #cria lista para inserir os vencedor de cada rodada.
    for d in resultado_ordenado: #para cada dicionário da lista 'resultado_ordenado'.
        jogadores = list(d.keys()) #variável jogadores recebe uma lista de chaves do dicionário.
        vencedores.append(jogadores[0]) #variável vencedores recebe o primeiro colocado da lista de jogadores.

    for v in range(1,len(vencedores)+1): #iterar na lista dos vencedores e mostrar os vencedores de cada rodada.
        print(f"VENCEDOR DA RODADA {v}: {vencedores[v-1]}")

    flag = Counter(vencedores) #utilizar o método Counter para contar os vencedores.
    vencedor = flag.most_common(2) #utilizar o método most_common do Counter para saber os 2 jogadores com maiores números de vitórias.
    #print(vencedor) utilize este print para verificação pessoal.
    if vencedor[0][1] == vencedor[1][1]: #se o primeiro e o segundo jogador tiverem as mesmas vitórias.
        print(f"NÃO HOUVE CAMPEÃO") #printar não há campeão do jogo.
    else:
        print(f"CAMPEÃO: {vencedor[0][0]}")  #caso contrário  printar o campeão.




#método principal para iniciar a função.
def menu_dados():
    rodadas = iniciar()
    resultado_ordenado = ordenar_nivel1(rodadas)
    #print(resultado_ordenado) utilize este print para verificação pessoal.
    vencedor(resultado_ordenado)

if __name__ == "__main__":
    menu_dados()