import { ValidationHelper } from "../helpers/validationHelper";

export class ValidateFormValueConverter {
    public toView(validator: ValidationHelper, username: string, password: string): boolean {
        if (validator.isPasswordValid(password) && validator.isUserNameValid(username)) {
            return true;
        }        
        return false;
    }

}