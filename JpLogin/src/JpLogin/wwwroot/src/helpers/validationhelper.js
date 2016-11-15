"use strict";
var ValidationHelper = (function () {
    function ValidationHelper() {
        this.passwordValidator = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g);
    }
    ValidationHelper.prototype.isUserNameValid = function (username) {
        this.validationMessage = "";
        if (username != null) {
            if (username.length < 8) {
                this.validationMessage = "Username does not meet security complexity requirements. userNames should be atleast 8 characters long";
                return false;
            }
            return true;
        }
        else {
            return false;
        }
    };
    ValidationHelper.prototype.isPasswordValid = function (password) {
        this.validationMessage = "";
        if (this.passwordValidator.test(password)) {
            return true;
        }
        else {
            this.validationMessage = "Password does not meet security complexity requirements. Passwords should contain atleast 8 characters, atleast 1 uppercase, 1 lowercase , 1 numeric and 1 special character.";
            return false;
        }
    };
    return ValidationHelper;
}());
exports.ValidationHelper = ValidationHelper;
