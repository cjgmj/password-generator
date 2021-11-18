import {TerminalPasswordGenerator} from "./infrastructure/terminal-password-generator";

const terminalPasswordGenerator: TerminalPasswordGenerator = new TerminalPasswordGenerator();

console.log(terminalPasswordGenerator.createPassword().getValue());