export abstract class CharacterProvider {
    generateCharacter = (): string => {
        const list: string[] = this.availableCharacters().split("");
        const position = Math.floor(Math.random() * list.length);
        return list[position];
    };

    abstract availableCharacters(): string;
}