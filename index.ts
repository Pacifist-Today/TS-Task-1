class School {
    directions: [][] = [];

    addDirection(direction: []): void {
        this.directions.push(direction);
    }
}

class Direction {
    levels: [][] = [];

    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: []): void {
        this.levels.push(level);
    }
}

class Level {
    groups: [][] = [];

    constructor(name: string, program: string) {
        this.name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    addGroup(group: []): void {
        this.groups.push(group);
    }
}

class Group {
    _students: {}[] = [];

    get students(): {}[] {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    addStudent(student: {}): void {
        this._students.push(student);
    }

    showPerformance(): number {
        const sortedStudents: number = this.students.toSorted(
            (a: {}, b: {}) => b.getPerformanceRating() - a.getPerformanceRating()
        );

        return sortedStudents;
    }
}

class Student {
    grades: {[computedProperty: string]: number} = {};
    attendance: boolean[] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: boolean): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade =
            gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage: number =
            (this.attendance.filter((present: boolean) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}