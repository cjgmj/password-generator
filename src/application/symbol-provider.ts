import {CharacterProvider} from "../domain/character-provider";

export class SymbolProvider extends CharacterProvider {

    private readonly characters: string;

    constructor(characters: string = "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`") {
        super();
        this.characters = characters;
    }

    availableCharacters = (): string => this.characters;
}