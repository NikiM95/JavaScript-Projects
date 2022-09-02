//Defining the variable "firstVar" and giving it the string value "Using the alert method"
var firstVar = "Using the alert method"; 
window.alert(firstVar); //Displaying a pop up alert box

document.write("Hello, World! <br><br>"); //Displaying string text

//Defining a variable and giving it a string value & adding line breaks with <br>
var A = "This is a string <br><br>"; 
var A = A.fontcolor("orange"); //Assigning the font color orange to the text
document.write(A); //Displaying the varuable A

//Displaying string text and using backslash "\" to allow for quotation marks to be displayed within the text
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded. <br><br>"); 

document.write("\"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr. Seuss <br><br>"); //Concatenating string text using the "+" symbol

//Defining two variables, X and P and concatenating the two using the "+" symbol
var B = "I am concatenating"
var C = " two variables <br><br>" 
document.write(B + C) //Displaying the variables X and P

var Dog = "Coco", Cat = "Molly", Fish = "Poppy", Bird = "Jessy <br><br>"; //Defining mulitple vaiables
var Bird = Bird.fontcolor("green") //Assigning the font color of the variable "Bird" to green
document.write(Bird); //Displaying the variable Bird

var blues = "I have the blues. <br><br>"; //Defining a variable and giving it a string value
var blues = blues.fontcolor("blue"); //Assigning the font color of the value to blue
document.write(blues); //Displaying the variable "blues"

document.write(10-5); //Defining a statement (document.wtite) and an expression (10-5)

function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;
    //Putting the value of result into HTML elment with "Green_Text" id
}


