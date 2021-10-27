/*criar um hello world em Express, focando na
explicação das rotas e na requisição e resposta.
*/

const express = require('express')

const app = express()
app.listen(3000, ()=>{
    console.log("hello world")
})