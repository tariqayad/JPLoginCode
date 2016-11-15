import { ValidationHelper } from './helpers/validationhelper';
//import * as sha256 from 'fast-sha256';
import sha256 from 'js-sha256';

export class Login {
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

        console.log(sha256("abc"));
    }
}