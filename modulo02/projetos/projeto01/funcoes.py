import os
from art import text2art
from rich import print

#função para abrir as instruçoes do jogo.
def leitor():
    t = 'intro_projetofinal.txt' #alterar o nome do arquivo txt
    with open(t,encoding = 'utf-8') as file:
        read = file.read()
        print(read)

#função para limpar a tela do terminal.
def limpar():
    return os.system('cls' if os.name == 'nt' else 'clear')

#função para controlar o fluxo do jogo.
def avancar():
    return input('\n\nQuando quiser avançar aperte ENTER: ')

#função para formatar e exibir o título do jogo.
def cabecalho():
    texto = text2art("""         //     Lima's     //
//     Simulator     //""", font="small")
    print(f'[bright_blue]{texto}[/bright_blue]')

def thiagoImg():
    print("""[bright_blue]
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╩╙└     └╙╙╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╝╜└└╓╓╓╓╖╖╖╖┌┌┌╙╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╝└╓╥╫╬╫╫╬╬╬╬╫╬╬╬╬╫╖╜╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢┘┌╓╫╣╣╣╢╢╢╢╬╬╬╬╬╣╣╣╬╬╖╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╝┌│║╢╢╢╢╢╢╢╢╬╣╬╣╣╣╬╬╣╣╣┤╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢┘┌├╢╢╢╢╢╣╝╝╢╣╢╬╣╣╢╫╬╬╣╣╣║╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢┌└╢╣╜╓╖╖╖┐┌ └╜╢╜└┌┌ ┌┌┬╙╠╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢┌│╓ ╢┘┘└└╓ ┌ ╓╖ ╓   └╜┐║ ╓╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢┌╓╣╖║╖╓╖║╓╥╣╓╫╬╗╙╖║┬┬╖╓╫┌╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╖┌┐╢╢╢╬╬╨╩╩╨╙╓╨╫╬╣╗║╨╬╬╩╣╔╬├╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣╢╜╜╜╢╢╢╣╣╜╢╢┘  ╜  ║╖╙╢╢╢╢╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣─╙╙╜╜╜└╙          ╙┘╢╜╜║╬╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╗ └└╙    ┌╥╥╫╬╬╗╗   ║╜─║╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢─   ┘ ╙╢╣╢╜╢╢┴╣╢╣╜ └  ╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣      ╙╜┘└└  └└╜└   ╟╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢  ┐             └─    ╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣  ║┐                 ╓╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢║╨╜╙╙    ╙╖               └║╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣╜╙└          └              └╟╢╫╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╢╢╣║╖╒┌┌                             ├╫╣╣└╙╫╣╝╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╢╢╢╢╜╨╜╨╨╜┘┐┘                ┐┌┌ ┌  ┌┌   ╙╫╣╫╖ ╠╨╣┘╢╣╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╢╢╜╜╜╜╜╙┴╖╥┐                    ╙┌┬╖╥╖╜╢╕     ╙╬┐║┌╙╣└╜╜╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╢╢╜┘└│└┘┘┐└└╜╜╖╖                      ╙╙╜╜─   └ ╖ ╙╖╖┐ ╖╖╜┬╜╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╜└└┌  └╙┐╙╖║╖│└┐┐  └     └                 ┌   ┌ ╙╖ ╙┐ ╙└╙┘┌╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢    ─┐   └─╙╖└┐└││╖ └│                     ┌   └│ ╙╢┐   ││┘╟╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢│┌   └╙┬╖  ─┌└┐│╖└┐│┐ ┌└                    ┐    ╣  │ └ └┐─┌╙╢╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢         ╙─┐└┐││┐╙┌│┌  ┌│└┌                  ┌   └─     │└ ║╜╙╢╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢┐              ┘└└┘┌└┐  ┌└                    └   ┌     ┘ └╢╜╖║╢╢╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╣                                                         └─╙└└╨╣╢╢╢╢╢╢╢╢╢╢╢
╢╢╢╢╣                                      ┐                     ┌  ╓╙║╢╢╢╢╢╢╢╢╢
╢╢╢╢╢─                                     ─│                 └   │┌│┐└╣╢╢╢╢╢╢╢╢
╢╢╢╢╢╣     └└┐────┐                        ─┌└                └─┘┘   └  └╙║╢╢╢╢╢
╢╢╢╢╢╢─     └│┌┌┌┌┌                                       ┌╬╥╖          ╓╢╠╢╢╢╢╢
[/bright_blue]""")
