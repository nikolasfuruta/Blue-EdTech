from personagem import Personagem
from relogio import Relogio
from funcoes import *
from random import randint
from time import sleep
from rich import print
from art import text2art
from math import fabs

# criação dos objetos relogio e thiago
relogio = Relogio()
thiago = Personagem()

if __name__ == '__main__':
    
    limpar()
    cabecalho()
    sleep(3)
    thiagoImg()
    sleep(2)

    regras = input('Você quer ler as regras do jogo? [S/N] ').strip().upper()[0]
    while regras not in 'SN':
        regras = input('Comando inválido. Você quer ler as regras do jogo? [S/N] ').strip().upper()[0]
    if regras == 'S':
        limpar()
        leitor()
        avancar()

    while True:
        limpar()

        #formatação para exibição das horas e do status do personagem.
        cabecalho()
        print(relogio)
        print(f'[bold dodger_blue1]{"SEUS STATUS AGORA SÃO:":^28}[/bold dodger_blue1]')
        print(thiago)
        sleep(1)

        #Condicional para verificar se o critério de gameover é verdadeiro.
        if thiago.saude == 0:
            print(f'\n\n[red]{text2art("GAME OVER")}[/red]')
            sleep(4)
            limpar()
            break

        # variável para definir se vai ou não acontecer a ação aleatória, com probabilidade de 25%.
        opcao = randint(1, 4)
        
        # é apresentado 5 opções para o jogador.
        print('''\n\n[italic dark_cyan]Escolha uma das áreas da vida:[/italic dark_cyan]\n
    [ 1 ] Lazer
    [ 2 ] Trabalho
    [ 3 ] Estudo
    [ 4 ] Cuidar da casa
    [ 5 ] Projetos pessoais\n
    [ 6 ] Sair do Jogo\n''')
        escolha = int(input('O que você quer fazer? '))

        # condicional para sair do jogo
        if escolha == 6:
            print('\n\nObrigado por jogar!')
            sleep(2)
            limpar()
            break

        limpar()
        cabecalho()
        
        # de acordo com as escolhas, são apresentadas mais 5 possibilidades de ação por escolha.
        # cada ação avalia os atributos dos objetos para permitir ou não que o jogador a execute.
        # devido a aleatoriedade atribuída à variável 'opcao', há a possibilidade de ocorrer uma ação indesejada.
        # cada ação modifica o status do jogador e avança no tempo.
        if escolha == 1:
            print(relogio)
            print('''[italic dark_cyan]Escolha uma das opções de lazer:[/italic dark_cyan]\n
            [ 1 ] Dormir
            [ 2 ] Caminhar no Parque
            [ 3 ] Assistir HBO Max
            [ 4 ] Jantar Romântico
            [ 5 ] Jogar vôlei\n''')
            lazer = int(input('O que você quer fazer? '))
            
            #inicio felipe
            if lazer == 1:
                if relogio.horas not in range(6, 21):
                    print('\n\nDORMINDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(6)
                        thiago.atribuirValores(saude=20, estresse=-50)
                        print('\nVocê teve uma revigorante noite de sono!')
                    else:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=5, estresse=10)
                        print('\nOs gatos estavam brigando no telhado, o que te fez perder o sono e ficar mais estressado que antes.')
                else:
                    print('\n\nAinda não está na hora de dormir!')
                avancar()
                continue

            elif lazer == 2:
                if thiago.dinheiro >= 20:
                    print('\n\nCAMINHANDO NO PARQUE...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 30)
                        thiago.atribuirValores(saude=10, estresse=-20, relacionamento=20, dinheiro=-20)
                        print('\nVocê foi caminhar no Parque com a sua esposa e tomou um sorvete com ela! Os dois ficaram muito felizes!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(estresse=10, relacionamento=-20, dinheiro=-20)
                        print('''\nO passeio com a esposa estava muito divertido até que uma manada de capivaras correu atrás de vocês...
Você deixou deixou sua esposa para trás, por isso ela ficou muito estressada contigo.
Além disso, na volta para casa, você foi assaltado e perdeu os R$ 20,00 que tinha na carteira.''')
                else:
                    print('\n\nVocê não tem nem R$20,00 na carteira para sair com a sua esposa. Vá trabalhar!')
                avancar()
                continue

            elif lazer == 3:
                if 21 <= relogio.horas < 24 or (relogio.diaDaSemana() in ['Sábado', 'Domingo']):
                    print('\n\nASSISTINDO FILME...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(relacionamento=20, estresse=-10)
                        print('\nVocê e sua esposa escolheram um filme ótimo e se divertiram muito juntos!')
                    else:
                        relogio.avancaTempo(7, 10)
                        thiago.atribuirValores(saude=-10, relacionamento=-50, estresse=30)
                        print('''\nSua esposa ficou meia hora escolhendo o filme perfeito, mas depois de 40 minutos você não aguentava mais assistir e trocou o filme sem a autorização dela.
Ela ficou muito estressada e te colocou para dormir no sofá.''')
                else:
                    print(f'\n\nEstá muito cedo para assistir filme. Você tem outras coisas mais importantes para fazer antes!')
                avancar()
                continue

            elif lazer == 4:
                if thiago.dinheiro >= 150 and 18 <= relogio.horas < 22:
                    print('\n\nPREPARANDO O JANTAR...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(relacionamento=100, dinheiro=-150, estresse=-40)
                        print('\nVocê preparou um lindo jantar à luz de velas para a sua esposa e ela ficou muito muito feliz. O relacionamento agora está renovado!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(saude=-30, relacionamento=30, dinheiro=-fabs(thiago.dinheiro), estresse=100)
                        print('''\nNa tentativa de preparar um jantar romântico para a sua esposa, você acabou se queimando e estragando o fogão.
Por isso você perdeu todo o seu dinheiro para consertá-lo e ficou muito estressado por isso.''')
                else:
                    if thiago.dinheiro < 150 and (not 18 <= relogio.horas < 22):
                        print(f'\n\nAinda está muito cedo e você tem somente R$ {thiago.dinheiro:.2f} para preparar o jantar.')
                    elif thiago.dinheiro >= 150:
                        print(f'\n\nAcalma o coração. Ainda não está na hora de jantar.')
                    else:
                        print(f'\n\nComo você quer preparar um jantar com apenas R$ {thiago.dinheiro:.2f}? Vá trabalhar!')
                avancar()
                continue

            elif lazer == 5:
                if thiago.saude >= 50 and thiago.dinheiro >= 30:
                    print('\n\nJOGANDO VÔLEI...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(2, 30)
                        thiago.atribuirValores(saude=30, dinheiro=-30, estresse=-50)
                        print('\nVocê se divertiu muito jogando vôlei com os seu amigos! Ao final do jogo você foi comer com eles e gastou R$ 30,00. Foi uma ótimo momento!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(saude=-50, dinheiro=-30, estresse=20)
                        print('\nJogo traumático... Ao saltar para dar o corte, você chocou sua cabeça com a de um amigo e ficou desarcordado por vários minutos. Além disso, sua bola furou e você precisa comprar uma nova.')
                else:
                    if thiago.saude < 50 and thiago.dinheiro < 30:
                        print('\n\nSua saúde não está muito boa para um jogo tão pesado e você não tem nem R$ 30,00 para comer com seus amigos após o jogo.')
                    elif thiago.saude >= 50:
                        print('\n\nSeus amigos querem comer após o jogo. Você não vai sair na aba dos outro, né, seu muquirana!?')
                    else:
                        print('\n\nSua saúde está péssima! Procure um médico!')
                avancar()
                continue
        
        #inicio nikolas
        elif escolha == 2 and thiago.xp >= 50:
            print('''[italic dark_cyan]Escolha uma das opções de trabalho:[/italic dark_cyan]\n
        [ 1 ] Dar aula no Generation Brasil.
        [ 2 ] Preparar o conteúdo das aulas.
        [ 3 ] Corrigir e dar feedback nos trabalhos entregues.
        [ 4 ] Preparar lista de exercícios.
        [ 5 ] Dar aula no Blue EdTech.\n''')
            trabalho = int(input('O que você quer fazer? '))

            if trabalho == 1:
                if 8 < relogio.horas < 16:
                    print('\n\nDANDO AULA...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(8)
                        thiago.atribuirValores(saude=-10, estresse=10, dinheiro=20)
                        print("\nA aula foi realizada com sucesso!")
                    else:
                        relogio.avancaTempo(8)
                        thiago.atribuirValores(saude=-30, estresse=30, dinheiro=20)
                        print("\nA aula foi um desastre! Houve uma briga entre os alunos que resultou em um grade desconforto na sala.")
                else:
                    print('\n\nVocê está fora do horário de aula!')
                avancar()
                continue

            elif trabalho == 2:
                if thiago.saude > 50:
                    print('\n\nPREPARANDO AULA...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-10, estresse=10, dinheiro=10)
                        print("\nOs conteúdos das aulas estão prontos.")
                    else:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-20, estresse=30, dinheiro=10)
                        print("\nVocê errou o material da aula e preparou tudo errado!!! Vai ter que refazer.")
                else:
                    print('\n\nVocê está exausto demais para preparar o conteúdo da aula. ')
                avancar()
                continue

            elif trabalho == 3:
                if thiago.saude > 50:
                    print('\n\nCORRIGINDO TRABALHOS...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-10, estresse=30, dinheiro=10)
                        print("\nOs trabalhos foram corrigidos e os feedbacks foram todos enviados com sucesso.")
                    else:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-10, estresse=50, dinheiro=-80)
                        print("\nDevido a uma chuva forte, seu computador queimou! Sem correção, sem feedbacks e sem computador.")
                else:
                    print('\n\nVocê está muito cansado para corrigir as atividades. ')
                avancar()
                continue

            elif trabalho == 4:
                if thiago.saude > 50:
                    print('\n\nPREPARANDO LISTA DE EXERCÍCIOS...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-10, estresse=10, dinheiro=10)
                        print("\nA lista de exercícios está pronta e atualizada!")
                    else:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-10, estresse=30, dinheiro=10)
                        print("\nVocê trocou as matérias das turmas e fez listas erradas para cada turma! Agora é refazer.")
                else:
                    print('\n\nVocê precisa descansar antes de poder mexer com a lista de exercícios.')
                avancar()
                continue

            elif trabalho == 5:
                if 18 < relogio.horas < 23:
                    print('\n\nDANDO AULA...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-10, estresse=10, dinheiro=20)
                        print("\nA aula foi realizada com sucesso!")
                    else:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(saude=-20, estresse=30, dinheiro=20)
                        print("\nA aula foi péssima. Conteúdo maçante, alunos desinteressados e ninguém aprendeu nada.")
                else:
                    print('\n\nVocê está fora do horário de aula!')
                avancar()
                continue
                
        elif escolha == 2 and thiago.xp < 50:
            print('Você precisa adquirir mais experiência para poder trabalhar.')
            avancar()
            continue
                    
        #inicio luiz
        if escolha == 3 and thiago.estresse < 50:
            print('''\n\n[italic dark_cyan]Escolha  uma das opções de estudo:[/italic dark_cyan]\n
            [1] HTML
            [2] PYTHON
            [3] JAVA SCRIPT
            [4] C
            [5] PHP\n''')
            estudo = int(input(' O que você quer fazer? '''))

            if estudo == 1:
                print('\n\nESTUDANDO...')
                sleep(2)
                if opcao != 3:
                    relogio.avancaTempo(4)
                    thiago.atribuirValores(estresse=15, relacionamento=20, xp=10)
                    print('\nParabéns! Você conseguiu assimilar boa parte do que foi ensinado!')
                else:
                    relogio.avancaTempo(2)
                    thiago.atribuirValores(estresse=30)
                    print('\nPuxa vida! Acabou a energia e você não conseguiu assisitir a aula nem estudar!')
                avancar()
                continue
                
            elif estudo == 2:
                if thiago.xp >= 20:
                    print('\n\nESTUDANDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(estresse=15, xp=20)
                        print('\nVocê avançou em conhecimento, agora está aprendendo uma nova liguagem!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(estresse=30, relacionamento=-20)
                        print('\nO cachorro mastigou o cabo do monitor e você não conseguiu acompanhar a aula! Sua esposa ficou brava porque você colocou o cachorro para fora de casa!')
                else:
                    print('\n\nVocê ainda não tem experiência suficiente para estudar isso! Continue estudando para somar cada vez mais conhecimento!')
                avancar()
                continue

            elif estudo == 3:
                if thiago.xp >= 40:
                    print('\n\nESTUDANDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(estresse=15, xp=30)
                        print('\nOlha só onde você conseguiu chegar! Continue com essa dedicação e terá muitas boas surpresas!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(estresse=30, dinheiro=-150)
                        print('\nPuxa vida, você derramou um copo de café no notebook e ele não que mais ligar!')
                else:
                    print('\n\nVocê ainda não tem experiência suficiente para estudar isso! Continue estudando para somar cada vez mais conhecimento!')
                avancar()
                continue

            elif estudo == 4:
                if thiago.xp >= 60:
                    print('\n\nESTUDANDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(estresse=15, xp=50)
                        print('\nSua jornada com essa nova linguagem está sendo incrível!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(estresse=50, dinheiro=-1500)
                        print('\nInvadiram sua residência e levaram todo seu equipamento de trabalho!')
                else:
                    print('\n\nVocê ainda não tem experiência suficiente para estudar isso! Continue estudando para somar cada vez mais conhecimento!')
                avancar()
                continue

            if estudo == 5:
                if thiago.xp >= 80:
                    print('\n\nESTUDANDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(4)
                        thiago.atribuirValores(estresse=15, xp=60)
                        print('\nParabéns!! Se continuar assim você vai longe!')
                    else:
                        relogio.avancaTempo(2)
                        thiago.atribuirValores(estresse=30, relacionamento=20)
                        print('\nSua esposa se sentiu mal e você precisou sair às pressas para levá-la ao hospital.')
                else:
                    print('\n\nVocê ainda não tem experiência suficiente para estudar isso! Continue estudando para somar cada vez mais conhecimento!')
                avancar()
                continue

        if escolha == 3 and thiago.estresse >= 50:
            print('\nVocê está muito estressado no momento! É melhor você se divertir um pouco.')
            avancar()
            continue
        
        #inicio bia
        elif escolha == 4:
            print('''[italic dark_cyan]Escolha uma opção de cuidar da casa:[/italic dark_cyan]\n
        [ 1 ] Limpar a cozinha
        [ 2 ] Limpar o banheiro
        [ 3 ] Limpar o quarto
        [ 4 ] Limpar a sala
        [ 5 ] Tirar o Lixo\n''')
            casa = int(input('O que você quer fazer? '))
            
            if casa == 1:
                if thiago.dinheiro > 70:  # mudanças nos atributos a serem discutidas depois
                    print('\n\nLIMPANDO A COZINHA...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=-10, relacionamento = 10)
                        print('\nVocê deixou a cozinha impecável e até sua esposa elogiou.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=10, dinheiro = -70)
                        print('\nO cano da pia estorou e você chamou um encanador. O conserto custou R$ 70 e você ficou um pouco estressado.')
                else:
                    print('\n\nÉ importante fazer as tarefas domésticas mas você tem outras prioridades no momento, então talvez seja melhor pedir ajuda da sua esposa para dividir as tarefas.')
                avancar()
                continue

            elif casa == 2:
                if thiago.saude > 30:
                    print('\n\nLIMPANDO O BANHEIRO')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=-10, relacionamento=20)
                        print('\nO banheiro foi completamente limpo!')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=10, relacionamento=-20)
                        print('\nEnquanto você limpava a privada sua aliança escorregou e caiu do seu dedo. Você explicou a situação para sua esposa mas mesmo assim ela ficou chateada.')
                else:
                    print('\n\nVocê não está saudável o suficiente e nem tem energia para limpar o banheiro agora.')
                avancar()
                continue

            elif casa == 3:
                if thiago.estresse < 40:
                    print('\n\nLIMPANDO O QUARTO..')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(relacionamento = 20, estresse=-10)
                        print('\nQuarto completamente limpo.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(saude=-30, relacionamento=10, estresse=40, dinheiro=-50)
                        print('\nA lâmpada do seu quarto queimou, você foi trocar mas caiu do banco e fraturou o braço e teve que ir ao hospital.')
                else:
                    print('\n\n Tente se dessestressar primeiro antes de tentar limpar o quarto.')
                avancar()
                continue

            elif casa == 4:
                if thiago.relacionamento > 30:
                    print('\n\nLIMPANDO A SALA...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(relacionamento=10, estresse=-10, dinheiro=50)
                        print('\nSala completamente limpa, inclusive você encontrou R$50 que haviam caído do seu bolso e você não se lembrava.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(dinheiro=-20, estresse=20)
                        print('\nAo levantar um dos sofás você notou várias traças comendo o tecido do estofado. O produto de limpeza te custou R$20.')
                else:
                    print('\nSua esposa estava chateada com você e resolveu limpar a sala sozinha enquanto você estava no quarto.')
                avancar()
                continue
                    

            elif casa == 5:
                if thiago.dinheiro >= 150 :
                    print('\n\nTIRANDO O LIXO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=-20, relacionamento = 20)
                        print('\nLixo no lixo. Tirar o lixo de casa te trouxe um paz indescritível.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(saude=-30, estresse=60, dinheiro=-150, relacionamento=20)
                        print('\nEnquanto você tirava o lixo um cachorro foi na sua direção, rasgou o saco de lixo e te mordeu. Você teve que ir ao médico e precisou comprar antibióticos.')
                else:
                    print('\n\nHoje não é dia do lixeiro passar.')
                avancar()
                continue
                    
        #inicio eduardo
        elif escolha == 5:
            print('''[italic dark_cyan]Escolha uma das opções de projeto pessoal:[/italic dark_cyan]\n
        [ 1 ] Produzir vídeo para o canal do Youtube Thi Code
        [ 2 ] Produzir conteúdo para o Instagram @thi.code
        [ 3 ] Ir para a academia para ficar monstro
        [ 4 ] Desenvolver mais um pouco o rascunho do seu projeto social de ensino gratuito de programação para jovens
        [ 5 ] Independência financeira\n''')
            projetospessoais = int(input('O que você quer fazer? '))
            
            if projetospessoais == 1:
                if thiago.saude > 10:  # mudanças nos atributos a serem discutidas depois
                    print('\n\nPRODUZINDO VÍDEO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=-10, xp=10)
                        print('\nVocê fez o roteiro e a gravação para o vídeo em tempo recorde, fluiu muito bem.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(saude=5, estresse=20)
                        print('\nAparentemente o Youtube detectou atividade suspeita na sua conta e o bloqueou mesmo você não tendo feito nada.')
                else:
                    print('\n\nVocê não está saudável e também sem cabeça para se dedicar a escrever roteiro e gravar o vídeo agora.')
                avancar()
                continue

            elif projetospessoais == 2:
                if thiago.relacionamento > 30:
                    print('\n\nPRODUZINDO CONTEÚDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=-10, relacionamento=-10, xp=10)
                        print('\nO post que você fez sobre suas extensões no VSCode alcançou um público grande e gerou vários comentários.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(estresse=10, relacionamento=-20, dinheiro=-20)
                        print('\nVocê foi denunciado por plágio e o Instagram te bloqueou para analisar sua conta.')
                else:
                    print('\n\nSua esposa não está satisfeita em como você a está tratando e o proibiu de usar o Instagram. Dê um pouco mais de atenção a ela. Cuide antes de perder.')
                avancar()
                continue

            elif projetospessoais == 3:
                if thiago.dinheiro > 20:
                    print('\n\nMALHANDO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(saude=30, relacionamento=-20, estresse=5, dinheiro=-20)
                        print('\nVocê gostou tanto do exercício que está até pensando em disputar um concurso de fisiculturismo ano que vem. Entretanto, sua esposa não gosta de homens musculosos.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(saude=-30, relacionamento=50, estresse=40, dinheiro=-20)
                        print('\nAo fazer o supino você exagerou no peso e a barra de ferro bateu com força no seu peito te fazendo perder todo o ar. Sua esposa ficou preocupada o foi buscar na academia.')
                else:
                    print('\n\nVocê não tem dinheiro suficiente para ir a academia.')
                avancar()
                continue

            elif projetospessoais == 4:
                if thiago.saude >= 20 and thiago.dinheiro >= 50:
                    print('\n\nAJUDANDO OS JOVENS COM PROGRAMAÇÃO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(relacionamento=10, estresse=10, xp=10, dinheiro=-5)
                        print('\nO projeto está a todo vapor e alguns possíveis parceiros já entraram em contato com você.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(dinheiro=-30, estresse=30)
                        print('\nEm tempos de pandemia é difícil achar parceiros para empreendimentos sociais, e todos os seus contatos o chamaram de louco e pularam fora por querer desenvolver o projeto.')
                else: # MUDANÇA FEITA POR FELIPE
                    if thiago.dinheiro >= 50:
                        print('\n\nVocê não está saudável o suficiente para se dedicar a esta ação.')
                    elif thiago.saude >= 20:
                        print('\n\nVocê tem outras prioridades no momento, talvez devesse começar vendo sua reserva de dinheiro.')
                    else:
                        print('\n\nMuito legal da sua parte em pensar nesse projeto, mas o ideal é que primeiro tente ajeitar um pouco a sua própria vida.')
                avancar()
                continue

            elif projetospessoais == 5:
                if thiago.dinheiro > 200:
                    print('\n\nINVESTINDO DINHEIRO...')
                    sleep(2)
                    if opcao != 3:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(dinheiro=100, estresse=40)
                        print('\nSeus investimentos no Tesouro Direto e na Bolsa de Valores estão ficando mais sólidos daqui a alguns anos você talvez consiga viver só de renda passiva. Entretanto seus ganhos são proporcionais ao tempo que você tem para administrar os investimentos.')
                    else:
                        relogio.avancaTempo(1, 1)
                        thiago.atribuirValores(saude=-10, estresse=60, dinheiro=-fabs(thiago.dinheiro), relacionamento=-30)
                        print('\nAplicaram um golpe em você e na verdade seu investimento foi para um esquema de pirâmide. Isso afetou bastante o ambiente na sua casa.')
                else:
                    print('\n\nAntes de pensar em investir, pense em como não perder dinheiro.')
                avancar()
                continue
