/*
create a student factory with the following methods:
info
addcourse
listCourses
addNote
updateNote
viewNotes


*/
function createStudent(student, year) {
  return {
    student,
    year,
    courses: [],
    notes: [],
    
    info: function() {
      console.log(`${this.student} is a ${year} year student`);
    },
    
    addCourse: function(courseObj) {
      this.courses.push(courseObj);
    },
    
    listCourses: function() {
      this.courses.forEach(course => {
        console.log(course);
      })
    },
    
    addNote: function(courseID, note) {
      let newNote = {code: courseID, note: note};
      this.notes.push(newNote);
    },
    
    getCourseName: function(ID) {
      let courseName = '';
      
      this.courses.forEach(course => {
        if (course['code'] === ID) {
          courseName = course['name'];
        }  
      })
      
      return courseName;
    },
    
    updateNote: function(courseID, newNote) {
      this.notes.forEach(note => {
        if (note.code === courseID) {
          note.note = newNote; 
        }
      })
    },
    
    viewNotes: function() {
      this.notes.forEach(note => {
        console.log(`${this.getCourseName(note.code)}: ${note.note}`);
      })
    },
  }
}

let foo = createStudent('foo', '1st');
// foo.info();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();