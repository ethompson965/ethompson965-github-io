/* 
*0 Loops are a complex datatype that can run blocks of code as many times as you want.
*/
/* There are five kinds of loops:
* for loop-runs a block of code a number of times
* for/in-runs through the properties of an object
* for/of-runs through the values of an iterable object
* while-runs a block of code while a condition is true
* do/while-like a while statement, runs block of code while condition is true
* for, for/in, and while loops are the most common kinds of loops used in Javascript
*All loops need the following three conditions in order to execute code:
1. Starting Condition-
2. Stopping Condition-
3. increment condition-
*/
//Example:For loop
var i;
for (var i=0; i<5; i++){
//i=0:starting condition from 0
//i<5: stopping condition at 4
//i++: adds increments of 1
console.log('hi'); //prints 'hi' five times
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









