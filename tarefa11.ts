export class FormValidator {
  private static loginRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{5,30}$/;

  private static passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,12}$/;

  public static validateLogin(login: string): boolean {
    return this.loginRegex.test(login);
  }

  public static validatePassword(password: string): boolean {
    return this.passwordRegex.test(password);
  }
}
