import {CharacterProvider} from "../domain/character-provider";

export class LowerCaseProvider extends CharacterProvider {
    constructor(characters: string = "abcdefghijklmnopqrstuvwxyz") {
        super(characters);
    }
}