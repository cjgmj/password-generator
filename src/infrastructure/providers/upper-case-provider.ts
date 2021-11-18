import {CharacterProvider} from "../../domain/providers/character-provider";

export class UpperCaseProvider extends CharacterProvider {
    constructor(characters: string = "ABCDEFJHIJKLMNOPQRSTUVWXYZ") {
        super(characters);
    }
}