import {PasswordOptions} from "./password-options";
import {AvailableProviders} from "../domain/providers/available-providers";
import {CharacterWithProvider} from "../domain/providers/character-provider-occurrence";
import {Password} from "../domain/password/password";

export class PasswordGenerator {
    private readonly availableProviders: AvailableProviders;

    constructor() {
        this.availableProviders = new AvailableProviders();
    }

    execute = (options: PasswordOptions): Password => this.generatePassword(options.length, this.availableProviders.getProviders(options));

    private generatePassword = (passwordLength: number, availableProviders: CharacterWithProvider[]): Password => {
        let password = "";

        for (let i = 0; i < passwordLength; i++) {
            const position = Math.floor(Math.random() * availableProviders.length);

            password += availableProviders[position].provider.generateCharacter();

            availableProviders[position].maxOccurrence--;
            availableProviders = availableProviders
                .filter(providerWithOccurrence => providerWithOccurrence.maxOccurrence !== 0);
        }

        return new Password(password);
    }
}