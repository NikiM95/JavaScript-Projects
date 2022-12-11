function validateForm() { //creates pop up alert if box left emtpy
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    let Y = document.forms["myForm"]["lname"].value;
    if (Y == "") {
      alert("Last name must be filled out");
      return false;
    }
} //look at mod 4 A 13-challenge 18