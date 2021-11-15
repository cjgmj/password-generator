import {PasswordGenerator} from "../domain/password-generator";
import {PasswordOptions} from "../domain/password-options";
import yargs from "yargs/yargs";
import {hideBin} from 'yargs/helpers';

export class TerminalPasswordGenerator extends PasswordGenerator {
    getOptions(): PasswordOptions {
        const argv = yargs(hideBin(process.argv)).options({
            hasLowerCase: {type: "boolean", default: true},
            hasUpperCase: {type: "boolean", default: true},
            hasNumeric: {type: "boolean", default: true},
            hasSymbol: {type: "boolean", default: true},
            symbols: {type: "string", default: "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`"},
            length: {type: "number", default: 16}
        }).parseSync();

        return new PasswordOptions(argv.hasLowerCase, argv.hasUpperCase, argv.hasNumeric, argv.hasSymbol, argv.symbols, argv.length);
    }
}
