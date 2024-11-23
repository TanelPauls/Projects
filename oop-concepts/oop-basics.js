class Person {
    #inimene
    #year
    constructor(inimene){
        this.#inimene = inimene
    }

    setDateOfBirth(year){
        this.#year = year
    }
    getDateOfBirth(){
        return this.#year
    }

    age(){
        return new Date().getFullYear() - this.#year
    }

    getName(){
        return this.#inimene
    }
    description(){
        return `${this.#inimene} Description`
    }
}

class Student extends Person {
    #id
    #grades
    constructor(inimene){
        super(inimene);
        this.#id=null;
    }

    setId(id){
        if(this.#id===null){this.#id=id}
    }
    getId(){
        return this.#id
    }
    getGrades(){
        this.#grades=["asd",1,2,3,4,5];
        return this.#grades
    }
    addGrade(course, grade){
        const newGrade={
            course: course,
            grade: grade
        }
        this.getGrades.push(newgrade)
    }
    getAverageGrade(){
        if(this.#grades.length<=1){return -1}
        else{
            let sum=0
            for(let u=1;u<this.#grades.length;u++){
                sum+=this.#grades[u]
            }
            return sum / (this.#grades.length-1)
        }
    }
    description(){
    return `${this.getName()} Description`
    }
}

class Course {
    #kursus
    #grades
    constructor(name){
        this.#kursus = name
        this.#grades=[]
    }
    getGrades(){
        return this.#grades
    }
    addGrade(student, grade){
        const NewGrade= {
            student: student,
            grade: grade
        }
    }
    getAverageGrade(){

    }
}

class School {
    #kool
    #course
    #kursused
    #students
    constructor(kool){
        this.#kool = kool;
        this.#kursused=[];
        this.#students=[];
    }
    addCourse(course){
        /* let k=0;
        for(let y=0;y<this.#kursused.length;y++){
            if(this.#kursused[y]==course){k=1}
        }
        if(k==0){this.#kursused.push(course)} */
        if(this.#kursused.indexOf(course)===-1){
            this.#kursused.push(course)
        }
    }
    getCourses(){
        return this.#kursused
    }
    addStudent(student){
        /* if (typeof student === 'string') {
            let newStudent=student;
        }
        else{let newStudent=student.getName()}
        let m=0;
        for(let y=0;y<this.#students.length;y++){
            if(this.#students[y]==newStudent){m=1}
        }
        if(m==0){this.#students.push(newStudent)} */
        if(student.age()>6){
            if(this.#students.indexOf(student)===-1){
                student.setId(Math.random().toString())
                this.#students.push(student)
            }
        }
    }
    getStudents(){
        return this.#students
    }
    addStudentGrade(student, course, grade){
        if(this.#students.indexOf(student)!==-1 && this.#kursused.indexOf(course) !== -1){
            this.#students.addGrade(course, grade)
        }
    }
}

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

//we cannot add one student twice
school.addStudent(student1)

console.log(school.getStudents().length)  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)

console.log(school)

//we cannot add one course twice
school.addCourse(course1)

console.log(school.getCourses().length) // 2

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 5)

console.log(student1)
console.log(student2)

const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

//cannot add grades to the student who is not in the school
school.addStudentGrade(student3, course1, 5)

console.log(student3.getGrades().length) // 0

school.addStudent(student3)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 5)

console.log(student3.getGrades().length) // 2

console.log(student3.getGrades())  
console.log(course1.getGrades())  

console.log("Students ordered by average grade:")
console.log("Student - avg grade")
console.log("-".repeat(30))
console.log(school.getStudentsOrderedByAverageGrade())
console.log("-".repeat(30))
school.getStudentsOrderedByAverageGrade().forEach((student) => {
    console.log(student.name, student.getAverageGrade())
})
        
console.log()
console.log("Course average grades")
school.getCourses().forEach((course) => {
    console.log(course.name, course.getAverageGrade())
})
