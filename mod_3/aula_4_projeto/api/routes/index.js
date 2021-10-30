const jogosRoutes = require('./jogosRoutes')

module.exports = (app) => {

    app.use("/jogos", jogosRoutes)
}