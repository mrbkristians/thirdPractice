var today = new Date();  // Create a new data object
var hourNow = today.getHours();   // Find the current hour
var greeting;
// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting ="Good evening!";
} else if (hourNow > 11) {
    greeting = "Good afternoon!";
} else if (hourNow > 0) {
    greeting = "Good morning!";
} else {
    greeting = "Welcome!";
}

document.write("<h2>" + greeting + "<h2>");

//add greeting
var msg = "Sign up to recieve latest shIIIIIt YO!";
function updateMessage(){
    var el = document.getElementById("message");
    el.textContent = msg;
}

document.write(msg);
