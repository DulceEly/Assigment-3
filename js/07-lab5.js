// Dulce
/* 
There’s a line of code in lab 5 that asks the user if they want to repeat their entry. 
The code resembled the image outlined below.  
 
again = window.prompt("Repeat entries? (y or n)", "y"); 


Your job in this part of the assignment is to validate that entry. 

If it’s anything other than “y” or “n”, the prompt should simply reappear until the user enters a valid entry. 

 */


//////// LAB 5
/* 
let miles
let gallons
let mpg
let again = 'y'

do {
    miles = parseFloat(prompt('Enter miles driven'))
    gallons = parseFloat(prompt('Enter number of gallns'))
    if (!sNaN (miles) && miles > 0 && !isNaN (gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log (`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
    }else {
        alert('One or both of your entries are invalid')
    }
    again = prompt('Do you want to run the application again? (y or n)')
}while (again === 'y')
console.log('The application has exited.')

 */


///
/*eslint-env browser*/

var miles;
var gallons;
var mpg;
var again = "y";

    do {
        miles = window.prompt("Enter miles driven");
        miles = parseFloat(miles);
        gallons = window.prompt("Enter gallons of gas used");
        gallons = parseFloat(gallons);
        if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
            mpg = miles / gallons;
            mpg = parseInt(mpg, 10);
            window.document.write("Miles per gallon: " + mpg);
        } else {
            window.alert("One of both entries are invalid.");
        }
        again = window.prompt("Repeat entries? (y or n)", "y")
       
         if (again !== "y" || again !== "n")
         {
            prompt("The previus entry was invalid. Repeat entries? (y or n)",  "y")
         }
    } while (again === "y");


 