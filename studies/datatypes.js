//Datatypes are different types of data used to execute code in Javascript
//There are two main types of datatypes: simple/primitive and complex datatypes
/*Simple/Primitive data types are data in Javascript that hold only one value and are
immutable, as they cannot be changed when executed. Simple datatypes include the following:
* Numbers 
*Infinity/-infinity
*Booleans
*Strings 
*NAN-Not A Number
*Null
*undefined 
*/
//Primitive values are copied by value
//Example
var b = 2;
var c = b //the value of b is copied into c 
c = 2;//the value of c does not change what is in b
console.log(c); //prints 2

//Numbers are digits assigned as variables and used in arithmetic operations 
//Example: Numbers
var x = 5; //assigns the number 5 to variable x
var y = 5 + 4; // returns number 9

// Infinity/-Infinity is a numeric value representing the number infinity;
//If you use the typeof property that determines the datatype of a variable, infinity would be a number
typeof(Infinity); //prints 'number'
//Example of Infinity
console.log(Math.log(0)); //prints -Infinity

//Booleans return a value of true or false
//Example: Booleans
console.log(8 === 8); // prints true to the console
//Strings are a series of characters that surrounded by quotes
//Example: strings
var str = 'tree';//assigns str to the string of 'tree'

//NAN is a property that returns a value that is not a legitimate number
//NAN Example:
console.log('laptop' - 10);//prints NaN since a string subtracted by a number does not equal a number

//Null is a value that returns a variable that is not identifined
//Null Example:
var laptop = null;
console.log(laptop); //prints null to the console;

//Undefined is a property similar to null.
/*The difference is that undefined is returned when a variable is declared but not assigned to any
datatype*/
//Undefined Example
var laptop;//laptop is declared but not assigned
console.log(laptop); //prints undefined to the console

/*Complex datatypes are those that can hold multiple values inside and unlike simple
datatypes, they are mutable, as you can change the values inside. Complex datatypes include:
*Arrays
*Objects
*functions
*/
//Unlike primitive datatypes, complex datatypes are copied by reference
//Example:
var a = {tree: 'evergreen'};
var b = a; //changing the value in b effects all references becasue both values reference the same object
b.tree = 'palm';
console.log(a.tree);//prints palm

//Arrays are datatypes that hold multiple values in a single variable
//values are stored in arrays with using square brackets that surround the values
[1, 'pie', null]//differend datatypes stored in an array
//Arrays: Example
var myArray = [1, "String", []]; //Array holding multiple datatypes
/*Elements stored in an array can be accessed by referring the index number of that element
The index number of the first element in an array is accessed at the number 0*/
/*Arrays are also a type of object. The difference is that arrays use index number to access their elements
unlike object that use the 'keys' of their values to access their values*/
var myArr = [8, 'a', null];
console.log(myArr[0]);//prints 8 to the console
/*Values can be added to or removed from an array through the use of four methods:
*push-adds elements to the end of an array
*unshift-adds elements to the beginning of an array
*pop-removes elements at the end of an array
*shift-removes elements from the beginning of the array */
//Example
var myArr = [2, 'a', null];
myArr.push('drink');
 console.log(myArr); //[ 2, 'a', null, 'drink' ]
myArr.unshift(10);
console.log(myArr); //[ 10, 2, 'a', null, 'drink' ]
myArr.pop();
console.log(myArr); //[ 10, 2, 'a', null ]
myArr.shift();
console.log(myArr); //[ 2, 'a', null ]
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






