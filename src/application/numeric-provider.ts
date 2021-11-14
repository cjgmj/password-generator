import {CharacterProvider} from "../domain/character-provider";

export class NumericProvider extends CharacterProvider {

    private readonly characters: string;

    constructor(characters: string = "0123456789") {
        super();
        this.characters = characters;
    }

    availableCharacters = (): string => this.characters;
}