import { ValidationHelper } from "../helpers/validationHelper";

export class ValidateFormValueConverter {
    public toView(username: string, password: string):string {
        if (ValidationHelper.isPasswordValid(password) && ValidationHelper.isUserNameValid(username)) {
            return 'valid';
        }        

        return 'invalid';
    }

}