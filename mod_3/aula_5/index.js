const express = require('express');
const filmeRoutes = require('./filmes');
const cervejaRoutes = require('./cervejas');
const timeRoutes = require('./times');
const bandaRoutes = require('./bandas');

const app = express();

app.set('port',3000);
app.use(express.json());

app.use("/filmes",filmeRoutes)
app.use("/cervejas",cervejaRoutes)
app.use("/times",timeRoutes)
app.use("/bandas",bandaRoutes)

app.listen(app.get('port'), ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${app.get('port')}`);
})