export class ShowValidationMessageValueConverter{
    public toView(message: string): string {
        if (message != null) {
            if (message.length > 0) {
                return "visible";
            }

            return "hidden";
        }
        return "hidden";
    }

}