import sys

#python class declaration
class Grader:
    #constructor
    def __init__(self):
        self.name = raw_input("Please enter the student's name: ")
        self.assignment = raw_input("Please enter the assignment name: ")
        self.numGrade = None
        #while loop used to prevent a type error, so users can only input a number
        while self.numGrade is None:
            try:
                self.numGrade = float(raw_input("Please enter the numerical grade: "))
            except:
                print("Invalid grade input, please try again...")
                pass
        self.grade = self.getLetterGrade()
    #method to take input from user and determine the letter grade, then return that
    #letter grade to the class instance variable
    def getLetterGrade(self):
        if self.numGrade >= 90:
            return "A"
        elif self.numGrade >= 80 and self.numGrade < 90:
            return "B"
        elif self.numGrade >= 70 and self.numGrade < 80:
            return "C"
        elif self.numGrade >= 60 and self.numGrade < 70:
            return "D"
        elif self.numGrade < 60 and self.numGrade > 0:
            return "F"
        else:
            raise Exception("An error has occurred, please try again...")
    #method definition to output the data input by the user
    def outputData(self):
        print("Student: " + self.name)
        print("Grade: " + self.grade)
        print("Assignment: " + self.assignment)
        if self.grade == "A":
            print("Grade Details: " + self.name + " met most, if not all, requirements of " + self.assignment + ".")
        elif self.grade == "B":
            print("Grade Details: " + self.name + " met most requirements of " + self.assignment + ".")
        elif self.grade == "C":
            print("Grade Details: " + self.name + " met some requirements of " + self.assignment + ".")
        elif self.grade == "D":
            print("Grade Details: " + self.name + " missed most requirements of " + self.assignment + ".")
        else:
            print("Grade Details: " + self.name + " missed most, if not all, requirements of " + self.assignment + ".")

#initialize grade instance of Grader class
grade = Grader()
#call Grader method outputData to display grade content to the console
grade.outputData()
