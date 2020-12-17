const userRoutes = require('./user_routes');
const configRoutes = require('./config_route');

module.exports = function (app, db) {
    userRoutes(app, db);
    configRoutes(app,db);
};
