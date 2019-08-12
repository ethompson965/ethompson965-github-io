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
// if is the keyword to began the statement
    console.log('drink water')
} else if (outside === 'hot') { //because first condition is met, second condition does not execute
 /* else if: if one condition isnt true, it will go to the next one until it find
the truthy condition or it runs the default statement
*/ 
     console.log('stay cool')
} else {
    console.log('nevermine'); 
}


//Another conditional statement operated on control flow is a switch statement
//switch statements replace multiple if checks in else if statements
//switch statements allow you to select multiple blocks of code to execute
//Example

const action = 'say_hello';
switch (action) {
  // switch: use the keyword switch followed by conditions with body
  case 'say_hello'://keyword case use to state the conditions 
    var message = 'hello';//'hello' is resolved in switch statement
    console.log(message);
    break;//break statement ends the case 
    case 'say_hello':
    var message = 'Welcome'
    console.log(message);//because of control flow Javascript ignores the second switch statement
    break;
  case 'say_hi':
    var message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}