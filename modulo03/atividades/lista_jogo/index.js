const customExpress = require('./config/customExpress');

//VARIÁVEIS
const app = customExpress();
const port = 3000;

//SERVIDOR
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});