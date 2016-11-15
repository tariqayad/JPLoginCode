export class ValidationHelper{
    static passwordValidationMessage: string;

    static isUserNameValid(username:string): boolean {
        return true;
    }

    static isPasswordValid(password: string): boolean {
        if (password.length < 8) {
            this.passwordValidationMessage = "Password is too short";
            return false;
        }
        return true;
    }
}