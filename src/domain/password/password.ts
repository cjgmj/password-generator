export class Password {
    private readonly value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue = () => this.value;
}