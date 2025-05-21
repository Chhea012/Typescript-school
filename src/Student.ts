import { User } from "./User";
import { Subject } from "./Subject";

export class Student extends User {
  grade: string;
  subjects: Subject[] = [];

  constructor(id: number, name: string, grade: string) {
    super(id, name);
    this.grade = grade;
  }

  enroll(subject: Subject): string {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
      subject.addStudent(this);
      return `${this.name} enrolled in ${subject.name}`;
    }
    return `${this.name} is already enrolled in ${subject.name}`;
  }
}
