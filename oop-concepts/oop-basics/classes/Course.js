class Course {
    constructor(name){
        this.name = name
        this.grades = []  
    }

    getGrades(){
        return this.grades
    }

    addGrade(student, grade){
        const newGrade = {
            student: student,
            grade: grade
        }
        this.grades.push(newGrade) 
    } 
    getAverageGrade(){
        let ans = 0;
        const allGrades = this.getGrades().map(entry => entry.grade);
        for(let x=0;x<allGrades.length;x++){
            ans+=allGrades[x];
        }
        if(ans==0){return -1}
        else{return ans/allGrades.length}
    }
    description(){
        return `Course ${this.name}`
    } 
}

module.exports = Course