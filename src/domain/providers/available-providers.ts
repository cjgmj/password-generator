import {PasswordOptions} from "../../application/password-options";
import {CharacterProvider} from "./character-provider";
import {LowerCaseProvider} from "../../infrastructure/providers/lower-case-provider";
import {UpperCaseProvider} from "../../infrastructure/providers/upper-case-provider";
import {NumericProvider} from "../../infrastructure/providers/numeric-provider";
import {SymbolProvider} from "../../infrastructure/providers/symbol-provider";
import {CharacterProviderOccurrence} from "./character-provider-occurrence";

export class AvailableProviders {
    getProviders = (options: PasswordOptions): CharacterProviderOccurrence[] => {
        const providerList = this.getProviderList(options);

        if (providerList.length === 0) {
            throw new Error("At least a provider should be included.");
        }

        const passwordLength = options.length;
        const maxOccurrence = passwordLength / providerList.length;
        const providers = providerList.map(provider => ({provider, maxOccurrence: Math.floor(maxOccurrence)}));

        if (maxOccurrence % 1 !== 0) {
            const position = Math.floor(Math.random() * providers.length);
            providers[position].maxOccurrence++;
        }

        return providers;
    }

    private getProviderList = (options: PasswordOptions): CharacterProvider[] => {
        const providerList: CharacterProvider[] = [];

        if (options.hasLowerCase) {
            providerList.push(new LowerCaseProvider());
        }

        if (options.hasUpperCase) {
            providerList.push(new UpperCaseProvider());
        }

        if (options.hasNumeric) {
            providerList.push(new NumericProvider());
        }

        if (options.hasSymbol) {
            options.symbols ? providerList.push(new SymbolProvider(options.symbols)) : providerList.push(new SymbolProvider());
        }

        return providerList;
    }
}