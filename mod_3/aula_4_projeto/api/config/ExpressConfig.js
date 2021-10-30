const express = require("express")
const db = require("./dataConfig");
const consign = require('consign')

//CONFIGURAÇÃO DO SERVIDOR
class App{

    constructor(){
        this._init = express();
        this._connect = db
        this._environmentVar();
        this._middlewares();
        this._routes()
    }

    _environmentVar(){
        this._init.set("port",3000);
    }

    _middlewares(){
        this._init.use(express.json())
    }
    
    _routes(){
        consign({cwd:"api"})
            .include("routes/index.js")
            .into(this._init)
    }
}

module.exports = new App()._init