"use strict";
var validationhelper_1 = require('./helpers/validationhelper');
//import * as sha256 from 'fast-sha256';
var js_sha256_1 = require('js-sha256');
var SettingsHelper_1 = require('./helpers/SettingsHelper');
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
var Login = (function () {
    function Login() {
        this.username = "";
        this.password = "";
        this.validationHelper = new validationhelper_1.ValidationHelper();
        this.http = new aurelia_fetch_client_1.HttpClient();
        this.http.configure(function (config) {
            config.withBaseUrl(SettingsHelper_1.SettingsHelper.webUrl);
        });
    }
    Login.prototype.doLogin = function () {
        console.log("in login");
        // Hash the password
        var pwdHash;
        pwdHash = js_sha256_1.default(this.password);
        this.http.fetch('', {
            method: 'post',
            body: aurelia_fetch_client_1.json({
                userName: this.username,
                passwordHash: pwdHash
            })
        }).then(function (response) {
            console.log("resp recvd");
        });
    };
    return Login;
}());
exports.Login = Login;
