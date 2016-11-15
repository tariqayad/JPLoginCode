"use strict";
var module_1 = require();
'cryptojs';
var Login = (function () {
    function Login() {
        this.username = "";
        this.password = "";
    }
    Login.prototype.doLogin = function () {
        console.log("in login");
        // Hash the password
        var pwdHash;
        module_1.CryptoJS.Sha1("a");
    };
    return Login;
}());
exports.Login = Login;
