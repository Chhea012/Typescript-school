export class Student {
    private grade: number;
    private subjects: string[];

    constructor(grade: number, subjects: string[]) {
        this.grade = grade;
        this.subjects = subjects;
    }

    getGrade(): number {
        return this.grade;
    }
    getSubjects(): string[] {
        return this.subjects;
    }
    setGrade(grade: number): void {
        this.grade = grade;
    }
    setSubjects(subjects: string[]): void {
        this.subjects = subjects;
    }
}