//      *Countdown Timer*
function countdown() {
    var secounds = document.getElementById("seconds").value;

    function tick() {
        secounds = secounds - 1;
        timer.innerHTML = secounds;
        setTimeout(tick, 1000);
        if(secounds == - 1) {
            alert("Time is up!");
        }

    }
    tick();   
}
// The statement "setTimeout(tick, 1000");" means that the program is 
//pausing for 1,000 milliseconds (i.e., 1 second).


//              Creating a slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active";

}

