class Relogio:
    def __init__(self):
        self.__dia = 6
        self.__horas = 7
        self.__minutos = 0
    
    @property
    def dia(self):
        return self.__dia
    
    @property
    def horas(self):
        return self.__horas
    
    @property
    def minutos(self):
        return self.__minutos
    
    # magic method str utilizado para printar as horas passadas no jogo.
    def __str__(self):
        horario = f'{self.__horas:02d}:{self.__minutos:02d}'
        return f'''
                    {"Agora são:":>19}
                    {horario:>18},
                    {self.diaDaSemana():>19}\n'''
    
    #método para alterar os atributos da classe relógio.
    # caso os minutos passe de 60 ou as horas passe de 24, automaticamente faz a conversão 60min para 1h, 24h para 1 dia.
    def avancaTempo(self, horas = 0, minutos = 0):
        self.__horas += horas
        self.__minutos += minutos
        while self.__minutos >= 60:
            self.__minutos -= 60
            self.__horas += 1
        while self.__horas >= 24:
            self.__horas -= 24
            self.__dia += 1
    
    # método para mostrar os dias da semana de forma literal.
    def diaDaSemana(self):
        semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
        diaSemana = semana[self.__dia % 7]
        return diaSemana
