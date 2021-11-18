"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordGenerator = void 0;
const available_providers_1 = require("../domain/providers/available-providers");
const password_1 = require("../domain/password/password");
class PasswordGenerator {
    constructor() {
        this.execute = (options) => this.generatePassword(options.length, this.availableProviders.getProviders(options));
        this.generatePassword = (passwordLength, availableProviders) => {
            let password = "";
            for (let i = 0; i < passwordLength; i++) {
                const position = Math.floor(Math.random() * availableProviders.length);
                password += availableProviders[position].provider.generateCharacter();
                availableProviders[position].maxOccurrence--;
                availableProviders = availableProviders
                    .filter(providerWithOccurrence => providerWithOccurrence.maxOccurrence !== 0);
            }
            return new password_1.Password(password);
        };
        this.availableProviders = new available_providers_1.AvailableProviders();
    }
}
exports.PasswordGenerator = PasswordGenerator;
