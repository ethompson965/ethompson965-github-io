//Datatypes are different types of data used to execute code in Javascript
//There are two main types of datatypes: simple/primitive and complex datatypes
/*Simple/Primitive data types are data in Javascript that hold only one value and are
immutable, as they cannot be changed when executed. Simple datatypes include the following:
* Numbers 
*Booleans
*Strings 
*/
//Numbers are digits assigned as variables and used in arithmetic operations 
//Example: Numbers
var x = 5; //assigns the number 5 to variable x
var y = 5 + 4; // returns number 9
//Booleans return a value of true or false
//Example:Booleans
8 === 8; // returns true
//Strings are a series of characters that surrounded by quotes
//Example: strings
var str = 'tree';//assigns str to the string of 'tree'
/*Complex datatypes are those that can hold multiple values inside and unlike simple
datatypes, they are mutable, as you can change the values inside. Complex datatypes include:
*Arrays
*Objects
*functions
*/
//Arrays are datatypes surrounded by square brackets with items inside separated by a comma
//Arrays: Example
var myArray = [1, "String", []]; //Array holding multiple datatypes
//Objects are datatypes surrounded by curly braces and assigns values to identifiers known 
//as keys
//Objects: Example
var obj = {type1: "tree", type2: "grass"};// object with values "tree" and "grass" 
// assigned to their respective keys type1 and type2

//Functions are a set of instructions in Javascript used to carry out blocks of code to
// perform a task. 
// Example:
function toCelsius(fahrenheit) { //Declares a function named to Celsius
    return (5/9) * (fahrenheit-32); /* returns a value converted from fahrenheit to 
                                    Celsius         */
}
toCelsius(95); // calls a function, printing to the console a value of 35






