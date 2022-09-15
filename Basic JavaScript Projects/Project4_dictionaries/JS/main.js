function my_Dictionary(){ //Defining a function and naming it
    var Animal = { //Declaring an object type variable
        Species: "Dog", //Creating a dictionary containing KVP (key value pairs)
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    }; 
    delete Animal.Age; // This deletes the Age value from our dictionary

    // Utilizing document.getElementById("Dictionary").innerHTML to output all object values:
    //document.getElementById("Dictionary").innerHTML = Object.values(Animal);

    // Use inner.HTML = Animal.Sound to output the value of my choosing:
    document.getElementById("Dictionary").innerHTML = Animal.Age;   
}