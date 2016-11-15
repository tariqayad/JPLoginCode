import { ValidationHelper } from "../helpers/validationHelper";

export class ValidateUserNameValueConverter {
    public toView(username: string) {
        if (ValidationHelper.isUserNameValid(username)) {
            return 'valid';
        }

        return 'invalid';
    }
}