import {CharacterProvider} from "../domain/character-provider";

export class UpperCaseProvider extends CharacterProvider {
    private readonly characters: string;

    constructor(characters: string = "ABCDEFJHIJKLMNOPQRSTUVWXYZ") {
        super();
        this.characters = characters;
    }

    availableCharacters = (): string => this.characters;
}