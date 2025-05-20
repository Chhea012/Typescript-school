import { Subject } from './Subject'; // Adjust the path as needed

export class Teacher {
    private specialization: string;
    private subjects: Subject[];

    constructor(specialization: string) {
        this.specialization = specialization;
        this.subjects = [];
    }

    public assignSubject(subject: Subject): void {
        this.subjects.push(subject);
    }

    // Optional: Getter for subjects
    public getSubjects(): Subject[] {
        return this.subjects;
    }

    // Optional: Getter for specialization
    public getSpecialization(): string {
        return this.specialization;
    }
}