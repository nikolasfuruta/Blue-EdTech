"""
#01 - Crie um programa que gerencie o aproveitamento de um jogador de
futebol. O programa vai ler o nome do jogador e quantas partidas ele
jogou. Depois vai ler a quantidade de gols feitos em cada partida.
No final, tudo isso será guardado em um dicionário, incluindo o total
de gols feitos durante o campeonato.
"""


class Jogador:

    def __init__(self):
        self.nome = input("Digite o nome do jogador: ")
        self.partida = int(input("Digite o número de partidas: "))
        self.gols = self._total_gols()
        self.produtividade = self._foi_produtivo()

    def _total_gols(self):
        total = 0
        for p in range(1,self.partida+1):
            g = int(input(f"Digite quantos gols realizou na partida {p}: "))
            total += g
        return total

    def _foi_produtivo(self):
        return self.gols//self.partida


class Cadastro:

    def __init__(self):
        self.total_jogadores = self._quantos_jogadores()
        self.registro = self._registrar()
        self.mostrar_reg()

    def _quantos_jogadores(self):
        return int(input("Digite o número de jogadores: "))

    def _registrar(self):
        reg_jog = {}
        for j in range(1,self.total_jogadores+1):
            jogador = Jogador() #cria um obj jogador
            reg_jog[jogador.nome] = (jogador.gols,jogador.produtividade)
            print()
        return reg_jog

    def mostrar_reg(self):
        for k,v in self.registro.items():
            print(f"{k.upper()} - GOLS: {v[0]} - MÉDIA DE GOLS: {v[1]}")

if __name__ == "__main__":
    cad = Cadastro()



