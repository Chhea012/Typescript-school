export class Subject {
    private code: string;
    private name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }

    getCode(): string {
        return this.code;
    }
    getName(): string {
        return this.name;
    }
    setCode(code: string): void {
        this.code = code;
    }
    setName(name: string): void {
        this.name = name;
    }

}