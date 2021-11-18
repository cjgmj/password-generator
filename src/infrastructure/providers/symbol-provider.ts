import {CharacterProvider} from "../../domain/providers/character-provider";

export class SymbolProvider extends CharacterProvider {
    constructor(characters: string = "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`") {
        super(characters);
    }
}