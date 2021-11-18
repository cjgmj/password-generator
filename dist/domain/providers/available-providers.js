"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableProviders = void 0;
const lower_case_provider_1 = require("../../infrastructure/providers/lower-case-provider");
const upper_case_provider_1 = require("../../infrastructure/providers/upper-case-provider");
const numeric_provider_1 = require("../../infrastructure/providers/numeric-provider");
const symbol_provider_1 = require("../../infrastructure/providers/symbol-provider");
class AvailableProviders {
    constructor() {
        this.getProviders = (options) => {
            const providerList = this.getProviderList(options);
            const passwordLength = options.length;
            const maxOccurrence = passwordLength / providerList.length;
            const providers = providerList.map(provider => ({ provider, maxOccurrence: Math.floor(maxOccurrence) }));
            if (maxOccurrence % 1 !== 0) {
                const position = Math.floor(Math.random() * providers.length);
                providers[position].maxOccurrence++;
            }
            return providers;
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
    }
}
exports.AvailableProviders = AvailableProviders;
