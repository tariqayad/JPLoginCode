import { ValidationHelper } from "../helpers/validationHelper";

export class ValidatePasswordValueConverter {
    public toView(password: string) {
        if (ValidationHelper.isPasswordValid(password)) {
            return 'valid';
        }

        if

        return 'invalid';
    }

}