import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import sha256 from 'js-sha256';
import { HttpClient, json } from 'aurelia-fetch-client';
import { ValidationHelper } from './helpers/validationhelper';
import { SettingsHelper } from './helpers/SettingsHelper';
import { State } from './helpers/State';

@inject(State, Router)
export class Login {
    // Framework variables
    theRouter: Router;
    http: HttpClient;

    // Login Variables
    username: string;
    password: string;

    // Validation Variables
    validationHelper: ValidationHelper;
    message: string;

    // State
    state: State;

    constructor(state: State, router: Router) {
        this.state = state;
        this.theRouter = router;
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
                this.state.isLoggedIn = true;
                this.theRouter.navigate("home");
            })
            .catch(exception => {
                console.log(exception)
                this.message = "Error with the login process";
            });
    }
}