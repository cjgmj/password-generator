import {PasswordGenerator} from "./domain/password-generator";
import {TerminalPasswordGenerator} from "./infrastructure/terminal-password-generator";

const passwordGenerator: PasswordGenerator = new TerminalPasswordGenerator();

console.log(passwordGenerator.generate());