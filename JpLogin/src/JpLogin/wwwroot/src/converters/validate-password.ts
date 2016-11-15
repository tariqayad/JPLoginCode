import { ValidationHelper } from "../helpers/ValidationConverter";

export class ValidatePasswordValueConverter {
    public toView(password: string) {
        if (ValidationHelper.isUserNameValid(password)) {
            return 'valid';
        }

        return 'invalid';
    }

}