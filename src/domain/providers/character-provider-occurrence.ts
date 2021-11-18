import {CharacterProvider} from "./character-provider";

export type CharacterWithProvider = {
    provider: CharacterProvider;
    maxOccurrence: number;
}