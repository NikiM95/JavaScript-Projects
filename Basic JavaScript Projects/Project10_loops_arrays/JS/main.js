//      *WHILE LOOP*        //

function Call_Loop() { //defning function "Call_Loop()"
    var number = ""; 
    var X = 20; //assigning variable X the value of 20
    while (X > -1) { //stating while X is more than -1 run the loop
        number += "<br>" + X; //"number += x" means "number = number + x"
        X--; // Loop will decrement by one each time 
    }
    document.getElementById("Loop").innerHTML = number
}

//      *STRING LENGTH PROPERTY*        //

var text = "Hi my name is Nicole";
var length = text.length; //The ".length" property returns the length of a string.
// this will return 20
document.getElementById("string_length").innerHTML = length;

//      *FOR LOOP*      //

//creating the list "Instruments"
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; //assigning an empty variable "Content"
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; //This will list out the instruments
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//      *ARRAYS AND OBJECTS*        //

function array_Function() { //defining function "array_Function()"
    var food_Item = []; //creating an array and defining the object "food_Item"
    food_Item[0] = "bread"; //the numbers inside the brackets are the indexes
    food_Item[1] = "beans"; //the values "beans" etc. are the properties of the object
    food_Item[2] = "eggs";
    food_Item[3] = "butter";
    document.getElementById("Array").innerHTML = "Today's shopping list includes: " 
    + food_Item[1] + ".";
}

//        *CONST KEYWORD*       //

function constant_function() {
    // "Phone" is the object , "type" is the property & "galaxy s21" is the value of the property
    const Phone = {type:"galaxy s21", brand:"Samsung", color:"purple"};
    Phone.color = "red"; //changed the value of color to red
    Phone.price = "€900"; //adding a new property "price" and assigning it a value of €900
    document.getElementById("Constant").innerHTML = "The cost of the " + Phone.color + " " + Phone.brand + " " + 
    Phone.type + " is " + Phone.price;
}

//        *LET KEYWORD*     //

//the "let" keyword declares a valiale that can have block scope 
//which refers to blocks of code contained within curly brackets - commonly loops
//variables written within curly brackets using "let" cannot be accessed outside of the block
//vairables using "var" can.

// output would be: 82, 33, 82
var X = 82;
document.write(X);
{
    let X = 33; //changing the value of "X" to 33
    document.write("<br>" + X);
}
document.write("<br>" + X); //"let" keyword cannot be accessed outside of the block of code -
//meaning the code will revert back to the value of 82

// output would be: 82, 33, 33 because the var keyword cannot have block scope
var Y = 82;
document.write("<br><br>" + Y);
{
    var Y = 33; //changing the value of "Y" to 33
    document.write("<br>" + Y);
}
document.write("<br>" + Y); // "var" keyword can be accessed outsde of the curly brackets

//        *RETURN STATEMENT*        //

function return_Function(name) {
    return "Hey " + name;
}
document.getElementById("return").innerHTML = return_Function("Niki");


function add_Function(c , b) {
    return c + b;
}
document.getElementById("demo").innerHTML = add_Function(5,11);

//      *OBJECTS*       //

let dog = { // creating he object "dog"
    breed: "Siberian husky ", //properties are: breed, name, age, color and weight
    name: "Bobby", //the values are: "Bobby", "12 months" etc.
    age: "12 months ",
    eyeColor: "blue ",
    weight: "40lbs ",
    description: function() { //this is the method > actions which can be preformed on objects
        return "I have a " + this.breed + ", her name is " + this.name + " and she has bright " + this.eyeColor + "eyes.";
    }
};
document.getElementById("Dog_Object").innerHTML = dog.description();


//      *BREAK STATEMENT*       //

function break_statement() { //created the function "break_statement()"
    let txt = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; } // The break statement "jumps out" of a loop / ends the loop
    txt += "The number is " + i + "<br>";
    }      
    document.getElementById("break").innerHTML =  txt;
}


//      *CONTINUE STATEMENT*    //

let demo = "";
for (let i = 0; i < 10; i++) {
  if (i === 11) { continue; } //The continue statement "jumps over" one iteration in the loop.
  demo += "The number is " + i + "<br>"; //this will jump over the value of 6
}
document.getElementById("continue").innerHTML = demo;
 

