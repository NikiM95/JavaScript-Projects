function addNum() { //Defining a function and naming it
    var x=parseInt(document.getElementById("num1").value); //Declaring a variable to allow for user input
    var y=parseInt(document.getElementById("num2").value); 
    var res= x + y; //Result of the inputted data
    console.log(res);
    document.getElementById("demo").innerHTML = res;
}


