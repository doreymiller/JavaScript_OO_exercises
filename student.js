// info: Logs the name and year of the student.
// addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
// listCourses: Returns a list of the courses student has enrolled in.
// addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
// updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
// viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

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
  }
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

foo = createStudent('Foo', '1st');
foo.info();
//  = Foo is a 1st year student
foo.listCourses();
// = [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// = Math: Fun Course; Remember to study for algebra
// = Advanced Math: Difficult Subject
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// = Math: Fun Course
// = Advanced Math: Difficult Subject