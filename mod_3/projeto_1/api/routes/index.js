const escritoresRoutes = require('./escritoresRoutes');
const pintoresRoutes = require('./pintoresRoutes');
const escultoresRoutes = require('./escultoresRoutes');

module.exports = (app) => {
    
    app.use("/escritores",escritoresRoutes);
    app.use("/pintores",pintoresRoutes);
    app.use("/escultores",escultoresRoutes);
}