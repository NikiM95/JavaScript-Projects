function displayType(character) { //character = the id "DC"
    var characterType = character.getAttribute("data-character-type"); // = "Batman"
    alert("There are currently " + characterType + " people in " + character.innerHTML + "!");
}
//characterType = "4.94 million" & character.innerHTML = "Ireland"
