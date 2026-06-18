
let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
let average;
let averagemarks = 0;


for (var i = 0; i < students.length; i++) {
    averagemarks += students[i][1];
     average = (averagemarks / students.length);
}
console.log("student:"+students[0][0]);
console.log("Average grade: " + (averagemarks) / students.length);


if (average < 60) {
    console.log("Grade: F");
} else if (average < 70) {
    console.log("Grade: D");
} else if (average < 80) {
    console.log("Grade: C");
} else if (average < 90) {
    console.log("Grade: B");
} else if (average <= 100) {
    console.log("Grade: A");
} 
