class School {
    constructor(name){
        this.name = name
        this.students = []
        this.courses = []  
    } 

    addCourse(course){
        if(this.courses.indexOf(course) === -1){
            this.courses.push(course)
        } 
    }
    
    addStudent(student){
        if(student.age() > 18){
            if(this.students.indexOf(student) === -1){
                student.setId(Math.random().toString())
                this.students.push(student)
            }
        } 
    } 

    getStudents(){
        return this.students
    } 

    getCourses(){
        return this.courses
    } 

    addStudentGrade(student, course, grade){
        if(this.students.indexOf(student) !== -1 && this.courses.indexOf(course) !== -1){
            student.addGrade(course, grade)
            course.addGrade(student, grade)
        } 
    }
    getStudentsOrderedByAverageGrade(){
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }

}

module.exports = School