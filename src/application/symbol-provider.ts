import {CharacterProvider} from "../domain/character-provider";

export class SymbolProvider extends CharacterProvider {
    constructor(characters: string = "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`") {
        super(characters);
    }
}