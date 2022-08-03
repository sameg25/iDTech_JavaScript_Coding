// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = 2

let response;
// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
function howlucky (fortune){
    let result;
    if(fortune > 10 || fortune <0)
    {
        result = "Out of range!"
    }
    else if(fortune >= 8)
    {
        result = "Good fortune!"
    }
    else if(fortune >= 4)
    {
        result = "Average fortune!"
    }
    else if(fortune >= 0)
    {
        result = "Low fortune!"
    }
    return result;
}
console.log('results: ', howlucky(fortune));

if(typeof module !== "undefined")
{
    module.exports = howlucky;
}