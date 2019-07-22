/* 
*
*
*0 Strings are a simple datatype in Javascript that are used to create a sequence of characters
*1 Strings are created using double quotes ("") or single quotes (''). 
*/
//Example
var outside = "hot";  // Assigns the variable outside to the string of hot.
/* In Javascript, there are a different methods used to manipulate the data of strings.
* 2 One method used access string data is using the length property, which
*returns the length of a string*/
//Example
var highway = 'interstate';
var highwayLength = highway.length; 
console.log(highwayLength); //prints the value 10, which is the length of the highway string.

/*A particular text in the string can be returned using the indexOF() method,
*which returns the index or position of a specific text in a string. */
//Example
var str = 'Where is it located at?';
var pos = str.indexOf('located');
console.log(pos); //prints to the console value 12, the index at 'located'
/*You can also extract a part of a string using three methods in Javascript:
* 1. splice() method
* 2. substring() method
* 3. substr() method  */
//The slice() method extracts a part of a string and returns the extracted
//part in a new string.
//Example:
var str2 = "Carrots, beets, broccoli";
var pos2 = str2.slice(9, 14); //extracts "beets" from the string
console.log(pos2); 
/*The substring() method operates similar to the slice() method
*The difference is that substring() cannot accept negative 
indexes*/
//Example
var food = 'taco, bread, cookie';
var pos3 = food.substring(6, 11); //extracts bread from string
console.log(pos3);
