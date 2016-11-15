import { ValidationHelper } from './helpers/validationhelper';

export class Register {
    username: string;
    password: string;
    confirmPassword: string;
    mobileNumber: string;
    validationHelper: ValidationHelper;

    constructor() {
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.mobileNumber = "";
        this.validationHelper = new ValidationHelper();
    }

    public validateUserName(){
        console.log("in validate user name");
    }

    public doRegister() {
        console.log("in register");
    }
}