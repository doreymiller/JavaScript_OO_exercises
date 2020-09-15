// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

const school = (() => {

  const students = [];
  const validYears = /(1st|2nd|3rd|4th|5th)/;

  function getCourse(student, courseName) {
    return student.getCourse(courseName);
  }

  return {
    addStudent(studentObj) {
      if (this.isValidStudent(studentObj.year)) {
        students.push(studentObj);
      }
    },

    isValidStudent(year) {
      return validYears.test(year);
    },

    isEnrolledStudent(studentObj) {
      return students.includes(studentObj);
    },

    studentEnrollError() {
      console.log("that is not an enrolled student.");
    },

    enrollStudent(studentObj, courseObj) {
      if (this.isEnrolledStudent(studentObj)) {
        studentObj.addCourse(courseObj);
      } else {
        this.studentEnrollError();
      }
    },

    addGrade(studentObj, courseCode, grade) {
      if (this.isEnrolledStudent(studentObj)) {
        studentObj.findCourse(courseCode).grade = grade;
      } else {
        this.studentEnrollError();
      }
    },

    getReportCard(studentObj) {
      studentObj.courses.forEach(course => {
        let grade = course.grade ? course.grade : "In Progress";
        console.log(course.name + ": " + grade);
      });
    },

    courseReport(courseName) {
      console.log(`=${courseName} Grades=`);
      let total = 0;
      let numStudents = 0;

      students.forEach(student => {
        student.courses.forEach(course => {
          if (course.name === courseName && course.grade) {
            console.log(student.name + ": " + course.grade);
            total += course.grade;
            numStudents += 1;
          }
        });
      });

      if (numStudents > 0) {
        console.log("---", `Course Average: ${total / numStudents}`);
      } else {
        console.log(undefined);
      }

    }
  };
})();


function createStudent(name, year) {
  let student = {};
  student.name = name;
  student.year = year;
  student.courses = [];
  student.info = function () {
    console.log(this.name + " is a " + this.year + " year student.");
  };
  student.addCourse = function (courseObj) {
    this.courses.push(courseObj);
  };
  student.listCourses = function () {
    // this.courses.forEach(course => console.log(course));
    console.log(this.courses);
  };
  student.findCourse = function (code) {
    return this.courses.find(course => course.code === code);
  };
  student.getCourse = function (courseName) {
    return this.courses.find(course => course.name === courseName);
  };
  student.addNote = function (code, note) {
    let course = this.findCourse(code);
    if (course.note) {
      course.note += " " + note;
    } else {
      course.note = note;
    }
  };
  student.updateNote = function (code, note) {
    let course = this.findCourse(code);
    course.note = note;
  };
  student.viewNotes = function () {
    this.courses.forEach(course => {
      if (course.note) console.log(course.name + ": " + course.note + ";");
    });
  };

  return student;
}

// let school = createSchool();
let foo = createStudent('foo', '3rd');
let bar = createStudent('bar', '1st');
let qux = createStudent('qux', '2nd');

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);

school.enrollStudent(foo, { name: 'Math', code: 101, grade: 95, });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, grade: 90, });
school.enrollStudent(foo, { name: 'Physics', code: 202, });

school.enrollStudent(bar, { name: 'Math', code: 101, grade: 91, });

school.enrollStudent(qux, { name: 'Math', code: 101, grade: 93, });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102, grade: 90, });

school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// = undefined
