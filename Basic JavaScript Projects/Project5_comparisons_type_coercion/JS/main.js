function my_Function() { //Defining a function
    document.getElementById("Test").innerHTML = 0/0; //This would give a NaN result
    //The below checks if something is a number
    document.getElementById("Test1").innerHTML = isNaN("This is a string"); //This would give a 'true' result because "this is a string" is not a number
    document.getElementById("Test2").innerHTML = isNaN("007"); //This would give a 'false' result because 007 is a number
}

//      *TYPEOF*
//"typeof" operator gives the data type of a variable
document.write(typeof "Age"); //Gives the output "string"
document.write("<br>"); //Provides a line break

document.write(typeof 100); //Gives the output "number"
document.write("<br><br>");

//      *INFINITY*
document.write(2E310); //This displays "infinity" as the number is higher than our maximum floating point number
//*Maximun floating point number is = 1.7976931348623157E308
document.write("<br>");

document.write(1.76543456789687898099E4099); //This also displays "infinity"
document.write("<br>");

//      *NEGATIVE INFINITY*
document.write(-2E310); //To display "-infinity" we would write any negative number lower than manimun floating point number
//*When you see E at the end of a number, is means "10 to a given exponent"
document.write("<br>");

document.write(-1.76543456789687898099E4099); //This also displays "-infinity"
document.write("<br><br>");

//      *BOOLEAN LOGIC*
document.write(50 > 49); //"true" because 50 is greater than 49
document.write("<br>"); 

document.write(100 < 3); //"flase" because 100 is NOT less than 3
document.write("<br>");

//      *CONSOLE.LOG() METHOD*
console.log(2-3); //Displays "-1" in the console
document.write("<br>");

console.log(2>3); //This would display "Flase" in the console
document.write("<br>");

//      *TYPE COERCION*
document.write("10" + 5); 
//"Type coercion"  is when the operands of an operator are different data type. Type coercion converts the value to the type it chooses
//In the example above, 105 would return in browser (it would tack "5" onto the string "10")
document.write("<br><br>");

//      *DOUBLE EQUAL SIGNS*
document.write((10 + 5)==15); //"==" symbol is used to check for equality
//"==" is used to show that a comparison should be made - it is an instruction
//to check whether the data on the left side of the symbol is equal to the data on the right.
document.write("<br>");

document.write(3==11); //This will display "Flase" as 3 is NOT equal to 11
document.write("<br><br>");

//      *TRIPLE EQUAL SIGNS*
//"==="(triple equal sign) symbol is used to show that a comparison should be made.
//It checks whether the data and data type is equal on both sides
x = 20;
y = 20;
document.write(x === y); //both "x" and "y" are qual in value(10) and type(integer)
document.write("<br>");

a = "Niki";
b = 56;
document.write(a === b); // "False" because "Niki" is a string and 56 is an integer
document.write("<br>");

c = "Ten"; 
d = 10;
document.write(c === d); // "False" because different data types but same values
document.write("<br>");

e = "dog"; 
f = "Cat";
document.write(e === f); //"False" because same data type but different values
document.write("<br><br>");

//      *LOGICAL OPERATORS*
document.write(5  > 2 && 10 > 4);// "&&" stands for AND
// this operator is used to verify  both comparisons are true
document.write("<br>");

document.write(5 > 10 && 10 > 4);//"Flase" because the first comparison "5>10" is not true
document.write("<br>");

document.write(5 > 10 || 10 > 4); // "||" stands for OR
// this returns "true" because, while 5 is not greater than 10,
// 10 is greater than 4.
document.write("<br>");

document.write(5 > 10 || 10 > 20); //"False" as neither are true
document.write("<br>");

//      *NOT OPERATOR*
function not_Function() { // this function would return "true" as 5 is NOT greater than 10
  document.getElementById("Not").innerHTML = !(5 > 10);
  document.getElementById("not").innerHTML = !(5 < 10); // This would return "false"
} // ! checks whether or not something is true



