const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Grader {
    constructor() {
        rl.question("Please enter the student's name: ", (name)=>{
            rl.question("Please enter the assignment name: ", (assignment)=>{
                rl.question("Please enter the numerical grade: ", (grade)=>{
                    this.name = name;
                    this.assignment = assignment;
                    this.grade = this.getLetterGrade(grade);
                    rl.on('close', this.outputData)
                    rl.close();
                })
            })
        })
    }

    getLetterGrade(grade) {
        if (grade >= 90) {
            return "A"
        } else if (grade >= 80 && grade < 90) {
            return "B"
        } else if (grade >= 70 && grade < 80) {
            return "C"
        } else if (grade >= 60 && grade < 70) {
            return "D"
        } else if (grade < 60 && grade >= 0) {
            return "F"
        } else {
            console.log("Error: Invalid grade input")
        }

    }

    outputData = () => {
        console.log("Student: " + this.name);
        console.log("Grade: " + this.grade);
        console.log("Assingment: " + this.assignment);

        if (this.grade === "A") {
            console.log("Grade Details: " + this.name + " met most, if not all, requirements of " + this.assignment + ".")
        } else if (this.grade === "B") {
            console.log("Grade Details: " + this.name + " met most requirements of " + this.assignment + ".")
        } else if (this.grade === "C") {
            console.log("Grade Details: " + this.name + " met some requirements of " + this.assignment + ".")
        } else if (this.grade === "D") {
            console.log("Grade Details: " + this.name + " missed most requirements of " + this.assignment + ".")
        } else {
            console.log("Grade Details: " + this.name + " missed most, if not all, requirements of " + this.assignment + ".")
        }
    }
}

let grade = new Grader();








