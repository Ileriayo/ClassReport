// Class report object that exposes four methods
const classReport = {

	// Method that calculates the average grade of an array of students
	avgGrade: arrOfStudents => {
		let totalGrade = 0,
			gradeAvg = 0;
		for(student of arrOfStudents){
			totalGrade += student.grade;
		}
		gradeAvg = totalGrade/arrOfStudents.length;
		return gradeAvg
	},

	// Method that sorts an array of students based on grade
	rankByGrade: arrOfStudents => arrOfStudents.sort((a,b) => (a.grade) - (b.grade)),

	// Method that returns filters out students from sweet 16 and above
	studentsBelow16: arrOfStudents => arrOfStudents.filter(student => student.age < 16),

	// Method that returns fullname of students and their grades
	studentsNameGrade: arrOfStudents => {
		for(student of arrOfStudents){
			console.log(`${student.first_name} ${student.last_name}: ${student.grade}`);
		}
	}
}

module.exports = classReport;