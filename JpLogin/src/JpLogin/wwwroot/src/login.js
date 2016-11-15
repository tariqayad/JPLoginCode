"use strict";
var Login = (function () {
    function Login() {
        this.username = "";
        this.password = "";
    }
    Login.prototype.doLogin = function () {
        console.log("in login");
    };
    return Login;
}());
exports.Login = Login;
