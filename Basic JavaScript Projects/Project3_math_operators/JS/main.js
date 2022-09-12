function add_Function() { //Function for addition
    var addition = 2 + 2;
    document.getElementById("MathA").innerHTML = "2 + 2 = " + addition;
}

function sub_Function() { //Function for subtraction
    var subtraction = 5 - 2;
    document.getElementById("MathS").innerHTML = "5 - 2 = " + subtraction;
}

function multiply() { //Function for multiplication
    var simple_Math = 6 * 8;
    document.getElementById("MathM").innerHTML = "6 x 8 = " + simple_Math;
}

function division() { //Function for division
    var simple_Math = 48 / 6;
    document.getElementById("MathD").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() { //Function which uses multiple operators at once
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MathAll").innerHTML = "1 plus 2, multipled by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //Function which finds the remainder
    var simple_Math = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//Unary operator only contains a signle operand, "10" as example below
//This returns the opposite or negative form of something.
//Syntax for negation operator is "-" followed by the variable name
function negation_Operator() {
    var x = 10;
    document.getElementById("Unary").innerHTML = -x;
}

//Decrement means to decrease or reduce:
function decrease_Function() {
    var Z = 5.25;
    Z--;
    document.getElementById("demo").innerHTML = Z;
}

//Increment is an addition or increase to something:
function increase_Function() {
    var Y = 5;
    Y++;
    document.getElementById("demo2").innerHTML = Y;
}

//To return a random number between 0 and 1
function math_Object(){
    var object = Math.random();
    document.getElementById("demo3").innerHTML = object
}

//To return a random number between _and_
function math_ObjectMethod(){
    var object = Math.random() * 100;
    document.getElementById("demo4").innerHTML = object
}

//Using Math object method to display nearest integer
function math_Round(){
    var object = Math.round(4.6);
    document.getElementById("demo5").innerHTML = object
}

//Using Math object to display the square root of 2
function math_Square(){
    var object = Math.SQRT2;
    document.getElementById("demo6").innerHTML = object
}





