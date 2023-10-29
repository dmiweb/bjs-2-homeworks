function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks !== undefined) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks == []) {
    return 0;
  } else {
    return this.marks.reduce((acc, item) => acc + item / this.marks.length, 0);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  return this.excluded = reason;
}
