"use strict";
var validationhelper_1 = require('./helpers/validationhelper');
var SettingsHelper_1 = require('./helpers/SettingsHelper');
var aurelia_fetch_client_1 = require('aurelia-fetch-client');
var js_sha256_1 = require('js-sha256');
var Register = (function () {
    function Register() {
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.mobileNumber = "";
        this.validationHelper = new validationhelper_1.ValidationHelper();
        this.http = new aurelia_fetch_client_1.HttpClient();
        this.http.configure(function (config) {
            config.withBaseUrl(SettingsHelper_1.SettingsHelper.webUrl)
                .withDefaults({
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'Fetch'
                }
            });
        });
    }
    Register.prototype.validateUserName = function () {
        var _this = this;
        console.log("in validate user name");
        this.http.fetch('User', {
            method: 'post',
            body: aurelia_fetch_client_1.json({
                userName: this.username
            })
        }).then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
            if (data == false) {
                _this.validationHelper.validationMessage = "Username already exists";
            }
        });
    };
    Register.prototype.doRegister = function () {
        var _this = this;
        console.log("in register");
        if (this.validationHelper.isUserNameValid && this.validationHelper.isPasswordValid) {
            // Hash the password
            var pwdHash = void 0;
            pwdHash = js_sha256_1.default(this.password);
            this.http.fetch('', {
                method: 'post',
                body: aurelia_fetch_client_1.json({
                    userName: this.username,
                    passwordHash: pwdHash,
                    mobileNumber: this.mobileNumber
                })
            }).then(function (response) { return response.json(); })
                .then(function (data) {
                _this.validationHelper.validationMessage = "User created";
            });
        }
    };
    return Register;
}());
exports.Register = Register;
