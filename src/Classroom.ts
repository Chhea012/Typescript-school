export class Classroom {
    private name: string;
    private capacity: number;

    constructor(name: string, capacity: number) {
        this.name = name;
        this.capacity = capacity;
    }

    getName(): string {
        return this.name;
    }
    getCapacity(): number {
        return this.capacity;
    }
    setName(name: string): void {
        this.name = name;
    }
    setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
}