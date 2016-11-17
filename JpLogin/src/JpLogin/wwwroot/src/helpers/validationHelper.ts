export class ValidationHelper{
    isValid: bloolean;
    validationMessage: string;
    unValidationMessage: string;

    constructor() {

    }

    isUserNameValid(username: string): boolean {
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
    }

    isPasswordValid(password: string): boolean {
        this.validationMessage = "";
        let passwordValidator: RegExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g);

        if (passwordValidator.test(password)) {
            return true;
        }
        else {
            this.validationMessage = "Password does not meet security complexity requirements. Passwords should contain atleast 8 characters, atleast 1 uppercase, 1 lowercase , 1 numeric and 1 special character.";
            return false;
        }

    }
}