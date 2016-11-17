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
    message: string;

    constructor() {
        this.username = "";
        this.password = "";
        this.validationHelper = new ValidationHelper();
        this.http = new HttpClient();
        this.http.configure(config => {
            config.withBaseUrl(SettingsHelper.webUrl)
                .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                });
        });
    }

    public doLogin() {
        console.log("in login");

        // Hash the password
        let pwdHash: string;

        pwdHash = sha256(this.password);

        this.http.fetch('Verify',
            {
                method: 'post',
                body: json({
                    userName: this.username,
                    passwordHash: pwdHash
                })
            }
        ).then(response => {
            console.log('resp rx');
            if (response.ok) {
                response.json()
            }
            else {
                this.message = "Invalid Credentials";
            }
        })        
            .then(data => {
                console.log(data)
                this.message = "Login Succesful";
            })
            .catch(exception => {
                console.log(exception)
                this.message = "Error with the login process";
            });
    }
}