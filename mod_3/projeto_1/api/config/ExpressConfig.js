const express = require('express');
const consign = require("consign");

class App {

    constructor(){
        this._init = express();
        this._environmentVariable();
        this._middlewares();
        this._routes()
    }

    _environmentVariable(){
        this._init.set("port", 3000);
    }

    _middlewares(){
        this._init.use(express.json());
    }

    _routes(){
        consign({cwd:"api"})
        .include("routes/index.js")
        .into(this._init)
    }
}

module.exports = new App()._init