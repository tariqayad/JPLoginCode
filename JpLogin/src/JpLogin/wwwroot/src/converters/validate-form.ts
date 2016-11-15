import { ValidationHelper } from "../helpers/validationHelper";

export class ValidateFormValueConverter {
    public toView(validator: ValidationHelper, username: string, password: string): boolean {
        if (username == "" && password == "") {
            return true;
        }
        if (validator.isUserNameValid(username) && validator.isPasswordValid(password)  ) {
            return true;
        }        
        return false;
    }

}