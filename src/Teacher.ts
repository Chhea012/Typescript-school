import { Subject } from './Subject'; // Adjust the path as needed
import { User } from './User';

export class Teacher extends User{
    private specialization: string;
    private subjects: Subject[] = [];

    constructor(id: number, name: string, specialization: string) {
        super(id, name);
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