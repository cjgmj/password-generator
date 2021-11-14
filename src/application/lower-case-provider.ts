import {CharacterProvider} from "../domain/character-provider";

export class LowerCaseProvider extends CharacterProvider {
    private readonly characters: string;

    constructor(characters: string = "abcdefghijklmnopqrstuvwxyz") {
        super();
        this.characters = characters;
    }

    availableCharacters = (): string => this.characters;
}