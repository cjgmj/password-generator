export abstract class CharacterProvider {
    private readonly availableCharacters: string;

    protected constructor(availableCharacters: string) {
        this.availableCharacters = availableCharacters;
    }

    generateCharacter = (): string => {
        const list = this.availableCharacters.split("");
        const position = Math.floor(Math.random() * list.length);
        return list[position];
    };
}