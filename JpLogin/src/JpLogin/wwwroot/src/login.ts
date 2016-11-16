import { ValidationHelper } from './helpers/validationhelper';
//import * as sha256 from 'fast-sha256';
import sha256 from 'js-sha256';
import { SettingsHelper } from './helpers/SettingsHelper';
import { HttpClient, json } from 'aurelia-fetch-client';


export class Login {
    username: string;
    password: string;
    validationHelper: ValidationHelper;
    http: HttpClient;

    constructor() {
        this.username = "";
        this.password = "";
        this.validationHelper = new ValidationHelper();
        this.http = new HttpClient();
        this.http.configure(config => {
            config.withBaseUrl(SettingsHelper.webUrl);
        })
    }

    public doLogin() {
        console.log("in login");

        // Hash the password
        let pwdHash: string;

        pwdHash = sha256(this.password);

        this.http.fetch('',
            {
                method: 'post',
                body: json({
                    userName: this.username,
                    passwordHash: pwdHash
                })
            }
        ).then(response => {
            console.log("resp recvd");
        });
    }
}