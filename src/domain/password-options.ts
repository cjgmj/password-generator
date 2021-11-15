export class PasswordOptions {
    public readonly hasLowerCase: boolean;
    public readonly hasUpperCase: boolean;
    public readonly hasNumeric: boolean;
    public readonly hasSymbol: boolean;
    public readonly symbols: string;
    public readonly length: number;

    constructor(hasLowerCase: boolean = true,
                hasUpperCase: boolean = true,
                hasNumeric: boolean = true,
                hasSymbol: boolean = true,
                symbols: string = "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`",
                length: number = 16) {
        this.hasLowerCase = hasLowerCase;
        this.hasUpperCase = hasUpperCase;
        this.hasNumeric = hasNumeric;
        this.hasSymbol = hasSymbol;
        this.symbols = symbols;
        this.length = Math.max(4, length);
    }
}