/* 
*0 Loops are a complex datatype that can run blocks of code as many times as you want.
*/
/* There are 3 main kinds of loops:
*1.  for loop-runs a block of code a number of times
*2. for/in-runs through the properties of an object
*3.  while-runs a block of code while a condition is true
*All loops need the following three conditions in order to execute code:
1. Starting Condition-
2. Stopping Condition-
3. increment condition-
*/
//Example:For loop
var i;
for (i=0; i<5; i++){
//i=0:starting condition from 0
//i<5: stopping condition at 4
//i++: adds increments of 1
console.log('hi'); //prints 'hi' five times
}
//For loops can be used to access the elements in an array
//Example of for looping over an array backwards
let arr = [1, 2 , 3];
for (var i = arr.length -1; i >=0; i--) {
//i = arr.length -1 starting condition at the last index of array
//i >=0; stopping condition at 0 
//i--; increments by 1 backwards
}
//Example: for/in
var tree = {type1: 'evergreen', type2: 'palm'};
for(var key in tree) {
    console.log(tree[key]);//prints objects keys(type1 and type2) and corresponding values
}

//Example: While loop
var n =0;
while (n<3) {
  n++;
}
console.log(n); //prints 3 to the console 
//An array can be iterated backwards in a while loop just  like  in a for loop 
//Example
var arr2 = [1, 2, 3];
var i = arr.length + 1
while (i--)// stopping condition {
  console.log(i);//prints 3, 2, 1, 0
}

//Avoiding infinite loops
/*An infinite loop is a loop that will run a block of code forever. Creating infinite loops could 
*possibly crash your your browser or computer.*/
//An infinate loop can occur when the condition of a while statement is true
//Example 
while(1<2) {
  console.log('Hello World'); //prints 'Hello World' infinitely, because the condition is always true
}
//An infinite loop can be stopped by using the keyword break after the code statement
//Example
while(1<2) {
  console.log('Hello World');
  break;// stops the console from printing 'Hello World' infinitely, prints string once
}

















