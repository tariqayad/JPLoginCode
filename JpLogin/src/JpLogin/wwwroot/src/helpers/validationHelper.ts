export class ValidationHelper{
    passwordValidator: RegExp;
    userNameValidationMessage: string;
    passwordValidationMessage: string;

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
        if (this.passwordValidator.test(password)) {
            return true;
        }
        else {
            this.passwordValidationMessage = "Password does not meet security complexity requirements. Passwords should contain <Br> <ul><li>Atleast 8 characters</li><li>1 upplercase character</li><li></li></ul>";
            return false;
        }

    }
}