"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const terminal_password_generator_1 = require("./infrastructure/terminal-password-generator");
const passwordGenerator = new terminal_password_generator_1.TerminalPasswordGenerator();
console.log(passwordGenerator.generate());
