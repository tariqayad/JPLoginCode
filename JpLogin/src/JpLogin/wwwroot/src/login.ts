import from 'hash';

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

        console.log(hash.sha256("abc"));
    }
}