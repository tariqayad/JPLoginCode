export class ConfirmPasswordValueConverter{

    public toView(confirmPassword: string, password: string): string {
        if (password == "" && confirmPassword == "") {
            return '';
        }
        else {
            if (confirmPassword == password) {
                return 'valid'
            }

            return 'invalid';
        }
    }
}