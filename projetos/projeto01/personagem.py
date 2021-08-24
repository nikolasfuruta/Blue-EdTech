from tabulate import tabulate

# inicia a classe Personagem atribuindo valores iniciais aos atributos.
class Personagem:
    def __init__(self, nome='Thiago', nivel='Estudante'):
        self.__nome = nome
        self.__saude = 100
        self.__relacionamento = 100
        self.__dinheiro = 150
        self.__estresse = 0
        self.__xp = 0
        self.__nivel = nivel

    # os decoradores são utilizados para acessar os atributos privados.
    @property
    def nome(self):
        return self.__nome
    
    @property
    def saude(self):
        return self.__saude
    @saude.setter
    def saude(self, valor):
        self.__saude = valor

    @property
    def relacionamento(self):
        return self.__relacionamento
    @relacionamento.setter
    def relacionamento(self, valor):
        self.__relacionamento = valor
    
    @property
    def dinheiro(self):
        return self.__dinheiro
    
    @property
    def estresse(self):
        return self.__estresse
    @estresse.setter
    def estresse(self, valor):
        self.__estresse = valor
    
    @property
    def xp(self):
        return self.__xp
    
    @property
    def nivel(self):
        return self.__nivel
    @nivel.setter
    def nivel(self, cargo):
        self.__nivel = cargo
    
     # o magic_method 'str' é utilizado para imprimir o status do jogador.
     # junto, foi utilizado a biblioteca tabulate para a formatação do status.
    def __str__(self):
        tabelaStatus = [
            ['💊 Saúde:', f'{self.saude} / 100'],
            ['💑 Relacionamento:', f'{self.relacionamento} / 100'],
            ['💸 Dinheiro:', f'R$ {self.dinheiro:.2f}'],
            ['🤯 Estresse', f'{self.estresse} / 100'],
            ['🤩 Experiência', self.xp],
            ['🌟 Nível', self.nivel]]
            
        return tabulate(tabelaStatus, tablefmt="rst")
        
    # função para garantir que os atributos tenham sempre valores entre zero e cem.
    def _avaliar(self, valor):
        if valor > 100:
            return 100
        elif valor < 0:
            return 0
        else:
            return valor

    #função única utilizado para alterar os valores dos vários atributos do personagem.
    def atribuirValores(self, saude = 0, relacionamento = 0, dinheiro = 0, estresse = 0, xp = 0):
        self.__saude += saude
        self.__relacionamento += relacionamento
        self.__dinheiro += dinheiro
        self.__estresse += estresse
        self.__xp += xp
        self.saude = self._avaliar(self.saude)
        self.relacionamento = self._avaliar(self.relacionamento)
        self.estresse = self._avaliar(self.estresse)
        if self.xp >= 50:
            self.nivel = 'Junior'
        elif self.xp >= 150:
            self.nivel = 'Pleno'
        elif self.xp >= 500:
            self.nivel = 'Sênior'