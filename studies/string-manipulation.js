/* 
*
*
*0 Strings are a simple datatype in Javascript that are used to create a sequence of characters
*1 Strings are created using double quotes ("") or single quotes (''). 
*/
//Example
var outside = "hot";  // Assigns the variable outside to the string of hot.
/* In Javascript, there are a different methods used to manipulate the data of strings.
*1. indexof
*2. lastIndexOf
*3. search()
*4. slice()
*5. substring()
*6. substr()
*7. replace
*8. toUpperCase/toLowerCase
*/

//1. the indexOF() method returns the index of the first ourrence of a text in a string
//Example: indexOF()
var str1 = 'Where is it'
var pos1 = str1.indexOf('is');
console.log(pos1); //prints the position of the first occurrence in str1: 6

/*2. the lastIndexOf method is similar to the indexOf, except that it returns the position of the last 
occurrence of a specified text*/
//Example:
var str1 = "Where is 'is' at";
var pos1 = str1.lastIndexOf('is');
console.log(pos1);//prints 10 to the console

//3. The search() method searches a string for a specified value and returns the postion of the match
//Example:
var str2 = "Where is the 'the' at";
var pos = str2.search('the');
console.log(pos); //prints 9


/*You can extract a part of a string using three methods in Javascript:
* 1. slice() method
* 2. substring() method
* 3. substr() method  */
//4. The slice() method extracts a part of a string and returns the extracted
//part in a new string.
//Example:
var str2 = "Carrots, beets, broccoli";
var pos2 = str2.slice(9, 14); //extracts "beets" from the string
console.log(pos2); 
/* 5. The substring() method operates similar to the slice() method
*The difference is that substring() cannot accept negative 
indexes*/
//Example
var food = 'taco, bread, cookie';
var pos3 = food.substring(6, 11); //extracts bread from string
console.log(pos3);

/*6. The subStr() method is similar to the the slice method, the difference being
the second parameter of substr() specifies the length of the extracted part*/
var str3 = "Hat, Hammer, tree";
var res = str3.substr(5, 6); //extracts Hammer at the 5th index with a length of 6
console.log(res);//prints Hammer

//7. The replace() method replaces a specified value with another value in a string
//Example
var str4 = "It's raining outside";
var rep = str4.replace("raining", "sunny");
console.log(rep); //Prints "It's sunny outside", with "sunny" replacing "raining"


/* 8. The casing of a string can be changed using the .toLowerCase() or .toUpperCase() methods
*The .toUpperCase() method converts a string to upper case, while the .toLowerCase converts a string
to lower case*/
//Example .toUpperCase
var str5 = "Where are they";
var up = str5.toUpperCase();
console.log(up);// Prints the string "WHERE ARE THEY" in all capital letters
//Example .toLowerCase
var str5 = "Where are they";
var up2 = str5.toUpperCase();
console.log(up2); //Prints the string "where are they" in all lower case letters

//String manipulation with operators
/*The concatenation operator (+) concatenates two or more string values together and 
return another string which is the union of the two operand strings.*/
//Example
var str = '';
str.concat('It'.concat(' is',' a',' great',' day.'));//prints 'It is a great day.'
//Example: Using the concatenation symbol
var str2 = "I'm " + "here";
console.log(str2);//Prints "I'm here" to the console 



















