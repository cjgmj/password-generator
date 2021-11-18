"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalPasswordGenerator = void 0;
const password_generator_1 = require("../application/password-generator");
const password_options_1 = require("../application/password-options");
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("yargs/helpers");
const password_dto_1 = require("./password-dto");
class TerminalPasswordGenerator {
    constructor() {
        this.createPassword = () => new password_dto_1.PasswordDTO(this.passwordGenerator.execute(this.createOptions()).getValue());
        this.passwordGenerator = new password_generator_1.PasswordGenerator();
    }
    createOptions() {
        const argv = yargs_1.default(helpers_1.hideBin(process.argv)).options({
            hasLowerCase: { type: "boolean", describe: "Password should contain lower cases", default: true },
            hasUpperCase: { type: "boolean", describe: "Password should contain upper cases", default: true },
            hasNumeric: { type: "boolean", describe: "Password should contain numerics", default: true },
            hasSymbol: { type: "boolean", describe: "Password should contain symbol", default: true },
            symbols: { type: "string", describe: "Symbols provided to create the password", default: "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`" },
            length: { type: "number", describe: "Password length", default: 16 }
        }).parseSync();
        return new password_options_1.PasswordOptions(argv.hasLowerCase, argv.hasUpperCase, argv.hasNumeric, argv.hasSymbol, argv.symbols, argv.length);
    }
}
exports.TerminalPasswordGenerator = TerminalPasswordGenerator;
