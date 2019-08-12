/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//Using var, let, or const
/*var, let, and const are all keywords used to create variables, but they are used in different 
cases depending on the conditions*/
/*The keyword var is versatile in that variables can be assigned and reassigned to it, and var
can be declared from the global scope, or the area outside of a function or local scope
inside of the function*/
/*However the variables with the keyword var assigned inside a function cannot be accessed outside
 a function */
//Example(accessing var in global scope) 
{//function block
  var a=10;
  console.log(a); //prints to the console a value of 10
} //block 1 
{//function block
  a++;
  console.log(a);//Because a is accessed from the global scope, a still equals 10 and is added to 1
} //block 2
//Example(var in local scope)
function block1() {
var a=10;
 console.log(a); // prints 10 to the console
} //function scope of block 1
function block2() {
  a++;
  console.log(a); //Because a function is defined, a from block 1 is not recognized in the second function
} //function scope of block 2
//Using let
//let is used as an alternative to using var. Like var, let can both assign and reassign variables
//However let is limited the block scope, or the scope between two curly braces 
//Let is used over var mainly to prevent variables from being defined as global variables
//Example using let:
let b = 10;
b = 8;
console.log(a); // a is reassigned and 8 is printed to the console
// let in block scope:
{
 let a=10;
 console.log(a);
} //block 1
{
  a++;
  console.log(a);// Because let is limited to the scope in block 1, a is undefined in block 2
} //block 2
//Using constant:
/*Like let, counst can be used as an alternative to var to avoid creating global variables
*The difference between counst and let is that unlike let and var, variables cannot be reassigned
* to counst*/
//Example:
const c = 8;
console.log(c); //prints 8 to the console
c = 11;
console.log(c);//prints a TypeError because c cannot be reassigned 

/*Hoisting: Hoisting is a Javascript mechanism where variables variables and function declarations
*are moved to the top of their scope before code execution
*This means that no matter where functions and variables are declared, they are moved to the top
*of their scope regardless of whether their scope is global or local*/
//Example
var x; // Declare x
x = 5; // Assign 5 to x
//Javascript only hoists declarations, not initializations
//Example
var x = 5; // Initialize x
var y = 7; // Initialize y
























