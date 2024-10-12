interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number; // Optional
  [key: string]: any; // Index signature for additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

const teacherName : printTeacherFunction = {
  firstName: 'John',
  lastName: 'Doe',
}

console.log(printTeacher(teacherName.firstName, teacherName.lastName));


interface Student {
  firstName: string;
  lastName: string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): Student;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public workOnHomework(): string {
    return 'Currently working';
  }

  public displayName(): string {
    return this.firstName;
  }
}

const student: Student = new StudentClass('Sally', 'Mon');
console.log(student);
