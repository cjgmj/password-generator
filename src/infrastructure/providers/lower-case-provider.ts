import {CharacterProvider} from "../../domain/providers/character-provider";

export class LowerCaseProvider extends CharacterProvider {
    constructor(characters: string = "abcdefghijklmnopqrstuvwxyz") {
        super(characters);
    }
}