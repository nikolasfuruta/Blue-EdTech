# README
## Projeto Blue 01
A proposta do desafio é o desenvolvimento de uma API para cadastro de 3 temas a sua escolha.

- Cadastro de Escritores
- Cadastro de Pintores
- Cadastro de Escultores

## Etapas

- Criação da pasta "config" e do arquivo "ExpressConfig.js"
- Definir a classe App com todas as configurações do servidor sendo as propriedade dessa classe
- Criar o arquivo "index.js" na raiz do programa e importar o App
- Utilizando o método "listen()", subir o servidor 
- Definir 4 pastas, "routes, controllers, models e database" e inserir todas em uma única pasta chamada "api". Incluse a pasta "config"
- Na pasta "database", criar 3 arquivos, "listaEscritores, listaPintores e listaEscultores", que serao o nosso banco de dados
- Na pasta routes, definir 3 arquivos "escritoresRoutes,pintoresRoutes e escultoresRoutes" que serão responsáveis pela definição das rotas. Aqui usaremos um método do express chamado "Router() para exportar as rotas
- Na pasta controllers, definir 3 arquivos "EscritoresControllers,PintoresControllers e EscultoresControllers" que serão responsáveis pelo tratamento das requisições e respostas
- Na pasta models, definir 3 arquivos "EscritoresModels,PintoresModels e EscultoresModels" que serão responsáveis pela interação com o Banco de Dados(listas)
- Utilizando o require() e module.exports, realizamos todas as exportações e importações necessários para conectar todos os arquivos
- Na pasta routes definimos um arquivo "index" onde serão importados todos os "router" e definiremos uma função que recebe "app" como parâmetro. Assim, definimos uma rota "base" para cada tema: "/escritores", "/pintores" e "/escultores"
- No arquivo "ExpressConfig" configuramos o "this._routes()" utilizando um módulo externo chamado "consign" definindo para passar o this._init como argumento para a função criado na pasta routes
- Com tudo integrado, podemos realizar o CRUD

## Tech

- [Express] 
- [Nodemon]
- [Consign]