import { Classroom } from "./Classroom";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
    private name: string;
    private teachers: Teacher[]
    private students: Student[];
    private classrooms: Classroom[];

    constructor(name: string, teachers: Teacher[], students: Student[], classrooms: Classroom[]) {
        this.name = name;
        this.teachers = teachers;
        this.students = students;
        this.classrooms = classrooms;
    }
    getName(): string {
        return this.name;
    }
    getTeachers(): Teacher[] {
        return this.teachers;
    }
    getStudents(): Student[] {
        return this.students;
    }
    getClassrooms(): Classroom[] {
        return this.classrooms;
    }
    setName(name: string): void {
        this.name = name;
    }
    setTeachers(teachers: Teacher[]): void {
        this.teachers = teachers;
    }
    setStudents(students: Student[]): void {
        this.students = students;
    }
    setClassrooms(classrooms: Classroom[]): void {
        this.classrooms = classrooms;
    }
    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }
    addStudent(student: Student): void {
        this.students.push(student);
    }
    addClassroom(classroom: Classroom): void {
        this.classrooms.push(classroom);
    }
}