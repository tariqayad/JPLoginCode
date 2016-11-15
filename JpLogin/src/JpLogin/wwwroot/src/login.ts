import { CryptoJS } from from 'cryptojs';
import { js-sha256 } from 'js-sha256';

export class Login {
    errorMessage: string;
    username: string;
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }

    public doLogin() {
        console.log("in login");

        // Hash the password
        let pwdHash: string;

        
    }
}