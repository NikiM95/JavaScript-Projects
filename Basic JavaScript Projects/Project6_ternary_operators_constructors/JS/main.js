document.write(Bigger = (5 < 1) ? "Left is bigger":"Right is bigger"); 
// Ternary operator is "?" - A ternary operator operates on three values.
// The syntax of this is:
// Name_of_variable = (condition)? Value_1:Value_2

function Ride_Function() { //Defining a function
    var Height, Can_ride; //Assigning two variables
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
} //This function will display one of two possible outputs depending on what the user inputs.

function User_Age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young to": "You can";
    document.getElementById("User").innerHTML = Can_vote + " vote!";
}

//     *Object-Oriented Programming*
// A "constructor" is a special part of a class that describes the default state of any new instance of the class that gets created,
// meaning it gives default values for the properties of the class.
// Keywords identify actions to be performed.
// "this" keyword indicates the object that is the owner of the code. When used within on object, the value of "this" is the object.
function Vehicle(Make, Model, Year, Color) { //the function "Vehicle()" is an object constructor.
    this.Vehicle_Make = Make; //When "this" keyword is used within a function, the value of "this" is th object that possesses the function.
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //the "new" keyword is used to create new objects.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //assigning the properties of the Vehicle() function
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mastard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
    //This function will display "Erik drives a Mastard-colored Pinto manufactured in 1971"   
}

function Phone(Make, Model, Year, Color) {
    this.Phone_Make = Make;
    this.Phone_Model = Model;
    this.Phone_Year = Year;
    this.Phone_Color = Color;
}

var Nicole = new Phone("Samsung", "Galaxy S21", 2020, "Purple");
function myPhone() {
      document.getElementById("New_and_This").innerHTML = 
      "I owe a " + Nicole.Phone_Make + " " + Nicole.Phone_Model + " in my favouite color, " + Nicole.Phone_Color  + "!";
}

// document.write("<br>"); // This will not display as "var" is a reserved word
// var var = "niki";
// document.write(var);

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person oject
// Always declare a variable with "const" when you know that the value should not ne changed
// use "const" when you declare:
// 1. A new Array
// 2. A new oject
// 3. A new function
const myFather = new Person("John", "Mongan", 49, "green");
function myPerson() {
    // Display age
    document.getElementById("demo").innerHTML = "My father is " + myFather.age + " year's old.";

}

//      *Identifiers & Literals*
// An "indentifier" is a name for varaibes, functions, keywords and labels.
var X = 10; // "X" is the indentifier & 10 is the integer literal
// A "literal" is something that represents a value within souce code
var Y = "Nicole"; // "Y" is the indentifier & "Nicole" is the string literal
// A literial is the data exactly as it is meant to be processed
// Identifier is a name, the literal is the value itself.

//      *NESTED FUNCTIONS*
// nested refers to something contained within something else
// example of nested function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    } 
} // Output of this code would be "10" - the Plus_one() function was the nested function

function random_Number() {
    document.getElementById("Nested_Function").innerHTML = Number();
    function Number() { // function Numbrer() is the nested function
        var random = Math.floor(Math.random() * 10);
        return random;
    }
}

function randomColor() { //function to change the background color 
    document.getElementById("random_color").innerHTML = color();
    function color() { // function color() is the nested function
        var x = Math.floor(Math.random() * 255);
        var y = Math.floor(Math.random() * 255);
        var z = Math.floor(Math.random() * 255);
        document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";       
    }
}

function changeWhite() { // declare a function to turn the background color back to white
    document.body.style.backgroundColor= "white";
    document.getElementById("color_white").innerHTML
}












