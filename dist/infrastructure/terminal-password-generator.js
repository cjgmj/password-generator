"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalPasswordGenerator = void 0;
const password_generator_1 = require("../domain/password-generator");
const password_options_1 = require("../domain/password-options");
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("yargs/helpers");
class TerminalPasswordGenerator extends password_generator_1.PasswordGenerator {
    getOptions() {
        const argv = yargs_1.default(helpers_1.hideBin(process.argv)).options({
            hasLowerCase: { type: "boolean", default: true },
            hasUpperCase: { type: "boolean", default: true },
            hasNumeric: { type: "boolean", default: true },
            hasSymbol: { type: "boolean", default: true },
            symbols: { type: "string", default: "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`" },
            length: { type: "number", default: 16 }
        }).parseSync();
        return new password_options_1.PasswordOptions(argv.hasLowerCase, argv.hasUpperCase, argv.hasNumeric, argv.hasSymbol, argv.symbols, argv.length);
    }
}
exports.TerminalPasswordGenerator = TerminalPasswordGenerator;
