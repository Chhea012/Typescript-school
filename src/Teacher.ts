export class Teacher {
    private specialization: string;
    private subjects: string[];

    constructor(specialization: string, subjects: string[]) {
        this.specialization = specialization;
        this.subjects = subjects;
    }
    getSpecialization(): string {
        return this.specialization;
    }
    getSubjects(): string[] {
        return this.subjects;
    }
    setSpecialization(specialization: string): void {
        this.specialization = specialization;
    }
    setSubjects(subjects: string[]): void {
        this.subjects = subjects;
    }
    addSubject(subject: string): void {
        this.subjects.push(subject);
    }
}