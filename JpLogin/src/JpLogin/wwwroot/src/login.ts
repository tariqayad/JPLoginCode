import { ValidationHelper } from './helpers/validationhelper';
import from 'hash';

export class Login {
    errorMessage: string;
    username: string;
    password: string;
    validationHelper: ValidationHelper;

    constructor() {
        this.username = "";
        this.password = "";
        this.validationHelper = new ValidationHelper();
    }

    public doLogin() {
        console.log("in login");

        // Hash the password
        let pwdHash: string;

        console.log(hash.sha256("abc"));
    }
}