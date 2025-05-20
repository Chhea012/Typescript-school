import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Classroom } from "./Classroom";

export class Subject {
  code: string;
  name: string;
  teacher: Teacher | null = null;
  students: Student[] = [];
  classroom: Classroom | null = null;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }

  addStudent(student: Student): void {
    if (!this.students.includes(student)) {
      this.students.push(student);
    }
  }

  setClassroom(classroom: Classroom): void {
    this.classroom = classroom;
  }
}
