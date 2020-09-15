function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.communicate = function () {
  console.log("say hello");
};

Person.prototype.eat = function () {
  console.log("I'm eating");
};

Person.prototype.sleep = function () {
  console.log("I'm sleeping");
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function () {
  console.log(`I'm diagnosing!  My specialty is ${this.specialization}`);
};
Doctor.prototype.constructor = Doctor;

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function () {
  console.log(`I'm teaching ${this.subject}`);
};
Professor.prototype.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log(`I'm studying ${this.degree}`);
};
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, null);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function () {
  console.log(`I'm researching ${this.graduateDegree}`);
};
GraduateStudent.prototype.constructor = GraduateStudent;

let plainPerson = new Person("Bob", "Smith", 45, "male");
let doctorPerson = new Doctor("Al", "Green", 38, "male", "soul");
let professorPerson = new Professor("Amy", "Winehouse", 28, "female", "jazz");
let studentPerson = new Student("Dorey", "Miller", 43, "female", "web dev");
let gradStudentPerson = new GraduateStudent("Gloria", "Steinem", 78, "female", "women's studies");

console.log(plainPerson.eat());
console.log(doctorPerson.eat());
console.log(doctorPerson.diagnose());
console.log(professorPerson.teach());
console.log(studentPerson.study());
console.log(gradStudentPerson.research());
