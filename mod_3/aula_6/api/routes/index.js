const filmesRoutes = require('./filmesRoutes');

module.exports = (app) => {
    app.use("/filmes", filmesRoutes)
}