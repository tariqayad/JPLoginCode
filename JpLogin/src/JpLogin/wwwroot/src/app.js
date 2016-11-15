"use strict";
var aurelia_router_1 = require('aurelia-router');
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        console.log("configureRouter");
        this.router = aurelia_router_1.Router;
        config.title = "aurelia";
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: 'src/start' },
            { route: 'tenants/:id', name: 'tenants', moduleId: 'src/tenants' }
        ]);
    };
    return App;
}());
exports.App = App;
