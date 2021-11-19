import {expect} from "chai";
import {AvailableProviders} from "../src/domain/providers/available-providers";
import {PasswordOptions} from "../src/application/password-options";
import {CharacterProviderOccurrence} from "../src/domain/providers/character-provider-occurrence";


describe("Available providers", () => {
    it("should have all provider with default options and have a maximum occurrence of four", () => {
        const availableProviders: AvailableProviders = new AvailableProviders();
        const options: PasswordOptions = new PasswordOptions();
        const providerList: CharacterProviderOccurrence[] = availableProviders.getProviders(options);

        expect(providerList.length).to.be.equal(4);
        providerList.forEach(provider => expect(provider.maxOccurrence).to.be.equal(4));
    });

    it("should have three providers with maximum occurrence of three", () => {
        const availableProviders: AvailableProviders = new AvailableProviders();
        const options: PasswordOptions = new PasswordOptions(true, true, true, false, "", 15);
        const providerList: CharacterProviderOccurrence[] = availableProviders.getProviders(options);

        expect(providerList.length).to.be.equal(3);
        providerList.forEach(provider => expect(provider.maxOccurrence).to.be.equal(5));
    });

    it("should have two providers", () => {
        const availableProviders: AvailableProviders = new AvailableProviders();
        const options: PasswordOptions = new PasswordOptions(true, true, false, false, "", 15);
        const providerList: CharacterProviderOccurrence[] = availableProviders.getProviders(options);

        expect(providerList.length).to.be.equal(2);
    });

    it("should have one providers", () => {
        const availableProviders: AvailableProviders = new AvailableProviders();
        const options: PasswordOptions = new PasswordOptions(true, false, false, false, "", 15);
        const providerList: CharacterProviderOccurrence[] = availableProviders.getProviders(options);

        expect(providerList.length).to.be.equal(1);
    });

    it("should throw an error as no provider is included", () => {
        const availableProviders: AvailableProviders = new AvailableProviders();
        const options: PasswordOptions = new PasswordOptions(false, false, false, false, "", 15);

        expect(() => availableProviders.getProviders(options)).to.throw(Error, "At least a provider should be included.");
    });
});