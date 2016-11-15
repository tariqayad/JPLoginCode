export class ValidationHelper{
    passwordValidator: RegExp;
    validationMessage: string;

    constructor() {
        this.passwordValidator = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g);
    }

    isUserNameValid(username: string): boolean {
        if (username != null) {
            if (username.length < 8) {
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
        if (this.passwordValidator.test(password)) {
            return true;
        }
        else {
            this.validationMessage = "Password does not meet security complexity requirements. Passwords should contain atleast 8 characters, atleast 1 uppercase, 1 lowercase , 1 numeric and 1 special character.";
            return false;
        }

    }
}