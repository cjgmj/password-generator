"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperCaseProvider = void 0;
const character_provider_1 = require("../domain/character-provider");
class UpperCaseProvider extends character_provider_1.CharacterProvider {
    constructor(characters = "ABCDEFJHIJKLMNOPQRSTUVWXYZ") {
        super(characters);
    }
}
exports.UpperCaseProvider = UpperCaseProvider;
