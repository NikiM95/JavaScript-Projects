//      *SWITCH STATEMENT*      //
//this statement performs different actions based on the conditions presented to it.

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;  
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//inside switch statements are cases > these are the various conditions that are evaluted.
//If there is no case match, the default keyword is used > only 1 can be used per switch
//default keyword is not required but is best practice to include in switch statements


//      *getElementByClassName() method*        //

function elementClass_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!"
}
//We have set the index value of variable A to 0 > it will now be displayed in
//the first element with the class "CLick"(once the button is clicked)
//getElementByClassName() method relates to a class instead of an id

//      * <canvas> element*     //
// adding graphics > circle
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d"); // getContext() >> is a built-in HTML object, with properties and methods for drawing:
ctx.beginPath(); // beginPath() >> Begins a path, or resets the current path
ctx.arc(95,50,40,0,2*Math.PI); // arc() >> Creates an arc/curve (used to create circles, or parts of circles)
ctx.stroke(); // stroke() >> Actually draws the path you have defined


// createLinearGradient() > Create a gradient color background within a canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0); //createRadialGradient() >>  Creates a linear gradient (to use on canvas content)
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "purple");
grd.addColorStop(1, "white"); // addColorStop() >> Specifies the colors and stop positions in a gradient object
ctx.fillStyle = grd; // fillStyle >> Sets or returns the color, gradient, or pattern used to fill the drawing
ctx.fillRect(20, 20, 150, 100); // fillRect() >> Draws a "filled" rectangle

//refer to w3school reference and canvas for more information^^