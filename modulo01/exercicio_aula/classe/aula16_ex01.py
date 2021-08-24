class Pessoa:
    
    def __init__(self,nome,idade,peso):
        self._nome = nome
        self._idade = idade
        self._peso = peso
        
    def comer(self,cal):
        if self._idade >= 30:
            self._peso += cal * 2
        else:
            self._peso += cal

    def malhar(self,cal):
        if self._idade < 30:
            self._peso -= cal * 2
        else:
            self._peso -= cal


    def mostrar_peso(self):
        return f"""
NOME: {self._nome}
IDADE: {self._idade}
PESO: {self._peso}
"""

if __name__ == "__main__":
    p1 = Pessoa('Thiago',27,100)
    p2 = Pessoa('Maria',34,70)

    p1.comer(2)
    p1.malhar(3)
    print(p1.mostrar_peso())