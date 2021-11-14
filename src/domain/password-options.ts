export class PasswordOptions {
    public readonly hasLowerCase: boolean;
    public readonly hasUpperCase: boolean;
    public readonly hasNumeric: boolean;
    public readonly hasSymbol: boolean;
    public readonly length: number;

    constructor(hasLowerCase: boolean = true,
                hasUpperCase: boolean = true,
                hasNumeric: boolean = true,
                hasSymbol: boolean = true,
                length: number = 16) {
        this.hasLowerCase = hasLowerCase;
        this.hasUpperCase = hasUpperCase;
        this.hasNumeric = hasNumeric;
        this.hasSymbol = hasSymbol;
        this.length = length;
    }
}