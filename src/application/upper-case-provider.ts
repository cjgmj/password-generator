import {CharacterProvider} from "../domain/character-provider";

export class UpperCaseProvider extends CharacterProvider {
    constructor(characters: string = "ABCDEFJHIJKLMNOPQRSTUVWXYZ") {
        super(characters);
    }
}