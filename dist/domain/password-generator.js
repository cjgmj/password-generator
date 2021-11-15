"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordGenerator = void 0;
const lower_case_provider_1 = require("../application/lower-case-provider");
const upper_case_provider_1 = require("../application/upper-case-provider");
const numeric_provider_1 = require("../application/numeric-provider");
const symbol_provider_1 = require("../application/symbol-provider");
class PasswordGenerator {
    constructor() {
        this.generate = () => {
            const options = this.getOptions();
            const providerList = this.getProviderList(options);
            const passwordLength = options.length;
            const maxOccurrence = passwordLength / providerList.length;
            const providersWithOccurrence = this.getProviderWithOccurrence(providerList, maxOccurrence);
            return this.generatePassword(passwordLength, providersWithOccurrence);
        };
        this.getProviderList = (options) => {
            const providerList = [];
            if (options.hasLowerCase) {
                providerList.push(new lower_case_provider_1.LowerCaseProvider());
            }
            if (options.hasUpperCase) {
                providerList.push(new upper_case_provider_1.UpperCaseProvider());
            }
            if (options.hasNumeric) {
                providerList.push(new numeric_provider_1.NumericProvider());
            }
            if (options.hasSymbol) {
                options.symbols ? providerList.push(new symbol_provider_1.SymbolProvider(options.symbols)) : providerList.push(new symbol_provider_1.SymbolProvider());
            }
            return providerList;
        };
        this.getProviderWithOccurrence = (providerList, maxOccurrence) => {
            const providers = providerList.map(provider => ({ provider, maxOccurrence: Math.floor(maxOccurrence) }));
            if (maxOccurrence % 1 !== 0) {
                const position = Math.floor(Math.random() * providers.length);
                providers[position].maxOccurrence++;
            }
            return providers;
        };
        this.generatePassword = (passwordLength, providersWithOccurrence) => {
            let password = "";
            let availableProviders = [...providersWithOccurrence];
            for (let i = 0; i < passwordLength; i++) {
                const position = Math.floor(Math.random() * availableProviders.length);
                password += availableProviders[position].provider.generateCharacter();
                availableProviders[position].maxOccurrence--;
                availableProviders = availableProviders
                    .filter(providerWithOccurrence => providerWithOccurrence.maxOccurrence !== 0);
            }
            return password;
        };
    }
}
exports.PasswordGenerator = PasswordGenerator;
