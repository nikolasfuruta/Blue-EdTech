from random import randint

print("""Bem vindo ao jogo de JOKENPÔ
Seu oponente será um mestre nessa arte...o computador!
Comece escolhendo quantas rodadas terá a partida.
Boa sorte!!!""")


#criação da lista de jogadas e as variáveis que receberão a pontuação.
jokenpo = ['','papel','tesoura','pedra']
pont_jogador = 0
pont_comp = 0

#primeiro loop que representa o jogo em si.
#a partir dele sairá um campeão.
while True:
    rodada = int(input("\nDigite quantas rodadas terá o jogo: "))
    print(f"Escolha o número da sua jogada:\nPAPEL: 1 - TESOURA: 2 -  PEDRA: 3\n")


    #segundo loop que representa as partidas.
    #a variável j servirá como um contador que adicionará +1 a cada  final de rodada.
    j = 0
    while j < rodada:
        jogador = int(input("Digite o número da sua jogada: "))

        #a variável 'comp' representa a escolha aleatória do computador, derivada da biblioteca 'randint'.
        comp = randint(1,3)

        print(f"\nJO KEN PÔ",end='')
        print(f" - {jokenpo[jogador].upper()} X {jokenpo[comp].upper()}")

        #os condicionais avaliam as situações onde ou o jogador ou o computador ganham ou empatam.
        #o vencedor recebe +1 ponto na respectiva variável de ponto.
        if (jokenpo[jogador] == 'papel') and (jokenpo[comp] == 'tesoura'):
            print('Vitória do COMPUTADOR\n')
            pont_comp += 1
        elif (jokenpo[jogador] == 'tesoura') and (jokenpo[comp] == 'pedra'):
            print('Vitória do COMPUTADOR\n')
            pont_comp += 1
        elif (jokenpo[jogador] == 'pedra') and (jokenpo[comp] == 'papel'):
            print('Vitória do COMPUTADOR\n')
            pont_comp += 1
        elif (jokenpo[jogador] == jokenpo[comp]):
            print('EMPATE\n')
        else:
            print('Vitória do JOGADOR\n')
            cls()
            pont_jogador += 1
        j += 1

    #condicional para avaliar o campeão, baseado na pontuação finalde cada jogador.
    if pont_jogador == pont_comp:
        campeao = 'NÃO HOUVE CAMPEÃO'
    elif pont_jogador > pont_comp:
        campeao = 'JOGADOR'
    else:
        campeao = 'COMPUTADOR'

    print(f"PONTUAÇÃO DA RODADA:\nJOGADOR: {pont_jogador}\nCOMPUTADOR: {pont_comp}")
    print(f"CAMPEÃO: {campeao}\n")
    
    jogar_novamente = input("Deseja jogar novamente?[s/n]: ").lower().strip()[0]
     #caso a pessoa responda uma outra coisa, ela é forçada a responder sim ou não
    while jogar_novamente not in 'sn':
        print("Por favor responda com sim ou não.\n")
        jogar_novamente = input("Deseja jogar novamente?[s/n]: ").lower().strip()[0]

    #condicionais para devolver respostas diferentes de acordo com a pontuação do jogador.
    # condicionais para sair ou não do primeiro e principal loop.
    if (jogar_novamente == 's') and (pont_jogador <= pont_comp):
        print("Maravilha! Para se tornar um mestre, desistir não pode ser uma opção.\nBoa sorte!!".upper())
    elif (jogar_novamente == 's') and (pont_jogador > pont_comp):
        print("Wow, tem alguém querendo humilhar!! E vamos para mais uma partida!".upper())
    elif (jogar_novamente == 'n') and (pont_jogador <= pont_comp):
        print("Foi um bom jogo! Quem sabe na próxima!".upper())
        break
    elif (jogar_novamente == 'n') and (pont_jogador > pont_comp):
        print("Entrou no jogo como um amador e está saindo como um Mestre! Parabéns!".upper())
        break

