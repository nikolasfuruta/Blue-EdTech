"""
#01 - Crie um programa que declare uma matriz de dimensão 3×3 e preencha com valores lidos pelo teclado. No final, mostre a matriz na tela, com essa formatação:

[  1  ][  2  ][  3  ]
[  4  ][  5  ][  6  ]
[  7  ][  8  ][  9  ]

matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
"""

matriz = [[int(input("Digite um número: ")) for k in range(3)] for i in range(3)]
print()
for m in matriz:
    print(f"{m}\n")
    
