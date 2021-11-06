const express = require('express');
const db = require('./mongooseConfig');
const consign = require('consign')

class App {

    constructor(){
        this._init = express();
        this._conn = db
        this._envVar();
        this._mid();
        this._routes();
    }

    _envVar(){
        this._init.set('port', process.env.PORT);
    }

    _mid(){
        this._init.use(express.json());
    }

    _routes(){
        consign({cwd:'api'})
            .include("routes/index.js")
            .into(this._init)
    }
}

module.exports = new App()._init