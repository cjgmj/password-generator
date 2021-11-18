"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumericProvider = void 0;
const character_provider_1 = require("./character-provider");
class NumericProvider extends character_provider_1.CharacterProvider {
    constructor(characters = "0123456789") {
        super(characters);
    }
}
exports.NumericProvider = NumericProvider;
