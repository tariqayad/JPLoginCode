import { ValidationHelper } from "../helpers/validationHelper";

export class ValidateUserNameValueConverter {
    public toView(validator: ValidationHelper, username: string) {
        if (username == "") {
            return '';
        }

        if (validator.isUserNameValid(username)) {
            return 'valid';
        }

        return 'invalid';
    }
}