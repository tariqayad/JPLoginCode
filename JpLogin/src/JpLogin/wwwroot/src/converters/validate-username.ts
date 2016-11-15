import { ValidationHelper } from "../helpers/validationHelper";

export class ValidateUserNameValueConverter {
    public toView(validator: ValidationHelper, username: string) {
        if (validator.isUserNameValid(username)) {
            return 'valid';
        }

        return 'invalid';
    }
}