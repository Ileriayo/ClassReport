// Import required modules
const classReport = require("./classReport");
const Student = require("./student");

// Sample data to test the functionality of our Class Report
let student1 = new Student("Nnamdi", "Lamidi", 23, 78);
let student2 = new Student("Sule", "Charles", 15, 90);
let student3 = new Student("Ileri", "Adebiyi", 44, 39);
let student4 = new Student("Nathan", "Ibrahim", 12, 67);
let student5 = new Student("Jenifer", "Buhari", 16, 52);

let arrayOfStudents = [student1, student2, student3, student4, student5];

// Prints initial array of students
console.log("Initial array of students:");
console.log(arrayOfStudents);
console.log("****************************************************");

// Returns average grade of students
console.log("1. Average grade of all students:");
console.log(classReport.avgGrade(arrayOfStudents));
console.log("****************************************************");

// Returns the array of students, sorted by grade
console.log("2. Students ranked by grade (lowest to highest):");
console.log(classReport.rankByGrade(arrayOfStudents));
console.log("****************************************************");

// Returns only students below 16 years old
console.log("3. Students below 16 years old:");
console.log(classReport.studentsBelow16(arrayOfStudents));
console.log("****************************************************");

// Returns the names of students and their grades
console.log("4. Names and grades of students:");
console.log(classReport.studentsNameGrade(arrayOfStudents));