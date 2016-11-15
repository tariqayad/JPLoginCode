import { ValidationHelper } from "../helpers/validationHelper";

export class ValidatePasswordValueConverter {
    public toView(validator: ValidationHelper, password: string) {
        if (validator.isPasswordValid(password)) {
            return 'valid';
        }
        return 'invalid';
    }

}