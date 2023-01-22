// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scroll down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}







// mani part on scroll anime

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// to check the scroll position on page load


document.getElementById("submit").onclick = function(){
    document.getElementById("form").innerHTML = "Now you signet up Have a nice day MDfucker!";
    document.getElementById("")
}

function getInput() {
    document.getElementById("actualForm").submit();
}