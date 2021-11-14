"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordOptions = void 0;
class PasswordOptions {
    constructor(hasLowerCase = true, hasUpperCase = true, hasNumeric = true, hasSymbol = true, length = 16) {
        this.hasLowerCase = hasLowerCase;
        this.hasUpperCase = hasUpperCase;
        this.hasNumeric = hasNumeric;
        this.hasSymbol = hasSymbol;
        this.length = length;
    }
}
exports.PasswordOptions = PasswordOptions;
