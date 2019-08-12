/*
*
*
*Functions 
*
*0 Functions are a set of instructions in Javascript used to carry out blocks of code to
*  perform a task. 
* 1. To define a function, first enter the keyword 'function' followed by a name that you 
*would like to name the function. Immediately after the name, place open and close parenthesis
followed by open and closed brackets. Inside the parenthesis identifiers known as parameters
that just act as placeholders for a value. 
*/
/*2. Function parameters vs. function arguments 
*Function parameters are names thathelp define the function you are creating but have no real 
*value
*You can name your function parameters anything but it's best to use names that correspond
*with the function you're creating.
*Function arguments are real values passed into the function and can manipulate the function 
*value
*/

//3.  function syntax:
function name(parameter) { //Declares a function named 'name' with placeholder 'parameter'
    
}
/* Inside the function body, varius statements can be made. However, the function cannot 
executed until it is invoked or 'called'. 

*/
// Example:
function toCelsius(fahrenheit) { //Declares a function named to Celsius
    return (5/9) * (fahrenheit-32); /* returns a value converted from fahrenheit to 
                                     Celsius         */
    
}
toCelsius(95); // calls a function, printing to the console a value of 35
//4. functions can be assigned to a variable by using a variable keyword to declare the name of the 
//function.
//Example
var tocelsius = function(fahrenheit) { //declares function using keyword 'var'
    return (5/9) * (fahrenheit-32)
}
//You can also use a variable to store the return value of a function
//example
var temp = toCelsius(95); 
var text = "The temperature is " + temp + " Celsius"


//5. You can optionally specify the inputs and outputs of a function by destructuring
//Destructuring can assign default values in parameters and arguments
//Example
let myFunc = function({x = 5,y = 8,z = 13} = {}) {
    console.log(x,y,z);
};

myFunc({y:15,x:10,a:1}); //10 15 13

//6. Functions can see and modify variables in parent or global scopes 
//Example
// Initialize a global variable
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);//human 
transform();// werewolf
console.log(species); //human
/*7. Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
that closure stays ALIVE, and data can continue to exist in these closures*/
//Example
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3










