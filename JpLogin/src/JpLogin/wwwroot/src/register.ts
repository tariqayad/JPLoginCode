import { ValidationHelper } from './helpers/validationhelper';
import { SettingsHelper } from './helpers/SettingsHelper';
import { HttpClient, json } from 'aurelia-fetch-client';
import sha256 from 'js-sha256';

export class Register {
    username: string;
    password: string;
    confirmPassword: string;
    countryCode: string;
    mobileNumber: string;
    validationHelper: ValidationHelper;
    http: HttpClient;
    message: string;

    constructor() {
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.mobileNumber = "";
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

    public validateUserName() {
        console.log("in validate user name");

        this.http.fetch('User',
            {
                method: 'post',
                body: json({
                    userName: this.username
                })
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data == false) {
                    this.validationHelper.validationMessage = "Username already exists";
                }
            });
    }

    public doRegister() {

        console.log("in register");

        if (this.validationHelper.isUserNameValid && this.validationHelper.isPasswordValid) {
            // Hash the password

            let pwdHash: string;

            pwdHash = sha256(this.password);

            this.http.fetch('',
                {
                    method: 'post',
                    body: json({
                        userName: this.username,
                        passwordHash: pwdHash,
                        mobileNumber: this.mobileNumber,
                        countryCode: this.countryCode
                    })
                }
            ).then(response => {
                console.log("response recieved");
                if (response.ok) {
                    response.json();
                }
                else {
                    this.message = "An error occured during registration";
                }                
            })
            .then(data => {
                this.message = "User registered succesfully";
            })
            .catch(e => {
                this.message = "An error occured during registration";
            });
        }       
    }
}