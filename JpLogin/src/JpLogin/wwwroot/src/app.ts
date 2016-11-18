/*******
* Aurelia Bootstrapper Code
*
*/
import { RouterConfiguration, Router } from 'aurelia-router';

export class App {

    router: Router;

    constructor() {

    }

    configureRouter(config: RouterConfiguration, router: Router) {
        console.log("configureRouter");

        this.router = Router;

        config.title = "JPLogin";
        config.map(
            [
                { route: ['', 'login'], name: 'login', moduleId: 'src/Login', title: "Login" },
                { route: '/register', name: 'register', moduleId: 'src/Register', title: "Register" }
                { route: '/home', name: 'home', moduleId: 'src/Home', title: "home" }
            ]
        );
    }
}