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
 //Example
 var a = 3;
 var b = 5;
 console.log(a<b) // since a is less than b, prints true to the console
 //  >-greater than
 //Example
 var c = 4;
 var d = 8;
 console.log(c>d)//because c is not greater than d, prints false to the console
 //  <=-less than or equal to
 //Example 
 var c = 5;
 var d = 5;
 console.log(c <= d) //because c is equal to d, prints true to the console 
 //   >=-greater than or equal to
 var f = 10;
 var g = 11;
 console.log(g >= f); //g meets one of the conditions of greater or equal, so prints true  
 //   ===-strictly comparision, resolves to true or false
 console.log(8 === 8);//resolves to true 
 //   !==-stricly not equal 
 console.log(8 !== 8);
 //Example: Comparison operators 
 //*Loose comparision vs. strict comparison 
 /*With comparison operators, both the loose comparison and strict comparison operators
 compare two values for equality. However there is a different degree of comparison 
 between these two operators*/
/*The strict comparison operator uses triple equal signs(===) and compares two values for
total equality, meaning the two values have the datatype and content*/
//Example using strict comparison
console.log(8==='8');/*strictly equal compares both the datatype and the value content
without type conversion; the two values are the same number but not the same datatype*/
/*Like the strict comparison, loose comparison compares the equality of two values
*using double equal signs(==). However, unlike the strict comparison, loose 
*comparison converts value datatypes to a common equal type*/
//Example using loose comparison
  console.log(8=='8');//The loosely equal sign only converts the operands 
  //to the same type of value. Therefore 8=='8' equals true
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
 
 //Conditional (ternary) operators assign a value to a variable based on some condition
 //Conditional operators are usually used in conditional statements 
 //ternary operators take three operands:
/* 1. condition
 An expression whose value is used as a condition.*/
/*2. exprIfTrue
An expression which is evaluated if the condition evaluates
 to a truthy value (one which equals or can be converted to true).*/
/*3. exprIfFalse
An expression which is executed if the condition is falsy 
(that is, has a value which can be converted to false).*/
 //Example using tenary operator
 let tree = true;
 let palmTree = tree ? 'green' : 'not green' //'?' separates conditional from true value;
 //A colon (:) separates the true value from the false value
 //exprIfTrue is on the left side of the colon; returns evergreen if condition is true
 //exprIfFalse is on the right side of the colon; returns value deciduous if condition is false
console.log(palmTree);// prints 'green' to the console based on true condition

//unary operators are operators with only one operand such as plus(+) and (-). These operators are 
//the simplest form of operators 
//Types of unary operators
//*Unary plus (+)	Tries to convert the operand into a number
//Example 
10+7; //resolves to 17 
//*Unary negation (-) *	Tries to convert the operand into a number and negates after
//Example
10-7; //resolves to 10
//*Logical Not (!)	Converts to boolean value then negates it
//Example
!false;//changes false to true  

//*Increment (++)	Adds one to its operand
//Example
let b = 2;
b++;//adds 1 to 2
console.log(b);//prints 3

//*Decrement (--)	Decrements by one from its operand
//Example
let c = 2
c--;//subtracts 1 from 2
console.log(c);//prints 1
//*Bitwise not (~)	Inverts all the bits in the operand and returns a number
//Example
console.log(~10); //prints -11
//*typeof	Returns a string which is the type of the operand 
//Example
console.log(typeof(3));//prints 'number'
//*delete	Deletes specific index of an array or specific property of an object
let type = ['tree', 3, 4]
delete(type[0]);
console.log(type);//prints [<1 empty item>, 3, 4]
//*void	Discards a return value of an expression
//Example:
console.log(void(2===2));//prints undefined


 
 
 
 
