"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordOptions = void 0;
class PasswordOptions {
    constructor(hasLowerCase = true, hasUpperCase = true, hasNumeric = true, hasSymbol = true, symbols = "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`", length = 16) {
        this.minimum_password_size = 4;
        this.hasLowerCase = hasLowerCase;
        this.hasUpperCase = hasUpperCase;
        this.hasNumeric = hasNumeric;
        this.hasSymbol = hasSymbol;
        this.symbols = symbols;
        this.length = Math.max(this.minimum_password_size, length);
    }
}
exports.PasswordOptions = PasswordOptions;
