import { ValidationHelper } from './helpers/validationhelper';
import { SettingsHelper } from './helpers/SettingsHelper';
import { HttpClient } from 'aurelia-fetch-client';

export class Register {
    username: string;
    password: string;
    confirmPassword: string;
    mobileNumber: string;
    validationHelper: ValidationHelper;
    http: HttpClient;

    constructor() {
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.mobileNumber = "";
        this.validationHelper = new ValidationHelper();

        this.http = new HttpClient();
        this.http.configure(config => {
            config.withBaseUrl(SettingsHelper.webUrl);
        })
    }

    public validateUserName(){
        console.log("in validate user name");

        this.http.fetch().then(response => {
            console.log("resp recvd");
        });
    }

    public doRegister() {
        console.log("in register");
    }
}