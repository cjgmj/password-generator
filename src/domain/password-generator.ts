import {PasswordOptions} from "./password-options";
import {CharacterProvider} from "./character-provider";
import {LowerCaseProvider} from "../application/lower-case-provider";
import {UpperCaseProvider} from "../application/upper-case-provider";
import {NumericProvider} from "../application/numeric-provider";
import {SymbolProvider} from "../application/symbol-provider";

export abstract class PasswordGenerator {
    generate = (): string => {
        const providerList: CharacterProvider[] = this.getProviderList();
        const passwordLength: number = this.getOptions().length;
        const maxOccurrence: number = passwordLength - (providerList.length - 1);
        const providersWithOccurrence: CharacterWithProvider[] = this.getProviderWithOccurrence(providerList, maxOccurrence);

        return this.generatePassword(passwordLength, providersWithOccurrence);
    }

    abstract getOptions(): PasswordOptions;

    private getProviderList = (): CharacterProvider[] => {
        const options = this.getOptions();
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
            providerList.push(new SymbolProvider());
        }

        return providerList;
    }

    private getProviderWithOccurrence = (providerList: CharacterProvider[], maxOccurrence: number):
        { provider: CharacterProvider, maxOccurrence: number }[] => {
        return providerList.map(provider => {
            return {provider, maxOccurrence}
        });
    }

    private generatePassword = (passwordLength: number, providersWithOccurrence: CharacterWithProvider[]): string => {
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const availableProviders = providersWithOccurrence
                .filter(providerWithOccurrence => providerWithOccurrence.maxOccurrence !== 0);
            const position = Math.floor(Math.random() * availableProviders.length);

            password += availableProviders[position].provider.generateCharacter();

            availableProviders[position].maxOccurrence--;
        }

        return password;
    }
}

type CharacterWithProvider =  {
    provider: CharacterProvider;
    maxOccurrence: number;
}