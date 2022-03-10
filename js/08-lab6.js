// Dulce
/* 
There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years they would like to invest for. 

The code resembled the image outlined below.  
 
investment = parseFloat(prompt('How much do you want to invest as xxxx.xx?'));
rate = parseFloat(prompt('Enter interest rate as xx.x'))
years = parseInt(prompt('How many years do you want to invest for?'), 10);


Your job in this part of the assignment is to validate those entries. 

Within investment, the number should be numeric. 
Within rate, the number should be numeric and between 0 and a realistic rate like 6%. 

For years, the number should be numeric and between 1 and 30.

 */
//////////LAB 6 --

// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('How much do you want to invest?'))
rate = parseFloat(prompt('Enter interest rate as xx.x'))
years = parseInt(prompt('How many years do you want to invest for?'))

// PERFORM CALCULATIONS
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}



// DISPLAY RESULTS
document.write(`Original investment amount: ${investment}<br>`)
document.write(`Interst rate: ${rate}<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Investment future value: ${futureValue.toFixed(2)}`)


