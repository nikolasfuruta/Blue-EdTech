from random import randint

class Lancador:

    def __init__(self):
        self.obj = self._qual_obj()
        self.lancar()


    def _qual_obj(self):
        print('''Escolha o que vai lançar: 
        [1] - MOEDA
        [2] - DADO''')
        choose = int(input("Escolha: "))
        while choose not in [1,2]:
            choose = int(input("Lançar: "))
        if choose == 1:
            return 'moeda'
        return 'dado'

    def lancar(self):
        if self.obj == 'moeda':
            res = randint(1,2)
            if res == 1:
                print(f'{self.obj.upper()}: CARA')
            else:
                print(f'{self.obj.upper()}: COROA')
        else:
            res = randint(1,6)
            print(f"{self.obj.upper()}: {res}")

if __name__ == "__main__":
    l1 = Lancador()


