"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolProvider = void 0;
const character_provider_1 = require("./character-provider");
class SymbolProvider extends character_provider_1.CharacterProvider {
    constructor(characters = "~!@#$%^&*+-/.,\\{}[]();:|?<>=\"`") {
        super(characters);
    }
}
exports.SymbolProvider = SymbolProvider;
