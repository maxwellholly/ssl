#ruby class declaration
class Grader
    #constructor
    def initialize()
        puts "Please enter the student's name: "
        @name = gets
        puts "Please enter the assignment name: "
        @assignment = gets
        puts "Please enter the numerical grade: "
        @grade = getLetterGrade(gets.to_f)
    end
    #method to take input from user and determine the letter grade, then return that
    #letter grade to the class instance variable
    def getLetterGrade(grade)
        if grade >= 90
            "A"
        elsif grade >= 80 && grade < 90
            "B"
        elsif grade >= 70 && grade < 80
            "C"
        elsif grade >= 60 && grade < 70
            "D"
        elsif grade < 60 && grade > 0
            "F"
        else
            raise "An error has occurred, please try again..."
        end
    end
    def getGrade
        return @grade
    end
    def getName
        return @name
    end
    def getAssignment
        return @assignment
    end
    def outputData
        puts "Student: " + @name
        puts "Grade: " + @grade
        puts "Assignment: " + @assignment
        if @grade == "A"
            print "Grade Details: " + @name + " met most, if not all, requirements of " + @assignment + "."
        elsif @grade == "B"
            print "Grade Details: " + @name + " met most requirements of " + @assignment + "."
        elsif @grade == "C"
            print "Grade Details: " + @name + " met some requirements of " + @assignment + "."
        elsif @grade == "D"
            print "Grade Details: " + @name + " missed most requirements of " + @assignment + "."
        else
            print "Grade Details: " + @name + " missed most, if not all, requirements of " + @assignment + "."
        end
    end
end

#class instance initialization
grade = Grader.new
#puts data out into console
grade.outputData()

