"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterProvider = void 0;
class CharacterProvider {
    constructor() {
        this.generateCharacter = () => {
            const list = this.availableCharacters().split("");
            const position = Math.floor(Math.random() * list.length);
            return list[position];
        };
    }
}
exports.CharacterProvider = CharacterProvider;
