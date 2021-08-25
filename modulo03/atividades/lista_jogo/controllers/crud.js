const jogos = require('./classeJogo');

//ROTAS 
module.exports = function(app){

    //READ
    app.get('/jogos',(req,res)=>{
        res.json({jogos});
    });
}