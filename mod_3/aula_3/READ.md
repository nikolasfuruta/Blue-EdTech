# Projeto 01 Módulo 3
## CRUD em memória

Projeto para iniciar no uso de CRUD

## Etapas

- Criar um arquivo server.js para configurar o Servidor
- Utilizando o express, criar uma instância "app = express()"
- Definir uma variável "port" para configurar a Porta
- Definir um middleware para que os dados de requisição sejam convertidos em JSON
- Subir o servidor utilizando o método "listen()" e passando o "port" como parâmetro
- Criar uma pasta "models" onde será armazenado as configurações da lista (nosso banco de dados)
- Criar os arquivos "filmesLista, jogosLista e seriesLista" e definir os dados 
- Criar uma pasta "controllers" onde serão armazenados os arquivos que tratarão das "REQs e RESs"
- Em cada arquivo controller, criar uma função que receberá como parâmetro um "app" e exportará todos os métodos HTTPs
- Utilizando o "require()", importar cada lista no respectivo controller
- Também no arquivo server, importar todos os controller e passar a instância "app" como parâmetro
- Agora o servidor está realizando o CRUD em cada lista

## npm

Principais módulos utilizados:

- [Express] 
- [Nodemon] 
