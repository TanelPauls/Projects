const Person = require("./Person");

class Student extends Person {
  constructor(name) {
    super(name);
    this.id = null;
    this.grades = [];
  }

  setId(id) {
    if (this.id === null) {
      this.id = id;
    }
  }

  getId() {
    return this.id;
  }

  addGrade(course, grade) {
    const newGrade = {
      course: course,
      grade: grade,
    };
    this.grades.push(newGrade);
  }

  getGrades() {
    return this.grades;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return -1;
    } else {
      let ans = 0;
      const allGrades = this.getGrades().map((entry) => entry.grade);
      for (let x = 0; x < allGrades.length; x++) {
        ans += allGrades[x];
      }
      if (ans == 0) {
        return -1;
      } else {
        return ans / allGrades.length;
      }
    }
  }

  description() {
    return `Student ${this.name}`;
  }
}

module.exports = Student;
