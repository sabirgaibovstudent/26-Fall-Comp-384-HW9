// ==========================
// Part 1: Date Display
// ==========================

// getElementbByID allows me to call the elements specific name (such as dateOutput or numConValdid) and it'll call only that specific script to the index html.

// self explanatory, the date is focused on the en-US language and its format is set to month and day are forcefully set to display 2 digits and year is numeric
var date = new Date();
document.getElementById("dateOutput").innerHTML = "Current Date: " + date.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit", year: "numeric"});



// ==========================
// Part 2: Number Conversion
// ==========================

// variables set for values, they can be changed to any number and word and the integer/nan should be true or false appropriately
// the other 4 variables below that arae number conversion variables to convert the input into a number, if possible.
var integerString = "12";
var decimalString = "53.32";
var invalidString = "goodbye";
var secondIntegerString = "400";

var convertedOne = Number(integerString);
var convertedTwo = Number(decimalString);
var convertedThree = Number(invalidString);
var convertedFour = Number(secondIntegerString);

// value process for one, two, three, and four, if it is an Integer, 
// it is true, if it is not an Intenger then it is false, 
// Similarly if it isn't a number then it'll be true, ie goodbye or any word replacing goodbye will make isNaN be true, vice versa if it is a number then it'll be false
document.getElementById("numConValid").innerHTML = 'Original value: "' + integerString + '" = Converted: ' +convertedOne + " | isNaN: " + Number.isNaN(convertedOne) +  " → isInteger: " + Number.isInteger(convertedOne) + "<br><br>";

document.getElementById("numConValid").innerHTML += 'Original value: "' + decimalString + '" = Converted: ' + convertedTwo + " | isNaN: " + Number.isNaN(convertedTwo) + " → isInteger: " + Number.isInteger(convertedTwo) + "<br><br>";

document.getElementById("numConValid").innerHTML += 'Original value: "' + invalidString + '" = Converted: ' + convertedThree + " | isNaN: " + Number.isNaN(convertedThree) + " → isInteger: " + Number.isInteger(convertedThree) + "<br><br>";

document.getElementById("numConValid").innerHTML += 'Original value: "' + secondIntegerString + '" = Converted: ' +  convertedFour + " | isNaN: " + Number.isNaN(convertedFour) + " → isInteger: " + Number.isInteger(convertedFour) + "<br><br>";



// ==========================
// Part 3 & 4: Math & Formatting + If/Else Section - Option B
// ==========================
// variables, change the numbers then the average score/total changes as well
var gradeOne = 39;
var gradeTwo = 33;
var gradeThree = 75;

// the total score is all 3 grades added together, the average is the same but divided by 3
var totalScore = gradeOne + gradeTwo + gradeThree;
var averageScore = totalScore / 3;

// if the average score is 70 or more, then display success messgae, otherwise display failure message.
// since the baseline is 70, anything below will be elsed into the failure message.
var passSuccess;
if (averageScore >= 70) {
    passSuccess = "Pass";
} else {
    passSuccess = "Fail";   
}
// similar to above, just more specific/states more than just pass/fail, stating whether the course passed or failed.
var courseOutcome;
if (averageScore >= 70) {
    courseOutcome = "Congratulations! You have passed the course.";
}
else {
    courseOutcome = "Sorry, you have failed the course.";
}

// toFixed returns the string outcome as two digits in its decimal place 
document.getElementById("mathOutput").innerHTML = "Assignment 1: " + gradeOne + "<br>" + "Assignment 2: " + gradeTwo + "<br>" + "Assignment 3: " + gradeThree + "<br><br>" + "Total Grade Score: " + totalScore + "<br>" + "Grade: " + averageScore.toFixed(2) + "<br>" +
// pass/fail identifies if the average score (the grade) is more than 70 (a C), if its 70 or up
// then the scrpt will say good job, 69 and below it'll say you failed.
"Pass/Fail: " + passSuccess + "<br>" + "Course Outcome: " + courseOutcome;
