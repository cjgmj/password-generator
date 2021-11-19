import {PasswordGenerator} from "../application/password-generator";
import {PasswordOptions} from "../application/password-options";
import yargs from "yargs/yargs";
import {hideBin} from 'yargs/helpers';
import {PasswordDTO} from "./password-dto";

export class TerminalPasswordGenerator {

    private readonly passwordGenerator: PasswordGenerator;

    constructor() {
        this.passwordGenerator = new PasswordGenerator();
    }

    createPassword = (): PasswordDTO => new PasswordDTO(this.passwordGenerator.execute(this.createOptions()).getValue());

    private createOptions(): PasswordOptions {
        const argv = yargs(hideBin(process.argv)).options({
            hasLowerCase: {type: "boolean", describe: "Password should contain lower cases", default: true},
            hasUpperCase: {type: "boolean", describe: "Password should contain upper cases", default: true},
            hasNumeric: {type: "boolean", describe: "Password should contain numerics", default: true},
            hasSymbol: {type: "boolean", describe: "Password should contain symbol", default: true},
            symbols: {type: "string", describe: "Symbols that can be included in the password", default: "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`"},
            length: {type: "number", describe: "Password length", default: 16}
        }).parseSync();

        return new PasswordOptions(argv.hasLowerCase, argv.hasUpperCase, argv.hasNumeric, argv.hasSymbol, argv.symbols, argv.length);
    }
}
