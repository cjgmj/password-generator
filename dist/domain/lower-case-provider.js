"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowerCaseProvider = void 0;
const character_provider_1 = require("./character-provider");
class LowerCaseProvider extends character_provider_1.CharacterProvider {
    constructor(characters = "abcdefghijklmnopqrstuvwxyz") {
        super(characters);
    }
}
exports.LowerCaseProvider = LowerCaseProvider;
