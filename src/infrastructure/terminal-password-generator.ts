import {PasswordGenerator} from "../domain/password-generator";
import {PasswordOptions} from "../domain/password-options";
import yargs from "yargs/yargs";
import {hideBin} from 'yargs/helpers';
import {boolean} from "yargs";

export class TerminalPasswordGenerator extends PasswordGenerator {
    getOptions(): PasswordOptions {
        const argv = yargs(hideBin(process.argv)).options({
            hasLowerCase: {type: "boolean", default: true},
            hasUpperCase: {type: "boolean", default: true},
            hasNumeric: {type: "boolean", default: true},
            hasSymbol: {type: "boolean", default: true},
            length: {type: "number", default: 16}

        }).parseSync();

        return new PasswordOptions(argv.hasLowerCase, argv.hasUpperCase, argv.hasNumeric, argv.hasSymbol, argv.length);
    }
}