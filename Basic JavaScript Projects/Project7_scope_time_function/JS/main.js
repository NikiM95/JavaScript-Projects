//      *SCOPE*
// The scope are the functions, variables and objects you have access to.
// The scope of variables is either "local" or "global"

// "global" variables can be accessed from any function within our code, see example:
var X = 10; // variable "X" was assigned the value 10 outside of our function
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
// displays both results
Add_numbers_1();
Add_numbers_2();

// "local" variables can only be accessed by the funcion it is assigned to, see example:
function Add_numbers_3() {
    var Y = 10; // because variable "Y" was assigned within the function it can only 
    // be accessed inside of that function
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3(); // displays only this result
Add_numbers_4();

var H = 10000; 
function error_Result() {
    document.write(20 + H + "<br>");
}
function Add_numbers_6() {
    document.write(H + 100 + "<br>");
}
Add_numbers_6();
error_result(); // this will show an error in the console because the variable is missing an uppercase letter


//      *if Statement*
// "if statements" are a type of conditional statement that specifies
// that a section of code is to be executed if a condition is true

function get_Date() {
    if (new Date().getHours() < 18) { // this will check if the current time is less than 18:00, if so it will display the following message
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Age() {
    var age = 25;
    if( age > 18 ) { // checking if age is greater than 18
        document.getElementById("demo").innerHTML = "Qualifies for driving"
    }
}


//  else statement
// this specifies a block of code that will be executed if the
// condition is false

function prize_Function() {
    color = document.getElementById("color").value;
    if (color == "Pink") { // if user picks "Pink" the message "Congratulations! You won" will appear
        Prize = "Congratulations! You won";
    }
    else {
        Prize = "I am sorry you lose"; // if user enters in nothing or a different coor, this message will appear
    }
    document.getElementById("userPicks").innerHTML = Prize;
}

//      * Else If Statements
// the "else if" statement follows an "if" statement and is executed
// if the "if" statement is found to e false

function Time_Function() {
    var Time = new Date().getHours(); // checking current time
    var Replay;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Replay = "It is the afternoon.";
    }
    else {
        Replay = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Replay;
}
