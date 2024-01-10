interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two instances of the Student interface
const student1: Student = {
  firstName: "Kevin",
  lastName: "Koech",
  age: 25,
  location: "Earth",
};

const student2: Student = {
  firstName: "Tupac",
  lastNamename: "Shakur",
  age: 50,
  location: "Heaven",
};

// Create an array containing the two student variables
const studentsList: Student[] = [student1, student2];
