import { RouterConfiguration, Router } from 'aurelia-router';

export class App {

    router: Router;

    constructor() {

    }

    configureRouter(config: RouterConfiguration, router: Router) {
        console.log("configureRouter");

        this.router = Router;

        config.title = "aurelia";
        config.map(
            [
                { route: ['', 'home'], name: 'home', moduleId: 'src/start' },
                { route: 'tenants/:id', name: 'tenants', moduleId: 'src/tenants'}
            ]
        );
    }
}