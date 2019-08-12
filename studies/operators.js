/*
* 0. Operators are characters used in Javascript to assign values, compare values, 
* perform arithmetic operations and other executions in code blocks
*/


//Arithmetic operators are used to perform arithmetic between variables and/or values
//Example: Arithmetic operators:
var x = 5 + 3; //the '+' operator adds 5 and 3 together to get result 8.

//Assignment operators assign values to Javascript variables
//Example: Assignment operators
var y=5;// Assigns the value 5 to the variable y
 x+=5;//executes as x = x + 5
 
 //String operators include the + and += operator used to concatenate (add) strings
 //Example: String operators 
 var str = "Good " + "Morning";
 console.log(str)// Prints "Good Morning" to the console
 
 //Comparison operators determine equality or difference between variables or values
 // <-less than
 //  >-greater than, 
 //  <=-less than or equal to
 //   >=-greater than or equal to, 
 //   ===-strictly comparision, resolves to true or false
 //   !==-stricly not equal 
 //Example: Comparison operators
 8 === 8;//resolves to true 
 //Logical operators determine the logic between variables or values
//  && And operator:checks to see if both condtions are true. 
// || Or operator: checks to see if one of the conditions are true
//  ! Bang operator: flips the value truthiness
 //Example:Logical operators 
 true && true;// resolves to true
 8==8 || 7===5//resolves to true since one of the conditions meet
 !8===8//resolves to false regardless of having the two numbers equal each other 
 
 //The typeof operator returns the type of a variable, object, function or expression 
 //Example: typeof operator
 typeof "Bob"; // returns string
 
 //Conditional (tenary) operators assign a value to a variable based on some condition
 //Conditional operators are usually used in conditional statements 
 //ternary operators take three operands:
/* 1. condition
 An expression whose value is used as a condition.
2. exprIfTrue
An expression which is evaluated if the condition evaluates
 to a truthy value (one which equals or can be converted to true).
3. exprIfFalse
An expression which is executed if the condition is falsy 
(that is, has a value which can be converted to false).*/
 //Example
 

//unary operators are operators with only one operand such as plus(+) and (-). These operators are 
//the simplest form of operators 
/*Types of unary operators
Unary plus (+)	Tries to convert the operand into a number
*Unary negation (-) *	Tries to convert the operand into a number and negates after
Logical Not (!)	Converts to boolean value then negates it
Increment (++)	Adds one to its operand
Decrement (--)	Decrements by one from its operand
Bitwise not (~)	Inverts all the bits in the operand and returns a number
typeof	Returns a string which is the type of the operand
delete	Deletes specific index of an array or specific property of an object
void	Discards a return value of an expression*/

//Example 
10+7; //resolves to 17 
 
 
 
 
