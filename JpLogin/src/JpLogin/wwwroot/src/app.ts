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
                { route: ['', 'home'], name: 'home', moduleId: 'src/Login' },
            ]
        );
    }
}