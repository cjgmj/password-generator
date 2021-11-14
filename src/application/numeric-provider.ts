import {CharacterProvider} from "../domain/character-provider";

export class NumericProvider extends CharacterProvider {
    constructor(characters: string = "0123456789") {
        super(characters);
    }
}