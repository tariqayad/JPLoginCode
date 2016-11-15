"use strict";
var validationhelper_1 = require('./helpers/validationhelper');
//import * as sha256 from 'fast-sha256';
var js_sha256_1 = require('js-sha256');
var Login = (function () {
    function Login() {
        this.username = "";
        this.password = "";
        this.validationHelper = new validationhelper_1.ValidationHelper();
    }
    Login.prototype.doLogin = function () {
        console.log("in login");
        // Hash the password
        var pwdHash;
        console.log(js_sha256_1.default("abc"));
    };
    return Login;
}());
exports.Login = Login;
