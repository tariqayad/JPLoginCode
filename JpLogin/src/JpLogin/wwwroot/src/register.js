"use strict";
var validationhelper_1 = require('./helpers/validationhelper');
var SettingsHelper_1 = require('./helpers/SettingsHelper');
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
var Register = (function () {
    function Register() {
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.mobileNumber = "";
        this.validationHelper = new validationhelper_1.ValidationHelper();
        this.http = new aurelia_fetch_client_1.HttpClient();
        this.http.configure(function (config) {
            config.withBaseUrl(SettingsHelper_1.SettingsHelper.webUrl);
        });
    }
    Register.prototype.validateUserName = function () {
        console.log("in validate user name");
        this.http.fetch().then(function (response) {
            console.log("resp recvd");
        });
    };
    Register.prototype.doRegister = function () {
        console.log("in register");
    };
    return Register;
}());
exports.Register = Register;
