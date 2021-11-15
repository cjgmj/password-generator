import {PasswordOptions} from "./password-options";
import {CharacterProvider} from "./character-provider";
import {LowerCaseProvider} from "../application/lower-case-provider";
import {UpperCaseProvider} from "../application/upper-case-provider";
import {NumericProvider} from "../application/numeric-provider";
import {SymbolProvider} from "../application/symbol-provider";

export abstract class PasswordGenerator {
    generate = (): string => {
        const options: PasswordOptions = this.getOptions();
        const providerList: CharacterProvider[] = this.getProviderList(options);
        const passwordLength = options.length;
        const maxOccurrence = passwordLength / providerList.length;
        const providersWithOccurrence: CharacterWithProvider[] = this.getProviderWithOccurrence(providerList, maxOccurrence);

        return this.generatePassword(passwordLength, providersWithOccurrence);
    }

    abstract getOptions(): PasswordOptions;

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

    private getProviderWithOccurrence = (providerList: CharacterProvider[], maxOccurrence: number): CharacterWithProvider[] => {
        const providers = providerList.map(provider => ({provider, maxOccurrence: Math.floor(maxOccurrence)}));

        if (maxOccurrence % 1 !== 0) {
            const position = Math.floor(Math.random() * providers.length);
            providers[position].maxOccurrence++;
        }

        return providers;
    }

    private generatePassword = (passwordLength: number, providersWithOccurrence: CharacterWithProvider[]): string => {
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
    }
}

type CharacterWithProvider = {
    provider: CharacterProvider;
    maxOccurrence: number;
}