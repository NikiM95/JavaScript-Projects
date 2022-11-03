//      *concat() method*
// this method connects two or more strings together.
function sentence() { //declaring function "sentence"
    var part_1 = "I am ";
    var part_2 = "learning how to ";
    var part_3 = "string sentences together, ";
    var part_4 = "otherwise known as ";
    var part_5 = "concatenation.";
    var full_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = full_sentence;
}

//      *slice() method*
// this is a string method which extracts  section of a string
//and then returns the exracted section in a new string
function slice_method() {
    var sen = "My parent's name's are, Delia and John";
    var sec = sen.slice(24, 29); // this will extract the characters "Delia"
    document.getElementById("Slice").innerHTML = sec;
}

//      *toUpperCase() method*
//The toUpperCase() method converts a string to uppercase letters.
//This method does not change the original string.
function upper_Case() {
    var text = "Hello World!";
    var result = text.toUpperCase();
    document.getElementById("upperCase").innerHTML = result;
}


//      *search() method*
//The search() method returns the index (position) of the first match.
function search_Method() {
    var text = "My parent's name's are, Delia and John"
    var position = text.search(/Delia/);
    document.getElementById("search").innerHTML = position;
}

//      *Number Method*
// Number methods assist you in working with numbers

// "toString()" method returns a number as a string
function string_method() {
   var X = 12;
    var result = X.toString();
    document.getElementById("numbers_to_strings").innerHTML = result;
    var Y = 20; // another way to write this function.
    document.getElementById("numbers_to_strings_2").innerHTML = Y.toString();
}

//      *toPrecision() Method*
// This method formats a number to a specified length
function precision_Method() {
    var C = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = C.toPrecision(5);
}

//      *toFixed() method*
//The toFixed() method converts a number to a string and
//Rounds that string to a specified number of decimals.
//If the number of decimals are higher than in the number, zeros are added.
function fixed_method() {
    var number = 65.2;
    var num = number.toFixed(5);// this is display "65.20000"
    document.getElementById("fixed_number").innerHTML = num;
}

//      *valueOf() method*
//The valueOf() method returns the initial value of a string.
//It does not change the original string.
//This method can be used to convert a string object into a string.
function value_method() {
    var text = "Hello World!";
    var result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}
//The valueOf() method is the default method for JavaScript strings
//and is used interally in JS.
//var result = text.valueOf() is the same as var result = text. See below:
function value_method2() {
    var text = "Hello World!";
    var result = text;  
    document.getElementById("demo").innerHTML = result;
}






