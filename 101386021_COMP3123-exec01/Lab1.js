//Made by Ali Al Aoraebi
//Student number: 101386021

// Question 2: Write a JavaScript program to find the types of a given angle.
/*
Types of angles:
• Acute angle: An angle between 0 and 90 degrees.
• Right angle: An 90 degree angle.
• Obtuse angle: An angle between 90 and 180 degrees.
• Straight angle: A 180 degree angle.
*/

function categorizeAngle(angle) {
    if (angle > 0 && angle < 90) {
        console.log("Angle type: acute angle");
    } else if (angle === 90) {
        console.log("Angle type: right angle");
    } else if (angle > 90 && angle < 180) {
        console.log("Angle type: obtuse angle");
    } else if (angle === 180) {
        console.log("Angle type: straight angle");
    } else {
        console.log("Input not valid. Please enter number from 0 and 180 degrees!");
    }
}

categorizeAngle(47)
categorizeAngle(90)
categorizeAngle(145)
categorizeAngle(180)