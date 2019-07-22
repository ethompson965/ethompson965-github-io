/*
*
*Control Flow
*
*0. In Javascript, a code follows a method known as control flow 
* in which there is a certain order in which code statements are 
* executed
*
* 1. Control flow executes a code from the first line in the file to the last line.
* 2. Control flow is illustrated in conditional statements know as if-else
*/
//Example

var outside = 'hot'; // variable outside assigned to 'hot' to be executed in if-else chain
if(outside === 'hot') { //first condition is met
    console.log('drink water')
} else if (outside === 'hot') { //because first condition is met, second condition does not execute
     console.log('stay cool')
} else {
    console.log('nevermine'); 
} 