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
    }
}