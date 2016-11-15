"use strict";
function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;
