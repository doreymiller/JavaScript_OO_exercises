class Person {
  
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  communicate() {
    console.log("say hello");
  }
  
  eat() {
    console.log("I'm eating");
  }
  
  sleep() {
    console.log("I'm sleeping");
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log(`I'm diagnosing!  My specialty is ${this.specialization}`);
  }
}


class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log(`I'm teaching ${this.subject}`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log(`I'm studying ${this.degree}`);
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, graduateDegree) {
    super(firstName, lastName, age, gender, null);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log(`I'm researching ${this.graduateDegree}`);
  }
}

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
