import { inject } from 'aurelia-framework';
import { State } from './helpers/State';

@inject(State)
export class Home {
    message: string;
    state: State;

    constructor(state: State) {
        this.state = state;
        this.message = "Hello World";
    }
}