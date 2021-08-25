//IMPORTAÇÕES
const express = require('express');
const consign = require('consign');//as exportações do app vão parar aqui


module.exports = function(){
    const app = express();
    app.use(express.json());
    consign()
        .include('controllers')//nessa parte que o parâmetro app da função é preenchido; 
        .into(app)
        
    return app;
}